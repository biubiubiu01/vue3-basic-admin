import { EChartsEnum, EChartsType } from "@/enums/echartsEnum";
import type { EChartsOption } from "echarts";
import { isObject, isArray } from "@/utils";
import barConfig from "../config/bar";
import lineConfig from "../config/line";
import pieConfig from "../config/pie";

const echartsConfigMap = new Map<EChartsType, EChartsOption>();

echartsConfigMap.set(EChartsEnum.BAR, barConfig);
echartsConfigMap.set(EChartsEnum.LINE, lineConfig);
echartsConfigMap.set(EChartsEnum.PIE, pieConfig);

export const useChartConfig = (type: EChartsType) => {
    const defaultConfig = echartsConfigMap.get(type) || {};

    const mergeConfig = <T = any>(src: any = {}, target: any = {}): T => {
        let key: string;
        for (key in target) {
            if (isObject(target[key])) {
                mergeConfig(src[key], target[key]);
            } else if (isArray(target[key])) {
                target[key].forEach((_: any, index: number) => {
                    Object.assign(src[key][index], target[key][index]);
                });
            } else {
                Object.assign(src, target);
            }
        }
        return src;
    };

    return {
        config: defaultConfig,

        mergeConfig
    };
};
