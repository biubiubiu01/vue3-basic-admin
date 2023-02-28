import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import log from "../mock/controller/log";
import system from "../mock/controller/system";
import test from "../mock/controller/test";
import user from "../mock/controller/user";

export function setupProdMockServer() {
    createProdMockServer([...log, ...system, ...test, ...user]);
}
