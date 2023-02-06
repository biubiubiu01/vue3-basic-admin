import type { Canceler, AxiosRequestConfig } from "axios";
import axios from "axios";

const pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join("&");

export const addPending = (config: AxiosRequestConfig) => {
    // const url = getPendingUrl(config);
    // config.cancelToken = new axios.CancelToken((cancel) => {
    //     if (!pendingMap.has(url)) {
    //         console.log(pendingMap);
    //         pendingMap.set(url, cancel);
    //     }
    // });
};

export const removePending = (config: AxiosRequestConfig) => {
    // const url = getPendingUrl(config);
    // if (pendingMap.has(url)) {
    //     const cancel = pendingMap.get(url);
    //     cancel && cancel(url);
    //     pendingMap.delete(url);
    // }
};

export const removeAllPending = () => {};

export const reset = () => {};
