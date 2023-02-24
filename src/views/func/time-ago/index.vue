<template>
    <div class="page-func-time-ago">
        <base-box title="相对当前时间">
            <div class="time-item" v-for="item in dateList" :key="item">
                {{ item }}：<span class="ml15">{{ getFormatDate(item) }}</span>
            </div>
        </base-box>

        <base-box title="自动更新">
            <div class="time-item">当前时间：{{ currentTime }}</div>
            <div class="time-item">{{ lastTime }}：{{ getFormatDate(lastTime) }}</div>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { useTimeAgo, useNow, useDateFormat } from "@vueuse/core";

const dateList = ref([
    "2022-02-24 11:11:11",
    "2022-10-24 15:35:34",
    "2023-01-24 15:35:34",
    "2023-02-24 16:48:34",
    "2023-02-24 16:52:11",
    "2023-03-25 12:12:12",
    "2023-06-25 12:12:12"
]);

const currentTime = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss");
const lastTime = useDateFormat(useNow({ interval: 0 }), "YYYY-MM-DD HH:mm:ss");

const messageObj: any = {
    justNow: "刚刚",
    past: (n: string) => (n.match(/\d/) ? `${n}前` : n),
    future: (n: string) => (n.match(/\d/) ? `${n}后` : n),
    month: (n: string) => `${n} 月`,
    year: (n: string) => `${n} 年`,
    day: (n: string) => `${n} 天`,
    week: (n: string) => `${n} 周`,
    hour: (n: string) => `${n}小时`,
    minute: (n: string) => `${n}分钟`,
    second: (n: string) => `${n}秒`
};

const getFormatDate = (d: string) => {
    return unref(
        useTimeAgo(d, {
            updateInterval: 1000,
            messages: messageObj
        })
    );
};
</script>

<style lang="scss" scoped>
.time-item {
    height: 50px;
    line-height: 50px;
}
</style>
