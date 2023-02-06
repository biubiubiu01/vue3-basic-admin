import request from "@/utils/request";

export enum Api {
    GET_DICT_KEY = "/dict/key",
    GET_DICT_DATA = "/dict/data"
}

export const getDictKeyList = (data?: any) => request.get(Api.GET_DICT_KEY, data);

export const getDictData = (data: any) => request.get(Api.GET_DICT_DATA, data);
