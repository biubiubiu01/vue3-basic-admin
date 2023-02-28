<template>
    <el-input
        v-model="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :max-length="maxLength"
        :show-word-limit="showWordLimit"
        :clearable="clearable"
        :show-password="showPassword"
        :prefix-icon="prefixIcon"
        :suffix-icon="suffixIcon"
        ref="baseInputRef"
        v-if="!text"
        v-bind="$attrs"
    >
        <template #prefix v-if="$slots.prefix">
            <slot name="prefix"></slot>
        </template>
        <template #suffix v-if="$slots.suffix">
            <slot name="suffix"></slot>
        </template>
        <template #prepend v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </template>
        <template #append v-if="$slots.append">
            <slot name="append"></slot>
        </template>
    </el-input>
    <span v-else>{{ value }}</span>
</template>

<script lang="ts" setup>
import inputProps from "./props";
import { useVModel } from "@vueuse/core";

const baseInputRef = ref();

const props = defineProps(inputProps);

const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit, { defaultValue: "" });

defineExpose({
    instance: baseInputRef
});
</script>

<style scoped></style>
