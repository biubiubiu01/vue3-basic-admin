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
import { useUserStoreWithOut } from "@/stores/modules/user";
import { omit } from "@/utils";
const props = defineProps({
    type: {
        type: String,
        validator(value: string) {
            return ["primary", "success", "warning", "danger", "info", "default"].includes(value);
        }
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

const userStore = useUserStoreWithOut();

const attrs = useAttrs();

const getPropsValue = computed(() => {
    const newProps = { ...omit(props, "auth") } as any;
    return { ...newProps, ...attrs };
});

const hasPermission = computed(() => {
    if (!props.auth) return true;
    return userStore.getRoleIds.includes(props.auth);
});
</script>

<style scoped></style>
