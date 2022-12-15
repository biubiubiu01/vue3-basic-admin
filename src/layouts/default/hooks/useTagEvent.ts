import { useTagStoreWithOut } from "@/stores/modules/tagView";
import { DropMenuType, DropMenuEnum } from "@/enums/DropMenuEnum";

export const useTagEvent = () => {
    const tagStore = useTagStoreWithOut();

    const route = useRoute();

    const getIndex = (path?: string) => {
        const currentPath = path || route.path;
        return tagStore.tagList.findIndex((item) => item.path === currentPath);
    };

    const closeLeftDisabled = computed(() => {
        const index = getIndex();
        if (index === -1) {
            return true;
        }
        return index === 0 || tagStore.tagList[index - 1]?.meta?.close === false;
    });

    const closeRightDisabled = computed(() => {
        const index = getIndex();
        if (index === -1) {
            return true;
        }
        return index === tagStore.tagList.length - 1 || tagStore.tagList[index + 1]?.meta?.close === false;
    });

    const closeOtherDisabled = computed(() => {
        const index = getIndex();
        if (index === -1) {
            return true;
        }
        return tagStore.tagList.length === 1 || tagStore.tagList.filter((item, i) => item?.meta?.close !== false && i !== index).length === 0;
    });

    const closeAllDisabled = computed(() => {
        return tagStore.tagList.length === 1 || tagStore.tagList.filter((item) => item?.meta?.close !== false).length === 0;
    });

    const getActionList = computed((): DropMenuType[] => {
        return [
            {
                icon: "refresh",
                text: "刷新页面",
                command: DropMenuEnum.REFRESH_PAGE
            },
            {
                icon: "close",
                text: "关闭当前标签",
                disabled: route.meta.close === false || tagStore.tagList.length === 1,
                command: DropMenuEnum.CLOSE_CURRENT
            },
            {
                icon: "back",
                text: "关闭左侧标签",
                disabled: unref(closeLeftDisabled),
                command: DropMenuEnum.CLOSE_LEFT
            },
            {
                icon: "right",
                text: "关闭右侧标签",
                disabled: unref(closeRightDisabled),
                command: DropMenuEnum.CLOSE_RIGHT
            },
            {
                icon: "svg-other",
                text: "关闭其他标签",
                disabled: unref(closeOtherDisabled),
                command: DropMenuEnum.CLOSE_OTHER
            },
            {
                icon: "svg-clear",
                text: "关闭全部标签",
                disabled: unref(closeAllDisabled),
                command: DropMenuEnum.CLOSE_ALL
            }
        ];
    });

    const handleMenuEvent = (event: string | number) => {
        switch (event) {
            case DropMenuEnum.REFRESH_PAGE:
                refreshPage();
                break;
            case DropMenuEnum.CLOSE_CURRENT:
                closeTag();
                break;

            case DropMenuEnum.CLOSE_LEFT:
                closeLeftTag();
                break;

            case DropMenuEnum.CLOSE_RIGHT:
                closeRightTag();
                break;

            case DropMenuEnum.CLOSE_OTHER:
                closeOther();
                break;

            case DropMenuEnum.CLOSE_ALL:
                closeAll();
                break;
        }
    };

    const refreshPage = () => {};

    const closeTag = (path?: string) => {
        tagStore.closeTag(getIndex(path));
    };

    const closeLeftTag = (path?: string) => {
        tagStore.closeTag(getIndex(path) - 1);
    };

    const closeRightTag = (path?: string) => {
        tagStore.closeTag(getIndex(path) + 1);
    };

    const closeOther = (path?: string) => {
        tagStore.closeOtherTag(getIndex(path));
    };

    const closeAll = () => {
        tagStore.closeAllTag();
    };

    return {
        getActionList,
        handleMenuEvent,

        refreshPage,
        closeTag,
        closeLeftTag,
        closeRightTag,
        closeOther,
        closeAll
    };
};
