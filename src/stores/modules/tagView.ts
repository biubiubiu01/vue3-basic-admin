import { defineStore } from "pinia";
import type { RouteLocationNormalizedLoaded, Router } from "vue-router";
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
        refreshPage(router: Router) {
            const { currentRoute } = router;
            this.deleteCacheTag(currentRoute.value);
            return new Promise((resolve) => {
                router
                    .push({
                        name: "RedirectTo",
                        query: { path: currentRoute.value.path, ...currentRoute.value.query }
                    })
                    .then(() => {
                        resolve(true);
                    });
            });
        },

        addTag(route: RouteLocationNormalizedLoaded) {
            if (route.name === "RedirectTo") return;
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

        deleteCacheTag(current: RouteLocationNormalizedLoaded) {
            const index = this.cacheTagList.indexOf(<string>current.name);
            if (index === -1) return;
            this.cacheTagList.splice(index, 1);
        },

        deleteOtherTag(current: TagRouteType) {
            this.tagList = this.tagList.filter((item) => !!item?.meta?.affix || item.path === current.path);
            this.deleteOtherCacheTag(current);
        },

        deleteOtherCacheTag(current: RouteLocationNormalizedLoaded) {
            const index = this.cacheTagList.indexOf(<string>current.name);
            if (index === -1) return;
            this.cacheTagList = this.cacheTagList.slice(index, index + 1);
        },

        clearTag() {
            this.tagList = this.tagList.filter((item) => !!item?.meta?.affix);
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

// 便于外部使用
export const useTagStoreWithOut = () => {
    return useTagStore(store);
};
