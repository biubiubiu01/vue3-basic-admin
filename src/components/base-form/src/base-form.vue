<template>
    <el-form :model="model" v-bind="getPropsValue" @submit.prevent ref="baseFormRef">
        <el-row v-bind="rowProps" :gutter="0" class="hidden">
            <el-col v-for="item in getColumnList" :key="item.fieldName" v-bind="item.colProps || colProps">
                <el-form-item :label="item.fieldDesc" :prop="item.fieldName" class="w100" v-bind="item">
                    <component
                        v-if="item.fieldType !== 'slot'"
                        v-model="model[item.fieldName]"
                        :is="componentMap.get(item.fieldType)"
                        v-bind="item.config"
                        class="w100"
                    />
                    <slot v-else :name="item.fieldName" :item="item"></slot>
                </el-form-item>
            </el-col>
        </el-row>
        <slot name="action"></slot>
    </el-form>
</template>

<script lang="ts" setup>
import dialogProps, { extraProps } from "./props";
import { componentMap } from "@/enums/componentEnum";
import { isBoolean, isFunction, isUndefined, omit } from "@/utils";

const props = defineProps(dialogProps);

const attrs = useAttrs();

const baseFormRef = ref();

const getPropsValue = computed(() => {
    const newProps = { ...omit(props, Object.keys(extraProps)) } as any;
    return { ...newProps, ...attrs };
});

const getColumnList = computed(() => {
    const { columns, model } = props;
    return columns.filter((item) => {
        if (isFunction(item.show)) {
            return item.show({ model, columns });
        }
        if (isBoolean(item.show)) {
            return item.show;
        }
        return isUndefined(item.active) || item.active;
    });
});

defineExpose({
    instance: baseFormRef
});
</script>

<style scoped></style>
