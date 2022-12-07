import { messageBox, deepClone } from "@/utils";
import type { App } from "vue";

export default (app: App<Element>) => {
    app.config.globalProperties.$messageBox = messageBox;
    app.config.globalProperties.$deepClone = deepClone;
};
