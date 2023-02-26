import type { EChartsType, EChartsOption } from "../types";
import { isObject, isArray, isUndefined, deepClone } from "@/utils";

export const useChartConfig = (type: EChartsType, options?: EChartsOption) => {
    const modulesList = getModules();

    function getModules() {
        const configModules = import.meta.glob("../config/**.ts", { eager: true, import: "default" });
        const re = "([^/]*)(\\.\\w+)$";
        const modulesObj: EChartsOption = {};
        Object.keys(configModules).forEach((item) => {
            modulesObj[<string>item.match(re)?.[1]] = configModules[item];
        });
        return modulesObj;
    }

    const mergeConfig = <T = any>(src: any = {}, target: any = {}): T => {
        let key: string;
        for (key in target) {
            if (isObject(target[key])) {
                src[key] = mergeConfig(src[key] || {}, target[key]);
            } else if (isArray(target[key])) {
                if (isUndefined(src[key])) {
                    src[key] = [];
                }
                target[key].forEach((_: any, index: number) => {
                    if (isUndefined(src[key][index])) {
                        src[key][index] = {};
                    }
                    Object.assign(src[key][index], target[key][index]);
                });
            } else {
                Object.assign(src, target);
            }
        }
        return src;
    };

    const getConfig = computed(() => {
        return mergeConfig(deepClone(modulesList[type]), options);
    });

    return {
        getConfig
    };
};
