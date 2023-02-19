import type { Router, RouteLocationNormalized } from "vue-router";

export const createScrollTop = (router: Router) => {
    const isHash = (href: string) => {
        return /^#/.test(href);
    };

    const body = document.body;

    router.afterEach(async (to) => {
        isHash((to as RouteLocationNormalized & { href: string })?.href) && body.scrollTo(0, 0);
        return true;
    });
};
