import { defineStore } from "pinia";
import { store } from "../index";
import type { RouteLocationNormalized } from "vue-router";

interface tagState {
    tagList: RouteLocationNormalized[];
    fullscreen: boolean;
}

export const useTagStore = defineStore({
    id: "tag-view",
    state: (): tagState => ({
        tagList: [],
        fullscreen: false
    }),
    getters: {},
    actions: {
        addTag() {},

        closeTag(index: number) {
            this.tagList.splice(index, 1);
        },

        toggleFullscreen(flag: boolean) {
            this.fullscreen = flag;
        },

        closeOtherTag(index: number) {
            this.tagList = this.tagList.filter((item, i) => item.meta.close === false || i === index);
        },

        closeAllTag() {
            this.tagList = this.tagList.filter((item) => item.meta.close === false);
        }
    }
});

// 便于外部使用
export const useTagStoreWithOut = () => {
    return useTagStore(store);
};
