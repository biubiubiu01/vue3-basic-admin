import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

const getMockModule = () => {
    const modules = import.meta.glob("./controller/**/*.ts", { eager: true, import: "default" });
    const mockModules: any[] = [];
    Object.values(modules).forEach((value: any) => {
        const moduleList = Array.isArray(value) ? [...(value as any)] : [value];
        mockModules.push(...moduleList);
    });
    return mockModules;
};

export function setupProdMockServer() {
    createProdMockServer(getMockModule());
}
