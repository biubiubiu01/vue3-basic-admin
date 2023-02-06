import request from "@/utils/request";

export enum Api {
    USER_LIST = "/user/getUserList",
    ADD_USER = "/user/addUser",
    EDIT_USER = "/user/editUser",
    DELETE_USER = "/user/deleteUser",
    CHANGE_USER_STATUS = "/user/changeStatus"
}

export const getUserList = (data?: any) => request.get(Api.USER_LIST, data);

export const addUser = (data?: any) => request.post(Api.ADD_USER, data);

export const deleteUser = (data?: any) => request.delete(Api.DELETE_USER, data);

export const editUser = (data?: any) => request.put(Api.EDIT_USER, data);

export const changeUserStatus = (data?: any) => request.put(Api.CHANGE_USER_STATUS, data);
