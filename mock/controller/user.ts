import { MockMethod } from "vite-plugin-mock";
import { RequestParams } from "../utils";

export default [
    {
        url: "/api/user/getMenuList",
        method: "get",
        response: (request: RequestParams) => {}
    }
] as MockMethod[];
