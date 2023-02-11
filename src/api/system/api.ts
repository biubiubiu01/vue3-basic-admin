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
    const { currentPage, pageSize, apiName, status } = data;
    let apiData = getAllApi();
    if (apiName) {
        apiData = apiData.filter((item) => item.apiName.includes(apiName.toLocaleUpperCase()));
    }
    if (status) {
        apiData = apiData.filter((item) => item.status === status);
    }

    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: {
                list: apiData.slice((currentPage - 1) * pageSize, currentPage * pageSize),
                total: apiData.length
            },
            message: ""
        });
    });
};
