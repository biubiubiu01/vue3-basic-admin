<template>
    <div :class="getInputClass" @dragstart.prevent>
        <span
            v-if="controls && !text"
            role="button"
            class="el-input-number__decrease"
            :class="{ 'is-disabled': minDisabled }"
            aria-label="decrease number"
            @click="decrease"
        >
            <base-icon :el-name="controlsAtRight ? 'arrowDown' : 'minus'" />
        </span>
        <span
            v-if="controls && !text"
            role="button"
            class="el-input-number__increase"
            :class="{ 'is-disabled': maxDisabled }"
            aria-label="increase number"
            @click="increase"
        >
            <base-icon :el-name="controlsAtRight ? 'arrowUp' : 'plus'" />
        </span>

        <base-input v-model="dataValue" type="number" :disabled="disabled" :clearable="false" :text="text" @change="handleInputChange" class="tl" />
    </div>
</template>

<script lang="ts" setup>
import "element-plus/es/components/input-number/style/css";
import inputNumberProps from "./props";
import { isNumber } from "@/utils";

const props = defineProps(inputNumberProps);
const emit = defineEmits(["update:modelValue", "change"]);

const dataValue = ref();

const getInputClass = computed(() => {
    const { disabled, controls } = props;
    return ["el-input-number", { "is-disabled": disabled }, { "is-without-controls": !controls }, { "is-controls-right": unref(controlsAtRight) }];
});

const controlsAtRight = computed(() => {
    return props.controls && props.controlsPosition === "right";
});

const minDisabled = computed(() => {
    return isNumber(props.modelValue) && ensurePrecision(props.modelValue, -1)! < props.min;
});

const maxDisabled = computed(() => {
    return isNumber(props.modelValue) && ensurePrecision(props.modelValue, 1)! > props.max;
});

const ensurePrecision = (val: number, coefficient: 1 | -1 = 1) => {
    if (!isNumber(val)) return unref(dataValue);
    return toPrecision(val + props.step * coefficient, props.precision);
};

const handleInputChange = (value: string) => {
    const newVal = value !== "" ? Number(value) : "";
    dataValue.value = verifyValue(newVal);
    emit("update:modelValue", unref(dataValue));
    emit("change", unref(dataValue));
};

const decrease = () => {
    if (props.disabled || unref(minDisabled)) return;
    const value = props.modelValue || 0;
    const newVal = ensurePrecision(Number(value), -1);
    handleInputChange(newVal);
};

const increase = () => {
    if (props.disabled || unref(maxDisabled)) return;
    const value = props.modelValue || 0;
    const newVal = ensurePrecision(Number(value), 1);
    handleInputChange(newVal);
};

const verifyValue = (value: number | string | null | undefined) => {
    const { max, min, precision, step } = props;

    let newVal = Number(value);
    if (value === null || value === undefined || Number.isNaN(newVal) || value === "") {
        return null;
    }
    if (precision !== 0) {
        newVal = toPrecision(newVal, precision);
    }
    if (newVal > max || newVal < min) {
        newVal = newVal > max ? max : min;
    }
    return newVal;
};

const toPrecision = (num: number, pre: number) => {
    if (pre === 0) return Math.round(num);
    let snum = String(num);
    const pointPos = snum.indexOf(".");
    if (pointPos === -1) return num;
    const nums = snum.replace(".", "").split("");
    const datum = nums[pointPos + pre];
    if (!datum) return num;
    const length = snum.length;
    if (snum.charAt(length - 1) === "5") {
        snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
    }
    return Number.parseFloat(Number(snum).toFixed(pre));
};

watch(
    () => props.modelValue,
    (val) => {
        dataValue.value = verifyValue(val);
        emit("update:modelValue", dataValue.value);
    },
    { immediate: true }
);
</script>

<style lang="scss" scoped>
.el-input-number {
    display: inline-flex;
    :deep(.el-input__inner) {
        text-align: left;
    }
}
</style>
