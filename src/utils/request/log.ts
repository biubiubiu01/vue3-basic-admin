import dayjs from "dayjs";
import { ErrorMsgEnum, ErrorTypeEnum } from "@/enums/httpEnum";
import { useErrorLogStoreWithOut } from "@/stores/modules/errorLog";
import { useMessage } from "@/hooks";
import { addOperationInfo, Api } from "@/api/log";

const { error } = useMessage();

export const setErrorMessage = (err: any) => {
    const { data, status } = err;
    let message = data?.message || "";
    if (!message) {
        switch (status) {
            case 400:
                message = ErrorMsgEnum.ERROR_400;
                break;
            case 401:
                message = ErrorMsgEnum.ERROR_401;
                break;
            case 403:
                message = ErrorMsgEnum.ERROR_403;
                break;
            case 404:
                message = ErrorMsgEnum.ERROR_404;
                break;
            case 500:
                message = ErrorMsgEnum.ERROR_500;
                break;
            case 503:
                message = ErrorMsgEnum.ERROR_503;
                break;
            case 504:
                message = ErrorMsgEnum.ERROR_504;
                break;
        }
    }
    addAjaxErrorLog(err, message);
};

export const addAjaxErrorLog = (err: any, message: string) => {
    addAjaxLog(err);
    const { url, method, params, data } = err.config;
    const errorLogStore = useErrorLogStoreWithOut();
    errorLogStore.addErrorLog({
        type: ErrorTypeEnum.AJAX,
        url: <string>url,
        method,
        message,
        params: ["get", "delete"].includes(<string>method) ? JSON.stringify(params) : JSON.stringify(data),
        data: JSON.stringify(err.data),
        detail: JSON.stringify(err),
        time: dayjs().format("YYYY-MM-DD HH:mm:ss")
    });
    error(message);
};

export const addAjaxLog = (response: any) => {
    const { url, method } = response.config;
    if ([Api.ADD_OPERATION_INFO, Api.ADD_ERROR_INFO, Api.ADD_LOGIN_INFO].includes(url) || method === "get") return;
    addOperationInfo({
        method,
        url,
        user: "admin",
        userIp: "127.0.0.1",
        status: response.data.code,
        time: dayjs().format("YYYY-MM-DD HH:mm:ss")
    });
};
