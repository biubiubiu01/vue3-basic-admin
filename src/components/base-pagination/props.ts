export const defaultProps = {
    small: {
        type: Boolean,
        default: true
    },
    background: {
        type: Boolean,
        default: true
    },
    total: {
        type: Number,
        default: 0
    },
    pagerCount: {
        type: Number,
        default: 7
    },
    layout: {
        type: String,
        default: "total, prev, pager, next, sizes"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    hideOnSinglePage: {
        type: Boolean,
        default: false
    },
    currentPage: {
        type: Number,
        default: 1
    },
    pageSize: {
        type: Number,
        default: 10
    }
};

export default defaultProps;
