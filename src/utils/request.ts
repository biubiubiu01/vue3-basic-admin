import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { useMessage } from "@/hooks/useMessage";
import { ResultEnum, ContentTypeEnum, RequestEnum } from "@/enums/httpEnum";
import { useUserStoreWithOut } from "@/stores/modules/user";

const { error } = useMessage();

const userStore = useUserStoreWithOut();

const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 10 * 1000, // 请求超时时间
    headers: { "Content-Type": ContentTypeEnum.JSON }
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    const { token } = storeToRefs(userStore);
    if (token) {
        (config.headers.Authorization as any) = token;
    }
});
