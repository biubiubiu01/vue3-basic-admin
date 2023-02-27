import type { Directive, App, DirectiveBinding } from "vue";
import { useUserStoreWithOut } from "@/stores/modules/user";

function isAuth(el: Element, binding: any) {
    const userStore = useUserStoreWithOut();
    const value = binding.value;
    if (!value) return;
    if (!userStore.roleIds.includes(value)) {
        el.parentNode?.removeChild(el);
    }
}

const permissionDirective: Directive = {
    mounted(el: Element, binding: DirectiveBinding<any>) {
        isAuth(el, binding);
    },
    updated(el: Element, binding: DirectiveBinding<any>) {
        isAuth(el, binding);
    }
};

export const setupPermissionDirective = (app: App) => {
    app.directive("permission", permissionDirective);
};

export default permissionDirective;
