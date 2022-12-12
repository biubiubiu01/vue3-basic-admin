import { HeaderConfig, useAppStoreWithOut } from "@/stores/modules/app";
import { useColorMode } from "@vueuse/core";
import type { SizeEnum } from "@/enums/SizeEnum";

export const useHeaderSetting = () => {
    const appStore = useAppStoreWithOut();
    const getTextType = computed(() => appStore?.headerConfig?.textType);

    const textMode = useColorMode({
        attribute: "size",
        modes: {
            default: "default",
            plus: "plus",
            mini: "mini"
        },
        initialValue: unref(getTextType)
    });

    const setHeaderSetting = (headerConfig: HeaderConfig) => {
        appStore.setAppConfig({ headerConfig });
    };

    const toggleTextType = (textType: `${SizeEnum}`) => {
        textMode.value = textType;
        setHeaderSetting({ textType });
    };

    return {
        getTextType,

        toggleTextType,
        setHeaderSetting
    };
};
