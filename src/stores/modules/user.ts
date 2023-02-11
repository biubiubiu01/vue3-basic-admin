import { defineStore } from "pinia";
import { store, storeReset } from "../index";
import { login, getUserInfo } from "@/api/user";
import { addLoginInfo } from "@/api/log";
import type { Router } from "vue-router";

interface UserState {
    token: string;
    roleIds: string[];
    userInfo: any;
}

interface LoginParams {
    username: string;
    password: string;
}

export const useUserStore = defineStore({
    id: "user",
    persist: true,
    state: (): UserState => ({
        token: "",
        roleIds: [],
        userInfo: {}
    }),
    getters: {
        getToken(): string {
            return this.token;
        },
        getRoleIds(): string[] {
            return this.roleIds;
        }
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        },
        setRoleId(ids: string[]) {
            this.roleIds = ids;
        },
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo;
        },
        async login(params: LoginParams) {
            const res = await login(params);
            this.setToken(res.data.token);
            await this.getUserInfo();
            this.addLoginLog();
        },

        logout(router: Router) {
            storeReset();
            const { currentRoute } = router;
            router.replace({
                path: "/login",
                query: {
                    redirect: currentRoute.value.path
                }
            });
        },

        async getUserInfo() {
            if (!this.token) return;
            const res = await getUserInfo();
            this.setRoleId(res.data.roleIds);
            this.setUserInfo(res.data);
        },

        async addLoginLog() {
            await addLoginInfo({
                username: this.userInfo.username
            });
        }
    }
});

// 便于外部使用
export const useUserStoreWithOut = () => {
    return useUserStore(store);
};
