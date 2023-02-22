<template>
    <div ref="vditorRef"></div>
</template>

<script lang="ts" setup>
import Vditor from "vditor";
import "vditor/dist/index.css";

const props = defineProps({
    height: { type: Number, default: 300 },
    modelValue: { type: String, default: "" }
});

const emit = defineEmits(["update:modelValue", "change"]);

const vditorRef = ref();
const vditorInstance = ref<any>(null);
const firstInit = ref(false);

onMounted(() => {
    initVaitor();
});

const initVaitor = () => {
    const vditorEl = unref(vditorRef) as HTMLElement;
    if (!vditorEl) return;
    const instance = new Vditor(vditorEl, {
        lang: "zh_CN",
        mode: "sv",
        fullscreen: {
            index: 520
        },
        preview: {
            actions: []
        },
        resize: {
            enable: true
        },
        input: (v) => {
            emit("update:modelValue", v);
            emit("change", v);
        },
        after: () => {
            nextTick(() => {
                if (props.modelValue) {
                    instance.setValue(props.modelValue);
                }
                vditorInstance.value = instance;
                firstInit.value = true;
            });
        },
        ...props,
        cache: {
            enable: false
        }
    });
};

const setContent = (value: any) => {
    if (!unref(vditorInstance)) return;
    unref(vditorInstance).setValue(value);
};

const getContent = () => {
    if (!unref(vditorInstance)) return;
    unref(vditorInstance).getValue();
};

const destroyVaitor = () => {
    if (!unref(vditorInstance)) return;
    unref(vditorInstance)?.destroy?.();
    vditorInstance.value = null;
    firstInit.value = false;
};

onActivated(() => {
    initVaitor();
});

onDeactivated(() => {
    destroyVaitor();
});

onUnmounted(() => {
    destroyVaitor();
});

defineExpose({
    setContent,
    getContent
});
</script>

<style lang="scss" scoped></style>
