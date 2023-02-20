<template>
    <div class="com-dialog-container">
        <base-box title="常规dialog(ref方式打开)">
            <base-button type="primary" @click="showDialog1">点击打开dialog</base-button>
        </base-box>
        <base-box title="常规dialog(v-model方式打开)">
            <base-button type="primary" @click="showDialog2">点击打开dialog</base-button>
        </base-box>
        <base-box title="关闭前询问">
            <base-button type="primary" @click="showDialog3">点击打开dialog</base-button>
        </base-box>
        <base-box title="模糊遮罩层">
            <base-button type="primary" @click="showDialog4">点击打开dialog</base-button>
        </base-box>
        <base-dialog ref="baseDialogRef1" draggable> 常规dialog(re方式) 可拖动哦 </base-dialog>
        <base-dialog v-model:visible="visible" min-height="300px"> 常规dialog(v-model) </base-dialog>
        <base-dialog ref="baseDialogRef2" close-confirm> 关闭前询问 </base-dialog>
        <base-dialog ref="baseDialogRef3" close-confirm modal-type="blur"> 模糊遮罩层 </base-dialog>
    </div>
</template>

<script lang="ts" setup>
const baseDialogRef1 = ref();
const baseDialogRef2 = ref();
const baseDialogRef3 = ref();

const visible = ref(false);

const showDialog1 = () => {
    unref(baseDialogRef1).showDialog();
};

const showDialog2 = () => {
    visible.value = true;
};

const showDialog3 = () => {
    unref(baseDialogRef2).showDialog();
};

const showDialog4 = () => {
    unref(baseDialogRef3).showDialog();
};
</script>

<style lang="scss" scoped></style>
