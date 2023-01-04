import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useMessage, useEnv } from "@/hooks";
import { ResultEnum, ContentTypeEnum, ErrorTypeEnum } from "@/enums/httpEnum";
import { useUserStoreWithOut } from "@/stores/modules/user";
import { useErrorLogStoreWithOut } from "@/stores/modules/errorLog";

const { error } = useMessage();

const { VITE_BASE_API } = useEnv();

const userStore = useUserStoreWithOut();

const service: AxiosInstance = axios.create({
    baseURL: VITE_BASE_API,
    timeout: 10 * 1000, // 请求超时时间
    headers: { "Content-Type": ContentTypeEnum.JSON }
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    const { token } = storeToRefs(userStore);
    if (unref(token)) {
        config!.headers!.Authorization = unref(`Bearer ${token}`) ?? "";
    }
    return config;
});

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const data = response.data;
        if (data.code === ResultEnum.SUCCESS) {
            return data;
        } else {
            addAjaxErrorLog(response, data.message);
            return Promise.reject(data);
        }
    },
    (err) => {
        const { data, status } = err.response;
        let message: string = "";
        if (data?.message) {
            message = data.message;
        } else {
            switch (status) {
                case 400:
                    message = "请求失败，参数类型不匹配";
                    break;
                case 401:
                    message = "请求失败，登录状态已过期";
                    break;
                case 403:
                    message = "请求失败，您无权访问";
                    break;
                case 404:
                    message = "请求失败，未找到该资源";
                    break;
                case 500:
                    message = "请求失败，服务器错误，请联系管理员";
                    break;
                case 503:
                    message = "请求失败，服务器异常";
                    break;
                case 504:
                    message = "请求失败，请求超时";
                    break;
            }
        }
        addAjaxErrorLog(err.response, message);
    }
);

const addAjaxErrorLog = (err: any, message: string) => {
    const { url, method, params, data } = err.config;
    const errorLogStore = useErrorLogStoreWithOut();
    errorLogStore.addErrorLog({
        type: ErrorTypeEnum.AJAX,
        url: <string>url,
        message,
        params: ["get", "delete"].includes(<string>method) ? JSON.stringify(params) : JSON.stringify(data),
        data: JSON.stringify(err.data),
        detail: JSON.stringify(err)
    });
    error(message);
};

const request = {
    get(url: string, data?: any) {
        return request.request("GET", url, { params: data });
    },
    post(url: string, data?: any) {
        return request.request("POST", url, data);
    },
    put() {},
    delete() {},
    request(method = "GET", url: string, data?: any) {
        return new Promise((resolve, reject) => {
            service({ method, url, data })
                .then((res) => {
                    resolve(res);
                })
                .catch((e: Error | AxiosError) => {
                    reject(e);
                });
        });
    }
};

export default request;
