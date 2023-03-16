<template>
    <div class="base-virtual-list">
        <div :class="['base-virtual-wrapper', className]" ref="wrapperRef" :style="getWrapperStyle" @scroll="onScroll">
            <div class="base-virtual-inner" ref="innerRef" :style="getInnerStyle">
                <template v-for="(item, index) in clientData" :key="startIndex + index">
                    <slot name="default" :item="item" :index="startIndex + index" :style="getItemStyle(startIndex + index)"></slot>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import virtualProps from "./props";
import { isNumber, isString } from "@/utils";

const props = defineProps(virtualProps);

const state = reactive({
    // 滚动的高度
    scrollOffset: 0,
    isScrolling: false,
    scrollDir: "forward",
    cacheDataStyle: []
});

const itemsToRender = computed(() => {
    const { cache, total, height, itemHeight } = props;

    if (total === 0) {
        return [0, 0, 0, 0];
    }
    const startIndex = Math.max(0, Math.min(total - 1, Math.floor(state.scrollOffset / itemHeight)));

    const offset = startIndex * itemHeight;

    // 每一页能展示的数量
    const numVisibleItems = Math.ceil(((height as number) + state.scrollOffset - offset) / itemHeight);

    const stopIndex = Math.max(0, Math.min(total - 1, startIndex + numVisibleItems - 1));

    const cacheBackward = !state.isScrolling || state.scrollDir === "backward" ? Math.max(1, cache) : 1;
    const cacheForward = !state.isScrolling || state.scrollDir === "forward" ? Math.max(1, cache) : 1;

    return [Math.max(0, startIndex - cacheBackward), Math.max(0, Math.min(total, stopIndex + cacheForward)), startIndex, stopIndex];
});

const clientData = computed(() => {
    const [start, end] = unref(itemsToRender);
    return props.data.slice(start, end);
});

const startIndex = computed(() => {
    return unref(itemsToRender)[0];
});

const getWrapperStyle = computed(() => {
    const { style, height, width } = props;
    const styleObj = isString(style) ? JSON.parse(style) : { ...style };
    return {
        willChange: "transform",
        height: isNumber(height) ? `${height}px` : height,
        width: isNumber(width) ? `${width}px` : width,
        ...styleObj
    };
});

const getTotalHeight = computed(() => {
    const { itemHeight, total } = props;
    return itemHeight * total;
});

const getInnerStyle = computed(() => {
    return {
        height: `${unref(getTotalHeight)}px`,
        width: "100%"
    };
});

const getItemStyle = (index: number) => {
    let style: any = {};
    if (Object.hasOwn(state.cacheDataStyle, index)) {
        return state.cacheDataStyle[index];
    } else {
        (state.cacheDataStyle[index] as any) = style = {
            position: "absolute",
            left: 0,
            top: `${index * props.itemHeight}px`,
            height: `${props.itemHeight}px`,
            width: "100%"
        };
    }
    return style;
};

const onScroll = (e: any) => {
    const { clientHeight, scrollHeight, scrollTop } = e.target;
    if (state.scrollOffset === scrollTop) return;
    const scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
    Object.assign(state, {
        isScrolling: true,
        scrollDir: state.scrollOffset < scrollOffset ? "forward" : "backward",
        scrollOffset
    });
};
</script>

<style lang="scss" scoped>
.base-virtual-wrapper {
    position: relative;
    overflow-y: auto;
}
</style>
