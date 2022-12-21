import { Icons } from "@/plugins/icon";
import iconfontJson from "@/assets/iconfont/iconfont.json";

const getSvgIconList = (): string[] => {
    const modules = import.meta.glob("@/icons/**/*.svg", { eager: true, import: "default" });
    const re = "([^/]*)(\\.\\w+)$";
    return Object.keys(modules).map((item) => <string>item.match(re)?.[1]);
};

const getElIconList = (): string[] => {
    return Object.keys(Icons);
};

const getIconfontList = (): string[] => {
    return iconfontJson.glyphs.map((item) => item.font_class);
};

export const elIconList = getElIconList();

export const svgIconList = getSvgIconList();

export const iconfontList = getIconfontList();

export const allIconList = [...elIconList, ...svgIconList.map((item) => `svg-${item}`), ...iconfontList.map((item) => `icon-${item}`)];
