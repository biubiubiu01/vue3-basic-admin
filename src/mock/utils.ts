import { ResultEnum } from "@/enums/httpEnum";

export interface RequestParams {
    methods: string;
    body: any;
    headers?: { authorization?: string };
    query: any;
}

export const resultSuccess = (data: any = null, message = "请求成功") => {
    return {
        code: ResultEnum.SUCCESS,
        data,
        message
    };
};

export const resultError = (message = "请求失败") => {
    return {
        code: ResultEnum.ERROR,
        data: null,
        message
    };
};
