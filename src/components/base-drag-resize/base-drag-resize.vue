<template>
    <div
        :class="[
            'base-drag-reisze',
            {
                active: state.active,
                'vue-drag-moving': state.draging,
                'vue-drag-resizing': state.resizing
            }
        ]"
        ref="baseDragRef"
        :style="dragStyle"
        @mousedown="handleDragStart($event)"
    >
        <slot></slot>
        <template v-if="state.active && isResizable">
            <div
                v-for="stick in sticks"
                :key="stick"
                :class="['vue-drag-stick', `vue-drag-stick-${stick}`]"
                :style="stickStyle(stick)"
                @mousedown="handleResizeStart(stick, $event)"
            ></div>
        </template>
        <div class="vue-drag-info" v-if="state.draging || state.resizing">
            <span v-if="state.draging">X：{{ state.boxStyle.left }}，Y：{{ state.boxStyle.top }}</span>
            <span v-if="state.resizing">H：{{ state.boxStyle.height }}，W：{{ state.boxStyle.width }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useEventListener } from "@vueuse/core";
import type { PropType } from "vue";

const stickPosition: any = {
    x: {
        l: "left",
        m: "marginLeft",
        r: "right"
    },
    y: {
        t: "top",
        m: "marginTop",
        b: "bottom"
    }
};
const props = defineProps({
    w: {
        type: Number,
        default: 200
    },
    h: {
        type: Number,
        default: 200
    },
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    },
    zIndex: {
        type: [Number, String],
        default: 10
    },
    sticks: {
        type: Array as PropType<string[]>,
        default: () => {
            return ["tl", "tm", "tr", "ml", "mr", "bl", "bm", "br"];
        }
    },
    stickSize: {
        type: Number,
        default: 8
    },
    isResizable: {
        type: Boolean,
        default: true
    },
    isDraggable: {
        type: Boolean,
        default: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    minWidth: {
        type: Number,
        default: 50
    },
    minHeight: {
        type: Number,
        default: 50
    }
});

const emit = defineEmits(["resized", "update:w", "update:h", "update:x", "update:y", "resizing", "draged", "draging"]);

const state = reactive<any>({
    draging: false,
    resizing: false,
    active: false,
    boxStyle: {
        top: "",
        left: "",
        width: "",
        height: ""
    },
    currentStick: null,
    beforeMove: {
        left: null,
        top: null,
        width: null,
        height: null,
        oldPageX: null,
        oldPageY: null
    }
});

const baseDragRef = ref();

onMounted(() => {
    useEventListener(document, "mousedown", deactive);
});

const dragStyle = computed((): any => {
    const { zIndex } = props;
    const { top, left, width, height } = state.boxStyle;
    return {
        left: left + "px",
        top: top + "px",
        width: width + "px",
        height: height + "px",
        zIndex
    };
});

const stickStyle = computed(() => {
    const { stickSize } = props;
    return (stick: string) => {
        const stickObj: any = {
            width: stickSize + "px",
            height: stickSize + "px"
        };
        stickObj[stickPosition.y[stick[0]]] = -stickSize / 2 + "px";
        stickObj[stickPosition.x[stick[1]]] = -stickSize / 2 + "px";
        return stickObj;
    };
});

const deactive = () => {
    state.active = false;
};

// 缩放开始
function handleResizeStart(stick: string, event: any) {
    event.stopPropagation();
    state.currentStick = stick;
    const { pageX, pageY } = event;
    state.resizing = true;
    setBeforeMove({ oldPageX: pageX, oldPageY: pageY });
    document.onmousemove = (event) => handleResizeMove(event);
    document.onmouseup = async () => {
        document.onmousemove = null;
        document.onmouseup = null;
        state.currentStick = null;
        emit("resized", state.boxStyle);
        state.beforeMove = {
            left: null,
            top: null,
            width: null,
            height: null,
            oldPageX: null,
            oldPageY: null
        };
        state.resizing = false;
    };
}

// 存储resize前位置信息
function setBeforeMove(position: any) {
    const { left, top, height, width } = state.boxStyle;
    state.beforeMove = {
        left,
        top,
        height,
        width,
        ...position
    };
}

