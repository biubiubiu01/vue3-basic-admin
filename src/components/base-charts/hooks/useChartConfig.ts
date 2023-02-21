import { EChartsEnum, EChartsType } from "@/enums/echartsEnum";
import type { EChartsOption } from "echarts";
import { isObject, isArray, isUndefined } from "@/utils";
import barConfig from "../config/bar";
import lineConfig from "../config/line";
import pieConfig from "../config/pie";
import wordcloudConfig from "../config/wordcloud";
import radarConfig from "../config/radar";
import liquidfillConfig from "../config/liquidfill";
import graphConfig from "../config/graph";
import mapConfig from "../config/map";
import scatterConfig from "../config/scatter";
import heatmapConfig from "../config/heatmap";

const echartsConfigMap = new Map<EChartsType, EChartsOption>();

echartsConfigMap.set(EChartsEnum.BAR, barConfig);
echartsConfigMap.set(EChartsEnum.LINE, lineConfig);
echartsConfigMap.set(EChartsEnum.PIE, pieConfig);
echartsConfigMap.set(EChartsEnum.WORDCLOUD, wordcloudConfig);
echartsConfigMap.set(EChartsEnum.RADAR, radarConfig);
echartsConfigMap.set(EChartsEnum.LIQUIDfILL, liquidfillConfig);
echartsConfigMap.set(EChartsEnum.GRAPH, graphConfig);
echartsConfigMap.set(EChartsEnum.MAP, mapConfig);
echartsConfigMap.set(EChartsEnum.SCATTER, scatterConfig);
echartsConfigMap.set(EChartsEnum.HEATMAP, heatmapConfig);

export const useChartConfig = (type: EChartsType) => {
    const defaultConfig = echartsConfigMap.get(type) || {};

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

    return {
        config: defaultConfig,

        mergeConfig
    };
};
