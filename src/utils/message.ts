import { ElMessageBox, ElMessage } from "element-plus";

interface messageBoxConfig {
    title: string;
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

type messageType = "success" | "warning" | "info" | "error";

const defaultConfig: messageBoxConfig = {
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

export const messageBox = async (message: string, config: messageBoxConfig) => {
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

export const message = (text: string, close: () => void) => {
    const messageArr: messageType[] = ["success", "warning", "info", "error"];
    return messageArr.map((type: messageType) => {
        return ElMessage({
            message: text,
            type,
            center: true,
            duration: 2000,
            onClose: close,
            grouping: true
        });
    });
};
