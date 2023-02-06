export type BasicType = {
    label: number | string;
    value: number | string;
};

export const StatusData: BasicType[] = [
    {
        label: "启用",
        value: 1
    },
    {
        label: "停用",
        value: 0
    }
];

export const axiosStatus: BasicType[] = [
    {
        label: "成功",
        value: 200
    },
    {
        label: "失败",
        value: 500
    }
];

export const methodData: BasicType[] = [
    {
        label: "GET",
        value: "GET"
    },
    {
        label: "POST",
        value: "POST"
    },
    {
        label: "PUT",
        value: "PUT"
    },
    {
        label: "DELETE",
        value: "DELETE"
    }
];
