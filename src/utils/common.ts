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
