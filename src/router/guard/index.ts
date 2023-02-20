import { Router } from "vue-router";
import { createPermission } from "./permission";
import { createProgress } from "./progress";
import { createPageTitle } from "./pageTitle";

export function setupRouterGuard(router: Router) {
    createProgress(router);
    createPermission(router);
    createPageTitle(router);
}
