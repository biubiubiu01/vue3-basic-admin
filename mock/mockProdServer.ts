import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import log from "./controller/log";
import system from "./controller/system";
import test from "./controller/test";
import user from "./controller/user";

export function setupProdMockServer() {
    createProdMockServer([...log, ...system, ...test, ...user]);
}
