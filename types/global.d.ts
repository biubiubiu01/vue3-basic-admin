declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface Window {
    AMap: any;
    AMapUI: any;
    tinymce: any;
}

declare global {}

declare const __APP_INFO__: {
    pkg: {
        name: string;
        version: string;
        dependencies: Recordable<string>;
        devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
};
