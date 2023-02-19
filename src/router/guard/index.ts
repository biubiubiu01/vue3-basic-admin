import { Router } from "vue-router";
import { createPermission } from "./permission";
import { createProgress } from "./progress";
import { createPageTitle } from "./pageTitle";
import { createScrollTop } from "./scrollTop";

export function setupRouterGuard(router: Router) {
    createProgress(router);
    createPermission(router);
    createScrollTop(router);
    createPageTitle(router);
}
