import { MenuSetting, useAppStoreWithOut } from "@/stores/modules/app";

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

    const toggleCollapse = () => {
        setMenuSetting({ collapse: !unref(getCollapse) });
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
