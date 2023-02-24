import { PropType } from "vue";

export const defaultProps = {
    visible: {
        type: Boolean
    },
    title: {
        type: String,
        default: "提示"
    },
    width: {
        type: [String, Number],
        default: "50%"
    },
    top: {
        type: String,
        default: "15vh"
    },
    modal: {
        type: Boolean,
        default: true
    },
    appendToBody: {
        type: Boolean,
        default: false
    },
    lockScroll: {
        type: Boolean,
        default: true
    },
    closeOnClickModal: {
        type: Boolean,
        default: false
    },
    closeOnPressEscape: {
        type: Boolean,
        default: false
    },
    showClose: {
        type: Boolean,
        default: false
    },
    draggable: {
        type: Boolean,
        default: false
    },
    center: {
        type: Boolean,
        default: false
    },
    alignCenter: {
        type: Boolean,
        default: false
    },
    destroyOnClose: {
        type: Boolean,
        default: false
    },
    fullscreen: {
        type: Boolean,
        default: false
    }
};

export const extraProps = {
    showFooter: {
        type: Boolean,
        default: true
    },
    showHeader: {
        type: Boolean,
        default: true
    },
    btnPosition: {
        type: String as PropType<"left" | "right" | "center">,
        default: "center"
    },
    showCancelBtn: {
        type: Boolean,
        default: true
    },
    cancelText: {
        type: String,
        default: "取 消"
    },
    showSaveBtn: {
        type: Boolean,
        default: true
    },
    saveText: {
        type: String,
        default: "确 认"
    },
    showFullscreen: {
        type: Boolean,
        default: true
    },
    minHeight: {
        type: String,
        default: "auto"
    },
    height: {
        type: String,
        default: "auto"
    },
    modalType: {
        type: String as PropType<"" | "blur">,
        default: ""
    },
    closeConfirm: {
        type: Boolean,
        default: false
    },
    closeFun: {
        type: Function,
        default: null
    }
};

export default Object.assign({}, defaultProps, extraProps);
