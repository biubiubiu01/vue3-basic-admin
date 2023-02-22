<template>
    <div class="tinymce-container">
        <textarea :id="id" class="tinymce-textarea"></textarea>
    </div>
</template>

<script lang="ts" setup>
import tinymce from "tinymce/tinymce";
import { isString } from "@/utils";
import { useEnv } from "@/hooks";
import { toolbar, plugins, styles } from "./config";
import "tinymce/themes/silver";
import "tinymce/themes/silver/theme";
import "tinymce/icons/default"; // 引入编辑器图标icon，不引入则不显示对应图标
import "tinymce/models/dom";
import "tinymce/icons/default/icons";
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/autosave";
import "tinymce/plugins/code";
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件
import "tinymce/plugins/fullscreen"; // 全屏
import "tinymce/plugins/autoresize"; // 高度自适应
import "tinymce/plugins/directionality";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/media";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/pagebreak";
import "tinymce/plugins/preview";
import "tinymce/plugins/save";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/template";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/visualchars";

const props = defineProps({
    height: {
        type: [Number, String],
        default: 300
    },
    width: {
        type: [Number, String],
        default: "100%"
    },
    resize: {
        type: Boolean,
        default: true
    },
    modelValue: {
        type: String,
        default: ""
    }
});

const emit = defineEmits(["update:modelValue"]);

const { VITE_PUBLIC_PATH } = useEnv();

const tinymceInstance = ref<any>(null);

const id = ref("editor-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""));
const fullscreen = ref(false);
const firstInit = ref(false);
const errorStatus = ref(false);

onMounted(() => {
    initTinymce();
});

const getWidth = computed(() => {
    const { width } = props;
    return isString(width) ? width : `${width}px`;
});

const getOptions = computed(() => {
    const { height } = props;
    return {
        selector: `#${id.value}`, // 容器
        language_url: VITE_PUBLIC_PATH + "tinymce/langs/zh-Hans.js", // 语言包的路径
        language: "zh-Hans", // 语言
        skin_url: VITE_PUBLIC_PATH + "tinymce/skins/ui/oxide", // skin路径
        min_height: 300,
        height, // 编辑器高度
        widtgh: unref(getWidth),
        image_dimensions: false, // 去除宽高属性
        plugins,
        toolbar,
        paste_webkit_styles: "all",
        paste_merge_formats: true,
        promotion: false,
        nonbreaking_force_tab: false,
        paste_auto_cleanup_on_paste: false,
        file_picker_types: "file image",
        content_style: styles,
        content_css: VITE_PUBLIC_PATH + "tinymce/skins/content/default/content.css",
        init_instance_callback: (editor: any) => {
            tinymceInstance.value = editor;
            // 初始化，如果存在value  直接添加上去
            if (props.modelValue) {
                editor.setContent(props.modelValue);
            }
            firstInit.value = true;
            editor.on("input change undo redo", () => {
                errorStatus.value = true;
                emit("update:modelValue", editor.getContent());
            });
        },
        setup(editor: any) {
            editor.on("FullscreenStateChanged", (e: any) => {
                fullscreen.value = e.state;
            });
        }
    };
});

const initTinymce = () => {
    tinymce.init(unref(getOptions));
};

const setContent = (value: any) => {
    if (!unref(tinymceInstance)) return;
    unref(tinymceInstance).setContent(value);
};

const getContent = () => {
    if (!unref(tinymceInstance)) return;
    unref(tinymceInstance).getContent();
};

const destroyTinymce = () => {
    if (!unref(tinymceInstance)) return;
    if (unref(fullscreen)) {
        tinymceInstance.execCommand("mceFullScreen");
    }
    tinymceInstance?.destroy?.();
};

onUnmounted(() => {
    destroyTinymce();
});

watch(
    () => props.modelValue,
    () => {
        if (!unref(errorStatus) && unref(firstInit)) {
            nextTick(() => {
                setContent(props.modelValue);
            });
        }
    }
);

defineExpose({
    setContent,
    getContent
});
</script>

<style lang="scss" scoped>
.tinymce-textarea {
    visibility: hidden;
    z-index: -1;
}
</style>
