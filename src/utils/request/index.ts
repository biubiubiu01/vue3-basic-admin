import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useEnv } from "@/hooks";
import { ResultEnum, ContentTypeEnum } from "@/enums/httpEnum";
import { useUserStoreWithOut } from "@/stores/modules/user";
import { setErrorMessage, addAjaxErrorLog, addAjaxLog } from "./log";
import { addLoading, closeLoading } from "./loading";

const { VITE_BASE_API } = useEnv();

const service: AxiosInstance = axios.create({
    baseURL: VITE_BASE_API,
    timeout: 10 * 1000, // 请求超时时间
    headers: { "Content-Type": ContentTypeEnum.JSON }
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    const { getToken } = useUserStoreWithOut();
    if (getToken) {
        config!.headers!.Authorization = unref(`Bearer ${getToken}`) ?? "";
    }
    addLoading();
    return config;
});

service.interceptors.response.use(
    (response: AxiosResponse) => {
        const data = response.data;
        if (data.code === ResultEnum.SUCCESS) {
            addAjaxLog(response);
            return data;
        } else {
            addAjaxErrorLog(response, data.message);
            return Promise.reject(data);
        }
    },
    (err) => {
        setErrorMessage(err.response);
        return Promise.reject(err.response);
    }
);

const request = {
    get<T = any>(url: string, data?: any): Promise<T> {
        return request.request("GET", url, { params: data });
    },
    post<T = any>(url: string, data?: any): Promise<T> {
        return request.request("POST", url, { data });
    },
    put<T = any>(url: string, data?: any): Promise<T> {
        return request.request("PUT", url, { data });
    },
    delete<T = any>(url: string, data?: any): Promise<T> {
        return request.request("DELETE", url, { params: data });
    },
    request<T = any>(method = "GET", url: string, data?: any): Promise<T> {
        return new Promise((resolve, reject) => {
            service({ method, url, ...data })
                .then((res) => {
                    resolve(res as unknown as Promise<T>);
                })
                .catch((e: Error | AxiosError) => {
                    reject(e);
                })
                .finally(() => {
                    closeLoading();
                });
        });
    }
};

export default request;
