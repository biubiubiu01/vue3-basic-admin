export enum DropMenuEnum {
    REFRESH_PAGE = "REFRESH_PAGE",
    CLOSE_CURRENT = "CLOSE_CURRENT",
    CLOSE_LEFT = "CLOSE_LEFT",
    CLOSE_RIGHT = "CLOSE_RIGHT",
    CLOSE_OTHER = "CLOSE_OTHER",
    CLOSE_ALL = "CLOSE_ALL"
}

export type DropMenuType = {
    text: string;
    icon?: string;
    command?: string | number;
    disabled?: boolean;
    divided?: boolean;
};
