export type SeamScrollOptionType = {
    autoPlay?: boolean;
    switchDelay?: number;
    hoverStop?: boolean;
    step?: number;
    singleHeight?: number;
    waitTime?: number;
};

export interface StateSeam {
    top: number;
    autoPlay: boolean;
    delay: number;
    copyHtml: string;
    isHover: boolean;
    reqFrame: any;
    singleWaitTime: any;
}
