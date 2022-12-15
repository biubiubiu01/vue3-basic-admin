import { useTagStoreWithOut } from "@/stores/modules/tagView";
import { useTagEvent } from "./useTagEvent";

export const useTagViewSetting = () => {
    const tagStore = useTagStoreWithOut();

    const { getActionList, handleMenuEvent, closeTag } = useTagEvent();

    const getTagList = computed(() => tagStore.tagList);

    const getTagFullscreen = computed(() => tagStore.fullscreen);

    const addTag = (route) => {
        tagStore.addTag(route);
    };

    const toggleFullscreen = () => {
        tagStore.toggleFullscreen(!unref(getTagFullscreen));
    };

    return {
        getTagList,
        getActionList,
        getTagFullscreen,

        closeTag,
        addTag,
        toggleFullscreen,
        handleMenuEvent
    };
};
