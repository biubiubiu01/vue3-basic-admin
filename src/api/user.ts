import request from "@/utils/request";

export enum Api {
    LOGIN = "/login",
    GET_USER_INFO = "/getUserInfo"
}

export const login = (data?: any) => request.post(Api.LOGIN, data);

export const getUserInfo = (data?: any) => request.get(Api.GET_USER_INFO, data);
