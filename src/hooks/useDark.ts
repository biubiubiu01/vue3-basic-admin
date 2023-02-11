import { StorageEnum } from "@/enums/storageEnum";
import { useStorage } from "./useStorage";
import { addClass, removeClass } from "@/utils";

const { getItem, setItem } = useStorage("local");

const isDark = ref<boolean>(getItem(StorageEnum.THEME_MODE) === "dark");

export const useDark = () => {
    const htmlEle = document.documentElement;

    const toggle = (dark: boolean = !isDark.value) => {
        if (dark) {
            addClass(htmlEle, "dark");
        } else {
            removeClass(htmlEle, "dark");
        }
        isDark.value = dark;
        setItem(StorageEnum.THEME_MODE, dark ? "dark" : "light");
    };

    toggle(isDark.value);

    return { isDark, toggle };
};
