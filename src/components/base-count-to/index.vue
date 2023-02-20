<template>
    <span :style="getStyle">{{ value }}</span>
</template>

<script lang="ts" setup>
import { TransitionPresets, useTransition } from "@vueuse/core";
import { isNumber } from "@/utils";

const props = defineProps({
    startVal: {
        type: Number,
        default: 0
    },
    endVal: {
        type: Number,
        default: 2023
    },
    duration: {
        type: Number,
        default: 1500
    },
    autoplay: {
        type: Boolean,
        default: true
    },
    decimals: {
        type: Number,
        default: 0,
        validator(value: number) {
            return value >= 0;
        }
    },
    separator: {
        type: String,
        default: ","
    },
    prefix: {
        type: String,
        default: ""
    },
    suffix: {
        type: String,
        default: ""
    },
    transition: {
        type: String,
        default: "linear"
    },
    size: {
        type: Number,
        default: 16
    },
    color: {
        type: String,
        default: "inherit"
    }
});

const source = ref(props.startVal);

let transitionValue: any = null;

const value = computed(() => formatNumber(unref(transitionValue)));

const getStyle = computed(() => ({ color: props.color, fontSize: props.size + "px" }));

const start = () => {
    reset();
    source.value = props.endVal;
};

const reset = () => {
    source.value = props.startVal;
    transitionValue = useTransition(source, {
        duration: props.duration,
        transition: (TransitionPresets as any)[props.transition]
    });
};

const formatNumber = (num: number | string) => {
    if (!num && num !== 0) {
        return "";
    }
    const { decimals, separator, suffix, prefix } = props;
    num = Number(num).toFixed(decimals) + "";

    let numberValue = num.split(".")[0];
    const decimalValue = decimals > 0 ? "." + num.split(".")[1] : "";

    const rgx = /(\d+)(\d{3})/;
    if (separator && !isNumber(separator)) {
        while (rgx.test(numberValue)) {
            numberValue = numberValue.replace(rgx, "$1" + separator + "$2");
        }
    }
    return prefix + numberValue + decimalValue + suffix;
};

watchEffect(() => {
    source.value = props.startVal;
});

watch(
    [() => props.startVal, () => props.endVal],
    () => {
        if (props.autoplay) {
            start();
        }
    },
    {
        immediate: true
    }
);

defineExpose({
    value,
    start,
    reset
});
</script>

<style lang="scss" scoped></style>
