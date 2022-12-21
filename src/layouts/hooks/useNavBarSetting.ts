import { HeaderConfig, useAppStoreWithOut } from "@/stores/modules/app";
import { useColorMode } from "@vueuse/core";
import { SizeEnum } from "@/enums/sizeEnum";

export const useNavBarSetting = () => {
    const appStore = useAppStoreWithOut();
    const getPageSize = computed(() => appStore?.headerConfig?.pageSize);

    const sizeMode = useColorMode({
        attribute: "page-size",
        modes: {
            default: SizeEnum.DEFAULT,
            large: SizeEnum.LARGE,
            small: SizeEnum.SMALL
        },
        initialValue: unref(getPageSize)
    });

    const setHeaderSetting = (headerConfig: HeaderConfig) => {
        appStore.setAppConfig({ headerConfig });
    };

    const togglePageSize = (pageSize: `${SizeEnum}`) => {
        sizeMode.value = pageSize;
        setHeaderSetting({ pageSize });
    };

    return {
        getPageSize,

        togglePageSize,
        setHeaderSetting
    };
};
