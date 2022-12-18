import { useTagStoreWithOut } from "@/stores/modules/tagView";
import { useTagEvent } from "./useTagEvent";
import type { RouteLocationNormalizedLoaded } from "vue-router";

export const useTagViewSetting = () => {
    const tagStore = useTagStoreWithOut();

    const { getActionList, handleMenuEvent, closeTag } = useTagEvent();

    const getTagList = computed(() => tagStore.tagList);

    const getCacheTagList = computed(() => tagStore.cacheTagList);

    const getTagFullscreen = computed(() => tagStore.fullscreen);

    const addTag = (route: RouteLocationNormalizedLoaded) => {
        tagStore.addTag(route);
    };

    const toggleFullscreen = () => {
        tagStore.toggleFullscreen();
    };

    return {
        getTagList,
        getActionList,
        getCacheTagList,
        getTagFullscreen,

        closeTag,
        addTag,
        toggleFullscreen,
        handleMenuEvent
    };
};
