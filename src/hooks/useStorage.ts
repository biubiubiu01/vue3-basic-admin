import { local, session } from "@/utils";

export const useStorage = (type: "session" | "local" = "session") => {
    const storageMode = type === "session" ? session : local;

    const getItem = (key: string): any => {
        return storageMode.getItem(key);
    };

    const setItem = (key: string, value: string) => {
        storageMode.setItem(key, value);
    };

    const removeItem = (key: string) => {
        storageMode.removeItem(key);
    };

    const clear = () => {
        storageMode.clear();
    };

    return { getItem, setItem, removeItem, clear };
};
