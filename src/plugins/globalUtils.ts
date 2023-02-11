import { messageSuccess, messageWarning, messageInfo, messageError, messageBox, deepClone, getDataLabel, session, local } from "@/utils";
import type { App } from "vue";

export default (app: App<Element>) => {
    app.config.globalProperties.$messageBox = messageBox;
    app.config.globalProperties.$messageSuccess = messageSuccess;
    app.config.globalProperties.$messageWarning = messageWarning;
    app.config.globalProperties.$messageInfo = messageInfo;
    app.config.globalProperties.$messageError = messageError;
    app.config.globalProperties.$deepClone = deepClone;
    app.config.globalProperties.$getDataLabel = getDataLabel;
    app.config.globalProperties.$session = session;
    app.config.globalProperties.$local = local;
};
