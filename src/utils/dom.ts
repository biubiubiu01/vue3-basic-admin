import { isArray } from "./is";

export const hasClass = (ele: HTMLElement, cls: string | string[]): boolean => {
    const classArr = isArray(cls) ? cls : [cls];
    return classArr.every((item: string) => !!ele.className.match(new RegExp("(\\s|^)" + item + "(\\s|$)")));
};

export const addClass = (ele: HTMLElement, cls: string | string[]) => {
    const classArr = isArray(cls) ? cls : [cls];
    classArr.forEach((item: string) => {
        if (!hasClass(ele, item)) {
            ele.className += " " + item;
        }
    });
};

export const removeClass = (ele: HTMLElement, cls: string | string[]) => {
    const classArr = isArray(cls) ? cls : [cls];
    classArr.forEach((item: string) => {
        if (hasClass(ele, item)) {
            const reg = new RegExp("(\\s|^)" + item + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ").trim();
        }
    });
};

export const toggleClass = (ele: HTMLElement, cls: string | string[]) => {
    const classArr = isArray(cls) ? cls : [cls];
    classArr.forEach((item: string) => {
        if (hasClass(ele, item)) {
            removeClass(ele, item);
        } else {
            addClass(ele, item);
        }
    });
};
