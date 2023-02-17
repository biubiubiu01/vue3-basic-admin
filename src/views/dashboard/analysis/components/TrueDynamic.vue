<template>
    <base-seam-scroll :data="dynamicData" :options="scrollOption">
        <div v-for="item in dynamicData" :key="item.name" class="dynamic-item flex-row-center">
            <el-avatar :size="42">{{ item.imgUrl }}</el-avatar>
            <div class="flex-auto ml20">
                <div class="flex-row-center justify-between">
                    <span>{{ item.name }}</span>
                    <span class="dynamic-item-time">{{ item.time }}</span>
                </div>
                <div class="mt10 dynamic-item-content">
                    恭喜成功卖出<span class="dynamic-item-value">{{ item.value }}</span
                    >元商品
                </div>
            </div>
        </div>
    </base-seam-scroll>
</template>

<script lang="ts" setup>
const dynamicData = ref([
    {
        name: "上海浦东分店",
        imgUrl: "浦东",
        value: "2000",
        time: "刚刚"
    },
    {
        name: "上海徐汇分店",
        imgUrl: "徐汇",
        value: "8888",
        time: "3分钟前"
    },
    {
        name: "上海松江分店",
        imgUrl: "松江",
        value: "6688",
        time: "5分钟前"
    },
    {
        name: "上海宝山分店",
        imgUrl: "宝山",
        value: "1314",
        time: "10分钟前"
    },
    {
        name: "上海杨浦分店",
        imgUrl: "杨浦",
        value: "666",
        time: "12分钟前"
    }
]);

const scrollOption = ref({
    step: 0.6,
    autoPlay: true
});
</script>

<style lang="scss" scoped>
.dynamic-item {
    background-color: var(--el-fill-color);
    box-sizing: border-box;
    padding: 10px 15px;
    margin-bottom: 15px;
    border-radius: 6px;

    .dynamic-item-time {
        font-size: var(--el-font-size-base);
        color: rgb(140, 150, 167);
    }
    .dynamic-item-content {
        font-size: var(--el-font-size-base);
        color: rgb(140, 150, 167);
        .dynamic-item-value {
            margin: 0 2px;
            color: var(--el-text-color-primary);
        }
    }
}
</style>
