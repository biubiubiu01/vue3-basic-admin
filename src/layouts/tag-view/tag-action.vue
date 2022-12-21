<template>
    <el-dropdown trigger="click" class="pointer" @command="event">
        <base-icon el-name="arrowDown" :size="18" />
        <template #dropdown>
            <el-dropdown-item
                v-for="(item, index) in actionList"
                :key="index"
                :divided="item.divided"
                :disabled="item.disabled"
                :command="item.command"
            >
                <base-icon :icon="item.icon" />
                {{ item.text }}
            </el-dropdown-item>
        </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { DropMenuType } from "@/enums/dropMenuEnum";

const props = defineProps({
    actionList: {
        type: Array as PropType<DropMenuType[]>,
        default: () => []
    },
    event: {
        type: Function as PropType<(command: string | number) => void>
    }
});
</script>

<style scoped></style>
