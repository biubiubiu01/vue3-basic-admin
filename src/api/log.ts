import request from "@/utils/request";
import dayjs from "dayjs";
import { getOS, getBrowse } from "@/utils";

export enum Api {
    ADD_OPERATION_INFO = "/log/addOperationInfo",
    GET_OPERATION_LIST = "/log/getOperationList",

    ADD_ERROR_INFO = "/error/addErrorInfo",
    GET_ERROR_LIST = "/error/getErrorList",

    ADD_LOGIN_INFO = "/login/addLoginInfo",
    GET_LOGON_LIST = "/login/getLoginList",

    ERROR_TEST = "/error/test"
}

export const addOperationInfo = (data?: any) => request.post(Api.ADD_OPERATION_INFO, data, { loading: false });

export const getOperationList = (data?: any) => request.get(Api.GET_OPERATION_LIST, data, { loading: false });

export const addErrorInfo = (data?: any) => request.post(Api.ADD_ERROR_INFO, data, { loading: false });

export const getErrorList = (data?: any) => request.get(Api.GET_ERROR_LIST, data, { loading: false });

export const addLoginInfo = (data?: any) => {
    const params = Object.assign(
        {
            username: "admin",
            ip: "127.0.0.1",
            os: getOS(),
            browser: getBrowse(),
            time: dayjs().format("YYYY-MM-DD HH:mm:ss")
        },
        data
    );
    return request.post(Api.ADD_LOGIN_INFO, params, { loading: false });
};

export const getLoginList = (data?: any) => request.get(Api.GET_LOGON_LIST, data, { loading: false });

// form errorlog test
export const testErrorApi = () => request.get(Api.ERROR_TEST);
