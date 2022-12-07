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
        :size="size"
        v-if="!text"
        v-bind="$attrs"
    >
        <template #prefix>
            <slot name="prefix"></slot>
        </template>
        <template #suffix>
            <slot name="suffix"></slot>
        </template>
    </el-input>
    <span v-else>{{ value }}</span>
</template>

<script lang="ts" setup>
import inputProps from "./props";
import { useVModel } from "@vueuse/core";

const props = defineProps(inputProps);

const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit, { defaultValue: "" });
</script>

<style scoped></style>
