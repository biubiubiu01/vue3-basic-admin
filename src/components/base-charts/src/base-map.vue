<template>
    <div ref="baeMapRef" :style="style"></div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from "vue";
import { useTimeoutFn } from "@vueuse/core";
import type { EChartsOption } from "echarts";
import { isString, remoteLoad, isUndefined } from "@/utils";
import { AMapCDN, AMapUiCDN } from "@/constant/cdn";
import echarts from "@/plugins/echarts";
import { AMapKey } from "@/constant/key";
import { useLoading } from "@/hooks";
import { useCharts } from "./hooks/useCharts";
import { useChartConfig } from "./hooks/useChartsConfig";

const props = defineProps({
    width: {
        type: [Number, String],
        default: "100%"
    },
    height: {
        type: [Number, String],
        default: "400px"
    },
    options: {
        type: Object as PropType<EChartsOption>
    },
    type: {
        type: String as PropType<"map" | "scatter" | "heatmap">,
        default: "map"
    },
    code: {
        type: Number,
        default: 100000
    },
    mapKey: {
        type: String,
        default: AMapKey
    }
});

const baeMapRef = ref<HTMLDivElement | null>(null);

const state = reactive<any>({
    geoJsonObj: {},
    code: props.code
});

onMounted(() => {
    getMapJson();
});

const style = computed(() => {
    const { width, height } = props;
    return {
        width: isString(width) ? width : `${width}px`,
        height: isString(height) ? height : `${height}px`
    };
});

const { setOption } = useCharts(baeMapRef as Ref<HTMLDivElement>);

const { getConfig } = useChartConfig(props.type, props.options);

const loading = useLoading();

// AMap和AMapUI挂载
const initMap = async () => {
    try {
        const { mapKey } = props;
        if (!mapKey) {
            console.error("mapKey参数缺失，无法正常渲染地图");
            return;
        }
        await remoteLoad(AMapCDN + mapKey);
        // 必须先引入AMap才能成功引入AMapUi
        await remoteLoad(AMapUiCDN);
    } catch {
        console.error("加载AMap失败，请检查AMap或AMapUI地址是否正确");
    }
};

// 获取地图json数据
const getMapJson = async (code: number = props.code, childCode?: number) => {
    if (!window.AMap || !window.AMapUI) {
        await initMap();
    }
    loading.open(baeMapRef.value as any);

    if (state.geoJsonObj[code] && !isUndefined(state.geoJsonObj[childCode as number])) {
        state.code = childCode || code;
        setMapOption();
        return;
    }
    useTimeoutFn(() => {
        window.AMapUI.loadUI(["geo/DistrictExplorer"], (DistrictExplorer: any) => {
            const districtExplorer = new DistrictExplorer();
            districtExplorer.loadAreaNode(code, function (error: Error, areaNode: any) {
                if (error) {
                    loading.close();
                    return;
                }

                let geoJson = areaNode?.getSubFeatures() || [];
                // 如果当前code找到的json数据为空，找到它父级行政区code,从父级行政区json截取出当前code的
                if (geoJson.length === 0) {
                    const parent = areaNode._data.geoData.parent.properties.acroutes;
                    getMapJson(parent[parent.length - 1], code);
                    return;
                }
                if (childCode) {
                    geoJson = geoJson.filter((item: any) => item.properties.adcode === childCode);
                }
                state.geoJsonObj[childCode || code] = {
                    features: geoJson
                };
                echarts.registerMap("map", state.geoJsonObj[state.code]);
                state.code = childCode || code;

                setMapOption();
            });
        });
    }, 30);
};

// 根据配置渲染map
const setMapOption = () => {
    loading.close();
    setOption(unref(getConfig));
};

watch(
    () => [props.code, props.options],
    () => {
        getMapJson();
    },
    { deep: true }
);

defineExpose({
    getJson: getMapJson
});
</script>

<style lang="scss" scoped></style>
