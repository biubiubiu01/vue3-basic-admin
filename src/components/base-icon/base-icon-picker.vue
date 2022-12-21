<template>
    <el-popover placement="bottom" :width="popoverWidth" trigger="click">
        <template #reference>
            <base-input
                v-model="state.iconValue"
                class="base-icon-picker"
                :style="{ width }"
                placeholder="点击右侧选择图标"
                readonly
                v-if="!$slots.reference"
            >
                <template #append>
                    <base-icon :icon="state.iconValue || 'svg-click'" :size="20" />
                </template>
            </base-input>
            <slot name="reference"></slot>
        </template>
        <div class="base-icon-content">
            <base-input v-model="state.iconFilter" placeholder="搜索图标" @input="handleSearchDebounce" />
            <el-scrollbar height="230px" style="margin-top: 8px">
                <div class="base-icon-list">
                    <div class="icon-item flex-center" v-for="icon in state.iconList" :key="icon" @click="handleChooseIcon(icon)">
                        <base-icon :icon="icon" :size="16" />
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
import { allIconList } from "./icon";
import { useDebounceFn } from "@vueuse/core";
import { deepClone } from "@/utils";

interface IconState {
    iconValue: undefined | string;
    iconFilter: string;
    iconList: string[];
}

const props = defineProps({
    modelValue: {
        type: String
    },
    width: {
        type: String,
        default: "100%"
    },
    popoverWidth: {
        type: Number,
        default: 300
    }
});

const emit = defineEmits(["update:modelValue", "change"]);

const state = reactive<IconState>({
    iconValue: "",
    iconFilter: "",
    iconList: deepClone(allIconList)
});

const handleSearchDebounce = useDebounceFn(handleSearchChange, 650);

function handleChooseIcon(val: string) {
    state.iconValue = val;
}

function handleSearchChange() {
    state.iconList = state.iconFilter
        ? allIconList.filter((item) => item.toLowerCase().includes(state.iconFilter.toLowerCase()))
        : deepClone(allIconList);
}

watch(
    () => props.modelValue,
    () => {
        state.iconValue = props.modelValue;
    },
    {
        immediate: true
    }
);

watch(
    () => state.iconValue,
    (v) => {
        emit("update:modelValue", v);
        emit("change", v);
    }
);
</script>

<style lang="scss">
.base-icon-picker {
    .el-input-group__append {
        cursor: pointer;
    }
}
.base-icon-content {
    .base-icon-list {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-auto-rows: 32px;
        grid-gap: 7px 7px;
        .icon-item {
            color: var(--el-text-color-regular);
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid var(--el-border-color);
            border-radius: 4px;
            &:hover {
                color: var(--el-text-color-primary);
                background-color: var(--el-border-color-extra-light);
            }
        }
    }
}
</style>