// 缩放移动
function handleResizeMove(event: any) {
    const { pageX, pageY } = event;
    const { top, left, height, width, oldPageX, oldPageY } = state.beforeMove;
    let newHeight = height;
    let newWidth = width;
    let newTop = top;
    let newLeft = left;
    switch (state.currentStick) {
        case "tl":
            newTop = pageY - oldPageY + top;
            newLeft = pageX - oldPageX + left;
            newHeight = oldPageY - pageY + height;
            newWidth = oldPageX - pageX + width;
            break;
        case "tm":
            newHeight = oldPageY - pageY + height;
            newTop = pageY - oldPageY + top;
            break;
        case "tr":
            newTop = pageY - oldPageY + top;
            newHeight = oldPageY - pageY + height;
            newWidth = pageX - oldPageX + width;
            break;
        case "ml":
            newLeft = pageX - oldPageX + left;
            newWidth = oldPageX - pageX + width;
            break;
        case "mr":
            newWidth = pageX - oldPageX + width;
            break;
        case "bl":
            newLeft = pageX - oldPageX + left;
            newWidth = oldPageX - pageX + width;
            newHeight = pageY - oldPageY + height;
            break;
        case "bm":
            newHeight = pageY - oldPageY + height;
            break;
        case "br":
            newHeight = pageY - oldPageY + height;
            newWidth = pageX - oldPageX + width;
            break;
        default:
            break;
    }
    if (newWidth >= props.minWidth) {
        state.boxStyle.left = newLeft;
        state.boxStyle.width = newWidth;
        emit("update:w", state.boxStyle.width);
        emit("update:x", state.boxStyle.left);
    }
    if (newHeight >= props.minHeight) {
        state.boxStyle.top = newTop;
        state.boxStyle.height = newHeight;
        emit("update:h", state.boxStyle.height);
        emit("update:y", state.boxStyle.top);
    }
    emit("resizing", {
        width: state.boxStyle.width,
        height: state.boxStyle.height,
        left: state.boxStyle.left,
        top: state.boxStyle.top
    });
}

// 移动开始
function handleDragStart(event: any) {
    state.active = true;
    event.stopPropagation();
    if (!props.isDraggable) {
        return;
    }
    const { pageX, pageY } = event;
    setBeforeMove({ oldPageX: pageX, oldPageY: pageY });
    state.draging = true;
    document.onmousemove = (event) => handleDragMove(event);
    document.onmouseup = async () => {
        document.onmousemove = null;
        document.onmouseup = null;
        emit("draged", {
            left: state.boxStyle.left,
            top: state.boxStyle.top
        });
        state.beforeMove = {
            left: null,
            top: null,
            width: null,
            height: null,
            oldPageX: null,
            oldPageY: null
        };
        state.draging = false;
    };
}

// 移动中
async function handleDragMove(event: any) {
    const { pageX, pageY } = event;
    const { top, left, oldPageX, oldPageY } = state.beforeMove;

    const snapObj: any = {
        left: pageX - oldPageX + left,
        top: pageY - oldPageY + top
    };
    Object.assign(state.boxStyle, snapObj);
    emit("update:x", snapObj.left);
    emit("update:y", snapObj.top);
    emit("draging", snapObj);
}

watchEffect(() => {
    state.active = props.isActive;
    state.boxStyle.left = props.x;
    state.boxStyle.top = props.y;
    state.boxStyle.height = props.h;
    state.boxStyle.width = props.w;
});
</script>

<style lang="scss" scope>
.base-drag-reisze {
    position: absolute;
    box-sizing: border-box;
    &.active:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        outline: 1px dashed #409eff;
    }
    .vue-drag-stick {
        position: absolute;
        border: 2px solid #409eff;
        box-sizing: border-box;
        background: #fff;
        border-radius: 50%;
    }
    .vue-drag-stick-tl,
    .vue-drag-stick-br {
        cursor: nwse-resize;
    }
    .vue-drag-stick-tm,
    .vue-drag-stick-bm {
        left: 50%;
        cursor: ns-resize;
    }
    .vue-drag-stick-tr,
    .vue-drag-stick-bl {
        cursor: nesw-resize;
    }
    .vue-drag-stick-ml,
    .vue-drag-stick-mr {
        top: 50%;
        cursor: ew-resize;
    }
    .vue-drag-info {
        position: absolute;
        bottom: -33px;
        left: 50%;
        border-radius: 4px;
        transform: translateX(-50%);
        background: #fff;
        border: 1px solid #303133;
        z-index: 2075;
        padding: 6px 14px;
        font-size: 12px;
        line-height: 1.2;
        min-width: 100px;
        word-wrap: break-word;
        &::before {
            content: "";
            border-style: solid;
            border-width: 0 5px 5px;
            border-color: transparent transparent #303133;
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>
