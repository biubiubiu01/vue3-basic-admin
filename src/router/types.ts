import type { RouteRecordRaw, RouteMeta } from "vue-router";

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import("*.vue")>) | (() => Promise<T>);

export interface MetaType extends RouteMeta {
    title: string;
    keepAlive?: boolean;
    hidden?: boolean;
    permission?: string;
    affix?: boolean;
    icon?: string;
    hideChildren?: boolean;
    sort?: number;
}

export interface AppRouteType extends Omit<RouteRecordRaw, "props"> {
    name: string;
    component?: Component | string;
    components?: Component;
    children?: AppRouteType[];
    fullPath?: string;
    meta?: MetaType;
    redirect?: string;
}
