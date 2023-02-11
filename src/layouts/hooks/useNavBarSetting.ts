import { HeaderConfig, useAppStoreWithOut } from "@/stores/modules/app";
import { useUserStoreWithOut } from "@/stores/modules/user";
import { useColorMode } from "@vueuse/core";
import { SizeEnum } from "@/enums/sizeEnum";

export const useNavBarSetting = () => {
    const appStore = useAppStoreWithOut();
    const userStore = useUserStoreWithOut();

    const router = useRouter();

    const getPageSize = computed(() => appStore?.headerConfig?.pageSize as `${SizeEnum}`);

    const getUserInfo = computed(() => userStore.userInfo);

    const sizeMode = useColorMode({
        attribute: "page-size",
        modes: {
            default: SizeEnum.DEFAULT,
            large: SizeEnum.LARGE,
            small: SizeEnum.SMALL
        }
    });
    sizeMode.value = unref(getPageSize);

    const setHeaderSetting = (headerConfig: HeaderConfig) => {
        appStore.setAppConfig({ headerConfig });
    };

    const togglePageSize = (pageSize: `${SizeEnum}`) => {
        sizeMode.value = pageSize;
        setHeaderSetting({ pageSize });
    };

    const logout = () => {
        userStore.logout(router);
    };

    return {
        getPageSize,
        getUserInfo,

        togglePageSize,
        setHeaderSetting,
        logout
    };
};
