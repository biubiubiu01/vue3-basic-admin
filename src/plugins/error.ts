import dayjs from "dayjs";
import type { App } from "vue";
import { ErrorTypeEnum } from "@/enums/httpEnum";
import { useErrorLogStoreWithOut } from "@/stores/modules/errorLog";

const VueErrorHandler = (err: any, vm: any) => {
    if (!err.message) return;
    const errorLogStore = useErrorLogStoreWithOut();
    console.error(err);
    errorLogStore.addErrorLog({
        type: ErrorTypeEnum.VUE,
        url: window.location.href.split("/#")[1],
        method: vm.$options.name,
        message: err.message,
        params: "",
        data: "",
        detail: getDetailInfo(err),
        time: dayjs().format("YYYY-MM-DD HH:mm:ss")
    });
};

const scriptErrorHandler = () => {};

function getDetailInfo(error: Error) {
    if (!error.stack) {
        return "";
    }
    const stack = error.stack
        .replace(/\n/gi, "") // Remove line breaks to save the size of the transmitted content
        .replace(/\bat\b/gi, "@") // At in chrome, @ in ff
        .split("@") // Split information with @
        .slice(0, 9) // The maximum stack length (Error.stackTraceLimit = 10), so only take the first 10
        .map((v) => v.replace(/^\s*|\s*$/g, "")) // Remove extra spaces
        .join("~") // Manually add separators for later display
        .replace(/\?[^:]+/gi, ""); // Remove redundant parameters of js file links (?x=1 and the like)

    return stack;
}

export default (app: App) => {
    app.config.errorHandler = VueErrorHandler;

    window.onerror = scriptErrorHandler;
};
