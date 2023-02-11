import type { Ref } from "vue";
import type { EChartsOption } from "echarts";
import echarts from "@/plugins/echarts";
import { useResizeObserver, useDebounceFn, useTimeoutFn, tryOnUnmounted } from "@vueuse/core";
import { useDark } from "./useDark";

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
            useDebounceFn(() => {
                resize();
            }, 50)
        );
    };

    const setOption = async (options: EChartsOption, clear = true) => {
        cacheOption.value = options;
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
        getInstance,
        getOption: getOption.value,

        setOption,
        resize,
        clear
    };
};
