import type { Ref } from "vue";
import { useThrottleFn, useResizeObserver } from "@vueuse/core";

const domSymbol = Symbol("watermark-dom");

export const useWatermark = (appendEl: Ref<HTMLElement | null> = ref(document.body) as Ref<HTMLElement>) => {
    type WaterOption = {
        value?: string;
        color?: string;
        step?: number;
        width?: number;
        height?: number;
        size?: string;
    };

    const func = useThrottleFn(function () {
        const el = unref(appendEl);
        if (!el) return;
        const { clientHeight: height, clientWidth: width } = el;
        Object.assign(options.value, { width, height });
        updateWatermark();
    }, 200);

    const id = domSymbol.toString();
    const watermarkEl = shallowRef<HTMLElement>();
    const options = ref<WaterOption>({});

    const clear = () => {
        const domId = unref(watermarkEl);
        watermarkEl.value = undefined;
        const el = unref(appendEl);
        if (!el) return;
        domId && el.removeChild(domId);
    };

    function createBase64() {
        const can = document.createElement("canvas");
        const step = unref(options).step || 1;
        const value = unref(options).value || "缺少水印值";
        const color = unref(options).color || "rgba(0,0,0,0.25)";
        const size = unref(options).size || "15px";
        const width = 200 * step;
        const height = 140 * step;
        Object.assign(can, { width, height });

        const cans = can.getContext("2d");
        if (cans) {
            cans.rotate((-20 * Math.PI) / 120);
            cans.font = size + " Vedana";
            cans.fillStyle = color as string;
            cans.textAlign = "left";
            cans.textBaseline = "middle";
            cans.fillText(value, width / 20, height);
        }
        return can.toDataURL("image/png");
    }

    function updateWatermark() {
        const el = unref(watermarkEl);
        const value = unref(options).value || "缺少水印值";
        if (!el) return;
        if (unref(options).width) {
            el.style.width = `${unref(options).width}px`;
        }
        if (unref(options).height) {
            el.style.height = `${unref(options).height}px`;
        }
        if (value) {
            el.style.background = `url(${createBase64()}) left top repeat`;
        }
    }

    const createWatermark = () => {
        if (unref(watermarkEl)) {
            updateWatermark();
            return id;
        }
        const div = document.createElement("div");
        watermarkEl.value = div;
        div.id = id;
        div.style.pointerEvents = "none";
        div.style.top = "0px";
        div.style.left = "0px";
        div.style.position = "absolute";
        div.style.zIndex = "100000";
        const el = unref(appendEl);
        if (!el) return id;
        const { clientHeight: height, clientWidth: width } = el;
        Object.assign(options.value, { width, height });
        updateWatermark();
        el.appendChild(div);
        return id;
    };

    function setWatermark(option: WaterOption) {
        options.value = option;
        createWatermark();
        useResizeObserver(appendEl, func);
        const instance = getCurrentInstance();
        if (instance) {
            onBeforeUnmount(() => {
                clear();
            });
        }
    }

    onBeforeUnmount(() => {
        clear();
    });

    return { setWatermark, clear };
};
