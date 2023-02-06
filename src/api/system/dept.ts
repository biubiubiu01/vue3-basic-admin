import request from "@/utils/request";

export enum Api {
    DEPT_TREE_LIST = "/dept/getDeptTreeList",
    DEPT_LIST = "/dept/getDeptList",
    ADD_DEPT = "/dept/addDept"
}

export const getDeptTreeList = () => request.get(Api.DEPT_TREE_LIST);

export const getDeptList = (data?: any) => request.get(Api.DEPT_LIST, data);

export const addDept = (data?: any) => request.post(Api.ADD_DEPT, data);
