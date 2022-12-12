export enum SizeEnum {
    DEFAULT = "default",
    SMALL = "small",
    LARGE = "large"
}

export enum SizeNumberEnum {
    DEFAULT = 16,
    SMALL = 14,
    LARGE = 18
}

export type TextSizeType = {
    icon: string;
    text: string;
    iconSize: number;
    type: `${SizeEnum}`;
};

export const textSize: TextSizeType[] = [
    {
        icon: "sizeMini",
        text: "偏小",
        iconSize: 20,
        type: SizeEnum.SMALL
    },
    {
        icon: "size",
        text: "正常",
        iconSize: 18,
        type: SizeEnum.DEFAULT
    },
    {
        icon: "sizePlus",
        text: "偏大",
        iconSize: 20,
        type: SizeEnum.LARGE
    }
];
