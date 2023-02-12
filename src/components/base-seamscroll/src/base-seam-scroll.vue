<template>
    <div :style="wrapBoxStyle" class="hidden">
        <div ref="realBoxRef" :style="realBoxStyle" @mouseenter="handleEnter" @mouseleave="handleLeave">
            <div ref="slotListRef" class="hidden">
                <slot></slot>
            </div>
            <div v-html="state.copyHtml" class="hidden"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { requestAnimationFrame, cancelAnimationFrame } from "@/utils/requestAnimationFrame";
import { useTimeoutFn } from "@vueuse/core";
import { isString } from "@/utils";
import { baseProps, defaultOptions } from "./props";
import type { StateSeam } from "./types";

const props = defineProps(baseProps);

const realBoxRef = ref<HTMLDivElement | null>(null);

const slotListRef = ref<HTMLDivElement | null>(null);

const state = reactive<StateSeam>({
    top: 0,
    autoPlay: false,
    delay: 0,
    copyHtml: "",
    isHover: false,
    reqFrame: null,
    singleWaitTime: null
});

onMounted(() => {
    initScroll();
});

const scrollOptions = computed(() => {
    return Object.assign({}, defaultOptions, props.options);
});

const animateFunction = computed(() => {
    return unref(scrollOptions).autoPlay ? "ease-in" : "linear";
});

const hoverStopSwitch = computed(() => {
    const { hoverStop, autoPlay } = unref(scrollOptions);
    return hoverStop && autoPlay && props.data.length > 1;
});

const wrapBoxStyle = computed(() => {
    const { width, height } = props;
    return {
        width: isString(width) ? width : `${width}px`,
        height: isString(height) ? height : `${height}px`
    };
});

const realBoxStyle = computed(() => {
    return {
        transform: `translateY(${state.top}px)`,
        transition: `all ${animateFunction.value} ${state.delay}ms`,
        overflow: "hidden"
    };
});

const initScroll = () => {
    const { autoPlay, switchDelay } = unref(scrollOptions);
    state.delay = autoPlay ? 0 : (switchDelay as number);
    if (autoPlay) {
        if (props.data.length > 1) {
            state.copyHtml = unref(slotListRef)?.innerHTML as string;
            useTimeoutFn(() => {
                handleMove();
            }, 0);
        } else {
            state.top = 0;
            handleCancel();
        }
    }
};

const handleMove = () => {
    if (state.isHover) return;
    handleCancel();
    state.reqFrame = requestAnimationFrame(() => {
        const realBoxHeight = unref(realBoxRef)?.offsetHeight as number;
        const { step, singleHeight, waitTime } = unref(scrollOptions);

        if (Math.abs(state.top) >= realBoxHeight / 2) {
            state.top = 0;
        }
        state.top -= step as number;

        if (state.singleWaitTime) clearTimeout(state.singleWaitTime);

        // 停顿
        if (singleHeight) {
            if (Math.abs(state.top) % singleHeight < (step as number)) {
                state.singleWaitTime = setTimeout(() => {
                    handleMove();
                }, waitTime);
            } else {
                handleMove();
            }
        } else {
            handleMove();
        }
    });
};

const handleLeave = () => {
    if (unref(hoverStopSwitch)) {
        state.isHover = false;
        handleMove();
    }
};

const handleEnter = () => {
    if (unref(hoverStopSwitch)) {
        state.isHover = true;
        if (state.singleWaitTime) clearTimeout(state.singleWaitTime);
        handleCancel();
    }
};

const handleCancel = () => {
    cancelAnimationFrame((state.reqFrame || "") as any);
};

const handleReset = () => {
    handleCancel();
    initScroll();
};

watch(
    () => props.data,
    () => {
        nextTick(() => {
            handleReset();
        });
    },
    {
        deep: true
    }
);

defineExpose({
    reset: handleReset
});
</script>

<style lang="scss" scoped></style>
