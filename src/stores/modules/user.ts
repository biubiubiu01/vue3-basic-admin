import { defineStore } from "pinia";
import { store } from "../index";

interface UserState {
    token?: string;
}

export const useUser = defineStore({
    id: "user",
    persist: true,
    state: (): UserState => ({
        token: undefined
    }),
    getters: {},
    actions: {
        setToken(token: string | undefined) {
            this.token = token;
        }
    }
});

// 便于外部使用
export const useUserStoreWithOut = () => {
    return useUser(store);
};
