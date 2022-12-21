import * as Icons from "@element-plus/icons-vue";
import "virtual:svg-icons-register";
import "@/assets/iconfont/iconfont.css";
import type { App } from "vue";

export { Icons };

export default (app: App<Element>) => {
    for (const [key, component] of Object.entries(Icons)) {
        app.component(key, component);
    }
};
