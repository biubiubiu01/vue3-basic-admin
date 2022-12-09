import type { RouteRecordRaw, RouteMeta } from "vue-router";

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import("*.vue")>) | (() => Promise<T>);

export interface MetaType extends RouteMeta {
    title: string;
    keepAlive?: boolean;
    hidden?: boolean;
    role?: string;
    noCache?: boolean;
    icon?: string;
}

export interface AppRouteType extends Omit<RouteRecordRaw, "props"> {
    name: string;
    meta: MetaType;
    component?: Component | string;
    components?: Component;
    children?: AppRouteType[];
    fullPath?: string;
}
