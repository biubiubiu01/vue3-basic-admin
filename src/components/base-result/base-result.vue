<template>
    <el-result :title="title" :sub-title="subTitle" :icon="isBaseIcon ? status : 'info'">
        <template #icon v-if="!isBaseIcon">
            <slot name="icon"></slot>
        </template>
        <template #extra>
            <slot name="extra"></slot>
            <base-button v-if="!$slots.extra" type="primary" @click="goRedirect"> {{ goHome ? "返回首页" : returnText }} </base-button>
        </template>
    </el-result>
</template>

<script lang="ts" setup>
const props = defineProps({
    status: {
        type: String,
        default: "success"
    },
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    returnText: {
        type: String,
        default: "返回上一页"
    },
    goHome: Boolean
});

const router = useRouter();

const isBaseIcon = computed(() => {
    return ["success", "error", "warning", "info"].includes(props.status);
});

const goRedirect = () => {
    if (props.goHome) {
        router.replace("/");
    } else {
        router.go(-1);
    }
};
</script>

<style scoped></style>
