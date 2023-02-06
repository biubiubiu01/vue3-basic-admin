<template>
    <el-date-picker v-model="value" v-bind="getPropsValue" />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
const props = defineProps({
    modelValue: [String, Number, Array, Date],
    startPlaceholder: {
        type: String,
        default: "开始时间"
    },
    endPlaceholder: {
        type: String,
        default: "结束时间"
    },
    format: {
        type: String,
        default: "YYYY/MM/DD"
    },
    valueFormat: {
        type: String,
        default: "YYYY-MM-DD"
    },
    rangeSeparator: {
        type: String,
        default: "~"
    }
});
const emit = defineEmits(["update:modelValue"]);

const value: any = useVModel(props, "modelValue", emit, { passive: true });

const attrs = useAttrs();

const getPropsValue = computed(() => {
    return { ...props, ...attrs };
});
</script>

<style scoped></style>
