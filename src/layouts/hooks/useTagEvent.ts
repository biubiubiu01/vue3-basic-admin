import { useTagStoreWithOut } from "@/stores/modules/tagView";
import { DropMenuType, DropMenuEnum } from "@/enums/dropMenuEnum";
import type { RouteLocationNormalizedLoaded } from "vue-router";

export const useTagEvent = (tagItem?: RouteLocationNormalizedLoaded, isTab: boolean = false) => {
    const tagStore = useTagStoreWithOut();

    const route = useRoute();

    const router = useRouter();

    const getTagList = computed(() => tagStore.tagList);

    /**
     * 获取当前选择的tag 信息
     * @param {RouteLocationNormalizedLoaded} view
     */
    const getCurrentRoute = (view?: RouteLocationNormalizedLoaded) => {
        const current = view || (isTab ? <RouteLocationNormalizedLoaded>tagItem : route);
        const index = unref(getTagList).findIndex((item) => item.path === current.path);
        return { ...current, index };
    };

    /**
     * 刷新页面disabled
     */
    const refreshPageDisabled = computed((): boolean => {
        return isTab ? route.fullPath !== getCurrentRoute().fullPath : false;
    });

    /**
     * 当前标签关闭disabled
     */
    const closeCurrentDisabled = computed((): boolean => {
        return !!route?.meta?.affix || unref(getTagList).length <= 1;
    });

    /**
     * 当前左侧标签关闭disabled
     */
    const closeLeftDisabled = computed(() => {
        const { index } = getCurrentRoute();
        return [0, -1].includes(index) || !!unref(getTagList)[index - 1]?.meta?.affix;
    });

    /**
     * 当前右侧标签关闭disabled
     */
    const closeRightDisabled = computed(() => {
        const { index } = getCurrentRoute();
        return [unref(getTagList).length - 1, -1].includes(index) || !!tagStore.tagList[index + 1]?.meta?.affix;
    });

    /**
     * 其他标签关闭disabled
     */
    const closeOtherDisabled = computed(() => {
        const { index } = getCurrentRoute();
        return (
            index === -1 || unref(getTagList).length === 1 || unref(getTagList).filter((item, i) => !item?.meta?.affix && i !== index).length === 0
        );
    });

    /**
     * 全部标签关闭disabled
     */
    const closeAllDisabled = computed(() => {
        return unref(getTagList).length === 1 || unref(getTagList).filter((item) => !item?.meta?.affix).length === 0;
    });

    /**
     * 下拉action
     */
    const getActionList = computed((): DropMenuType[] => {
        return [
            {
                icon: "refresh",
                text: "刷新页面",
                disabled: unref(refreshPageDisabled),
                command: DropMenuEnum.REFRESH_PAGE
            },
            {
                icon: "close",
                text: "关闭当前标签",
                disabled: unref(closeCurrentDisabled),
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

    /**
     * 下拉action 对应方法
     */
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
                closeOtherTag();
                break;

            case DropMenuEnum.CLOSE_ALL:
                closeAllTag();
                break;
        }
    };

    /**
     * 刷新页面
     */
    const refreshPage = async () => {
        await tagStore.refreshPage(router);
    };

    /**
     * 关闭当前标签
     * @param {RouteLocationNormalizedLoaded} view
     */
    const closeTag = (view?: RouteLocationNormalizedLoaded) => {
        const current = getCurrentRoute(view);
        tagStore.deleteTag(current);
        if (route.path === current.path) {
            toLastTag();
        }
    };

    /**
     * 如果关闭的是当前标签，则跳转到最后一个tag
     */
    const toLastTag = () => {
        const latestView = unref(getTagList).slice(-1)[0];

        if (latestView) {
            router.push(latestView.fullPath);
        } else {
            router.push("/");
        }
    };

    /**
     * 关闭左侧tag
     */
    const closeLeftTag = () => {
        const current = getCurrentRoute();
        tagStore.deleteTag({ ...current, index: current.index - 1 });
    };

    /**
     * 关闭右侧tag
     */
    const closeRightTag = () => {
        const current = getCurrentRoute();
        tagStore.deleteTag({ ...current, index: current.index + 1 });
    };

    /**
     * 关闭其他tag
     */
    const closeOtherTag = () => {
        tagStore.deleteOtherTag(getCurrentRoute());
        toLastTag();
    };

    /**
     * 关闭全部tag
     */
    const closeAllTag = () => {
        tagStore.clearTag();
        if (route.meta.affix) return;
        toLastTag();
    };

    return {
        getActionList,
        handleMenuEvent,

        refreshPage,
        closeTag,
        closeLeftTag,
        closeRightTag,
        closeOtherTag,
        closeAllTag
    };
};
