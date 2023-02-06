<template>
    <div class="tag-view-wrapper flex-row-center">
        <div class="tag-view-content flex flex-auto">
            <base-icon
                :icon="leftIcon"
                class="tag-arrow tag-shadow"
                :class="{ disabled: leftDisabled }"
                v-if="showArrow"
                @click="handleScroll(number)"
            />
            <div class="scroll-outer flex-auto" :class="{ 'no-arrow': !showArrow }" ref="scrollOuterRef" @mousewheel="handleMouseWheel">
                <div class="scroll-body absolute flex-row-center" ref="scrollBodyRef" :style="{ transform: `translateX(${tagBodyLeft}px)` }">
                    <slot></slot>
                </div>
            </div>
            <base-icon
                :icon="rightIcon"
                class="tag-arrow tag-shadow"
                :class="{ disabled: rightDisabled }"
                v-if="showArrow"
                @click="handleScroll(-number)"
            />
        </div>
        <slot name="action"></slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    iconScroll: {
        type: Boolean,
        default: true
    },
    leftIcon: {
        type: String,
        default: "arrowLeft"
    },
    rightIcon: {
        type: String,
        default: "arrowRight"
    },
    wheelScroll: {
        type: Boolean,
        default: true
    },
    number: {
        type: Number,
        default: 240
    }
});

const scrollOuterRef = ref();

const scrollBodyRef = ref();

// 根据这个去移动tag的位置
const tagBodyLeft = ref(0);

/**
 * 滚动按钮是否显示
 */
const showArrow = computed((): boolean => {
    return unref(scrollBodyRef)?.offsetWidth >= unref(scrollOuterRef)?.offsetWidth - 30 && props.iconScroll;
});

/**
 * 向左 disabled
 */
const leftDisabled = computed(() => {
    return unref(tagBodyLeft) === 0;
});

/**
 * 向右 disabled
 */
const rightDisabled = computed(() => {
    return unref(tagBodyLeft) <= unref(scrollOuterRef)?.offsetWidth - unref(scrollBodyRef)?.offsetWidth;
});

/**
 * 滚动
 * @param {Number} val
 */
const handleScroll = (val: number) => {
    if (val > 0 && unref(leftDisabled)) {
        return;
    }
    if (val < 0 && unref(rightDisabled)) {
        return;
    }
    if (val > 0) {
        setBodyLeft(Math.min(0, unref(tagBodyLeft) + val));
    } else {
        setBodyLeft(Math.max(unref(tagBodyLeft) + val, unref(scrollOuterRef)?.offsetWidth - unref(scrollBodyRef)?.offsetWidth));
    }
};

const setBodyLeft = (val: number) => {
    tagBodyLeft.value = val;
};

/**
 * 鼠标滚动
 * @param {Event} e
 */
const handleMouseWheel = (e: any) => {
    if (!unref(showArrow) || !props.wheelScroll) return;
    e.wheelDelta > 0 ? handleScroll(120) : handleScroll(-120);
};

defineExpose({
    instance: scrollOuterRef,
    getBodyLeft: tagBodyLeft,
    setBodyLeft
});
</script>
