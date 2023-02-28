import { createApp } from "vue";
import App from "./App.vue";

import { setupPinia } from "./stores";
import { setupIcon, setupGlobalUtils, setupErrorHandler } from "@/plugins";
import { setupLoadingDirective, setupPermissionDirective } from "./directive";
import router from "./router/index";
import { setupRouterGuard } from "@/router/guard";

import "./styles/index.scss";

const app = createApp(App);

const setupPlugins = () => {
    // 注册pinia
    setupPinia(app);
    // 注册el-icon图标
    setupIcon(app);
    // 注册error收集
    setupErrorHandler(app);
    // 注册全局方法
    setupGlobalUtils(app);
};

const setupDirective = () => {
    // 注册loading自定义指令
    setupLoadingDirective(app);
    // 注册permission自定义指令
    setupPermissionDirective(app);
};

setupPlugins();
setupDirective();
// 注册路由守卫
setupRouterGuard(router);

app.use(router).mount("#app");
