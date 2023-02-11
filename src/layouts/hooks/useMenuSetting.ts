import { MenuSetting, useAppStoreWithOut } from "@/stores/modules/app";
import { isUndefined } from "@/utils";

export const useMenuSetting = () => {
    const appStore = useAppStoreWithOut();

    const getCollapse = computed(() => appStore?.menuConfig?.collapse);

    const getMode = computed(() => appStore?.menuConfig?.mode);

    const getSystemTitle = computed(() => appStore?.menuConfig?.systemTitle);

    const getSideWidth = computed(() => appStore?.menuConfig?.sideWidth);

    const getSideCollapsed = computed(() => appStore?.menuConfig?.sideCollapsed);

    const setMenuSetting = (menuConfig: MenuSetting) => {
        appStore.setAppConfig({ menuConfig });
    };

    const toggleCollapse = (flag?: boolean) => {
        setMenuSetting({ collapse: isUndefined(flag) ? !unref(getCollapse) : flag });
    };

    return {
        toggleCollapse,
        setMenuSetting,

        getCollapse,
        getMode,
        getSystemTitle,
        getSideWidth,
        getSideCollapsed
    };
};
