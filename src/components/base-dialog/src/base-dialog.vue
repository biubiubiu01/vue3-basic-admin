<template>
    <el-dialog v-model="dialogVisible" v-bind="getPropsValue" class="base-dialog" :before-close="handleBeforeClose">
        <template #header="{ close }">
            <div class="base-dialog-header" v-if="showHeader">
                <span v-if="!$slots.title"> {{ title }}</span>
                <slot name="title"></slot>
                <el-space :size="14" class="base-header-icon">
                    <base-icon
                        v-if="showFullscreen"
                        :svg-name="fullscreen ? 'fullOutScreen' : 'fullScreen'"
                        @click="toggleFullScreen"
                        class="pointer"
                        hover
                    />
                    <base-icon svg-name="close" class="pointer" @click="close" :size="19" hover />
                </el-space>
            </div>
        </template>

        <el-scrollbar class="el-scrollbar basic-dialog-body" :style="getBodyStyle" ref="bodyScrollRef">
            <slot></slot>
        </el-scrollbar>
        <template #footer v-if="!$slots.footer && showFooter">
            <div class="base-dialog-footer" :style="{ 'text-align': btnPosition }">
                <base-button @click="handleClose" v-if="showCancelBtn">{{ cancelText }}</base-button>
                <base-button type="primary" v-if="showSaveBtn" @click="handleSave" :loading="saveLoading">{{ saveText }}</base-button>
            </div>
        </template>
        <slot name="footer"></slot>
    </el-dialog>
</template>

<script lang="ts" setup>
import dialogProps, { extraProps } from "./props";
import { omit, isFunction } from "@/utils";

const props = defineProps(dialogProps);

const emit = defineEmits(["close", "save", "update:visible"]);

const attrs = useAttrs();

const { proxy } = getCurrentInstance() as any;

const dialogVisible = ref(false);

const saveLoading = ref(false);

const fullscreen = ref(props.fullscreen);

const bodyScrollRef = ref();

const getPropsValue = computed(() => {
    const newProps = { ...omit(props, Object.keys(extraProps)) } as any;
    newProps.modalClass = props.modalType || "";
    newProps.showClose = false;
    newProps.fullscreen = unref(fullscreen);
    return { ...newProps, ...attrs };
});

const getBodyStyle = computed(() => {
    const { minHeight, height } = props;
    return {
        minHeight,
        height: unref(getPropsValue).fullscreen ? "100%" : height
    };
});

const showDialog = () => {
    saveLoading.value = false;
    dialogVisible.value = true;
    nextTick(() => {
        handleScrollTop();
    });
};

const hideDialog = () => {
    dialogVisible.value = false;
    emit("update:visible", false);
    emit("close");
};

const toggleFullScreen = (e: Event) => {
    e?.preventDefault();
    e?.stopPropagation();
    fullscreen.value = !fullscreen.value;
};

const handleScrollTop = () => {
    unref(bodyScrollRef).wrap$.scrollTop = 0;
};

const handleBeforeClose = async () => {
    try {
        if (props.closeConfirm) {
            await proxy.$messageBox("你确定要关闭弹框吗？");
        }
        hideDialog();
    } catch (err) {}
};

const handleClose = async () => {
    if (isFunction(props.closeFun)) {
        props.closeFun(hideDialog);
    } else {
        hideDialog();
    }
};

const handleSave = () => {
    emit("save", (bool: boolean) => {
        saveLoading.value = bool;
    });
};

watchEffect(() => {
    dialogVisible.value = props.visible;
});

defineExpose({
    showDialog,
    hideDialog
});
</script>

<style lang="scss">
@use "./base-dialog.scss";
</style>
