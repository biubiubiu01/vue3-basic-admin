import { EChartsEnum, EChartsType } from "@/enums/echartsEnum";
import type { EChartsOption } from "echarts";
import { isObject, isArray, isUndefined } from "@/utils";
import barConfig from "../config/bar";
import lineConfig from "../config/line";
import pieConfig from "../config/pie";
import wordcloudConfig from "../config/wordcloud";
import radarConfig from "../config/radar";
import liquidfillConfig from "../config/liquidfill";

const echartsConfigMap = new Map<EChartsType, EChartsOption>();

echartsConfigMap.set(EChartsEnum.BAR, barConfig);
echartsConfigMap.set(EChartsEnum.LINE, lineConfig);
echartsConfigMap.set(EChartsEnum.PIE, pieConfig);
echartsConfigMap.set(EChartsEnum.WORDCLOUD, wordcloudConfig);
echartsConfigMap.set(EChartsEnum.RADAR, radarConfig);
echartsConfigMap.set(EChartsEnum.LIQUIDfILL, liquidfillConfig);

export const useChartConfig = (type: EChartsType) => {
    const defaultConfig = echartsConfigMap.get(type) || {};

    const mergeConfig = <T = any>(src: any = {}, target: any = {}): T => {
        let key: string;
        for (key in target) {
            if (isObject(target[key])) {
                mergeConfig(src[key], target[key]);
            } else if (isArray(target[key])) {
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

    return {
        config: defaultConfig,

        mergeConfig
    };
};
