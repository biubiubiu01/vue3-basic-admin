<template>
    <div class="com-select-container">
        <base-box title="常规select">
            <base-select v-model="selectValue1" :options="options" />
        </base-box>

        <base-box title="扩展labelInValue">
            <base-select v-model="selectValue2" :options="options" labelInValue @change="changeOption" />
            <div class="mt10">change：{{ option }}</div>
        </base-box>

        <base-box title="同时绑定label和value">
            <base-select v-model="selectValue3" v-model:modelLabel="selectLabel" :options="options" labelInValue />
            <div class="mt10">label：{{ selectLabel }}，value：{{ selectValue3 }}</div>
        </base-box>

        <base-box title="扩展maxTag数量">
            <base-select v-model="selectValue4" :options="options" multiple :maxTagCount="3" />
        </base-box>

        <base-box title="扩展maxTagPlaceholder">
            <base-select v-model="selectValue5" :options="options" multiple :maxTagCount="3" :maxTagPlaceholder="maxTagPlaceholder" />
        </base-box>

        <base-box title="扩展ApiSelect(默认为visible-change打开的时候才会请求接口，设置init为true则初始化请求接口)">
            <base-select v-model="selectValue6" multiple :maxTagCount="3" :api="getUserList" label-key="username" value-key="id" />
        </base-box>

        <base-box title="selectTree">
            <base-select v-model="selectValue7" :api="getMenuList" tree nodeKey="id" :props="{ label: 'menuName', children: 'children' }" />
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { getUserList } from "@/api/system/user";
import { getMenuList } from "@/api/system/menu";
const selectValue1 = ref("");
const selectValue2 = ref("");
const selectValue3 = ref("");
const selectValue4 = ref("");
const selectValue5 = ref("");
const selectValue6 = ref("");
const selectValue7 = ref([]);

const selectLabel = ref("");

const option = ref({});

const options = ref([
    {
        label: "选项一",
        value: "1"
    },
    {
        label: "选项二",
        value: "2"
    },
    {
        label: "选项三",
        value: "3"
    },
    {
        label: "选项四",
        value: "4"
    },
    {
        label: "选项五",
        value: "5"
    }
]);

const changeOption = (val: any) => {
    option.value = val;
};

const maxTagPlaceholder = (val: number) => {
    return `折叠数量：${val}`;
};
</script>

<style lang="scss" scoped></style>
