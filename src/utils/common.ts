import { isObject, isUndefined, isString } from "./is";
import { BasicType } from "@/constant/basic";

/**
 * 排除掉obj里面的key值
 * @param {object} obj
 * @param {Array|string} args
 * @returns {object}
 */
export function omit<T extends Record<string, any>, P extends keyof T>(obj: T, args: string | string[]) {
    if (!args) return obj;
    const newObj = {} as Omit<T, P>;
    const isString = typeof args === "string";
    const keys = Object.keys(obj).filter((item) => {
        if (isString) {
            return item !== args;
        }
        return !(<P[]>args).includes(item as P);
    }) as Exclude<keyof T, P>[];

    keys.forEach((key) => {
        if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
}

/**
 * 深拷贝
 * @param {*} source
 * @returns {*}
 */
export function deepClone(source: any) {
    if (!source && typeof source !== "object") {
        return source;
    }
    const targetObj = source.constructor === Array ? [] : {};
    Object.keys(source).forEach((keys) => {
        if (source[keys] && typeof source[keys] === "object") {
            (targetObj as any)[keys] = deepClone(source[keys]);
        } else {
            (targetObj as any)[keys] = source[keys];
        }
    });
    return targetObj;
}

/**
 * 深度合并
 * @param {*} src
 * @param {*} target
 * @returns {*}
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
    let key: string;
    for (key in target) {
        src[key] = isObject(target[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
    }
    return src;
}

/**
 * 显示label
 * @param {Array} list
 * @param {String} value
 * @returns {*}
 */
export function getDataLabel(list: BasicType[] = [], value: string | number): string | undefined {
    if (isUndefined(value)) return;
    const valueStr = value.toString().split(";");
    return valueStr.map((item) => list.find((val) => val.value.toString() === item)?.label).join();
}
