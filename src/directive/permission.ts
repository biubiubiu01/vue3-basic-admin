import type { Directive, App } from "vue";

const permissionDirective: Directive = {
    mounted() {},
    updated() {},
    unmounted() {}
};

export const setupPermissionDirective = (app: App) => {
    app.directive("permission", permissionDirective);
};

export default permissionDirective;
