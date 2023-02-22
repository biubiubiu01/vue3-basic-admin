import { ElMessageBox, ElMessage } from "element-plus";

interface MessageBoxConfig {
    title?: string;
    icon?: string;
    type?: "success" | "info" | "warning" | "error";
    customClass?: string;
    showClose?: boolean;
    showCancelButton?: boolean;
    showConfirmButton?: boolean;
    cancelButtonText?: string;
    confirmButtonText?: string;
    closeOnClickModal?: boolean;
    closeOnPressEscape?: boolean;
    center?: boolean;
    draggable?: boolean;
    confirmBack?: () => void;
    cancelBack?: () => void;
}

type MessageType = "success" | "warning" | "info" | "error";

export type MessageConfig = {
    icon?: string;
    dangerouslyUseHTMLString?: boolean;
    customClass?: string;
    duration?: number;
    showClose?: boolean;
    center?: boolean;
    offset?: number;
    grouping?: boolean;
};

const defaultMessageConfig: MessageConfig = {
    center: true,
    duration: 2500,
    grouping: true
};

const defaultConfig: MessageBoxConfig = {
    title: "提示",
    type: "warning",
    showClose: true,
    showCancelButton: true,
    showConfirmButton: true,
    cancelButtonText: "取消",
    confirmButtonText: "确定",
    closeOnClickModal: false,
    closeOnPressEscape: false,
    center: false,
    draggable: false
};

export const messageBox = async (message: string, config?: MessageBoxConfig) => {
    const options = Object.assign({}, defaultConfig, config);
    const { title, confirmBack, cancelBack, ...rest } = options;
    return new Promise((resolve, reject) => {
        ElMessageBox.confirm(message, title, {
            ...rest
        })
            .then(() => {
                confirmBack && confirmBack();
                resolve(true);
            })
            .catch(() => {
                cancelBack && cancelBack();
                reject(new Error("action:cancel"));
            });
    });
};

const message = (type: MessageType, text: string, close?: () => void, config?: MessageConfig) => {
    const options = Object.assign({}, defaultMessageConfig, config);
    return ElMessage({
        message: text,
        type,
        onClose: close,
        ...options
    });
};

export const messageSuccess = (text: string, close?: () => void, config?: MessageConfig) => message("success", text, close, config);
export const messageWarning = (text: string, close?: () => void, config?: MessageConfig) => message("warning", text, close, config);
export const messageInfo = (text: string, close?: () => void, config?: MessageConfig) => message("info", text, close, config);
export const messageError = (text: string, close?: () => void, config?: MessageConfig) => message("error", text, close, config);
