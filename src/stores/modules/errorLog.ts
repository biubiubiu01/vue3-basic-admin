import { defineStore } from "pinia";
import { store } from "../index";
import { ErrorTypeEnum } from "@/enums/httpEnum";
import dayjs from "dayjs";
import { Api, addErrorInfo } from "@/api/log";

interface ErrorLogInfo {
    type: ErrorTypeEnum;
    method: "get" | "post" | "put" | "delete" | "";
    url: string;
    message: string;
    params?: string;
    data?: string;
    detail?: string;
    time?: string;
}

interface ErrorLogState {
    errorLogList: ErrorLogInfo[];
}

export const useErrorLog = defineStore({
    id: "error-log",
    state: (): ErrorLogState => ({
        errorLogList: []
    }),
    getters: {},
    actions: {
        async addErrorLog(err: ErrorLogInfo) {
            const errorInfo = {
                ...err,
                time: dayjs().format("YYYY-MM-DD HH:mm:ss")
            };
            // fix:重复无限请求
            if (errorInfo.url === Api.ADD_ERROR_INFO) return;
            await addErrorInfo(errorInfo);
            this.errorLogList.push({ ...errorInfo });
        }
    }
});

// 便于外部使用
export const useErrorLogStoreWithOut = () => {
    return useErrorLog(store);
};
