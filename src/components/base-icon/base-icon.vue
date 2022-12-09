<script lang="tsx">
export default defineComponent({
    props: {
        size: {
            type: [Number, String]
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
            default: true
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
            if (!props.icon?.includes("svg-")) {
                return `#${props.icon}`;
            }
            return null;
        });

        const iconStyle = computed(() => {
            return { color: props.color, fontSize: `${props.size || 16}px` };
        });

        const getHover = computed(() => {
            return props.hover ? "base-icon-hover" : "";
        });

        const renderSvgIcon = () => {
            return (
                <svg class="svgClass" aria-hidden="true">
                    <use xlink:href={getSvgName.value}></use>
                </svg>
            );
        };

        const renderElIcon = () => {
            return h(resolveComponent(props.icon));
        };

        const renderIcon = () => {
            return <i class={["iconfont", props.icon, getHover.value]} style={iconStyle.value}></i>;
        };

        return () => {
            const { icon, svgName, iconName, size, color } = props;
            if (icon?.includes("icon-") || iconName) {
                return renderIcon();
            }
            return (
                <el-icon size={size} color={color} class={getHover.value}>
                    {icon?.includes("svg-") || svgName ? renderSvgIcon() : renderElIcon()}
                </el-icon>
            );
        };
    }
});
</script>

<style scoped>
.base-icon-hover:hover {
    color: var(--el-color-primary);
    transform: scale(1.3);
    vertical-align: -0.15em;
}
.svgClass {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
    outline: 0;
}
</style>
