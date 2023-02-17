<template>
    <base-box :loading="loading" class="todo-list-wrapper" hover title="待办事项">
        <div class="flex-wrap">
            <div class="todo-list-item" v-for="item in getTodoList" :key="item.icon">
                <el-badge :value="item.value" :max="99">
                    <base-icon :icon="item.icon" :size="48" />
                </el-badge>
                <div class="todo-list-item-title mt15">{{ item.title }}</div>
            </div>
        </div>
    </base-box>
</template>

<script lang="ts" setup>
import { todoList } from "../column";

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
});

const getTodoList = computed(() => {
    return todoList.filter((item) => item.value > 0);
});
</script>

<style lang="scss" scoped>
.todo-list-wrapper {
    :deep(.base-box-content) {
        padding-bottom: 0;
    }
    .todo-list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--el-fill-color);
        margin-right: 35px;
        margin-bottom: 20px;
        padding: 17px 65px;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
            color: var(--el-text-color-primary);
            background-color: var(--el-border-color-extra-light);
        }
        :deep(.el-badge__content) {
            top: 1px;
            right: 2px;
        }

        .todo-list-item-title {
            font-size: var(--el-font-size-base);
            color: var(--el-text-color-regular);
        }
    }
}
</style>
