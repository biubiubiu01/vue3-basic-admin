<template>
    <div :style="getStyle" ref="baseMapRef"></div>
</template>

<script lang="ts" setup>
import { useOpenLayersMap } from "@/hooks";
import image from "@/assets/images/user/headImg.gif";

const props = defineProps({
    width: {
        type: [Number, String],
        default: "100%"
    },
    height: {
        type: [Number, String],
        default: "100%"
    },
    options: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(["singleclick"]);

const baseMapRef = ref();

const { map, view, setCenter, setZoom, createPoint, clearPoint, addMapEvent } = useOpenLayersMap(baseMapRef, props.options);

onMounted(() => {
    createPoint(
        [
            {
                x: 114.264839,
                y: 30.548857,
                text: "张三"
            },
            {
                x: 114.264839,
                y: 30.648857,
                text: "李四"
            },
            {
                x: 114.164839,
                y: 30.648857,
                text: "王五"
            }
        ],
        {
            img: image
        }
    );

    addMapEvent("singleclick", (e) => {
        if (map.value) {
            const pixel = unref(map)!.getEventPixel(e.originalEvent);
            const feature = unref(map)!.forEachFeatureAtPixel(pixel, (feature) => feature);
            if (feature) {
                emit("singleclick", feature.getProperties().item, feature);
            }
        }
    });
});

const getStyle = computed(() => {
    return {
        width: props.width,
        height: props.height
    };
});
</script>

<style lang="scss" scoped>
::v-deep(.ol-mouse-position) {
    top: unset;
    bottom: 6px;
    background: rgba(255, 255, 255, 0.6);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
}
</style>
