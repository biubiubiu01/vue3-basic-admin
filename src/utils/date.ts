type FormatO = {
    "M+": number;
    "D+": number;
    "H+": number;
    "m+": number;
    "s+": number;
    [key: string]: any;
};

/**
 * 格式化日期
 * @param {Date|undefined} date
 * @param {String} format
 * @param {String} fill
 * @returns {String}
 */
export const formatTime = (date: any, format = "YYYY-MM-DD", fill = true): string => {
    if (!date && !fill) return "";
    const cDate = date ? new Date(date) : new Date();
    if (!cDate) return "";
    const o: FormatO = {
        "M+": cDate.getMonth() + 1, // 月份
        "D+": cDate.getDate(), // 日
        "H+": cDate.getHours(), // 小时
        "m+": cDate.getMinutes(), // 分
        "s+": cDate.getSeconds() // 秒
    };
    if (/(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (cDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : addZero(o[k]));
        }
    }
    return format;
};

/**
 * Add Zero
 * @param {String} num
 * @returns {String}
 */
const addZero = (num: string): string => {
    if (parseFloat(num) < 10) {
        return "0" + num;
    }
    return num;
};
