const getSvgIconList = () => {};

const getElIconList = (): string[] => {
    const modules = import.meta.glob("@/icons/**/*.svg", { eager: true, import: "default" });
    const re = "([^/]*)(\\.\\w+)$";
    return Object.keys(modules).map((item) => <string>item.match(re)?.[1]);
};

const getIconfontList = () => {};

export const elIconList = getElIconList();

export const svgIconList = getSvgIconList();

export const iconfontList = getIconfontList();
