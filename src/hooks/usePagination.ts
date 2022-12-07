// interface usePaginationOptions {
//     total?: number;
//     currentKey?: string;
//     pageSizeKey?: string;
//     defaultCurrent?: number;
//     defaultSize?: number;
//     position?: "bottomLeft" | "bottomCenter" | "bottomRight" | "topLeft" | "topCenter" | "topRight";
//     getData?: () => any[];
//     dataResult?: () => any[];
//     [key: string]: any;
// }

// const defaultConfig = {
//     total: 0,
//     currentKey: "currentPage",
//     pageSizeKey: "pageSize",
//     defaultCurrent: 1,
//     defaultSize: 10,
//     position: "bottomCenter",
//     dataResult: (data: any) => data.list || []
// };

export function usePagination(config?: usePaginationOptions) {
    // const paginationConfig = Object.assign({}, defaultConfig, config);
    // const { currentKey, pageSizeKey, defaultCurrent, defaultSize } = paginationConfig;
    // const state = reactive({
    //     [currentKey]: defaultCurrent,
    //     [pageSizeKey]: defaultSize,
    //     ...paginationConfig
    // });
    // return {
    //     ...state
    // };
}
