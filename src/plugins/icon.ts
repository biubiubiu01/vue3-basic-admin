import * as Icons from "@element-plus/icons-vue";
import "virtual:svg-icons-register";
import type { App } from "vue";

export default (app: App<Element>) => {
    for (const [key, component] of Object.entries(Icons)) {
        app.component(key, component);
    }
};
