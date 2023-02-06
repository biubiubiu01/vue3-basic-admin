<template>
    <el-dropdown :trigger="trigger" class="pointer" @command="event">
        <slot></slot>
        <template #dropdown>
            <el-dropdown-item
                v-for="(item, index) in actionList"
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
import { DropMenuType } from "@/enums/dropMenuEnum";

const props = defineProps({
    actionList: {
        type: Array as PropType<DropMenuType[]>,
        default: () => []
    },
    event: {
        type: Function as PropType<(command: string | number) => void>
    },
    trigger: {
        type: String as PropType<"hover" | "click" | "contextmenu">,
        default: "click"
    }
});
</script>

<style scoped></style>
