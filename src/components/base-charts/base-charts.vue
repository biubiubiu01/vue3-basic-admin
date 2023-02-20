<template>
    <div ref="baseChartRef" :style="style"></div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from "vue";
import type { EChartsOption } from "echarts";
import { isString, deepClone } from "@/utils";
import type { EChartsType } from "@/enums/echartsEnum";
import { useECharts } from "@/hooks";
import { useChartConfig } from "./hooks/useChartConfig";

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

const { config, mergeConfig } = useChartConfig(props.type);

const { setOption } = useECharts(baseChartRef as Ref<HTMLDivElement>);

onMounted(() => {
    console.log(getOption.value);
    setOption(unref(getOption));
});

const getOption = computed((): EChartsOption => {
    return mergeConfig(deepClone(config), props.options);
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
        setOption(unref(getOption));
    },
    { deep: true }
);
</script>

<style lang="scss" scoped></style>
