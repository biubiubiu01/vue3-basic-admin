<template>
    <div class="com-seamscroll-container">
        <base-box title="基础示例">
            <base-seam-scroll :data="data" :options="scrollOption" height="288px">
                <div v-for="(item, index) in data" :key="item" class="notice-item flex-row-center">
                    {{ index + 1 }}.<span class="ml5">{{ item }}</span>
                </div>
            </base-seam-scroll>

            <div class="mt30">
                <base-form :columns="SeamscollColumn" :model="scrollOption" inline :colProps="{ span: 6 }"> </base-form>
            </div>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { SeamscollColumn } from "../colums";

const data = ref([
    "落霞与孤鹜齐飞，秋水共长天一色。",
    "关山难越，谁悲失路之人；萍水相逢，尽是他乡之客。",
    "老当益壮，宁移白首之心？穷且益坚，不坠青云之志。",
    "酌贪泉而觉爽，处涸辙以犹欢。",
    "君子安贫，达人知命。",
    "时运不齐，命途多舛。",
    "北海虽赊，扶摇可接；东隅已逝，桑榆非晚。",
    "天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。"
]);

const scrollOption = reactive({
    step: 1,
    singleHeight: 0,
    waitTime: 1000
});
</script>

<style lang="scss" scoped>
.notice-item {
    margin-bottom: 15px;
}
</style>
