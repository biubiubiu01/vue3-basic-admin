import { defineStore } from "pinia";
import type { Mode } from "@/enums/LayoutEnum";
import { store } from "../index";
import { deepMerge } from "@/utils";

export interface MenuSetting {
    mode?: Mode;
    collapse?: boolean;
    sideWidth?: number;
    sideCollapsed?: number;
    systemTitle?: string;
}

interface AppState {
    menuConfig: MenuSetting;
}

export const useAppStore = defineStore({
    id: "app",
    state: (): AppState => ({
        menuConfig: {
            mode: "vertical",
            collapse: false,
            sideWidth: 240,
            sideCollapsed: 48,
            systemTitle: "Vue3 Basic admin"
        }
    }),
    getters: {},
    actions: {
        setAppConfig(config: AppState): void {
            this.$state = deepMerge(this.$state, config);
        }
    }
});

// 便于外部使用
export const useAppStoreWithOut = () => {
    return useAppStore(store);
};
