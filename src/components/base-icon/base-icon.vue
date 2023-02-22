<script lang="tsx">
export default defineComponent({
    props: {
        size: {
            type: Number
        },
        color: {
            type: String
        },
        icon: {
            type: String,
            default: ""
        },
        hover: {
            type: Boolean,
            default: false
        },
        svgName: {
            type: String
        },
        iconName: {
            type: String
        },
        elName: {
            type: String
        }
    },
    setup(props) {
        const getSvgName = computed(() => {
            if (props.svgName) {
                return `#svg-${props.svgName}`;
            }
            if (props.icon?.includes("svg-")) {
                return `#${props.icon}`;
            }
            return null;
        });

        const getIconName = computed(() => {
            if (props.iconName) {
                return `icon-${props.iconName}`;
            }
            if (props.icon?.includes("icon-")) {
                return `${props.icon}`;
            }
            return null;
        });

        const iconStyle = computed(() => {
            return { color: props.color, fontSize: `${props.size || 16}px` };
        });

        const getHover = computed(() => {
            return props.hover ? "base-icon base-icon-hover" : "base-icon";
        });

        // svg 图标
        const renderSvgIcon = () => {
            return (
                <svg class={getHover.value} aria-hidden="true" style={iconStyle.value}>
                    <use xlink:href={getSvgName.value}></use>
                </svg>
            );
        };

        // el 图标
        const renderElIcon = () => {
            const { icon, elName, size, color } = props;
            if (props.icon || props.elName) {
                return (
                    <el-icon size={size} color={color} class={getHover.value}>
                        {h(resolveComponent(elName || icon))}
                    </el-icon>
                );
            }
            return null;
        };

        // iconfont图标
        const renderIcon = () => {
            if (!props.icon && !props.iconName) {
                return null;
            }
            return <i class={["iconfont", unref(getIconName), getHover.value]} style={iconStyle.value}></i>;
        };

        return () => {
            const { icon, svgName, iconName, elName } = props;
            if (icon?.includes("icon-") || iconName) {
                return renderIcon();
            }
            if (icon.includes("svg-") || svgName) {
                return renderSvgIcon();
            }
            if (icon || elName) {
                return renderElIcon();
            }
            return null;
        };
    }
});
</script>

<style lang="scss" scoped>
.base-icon {
    height: 1em;
    width: 1em;
    fill: currentColor;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    &.base-icon-hover:hover {
        color: var(--el-color-primary);
        transform: scale(1.3);
        vertical-align: -0.15em;
    }
}
</style>
