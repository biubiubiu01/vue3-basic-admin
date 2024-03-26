<template>
    <div class="all-container" ref="threeRef"></div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { useTimeoutFn } from "@vueuse/core";
import { isString, remoteLoad, isUndefined } from "@/utils";
import { AMapCDN, AMapUiCDN } from "@/constant/cdn";
import { AMapKey } from "@/constant/key";
import ThreeMap from "./map";

const threeRef = ref(null);
let mapInstance = {};

const state = reactive<any>({
    geoJsonObj: {},
    code: 100000
});

onMounted(() => {
    const action = [
        {
            type: "click",
            callFunction: mapClick
        }
    ];
    mapInstance = new ThreeMap(threeRef.value, action);
    getMapJson();
});

const mapClick = (val) => {
    const code = val.adcode;
    getMapJson(code);
};

// AMap和AMapUI挂载
const initMap = async () => {
    try {
        await remoteLoad(AMapCDN + AMapKey);
        // 必须先引入AMap才能成功引入AMapUi
        await remoteLoad(AMapUiCDN);
    } catch {
        console.error("加载AMap失败，请检查AMap或AMapUI地址是否正确");
    }
};

// 获取地图json数据
const getMapJson = async (code: number = state.code, childCode?: number) => {
    if (!window.AMap || !window.AMapUI) {
        await initMap();
    }

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
                state.code = childCode || code;

                setMapOption();
            });
        });
    }, 30);
};

// 根据配置渲染map
const setMapOption = () => {
    const json = state.geoJsonObj[state.code];
    mapInstance.renderMap(json);
};
</script>

<style lang="scss" scoped></style>
