<template>
    <el-icon v-if="elName || svgName" :size="size" :color="color">
        <component :is="elName" v-if="elName" />
        <svg class="svgClass" aria-hidden="true" v-else>
            <use :xlink:href="getSvgName"></use>
        </svg>
    </el-icon>
    <i v-else-if="iconName" class="`iconfont icon-${iconName}`" :style="iconStyle"></i>
</template>

<script setup lang="ts">
const props = defineProps({
    size: {
        type: [Number, String]
    },
    color: {
        type: String
    },
    elName: {
        type: String
    },
    iconName: {
        type: String
    },
    svgName: {
        type: String
    }
});

const getSvgName = computed(() => {
    return `#icon-${props.svgName}`;
});

const iconStyle = computed(() => {
    return { color: props.color, fontSize: `${props.size || 16}px` };
});
</script>

<style scoped>
.svgClass {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    outline: 0;
}
</style>
