import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "../utils";

export default [
    {
        url: "/api/test/getTest",
        method: "get",
        response: () => {
            const data = [];
            for (let i = 0; i < 10000; i++) {
                data.push(i);
            }
            return resultSuccess(data);
        }
    },
    {
        url: "/api/test/postTest",
        method: "post",
        response: () => {
            return resultSuccess();
        }
    },
    {
        url: "/api/test/sameTest",
        method: "get",
        response: () => {
            const data = [];
            for (let i = 0; i < 10000; i++) {
                data.push(i);
            }
            return resultSuccess(data);
        }
    }
] as MockMethod[];
