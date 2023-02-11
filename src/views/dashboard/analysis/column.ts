type CardDataType = {
    title: string;
    extraValue: number | string;
    extraTitle: string;
    value: number;
    icon: string;
    prefix: string;
    suffix: string;
};

export const cardListData: CardDataType[] = [
    {
        title: "今日收益",
        value: 10500,
        extraTitle: "总收益",
        extraValue: 17500,
        prefix: "¥",
        suffix: "",
        icon: "svg-money"
    },
    {
        title: "今日访问量",
        value: 16800,
        extraTitle: "总访问量",
        extraValue: 130845,
        prefix: "",
        suffix: "次",
        icon: "svg-view"
    },
    {
        title: "待发货",
        value: 626,
        extraTitle: "订单量",
        extraValue: 1679,
        prefix: "",
        suffix: "个",
        icon: "svg-deliver"
    },
    {
        title: "好评率",
        value: 98,
        extraTitle: "同期对比",
        extraValue: "+3.25%",
        prefix: "",
        suffix: "%",
        icon: "svg-good"
    }
];
