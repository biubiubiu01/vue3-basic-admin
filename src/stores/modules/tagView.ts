import { defineStore } from "pinia";
import type { RouteLocationNormalizedLoaded } from "vue-router";
import { store } from "../index";

interface TagState {
    tagList: RouteLocationNormalizedLoaded[];
    cacheTagList: string[];
    fullscreen: boolean;
}

interface TagRouteType extends RouteLocationNormalizedLoaded {
    index: number;
}

export const useTagStore = defineStore({
    id: "tag-view",
    persist: true,
    state: (): TagState => ({
        tagList: [],
        cacheTagList: [],
        fullscreen: false
    }),
    getters: {},
    actions: {
        addTag(route: RouteLocationNormalizedLoaded) {
            const index = this.tagList.findIndex((item) => item.fullPath === route.fullPath);
            if (index === -1) {
                this.tagList.push({
                    ...route
                });
            }
            this.addCacheTag(route);
        },

        addCacheTag(route: RouteLocationNormalizedLoaded) {
            const name = route.name as string;
            if (this.cacheTagList.includes(name)) return;
            if (route.meta?.keepAlive !== false) {
                this.cacheTagList.push(name);
            }
        },

        deleteTag(current: TagRouteType) {
            if (current.index === -1) return;
            this.tagList.splice(current.index, 1);
            this.deleteCacheTag(current);
        },

        deleteCacheTag(current: TagRouteType) {
            const index = this.cacheTagList.indexOf(<string>current.name);
            if (index === -1) return;
            this.cacheTagList.splice(index, 1);
        },

        deleteOtherTag(current: TagRouteType) {
            this.tagList = this.tagList.filter((item) => item?.meta?.close === false || item.path === current.path);
            this.deleteOtherCacheTag(current);
        },

        deleteOtherCacheTag(current: TagRouteType) {
            const index = this.cacheTagList.indexOf(<string>current.name);
            if (index === -1) return;
            this.cacheTagList = this.cacheTagList.slice(index, index + 1);
        },

        clearTag() {
            this.tagList = this.tagList.filter((item) => item?.meta?.close === false);
            this.clearCacheTag();
        },

        clearCacheTag() {
            this.cacheTagList = [];
        },

        toggleFullscreen() {
            this.fullscreen = !this.fullscreen;
        }
    }
});

// ??????????????????
export const useTagStoreWithOut = () => {
    return useTagStore(store);
};
