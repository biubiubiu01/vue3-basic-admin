import { MockMethod } from "vite-plugin-mock";
import { RequestParams, resultSuccess } from "../utils";

const errorList: any[] = [];

export default [
    {
        url: "/api/error/addErrorInfo",
        method: "post",
        response: (request: RequestParams) => {
            errorList.push(request.body);
            return resultSuccess();
        }
    },
    {
        url: "/api/error/getErrorList",
        method: "get",
        response: (request: RequestParams) => {
            return resultSuccess(errorList);
        }
    }
] as MockMethod[];
