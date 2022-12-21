import { messageSuccess, messageWarning, messageInfo, messageError, MessageConfig } from "@/utils";

export function useMessage(config?: MessageConfig) {
    const success = (text: string, close?: () => void) => {
        messageSuccess(text, close!, config!);
    };
    const warning = (text: string, close?: () => void) => {
        messageWarning(text, close!, config!);
    };
    const info = (text: string, close?: () => void) => {
        messageInfo(text, close!, config!);
    };
    const error = (text: string, close?: () => void) => {
        messageError(text, close!, config!);
    };
    return { success, warning, info, error };
}
