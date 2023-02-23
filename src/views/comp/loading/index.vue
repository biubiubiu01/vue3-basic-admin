<template>
    <div class="com-loading-container">
        <base-box
            title="指令方式加载loading"
            class="relative"
            height="150px"
            v-custom-loading="loading"
            loading-text="自定义指令loading"
            loading-spin="pulse"
            :loading-full="full"
        >
            <base-button type="primary" @click="startCustomLoading(1)"> v-custom-loading指令非全屏 </base-button>
            <base-button type="primary" @click="startCustomLoading(2)"> v-custom-loading指令全屏 </base-button>
        </base-box>
        <base-box title="hook加载loading">
            <base-button type="primary" v-for="(item, index) in loadingList" :key="item" @click="startLoading(item)">
                loading{{ index + 1 }}
            </base-button>
        </base-box>

        <base-box title="loading最小时长">
            <base-input-number v-model="time" class="mr25" />
            <base-button type="primary" @click="startTimeLoading"> 点击触发loading </base-button>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { useLoading } from "@/hooks";

const loading = ref(false);
const full = ref(false);

const time = ref(1000);

const loadingList = ref(["pulse", "rect", "plane", "cube", "preloader", "chase", "dot"]);

const startCustomLoading = (val: number) => {
    full.value = val === 2;
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const startLoading = (item: any) => {
    const { open, close } = useLoading({ spin: item });
    open();
    setTimeout(() => {
        close();
    }, 2000);
};

const startTimeLoading = () => {
    const { open, close } = useLoading({ minTime: time.value });
    open();
    close();
};
</script>

<style lang="scss" scoped></style>
