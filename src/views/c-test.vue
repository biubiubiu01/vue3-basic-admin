<template>
    <base-column-setting class="mt20" v-model:columns="columns" />
    <base-table :data="data" :columns="columns"> </base-table>
</template>
<script setup lang="ts">
const data = ref([{}]);
const columns = ref([
    {
        fieldName: "1",
        fieldDesc: "业务计划号",
        required: true
    },
    {
        fieldName: "2",
        fieldDesc: "部门",
        formType: "number",
        width: 180
    },
    {
        fieldName: "3",
        fieldDesc: "业务类型",
        formType: "number"
    },
    {
        fieldName: "4",
        fieldDesc: "期现业务类型",
        formType: "number"
    },
    {
        fieldName: "5",
        fieldDesc: "现货业务类型",
        formType: "number"
    },
    {
        fieldName: "6",
        fieldDesc: "计划业务类型",
        formType: "number"
    },
    {
        fieldName: "7",
        fieldDesc: "基差业务类型",
        formType: "number"
    },
    {
        fieldName: "8",
        fieldDesc: "持仓业务类型",
        formType: "number"
    }
]);

const changeVal = () => {};
</script>

<style scoped></style>
