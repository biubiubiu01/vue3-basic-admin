<template>
    <div class="com-editor-container">
        <base-box title="基础示例">
            <base-tinymce v-model="value" />
        </base-box>
        <base-box title="form中使用">
            <base-form :columns="FormColumn" :model="formModel"> </base-form>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { FormColumnType } from "@/components/base-form";
import { FormTypeEnum } from "@/enums/componentEnum";
const value = ref(`hello this is first value`);

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
        fieldType: FormTypeEnum.TINYMCE
    }
]);
</script>

<style lang="scss" scoped></style>
