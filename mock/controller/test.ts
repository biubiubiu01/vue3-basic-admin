import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "../utils";
export default [
    {
        url: "/api/test/getTest",
        method: "get",
        response: () => {
            return resultSuccess();
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
            return resultSuccess();
        }
    }
] as MockMethod[];
