<template>
    <div :class="['base-virtual-wrapper', className]" ref="wrapperRef" :style="getWrapperStyle" @scroll="onScroll">
        <div class="base-virtual-inner" ref="innerRef" :style="getInnerStyle">
            <div class="base-virtual-list" :style="getListStyle" ref="virtualListRef">
                <div v-for="(item, index) in clientData" :key="index + state.start">
                    <slot name="default" :item="item"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import virtualProps from "./props";
import { isNumber, isString } from "@/utils";

const props = defineProps(virtualProps);

const state = reactive<any>({
    start: 0,
    end: 10,
    scrollOffset: 0,
    cacheData: []
});
const virtualListRef = ref();

const getWrapperStyle = computed(() => {
    const { style, height, width } = props;
    const styleObj = isString(style) ? JSON.parse(style) : { ...style };
    return {
        height: `${height}px`,
        width: isNumber(width) ? `${width}px` : width,
        ...styleObj
    };
});

const getInnerStyle = computed(() => {
    return {
        height: `${unref(getTotalHeight)}px`,
        width: "100%"
    };
});

const getListStyle = computed(() => {
    return {
        willChange: "transform",
        transform: `translateY(${state.scrollOffset}px)`
    };
});

// 数据数量
const total = computed(() => {
    return props.data.length;
});

// 总体高度
const getTotalHeight = computed(() => {
    if (!props.dynamic) return unref(total) * props.itemHeight;
    return getCurrentTop(unref(total));
});

// 当前屏幕显示的数量
const clientCount = computed(() => {
    return Math.ceil(props.height / props.itemHeight);
});

// 当前屏幕显示的数据
const clientData = computed(() => {
    return props.data.slice(state.start, state.end);
});

const onScroll = (e: any) => {
    const { scrollTop } = e.target;
    if (state.scrollOffset === scrollTop) return;
    const { cache, dynamic, itemHeight } = props;
    const cacheCount = Math.max(1, cache);

    let startIndex = dynamic ? getStartIndex(scrollTop) : Math.floor(scrollTop / itemHeight);

    const endIndex = Math.max(0, Math.min(unref(total), startIndex + unref(clientCount) + cacheCount));

    if (startIndex > cacheCount) {
        startIndex = startIndex - cacheCount;
    }

    // 偏移量
    const offset = dynamic ? getCurrentTop(startIndex) : scrollTop - (scrollTop % itemHeight);

    Object.assign(state, {
        start: startIndex,
        end: endIndex,
        scrollOffset: offset
    });
};

// 二分法去查找对应的index
const getStartIndex = (scrollTop = 0): number => {
    let low = 0;
    let high = state.cacheData.length - 1;
    while (low <= high) {
        const middle = low + Math.floor((high - low) / 2);
        const middleTopValue = getCurrentTop(middle);
        const middleBottomValue = getCurrentTop(middle + 1);

        if (middleTopValue <= scrollTop && scrollTop <= middleBottomValue) {
            return middle;
        } else if (middleBottomValue < scrollTop) {
            low = middle + 1;
        } else if (middleBottomValue > scrollTop) {
            high = middle - 1;
        }
    }
    return Math.min(unref(total) - unref(clientCount), Math.floor(scrollTop / props.itemHeight));
};

const getCurrentTop = (index: number) => {
    const lastIndex = state.cacheData.length - 1;

    if (Object.hasOwn(state.cacheData, index)) {
        return state.cacheData[index].top;
    } else if (Object.hasOwn(state.cacheData, index - 1)) {
        return state.cacheData[index - 1].bottom;
    } else if (index > lastIndex) {
        return state.cacheData[lastIndex].bottom + Math.max(0, index - state.cacheData[lastIndex].index) * props.itemHeight;
    } else {
        return index * props.itemHeight;
    }
};

onUpdated(() => {
    if (!props.dynamic) return;
    const childrenList = virtualListRef.value.children || [];
    [...childrenList].forEach((node: any, index: number) => {
        const height = node.getBoundingClientRect().height;
        const currentIndex = state.start + index;
        if (state.cacheData[currentIndex].height === height) return;

        state.cacheData[currentIndex].height = height;
        state.cacheData[currentIndex].top = getCurrentTop(currentIndex);
        state.cacheData[currentIndex].bottom = state.cacheData[currentIndex].top + state.cacheData[currentIndex].height;
    });
});

watchEffect(() => {
    clientData.value.forEach((_, index) => {
        const currentIndex = state.start + index;
        if (Object.hasOwn(state.cacheData, currentIndex)) return;
        state.cacheData[currentIndex] = {
            top: currentIndex * props.itemHeight,
            height: props.itemHeight,
            bottom: (currentIndex + 1) * props.itemHeight,
            index: currentIndex
        };
    });
});
</script>

<style lang="scss" scoped>
.base-virtual-wrapper {
    position: relative;
    overflow-y: auto;
}
</style>
