<template>
    <el-button v-bind="getPropsValue" v-if="hasPermission">
        <slot></slot>
        <template #loading v-if="$slots.loading">
            <slot name="loading"></slot>
        </template>
        <template #icon v-if="$slots.icon">
            <slot name="icon"></slot>
        </template>
    </el-button>
</template>

<script lang="ts" setup>
import { omit } from "@/utils";
const props = defineProps({
    type: {
        type: String,
        validator(value: string) {
            return ["primary", "success", "warning", "danger", "info", "text"].includes(value);
        }
    },
    size: {
        type: String,
        default: "default"
    },
    plain: {
        type: Boolean,
        default: false
    },
    auth: {
        type: String,
        default: ""
    },
    loading: {
        type: Boolean,
        default: false
    }
});

const attrs = useAttrs();

const getPropsValue = computed(() => {
    const newProps = { ...omit(props, "auth") } as any;
    if (props.type === "text") {
        newProps.type = "primary";
        newProps.link = true;
    }
    return { ...newProps, ...omit(attrs, "link") };
});

const hasPermission = computed(() => {
    // return permissionList.indexOf(props.auth);
    return true;
});
</script>

<style scoped></style>
