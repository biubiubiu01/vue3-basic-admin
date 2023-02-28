import { MockMethod } from "vite-plugin-mock";
import { RequestParams, resultSuccess } from "../utils";

const operationList: any[] = [];
const errorList: any[] = [];
const loginList: any = [];

export default [
    {
        url: "/api/log/addOperationInfo",
        method: "post",
        response: (request: RequestParams) => {
            operationList.push(request.body);
            return resultSuccess();
        }
    },
    {
        url: "/api/log/getOperationList",
        method: "get",
        response: (request: RequestParams) => {
            const { currentPage, pageSize } = request.query;

            return resultSuccess({
                list: operationList.slice((currentPage - 1) * pageSize, currentPage * pageSize),
                total: operationList.length
            });
        }
    },
    {
        url: "/api/error/addErrorInfo",
        method: "post",
        response: (request: RequestParams) => {
            errorList.unshift(request.body);
            return resultSuccess();
        }
    },
    {
        url: "/api/error/getErrorList",
        method: "get",
        response: (request: RequestParams) => {
            const { currentPage, pageSize } = request.query;
            return resultSuccess({
                list: errorList.slice((currentPage - 1) * pageSize, currentPage * pageSize),
                total: errorList.length
            });
        }
    },
    {
        url: "/api/login/addLoginInfo",
        method: "post",
        response: (request: RequestParams) => {
            loginList.push(request.body);
            return resultSuccess();
        }
    },
    {
        url: "/api/login/getLoginList",
        method: "get",
        response: (request: RequestParams) => {
            const { currentPage, pageSize } = request.query;
            return resultSuccess({
                list: loginList.slice((currentPage - 1) * pageSize, currentPage * pageSize),
                total: loginList.length
            });
        }
    }
] as MockMethod[];
