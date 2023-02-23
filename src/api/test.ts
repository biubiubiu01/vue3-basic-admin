import request from "@/utils/request";

export enum Api {
    GET_TEST = "/test/getTest",
    POST_TEST = "/test/postTest",
    PUT_TEST = "/test/putTest",
    DELETE_TEST = "/test/deleteTest",
    SAME_TEST = "/test/sameTest",
    RETRY_TEST = "/test/retryTest"
}

export const getTestApi = (data?: any) => request.get(Api.GET_TEST, data);

export const postTestApi = (data?: any) => request.post(Api.POST_TEST, data, { successMessage: true });

export const putTestApi = (data?: any) => request.put(Api.PUT_TEST, data);

export const deleteTestApi = (data?: any) => request.delete(Api.DELETE_TEST, data, { errorMessage: false });

export const sameTestApi = (data?: any) => request.get(Api.SAME_TEST, data, { cancelSame: true });

export const retryApi = (data?: any) => request.get(Api.RETRY_TEST, data, { isRetry: true });
