// vite.config.ts
import path from "path";
import vue from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.2+vue@3.2.41/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { loadEnv } from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/vite@3.2.2_sass@1.55.0/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/unplugin-auto-import@0.11.4_@vueuse+core@9.6.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/unplugin-vue-components@0.22.9_vue@3.2.41/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/unplugin-vue-components@0.22.9_vue@3.2.41/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@3.2.2/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import vueJsx from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.1.1_vite@3.2.2+vue@3.2.41/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import ElementPlus from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/unplugin-element-plus@0.4.1_vite@3.2.2/node_modules/unplugin-element-plus/dist/vite.mjs";
import { viteMockServe } from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/vite-plugin-mock@2.9.6_mockjs@1.1.0+vite@3.2.2/node_modules/vite-plugin-mock/dist/index.js";
import { createHtmlPlugin } from "file:///C:/Users/Road/Desktop/vue3-basic-admin/node_modules/.pnpm/vite-plugin-html@3.2.0_vite@3.2.2/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Road\\Desktop\\vue3-basic-admin";
var resolve = (dir) => path.join(__vite_injected_original_dirname, dir);
var vite_config_default = ({ command, mode }) => {
  const root = process.cwd();
  const { VITE_APP_NAME, VITE_PUBLIC_PATH } = loadEnv(mode, root);
  const isBuild = command === "build";
  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
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
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true
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
        symbolId: "svg-[name]"
      }),
      ElementPlus({
        useSource: true
      }),
      viteMockServe({
        mockPath: "mock",
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
                  import { setupProdMockServer } from './mock/mockProdServer';
          
                  setupProdMockServer();
                `
      }),
      createHtmlPlugin({
        minify: isBuild,
        inject: {
          data: {
            title: VITE_APP_NAME
          }
        }
      })
    ],
    resolve: {
      alias: {
        "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
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
      port: 4e3,
      open: true
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxSb2FkXFxcXERlc2t0b3BcXFxcdnVlMy1iYXNpYy1hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUm9hZFxcXFxEZXNrdG9wXFxcXHZ1ZTMtYmFzaWMtYWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1JvYWQvRGVza3RvcC92dWUzLWJhc2ljLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnLCBDb25maWdFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjtcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcbmltcG9ydCBFbGVtZW50UGx1cyBmcm9tIFwidW5wbHVnaW4tZWxlbWVudC1wbHVzL3ZpdGVcIjtcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tIFwidml0ZS1wbHVnaW4tbW9ja1wiO1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sXCI7XG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmRcIjtcblxuY29uc3QgcmVzb2x2ZSA9IChkaXI6IHN0cmluZykgPT4gcGF0aC5qb2luKF9fZGlybmFtZSwgZGlyKTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1hbmQsIG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XG5cbiAgICBjb25zdCB7IFZJVEVfQVBQX05BTUUsIFZJVEVfUFVCTElDX1BBVEggfSA9IGxvYWRFbnYobW9kZSwgcm9vdCk7XG5cbiAgICBjb25zdCBpc0J1aWxkID0gY29tbWFuZCA9PT0gXCJidWlsZFwiO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IFZJVEVfUFVCTElDX1BBVEgsXG4gICAgICAgIHJvb3QsXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIHZ1ZSgpLFxuICAgICAgICAgICAgdnVlSnN4KCksXG4gICAgICAgICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgICAgICAgICAvLyBcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1RkYwQ1x1NTM3M1x1NEUzQVx1NEUwRFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1RkYwQ1x1OEJCRVx1N0Y2RVx1NEUzQVx1OERFRlx1NUY4NFx1NTM3M1x1NTcyOFx1NUY1M1x1NTI0RFx1OERFRlx1NUY4NFx1NzUxRlx1NjIxMFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NjU4N1x1NEVGNiAgdHJ1ZVx1NTM3M1x1OUVEOFx1OEJBNC4vYXV0by1pbXBvcnQuZC50c1xuICAgICAgICAgICAgICAgIGR0czogcmVzb2x2ZShcInNyYy9jb21wb25lbnRzLmQudHNcIiksXG4gICAgICAgICAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgICAgICAgICAgICBcInZ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInBpbmlhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidnVlLXJvdXRlclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkB2dWV1c2UvY29yZVwiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBlc2xpbnRyYzoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLCAvLyBEZWZhdWx0IGBmYWxzZWBcbiAgICAgICAgICAgICAgICAgICAgZmlsZXBhdGg6IFwiLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvblwiLCAvLyBEZWZhdWx0IGAuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uYFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxzUHJvcFZhbHVlOiB0cnVlIC8vIERlZmF1bHQgYHRydWVgLCAodHJ1ZSB8IGZhbHNlIHwgJ3JlYWRvbmx5JyB8ICdyZWFkYWJsZScgfCAnd3JpdGFibGUnIHwgJ3dyaXRlYWJsZScpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiLCBcIm1kXCJdLFxuICAgICAgICAgICAgICAgIGR0czogcmVzb2x2ZShcInNyYy9hdXRvLWltcG9ydHMuZC50c1wiKSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IFsvW1xcXFwvXW5vZGVfbW9kdWxlc1tcXFxcL10vLCAvW1xcXFwvXVxcLmdpdFtcXFxcL10vLCAvW1xcXFwvXVxcLm51eHRbXFxcXC9dL10sXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgICAgICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKFwic3JjL2ljb25zXCIpXSxcbiAgICAgICAgICAgICAgICAvLyBcdTYzMDdcdTVCOUFzeW1ib2xJZFx1NjgzQ1x1NUYwRlxuICAgICAgICAgICAgICAgIHN5bWJvbElkOiBcInN2Zy1bbmFtZV1cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBFbGVtZW50UGx1cyh7XG4gICAgICAgICAgICAgICAgdXNlU291cmNlOiB0cnVlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHZpdGVNb2NrU2VydmUoe1xuICAgICAgICAgICAgICAgIC8vIG1vY2tcdTY1ODdcdTRFRjZcdTc2RUVcdTVGNTVcbiAgICAgICAgICAgICAgICBtb2NrUGF0aDogXCJtb2NrXCIsXG4gICAgICAgICAgICAgICAgLy8gXHU2NzJDXHU1NzMwXHU4QzAzXHU4QkQ1XG4gICAgICAgICAgICAgICAgbG9jYWxFbmFibGVkOiAhaXNCdWlsZCxcbiAgICAgICAgICAgICAgICAvLyBcdTYyNTNcdTUzMDVtb2NrXG4gICAgICAgICAgICAgICAgcHJvZEVuYWJsZWQ6IGlzQnVpbGQsXG4gICAgICAgICAgICAgICAgLy8gXHU3NTFGXHU0RUE3XHU0RjdGXHU3NTI4bW9ja1xuICAgICAgICAgICAgICAgIGluamVjdENvZGU6IGBcbiAgICAgICAgICAgICAgICAgIGltcG9ydCB7IHNldHVwUHJvZE1vY2tTZXJ2ZXIgfSBmcm9tICcuL21vY2svbW9ja1Byb2RTZXJ2ZXInO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgc2V0dXBQcm9kTW9ja1NlcnZlcigpO1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XG4gICAgICAgICAgICAgICAgbWluaWZ5OiBpc0J1aWxkLFxuICAgICAgICAgICAgICAgIGluamVjdDoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogVklURV9BUFBfTkFNRVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFZ1ZVNldHVwRXh0ZW5kKClcbiAgICAgICAgXSxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICAgICBcIn4vXCI6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpfS9gLFxuICAgICAgICAgICAgICAgIFwiQFwiOiByZXNvbHZlKFwic3JjXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNzczoge1xuICAgICAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAdXNlIFwifi9zdHlsZXMvdGhlbWUvaW5kZXguc2Nzc1wiIGFzICo7YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgICAgICAgIHBvcnQ6IDQwMDAsIC8vIFx1NjcwRFx1NTJBMVx1N0FFRlx1NTNFM1x1NTNGN1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSAvLyBcdTY3MERcdTUyQTFcdTU0MkZcdTUyQThcdTY1RjZcdTY2MkZcdTU0MjZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjhcbiAgICAgICAgfVxuICAgIH07XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHdCQUF3QjtBQVhqQyxJQUFNLG1DQUFtQztBQWN6QyxJQUFNLFVBQVUsQ0FBQyxRQUFnQixLQUFLLEtBQUssa0NBQVcsR0FBRztBQUd6RCxJQUFPLHNCQUFRLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBNkI7QUFDekQsUUFBTSxPQUFPLFFBQVEsSUFBSTtBQUV6QixRQUFNLEVBQUUsZUFBZSxpQkFBaUIsSUFBSSxRQUFRLE1BQU0sSUFBSTtBQUU5RCxRQUFNLFVBQVUsWUFBWTtBQUM1QixTQUFPO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBRVAsS0FBSyxRQUFRLHFCQUFxQjtBQUFBLFFBQ2xDLFNBQVM7QUFBQSxVQUNMO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsWUFDSSxnQkFBZ0IsQ0FBQztBQUFBLFVBQ3JCO0FBQUEsUUFDSjtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1Ysa0JBQWtCO0FBQUEsUUFDdEI7QUFBQSxRQUNBLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ3JDLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNQLFlBQVksQ0FBQyxPQUFPLElBQUk7QUFBQSxRQUN4QixLQUFLLFFBQVEsdUJBQXVCO0FBQUEsUUFDcEMsU0FBUyxDQUFDLFVBQVUsY0FBYyxPQUFPO0FBQUEsUUFDekMsU0FBUyxDQUFDLDBCQUEwQixtQkFBbUIsa0JBQWtCO0FBQUEsUUFDekUsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDckMsQ0FBQztBQUFBLE1BQ0QscUJBQXFCO0FBQUEsUUFDakIsVUFBVSxDQUFDLFFBQVEsV0FBVyxDQUFDO0FBQUEsUUFFL0IsVUFBVTtBQUFBLE1BQ2QsQ0FBQztBQUFBLE1BQ0QsWUFBWTtBQUFBLFFBQ1IsV0FBVztBQUFBLE1BQ2YsQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLFFBRVYsVUFBVTtBQUFBLFFBRVYsY0FBYyxDQUFDO0FBQUEsUUFFZixhQUFhO0FBQUEsUUFFYixZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtoQixDQUFDO0FBQUEsTUFDRCxpQkFBaUI7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxVQUNKLE1BQU07QUFBQSxZQUNGLE9BQU87QUFBQSxVQUNYO0FBQUEsUUFDSjtBQUFBLE1BQ0osQ0FBQztBQUFBLElBRUw7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNILE1BQU0sR0FBRyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLFFBQ3RDLEtBQUssUUFBUSxLQUFLO0FBQUEsTUFDdEI7QUFBQSxJQUNKO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDRCxxQkFBcUI7QUFBQSxRQUNqQixNQUFNO0FBQUEsVUFDRixnQkFBZ0I7QUFBQSxRQUNwQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDVjtBQUFBLEVBQ0o7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
