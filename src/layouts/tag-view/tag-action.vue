<template>
    <el-dropdown :trigger="trigger" class="pointer" @command="handleMenuEvent" @visible-change="handleVisible" ref="dropdownRef">
        <slot></slot>

        <template #dropdown>
            <el-dropdown-item
                v-for="(item, index) in getActionList"
                :key="index"
                :divided="item.divided"
                :disabled="item.disabled"
                :command="item.command"
            >
                <base-icon :icon="item.icon" class="mr5" />
                {{ item.text }}
            </el-dropdown-item>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { useTagEvent } from "../hooks/useTagEvent";
import type { RouteLocationNormalized } from "vue-router";

const props = defineProps({
    trigger: {
        type: String as PropType<"hover" | "click" | "contextmenu">,
        default: "click"
    },
    isTab: {
        type: Boolean,
        default: false
    },
    tagItem: {
        type: Object as PropType<RouteLocationNormalized>
    }
});
const emit = defineEmits(["closeAll"]);

const { getActionList, handleMenuEvent } = useTagEvent(props.tagItem, props.isTab);

const dropdownRef = ref();

const handleVisible = (bool: boolean) => {
    if (!props.isTab || !bool) return;
    emit("closeAll");
    unref(dropdownRef).handleOpen();
};

const handleClose = () => {
    unref(dropdownRef).handleClose();
};

defineExpose({
    close: handleClose
});
</script>

<style scoped></style>
