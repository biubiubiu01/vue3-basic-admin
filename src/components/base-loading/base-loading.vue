<script lang="tsx">
import { loadingMap, LoadingEnum } from "@/enums/loadingEnum";
import type { Component, PropType } from "vue";

export default defineComponent({
    props: {
        text: {
            type: String,
            default: "正在加载中..."
        },
        textColor: {
            type: String,
            default: "#79bbff"
        },
        background: {
            type: String,
            default: "rgba(0, 0, 0, .5)"
        },
        modal: {
            type: Boolean,
            default: true
        },
        spin: {
            type: String as PropType<LoadingEnum>,
            default: "chase"
        },
        full: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const renderBaseLoading = () => {
            return <base-icon icon="loading" color={props.textColor} size={25} class="is-loading" />;
        };

        const renderBasicLoading = () => {
            const { spin, textColor } = props;
            return h(loadingMap.get(spin) as Component, { color: textColor } as any);
        };

        return () => {
            const { text, background, modal, textColor, full } = props;
            return (
                <div style={modal ? { background } : {}} class={{ "loading-container": true, "is-fullscreen": full }}>
                    <div class="loading-wrapper">
                        {props.spin === "loading" ? renderBaseLoading() : renderBasicLoading()}
                        <div class="text" style={{ color: textColor }}>
                            {text}
                        </div>
                    </div>
                </div>
            );
        };
    }
});
</script>
<style lang="scss" scoped>
.loading-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    &.is-fullscreen {
        position: fixed;
    }
    .loading-wrapper {
        position: absolute;
        top: 50%;
        margin-top: -21px;
        text-align: center;
        width: 100%;
        .text {
            margin: 8px 0;
            width: 100%;
        }
        .loading-icon {
            animation: rotating 1.5s linear infinite;
        }
    }
}
@keyframes rotating {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(1turn);
    }
}
</style>
