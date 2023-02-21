import type { Ref } from "vue";
import type { EChartsOption } from "echarts";
import echarts from "@/plugins/echarts";
import { useResizeObserver, useDebounceFn, useTimeoutFn, tryOnUnmounted } from "@vueuse/core";
import { useDark } from "./useDark";
import { deepClone } from "@/utils";

export const useECharts = (elRef: Ref<HTMLDivElement>) => {
    const { isDark } = useDark();

    let chartInstance: echarts.ECharts | null = null;

    const cacheOption = ref<EChartsOption>({});

    const getOption = computed((): EChartsOption => {
        return unref(isDark)
            ? (Object.assign({}, unref(cacheOption), { backgroundColor: "transparent" }) as EChartsOption)
            : (cacheOption.value as EChartsOption);
    });

    tryOnUnmounted(() => {
        if (!chartInstance) return;
        chartInstance.dispose();
        chartInstance = null;
    });

    onActivated(() => {
        if (!chartInstance) return;
        resize();
    });

    onDeactivated(() => {
        if (!chartInstance) return;
        chartInstance.dispose();
        chartInstance = null;
    });

    const initCharts = () => {
        if (!unref(elRef)) return;
        chartInstance = echarts.init(unref(elRef), unref(isDark) ? "dark" : "default");
        useResizeObserver(
            unref(elRef),
            useDebounceFn((e) => {
                const contentRect = e[0].contentRect;
                if (Math.round(contentRect.width) !== chartInstance?.getWidth() || Math.round(contentRect.height) !== chartInstance?.getHeight()) {
                    resize();
                }
            }, 100)
        );
    };

    const setOption = async (options: EChartsOption, clear = true) => {
        cacheOption.value = deepClone(options);
        await nextTick();

        useTimeoutFn(() => {
            if (!chartInstance) {
                initCharts();
                if (!chartInstance) return;
            }
            clear && chartInstance.clear();
            chartInstance.setOption(unref(getOption));
        }, 30);
    };

    const resize = () => {
        chartInstance?.resize();
    };

    const clear = () => {
        chartInstance?.clear();
        chartInstance?.dispose();
        chartInstance = null;
    };

    const getInstance = (): echarts.ECharts | null => {
        if (!chartInstance) {
            initCharts();
            return chartInstance;
        }
        return chartInstance;
    };

    watch(
        () => isDark.value,
        () => {
            if (chartInstance) {
                chartInstance.dispose();
                initCharts();
                setOption(cacheOption.value as EChartsOption);
            }
        }
    );

    return {
        initCharts,
        getInstance,
        getOption: getOption.value,

        setOption,
        resize,
        clear
    };
};
