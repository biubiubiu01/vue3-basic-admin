import request from "@/utils/request";

export enum Api {
    ADD_ERROR_INFO = "/error/addErrorInfo",
    GET_ERROR_LIST = "/error/getErrorList"
}

export const addErrorInfo = (data: any) => request.post(Api.ADD_ERROR_INFO, data);

export const getErrorList = (data?: any) => request.get(Api.GET_ERROR_LIST, data);
