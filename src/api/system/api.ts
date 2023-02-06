const getAllApi = () => {
    const modules = import.meta.glob("../**/*.ts", { eager: true });
    const apiList: any[] = [];
    Object.values(modules)
        .map((item: any) => item.Api)
        .forEach((item: any) => {
            if (!item) return;
            Object.keys(item).forEach((key) => {
                apiList.push({
                    apiName: key,
                    apiUrl: item[key],
                    status: 1,
                    createTime: "2023-02-01 12:00:00",
                    remark: ""
                });
            });
        });
    return apiList;
};

export const getApiList = (data?: any) => {
    let apiData = getAllApi();
    if (data.apiName) {
        apiData = apiData.filter((item) => item.apiName.includes(data.apiName.toLocaleUpperCase()));
    }
    if (data.status) {
        apiData = apiData.filter((item) => item.status === data.status);
    }

    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: apiData,
            message: ""
        });
    });
};
