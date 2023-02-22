<template>
    <div class="com-markdown-container">
        <base-box title="基础示例">
            <base-vditor v-model="value" />
        </base-box>
        <base-box title="form中使用">
            <base-form :columns="FormColumn" :model="formModel"> </base-form>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
const value = ref(`# 这里是h1标题`);

const formModel = reactive({});

const FormColumn = ref<FormColumnType[]>([
    {
        fieldName: "title",
        fieldDesc: "标题",
        fieldType: FormTypeEnum.INPUT
    },
    {
        fieldName: "content",
        fieldDesc: "内容",
        fieldType: FormTypeEnum.VDITOR
    }
]);
</script>

<style lang="scss" scoped></style>
