/**
 * @description: Request result set
 */
export enum ResultEnum {
    SUCCESS = 200,
    ERROR = 500
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
    // json
    JSON = "application/json;charset=UTF-8",
    // form-data qs
    FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
    // form-data  upload
    FORM_DATA = "multipart/form-data;charset=UTF-8"
}

/**
 * @description:  contentType
 */
export enum ErrorMsgEnum {
    ERROR_400 = "请求失败，参数类型不匹配",
    ERROR_401 = "请求失败，登录状态已过期",
    ERROR_403 = "请求失败，您无权访问",
    ERROR_404 = "请求失败，未找到该资源",
    ERROR_500 = "请求失败，服务器错误，请联系管理员",
    ERROR_503 = "请求失败，服务器异常",
    ERROR_504 = "请求失败，请求超时"
}

export enum ErrorTypeEnum {
    VUE = "vue",
    SCRIPT = "script",
    AJAX = "ajax"
}
