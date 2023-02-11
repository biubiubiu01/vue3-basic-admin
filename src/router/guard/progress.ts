import { Router } from "vue-router";
import NProgress from "nprogress";

export const createProgress = (router: Router) => {
    router.beforeEach(() => {
        NProgress.start();
        return true;
    });

    router.afterEach(() => {
        return true;
    });
};
