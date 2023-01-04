import { defineStore } from "pinia";
import { store } from "../index";
import { ErrorTypeEnum } from "@/enums/httpEnum";
import dayjs from "dayjs";
import { Api, addErrorInfo } from "@/api/error";

interface ErrorLogInfo {
    type: ErrorTypeEnum;
    url: string;
    message: string;
    params?: string;
    data?: string;
    detail?: string;
    time?: string;
}

interface ErrorLogState {
    errorLogList: ErrorLogInfo[];
    errorCount: number;
}

export const useErrorLog = defineStore({
    id: "error-log",
    state: (): ErrorLogState => ({
        errorLogList: [],
        errorCount: 0
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
            this.errorCount++;
        }
    }
});

// 便于外部使用
export const useErrorLogStoreWithOut = () => {
    return useErrorLog(store);
};
