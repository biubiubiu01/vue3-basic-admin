<template>
    <div class="base-page-table-container">
        <base-box>
            <BaseFilter :column="filterColumn" />
        </base-box>
        <base-box title="错误日志列表"> 12312321</base-box>
    </div>
</template>

<script lang="ts" setup>
// const props = defineProps({
//     filterColumn: {
//         type: Array,
//         default: () => []
//     }
// });

const filterColumn = [
    {
        fieldName: "a",
        fieldDesc: "姓名",
        fieldType: "input"
    },
    {
        fieldName: "b",
        fieldDesc: "联系",
        fieldType: "number",
        config: {}
    }
];
</script>

<style lang="scss" scoped></style>
