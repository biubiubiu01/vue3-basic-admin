import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from "unplugin-element-plus/vite";

const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            // 设置为false，即为不自动导入，设置为路径即在当前路径生成自动导入文件  true即默认./auto-import.d.ts
            dts: resolve("src/components.d.ts"),
            imports: [
                "vue",
                "pinia",
                "vue-router",
                {
                    "@vueuse/core": []
                }
            ],
            eslintrc: {
                enabled: true, // Default `false`
                filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            },
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            extensions: ["vue", "md"],
            dts: resolve("src/auto-imports.d.ts"),
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
            resolvers: [ElementPlusResolver()]
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve("src/icons")],
            // 指定symbolId格式
            symbolId: "svg-[name]"
        }),
        ElementPlus({
            useSource: true
        })
    ],
    resolve: {
        alias: {
            "~/": `${path.resolve(__dirname, "src")}/`,
            "@": resolve("src")
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/theme/index.scss" as *;`
            }
        }
    },
    server: {
        host: "0.0.0.0",
        port: 4000, // 服务端口号
        open: true // 服务启动时是否自动打开浏览器
    }
});
