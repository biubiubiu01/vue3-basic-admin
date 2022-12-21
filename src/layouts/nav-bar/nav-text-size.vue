<template>
    <el-dropdown trigger="click" class="pointer box-hover action-item">
        <div class="flex-row-center">
            <base-icon svg-name="textSize" :size="18" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    v-for="(item, index) in textSize"
                    :key="index"
                    :class="{ active: getPageSize === item.type }"
                    @click="togglePageSize(item.type)"
                >
                    <base-icon :svg-name="item.icon" :size="item.iconSize" />{{ item.text }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { textSize } from "@/enums/sizeEnum";
import { useNavBarSetting } from "../hooks/useNavBarSetting";

const { getPageSize, togglePageSize } = useNavBarSetting();
</script>

<style lang="scss" scoped>
:deep(.el-dropdown-menu__item.active) {
    background-color: var(--el-dropdown-menuItem-hover-fill);
    color: var(--el-dropdown-menuItem-hover-color);
}
</style>
