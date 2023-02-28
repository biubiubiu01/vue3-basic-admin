import type { UserConfig, ConfigEnv } from "vite";
import path from "path";
import { loadEnv } from "vite";
import dayjs from "dayjs";
// @ts-ignore
import pkg from "./package.json";
import { createVitePlugins } from "./build/plugins";

const resolve = (dir: string) => path.join(__dirname, dir);

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();

    const env = loadEnv(mode, root);
    const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = env;

    const isBuild = command === "build";
    return {
        base: VITE_PUBLIC_PATH,
        root,
        plugins: createVitePlugins(env, isBuild),
        optimizeDeps: {
            // 预加载
            include: ["element-plus/lib/locale/lang/zh-cn"]
        },
        esbuild: {
            pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
        },
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
        },
        build: {
            reportCompressedSize: false,
            chunkSizeWarningLimit: 2000,
            rollupOptions: {
                // 静态资源分类打包
                output: {
                    chunkFileNames: "static/js/[name]-[hash].js",
                    entryFileNames: "static/js/[name]-[hash].js",
                    assetFileNames: "static/[ext]/[name]-[hash].[ext]"
                }
            }
        },
        define: {
            // 解决打包报错
            __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
            // 系统信息
            __APP_INFO__: JSON.stringify(__APP_INFO__)
        }
    };
};
