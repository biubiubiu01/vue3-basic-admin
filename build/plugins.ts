import { PluginOption } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vueJsx from "@vitejs/plugin-vue-jsx";
import ElementPlus from "unplugin-element-plus/vite";
import { viteMockServe } from "vite-plugin-mock";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";
import compressPlugin from "vite-plugin-compression";
import { viteBuildInfo } from "./info";
import { setupName } from "./name";
// @ts-ignore
import pkg from "../package.json";

const resolve = (dir: string) => path.join(__dirname, dir);

const configImagemin = () => {
    return viteImagemin({
        gifsicle: {
            optimizationLevel: 7,
            interlaced: false
        },
        optipng: {
            optimizationLevel: 7
        },
        mozjpeg: {
            quality: 20
        },
        pngquant: {
            quality: [0.8, 0.9],
            speed: 4
        },
        svgo: {
            plugins: [
                {
                    name: "removeViewBox"
                },
                {
                    name: "removeEmptyAttrs",
                    active: false
                }
            ]
        }
    });
};

const configCompress = (compress: "gzip" | "brotli" | "none", deleteOriginFile = false) => {
    const compressList = compress.split(",");

    const plugins: PluginOption[] = [];

    if (compressList.includes("gzip")) {
        plugins.push(
            compressPlugin({
                ext: ".gz",
                deleteOriginFile
            })
        );
    }

    if (compressList.includes("brotli")) {
        plugins.push(
            compressPlugin({
                ext: ".br",
                algorithm: "brotliCompress",
                deleteOriginFile
            })
        );
    }
    return plugins;
};

export function createVitePlugins(env: any, isBuild: boolean) {
    const { VITE_APP_NAME } = env;

    const isReport = process.env.REPORT === "true";

    const vitePluginList: (PluginOption | PluginOption[])[] = [
        vue(),
        vueJsx(),
        AutoImport({
            // 设置为false，即为不自动导入，设置为路径即在当前路径生成自动导入文件  true即默认./auto-import.d.ts
            dts: resolve("../src/components.d.ts"),
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
                filepath: resolve("../.eslintrc-auto-import.json"), // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            },
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            extensions: ["vue", "md"],
            dts: resolve("../src/auto-imports.d.ts"),
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
            resolvers: [ElementPlusResolver()]
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve("../src/icons")],
            // 指定symbolId格式
            symbolId: "svg-[name]"
        }),
        // 手动引入时自动引入样式
        ElementPlus({
            useSource: true
        }),
        // html title
        createHtmlPlugin({
            minify: isBuild,
            inject: {
                data: {
                    title: VITE_APP_NAME,
                    injectScript: `<script>
                          console.log("version:${pkg.version}")
                    </script>`
                }
            }
        }),
        // 打包提示信息
        viteBuildInfo(),
        // setupName添加
        setupName(),
        viteMockServe({
            // mock文件目录
            mockPath: "mock",
            // 本地调试
            localEnabled: !isBuild,
            // 打包mock
            prodEnabled: isBuild,
            // 生产使用mock
            injectCode: `
              import { setupProdMockServer } from './mockProdServer';

              setupProdMockServer();
            `
        })
    ];

    if (isReport) {
        // 打包分析
        vitePluginList.push(
            visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true,
                filename: "report.html"
            })
        );
    }
    if (isBuild) {
        // 图片压缩
        vitePluginList.push(configImagemin());
        // g-zip
        vitePluginList.push(configCompress("gzip"));
    }

    return vitePluginList;
}
