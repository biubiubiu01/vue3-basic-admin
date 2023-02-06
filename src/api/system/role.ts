import request from "@/utils/request";

export enum Api {
    ROLE_LIST = "/role/getRoleList",
    ROLE_ALL_LIST = "/role/getAllRoleList",
    ADD_ROLE = "/role/addRole",
    EDIT_ROLE = "/role/editRole",
    DELETE_ROLE = "/role/deleteRole",
    CHANGE_ROLE_STATUS = "/role/changeStatus"
}

export const getRoleList = (data?: any) => request.get(Api.ROLE_LIST, data);

export const getAllRoleList = () => request.get(Api.ROLE_ALL_LIST);

export const addRole = (data?: any) => request.post(Api.ADD_ROLE, data);

export const deleteRole = (data?: any) => request.delete(Api.DELETE_ROLE, data);

export const editRole = (data?: any) => request.put(Api.EDIT_ROLE, data);

export const changeRoleStatus = (data?: any) => request.put(Api.CHANGE_ROLE_STATUS, data);
