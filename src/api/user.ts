import request from "@/utils/request";

export enum Api {
    MENU_LIST = "/user/getMenuList1"
}

export const getMenuList = () => request.get(Api.MENU_LIST, { id: 1 });
