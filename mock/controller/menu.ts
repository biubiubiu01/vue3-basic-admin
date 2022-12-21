import { MockMethod } from "vite-plugin-mock";
import { RequestParams } from "../utils";

export default [
    {
        url: "/api/getMenuList",
        method: "get",
        response: (request: RequestParams) => {
            console.log(request);
        }
    }
] as MockMethod[];
