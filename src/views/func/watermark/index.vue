<template>
    <div class="page-func-watermark">
        <base-box title="页面水印">
            <base-form :columns="FormColumn" :model="model" inline :colProps="{ span: 8 }"> </base-form>
            <base-button type="primary" @click="createMark">创建水印</base-button>
            <base-button type="primary" @click="clear">清除水印</base-button>
        </base-box>
        <base-box title="容器水印">
            <div style="height: 400px" ref="boxRef">
                <base-button type="primary" @click="createBlockMark">创建水印</base-button>
                <base-button type="primary" @click="clearBlock">清除水印</base-button>
            </div>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { useWatermark } from "@/hooks";
import { FormTypeEnum } from "@/enums/componentEnum";

const FormColumn = ref([
    {
        fieldName: "value",
        fieldDesc: "水印名字",
        fieldType: FormTypeEnum.INPUT
    },
    {
        fieldName: "color",
        fieldDesc: "水印颜色",
        fieldType: FormTypeEnum.COLOR
    }
]);

const boxRef = ref();

const model = reactive<any>({});

const { setWatermark, clear } = useWatermark();

const { setWatermark: setBlockMark, clear: clearBlock } = useWatermark(boxRef);

const createMark = () => {
    setWatermark({
        value: model.value,
        color: model.color
    });
};

const createBlockMark = () => {
    setBlockMark({
        value: model.value,
        color: model.color
    });
};
</script>

<style lang="scss" scope></style>
