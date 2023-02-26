<template>
    <div ref="baseChartRef" :style="style"></div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from "vue";
import type { EChartsOption } from "echarts";
import { isString, deepClone } from "@/utils";
import type { EChartsType } from "./types";
import { useCharts } from "./hooks/useCharts";
import { useChartConfig } from "./hooks/useChartsConfig";

const props = defineProps({
    width: {
        type: [Number, String],
        default: "100%"
    },
    height: {
        type: [Number, String],
        default: "300px"
    },
    options: {
        type: Object as PropType<EChartsOption>,
        required: true
    },
    type: {
        type: String as PropType<EChartsType>,
        default: "bar"
    }
});

const baseChartRef = ref<HTMLDivElement | null>(null);

const { getConfig } = useChartConfig(props.type, props.options);

const { setOption } = useCharts(baseChartRef as Ref<HTMLDivElement>);

onMounted(() => {
    setOption(unref(getConfig));
});

const style = computed(() => {
    const { width, height } = props;
    return {
        width: isString(width) ? width : `${width}px`,
        height: isString(height) ? height : `${height}px`
    };
});

watch(
    () => props.options,
    () => {
        setOption(unref(getConfig));
    },
    { deep: true }
);
</script>

<style lang="scss" scoped></style>
