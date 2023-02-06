<template>
    <div class="rect-wrapper">
        <div class="rect-item rect1"></div>
        <div class="rect-item rect2"></div>
        <div class="rect-item rect3"></div>
        <div class="rect-item rect4"></div>
        <div class="rect-item rect5"></div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    color: {
        type: String,
        default: "#3ff9dc"
    }
});
</script>

<style lang="scss" scoped>
.rect-item {
    width: 6px;
    height: 60px;
    background-color: v-bind(color);
    display: inline-block;
    margin: 0 4px;
    animation: rect-loader 1.2s infinite ease-in-out;
}
.rect2 {
    animation-delay: -1.1s;
}
.rect3 {
    animation-delay: -1s;
}
.rect4 {
    animation-delay: -0.9s;
}
.rect5 {
    animation-delay: -0.8s;
}

@keyframes rect-loader {
    0%,
    40%,
    100% {
        transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1);
    }
}
</style>
