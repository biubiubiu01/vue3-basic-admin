import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import log from "./mock/controller/log";
import system from "./mock/controller/system";
import test from "./mock/controller/test";
import user from "./mock/controller/user";

// const getMockModule = () => {
//     const modules = import.meta.glob("./mock/controller/**/*.ts", { eager: true, import: "default" });
//     const mockModules: any[] = [];
//     Object.values(modules).forEach((value: any) => {
//         const moduleList = Array.isArray(value) ? [...(value as any)] : [value];
//         mockModules.push(...moduleList);
//     });
//     return mockModules;
// };

export function setupProdMockServer() {
    createProdMockServer([...log, ...system, ...test, ...user]);
}
