import { Router } from "vue-router";
import { usePageSetting } from "@/layouts/hooks/usePageSetting";

export const createPageTitle = (router: Router) => {
    const { setPageTitle } = usePageSetting();

    router.beforeEach((to) => {
        setPageTitle(to.meta.title as string);
        return true;
    });
};
