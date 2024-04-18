import { Ref } from "vue";
import { Map, View, Feature } from "ol";
import { Layer, Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { defaults as DefaultsControl, MousePosition, ScaleLine } from "ol/control";
import { defaults as DefaultInteraction } from "ol/interaction";
import { WMTS, Vector as VectorSource } from "ol/source";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { get as getProjection, Projection } from "ol/proj";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import { getTopLeft, getWidth } from "ol/extent";
import "ol/ol.css";
import { deepClone } from "@/utils";

const mapKey = "f23c835c8b5b1070c5a4baab7ba3850e";
// 影像地图
const BASE_IMAGE_MAP_URL = "http://t0.tianditu.gov.cn/img_c/wmts?tk=" + mapKey;
// 影像注记
const BASE_CIA_MAP_URL = "http://t0.tianditu.gov.cn/cia_c/wmts?tk=" + mapKey;

interface IMapOptions {
    center?: [number, number];
    zoom?: number;
    maxZoom?: number;
}

const defaultOptions: IMapOptions = {
    center: [114.264839, 30.548857],
    zoom: 12,
    maxZoom: 18
};

type Event = {
    event: string;
    callback: (...args: any[]) => void;
};

type LayerRegister = {
    [key: string]: Layer;
};

interface IState {
    map: Map | null;
    view: View | null;
    layerRegister: LayerRegister;
    eventList: Event[];
}

interface IPoint {
    x: number;
    y: number;
    [key: string]: any;
}

interface IPointOption {
    width?: number;
    height?: number;
    img: any;
}

export const useOpenLayersMap = (element: Ref<HTMLElement>, options?: IMapOptions) => {
    const projection = getProjection("EPSG:4326") as Projection;

    const state = reactive<IState>({
        map: null,
        view: null,
        layerRegister: {},
        eventList: []
    });

    onMounted(async () => {
        await initMap();
    });

    onBeforeUnmount(() => {
        if (state.map) {
            clearMapEvent();
            state.map.dispose();
            state.map = null;
        }
    });

    const getOption = computed(() => Object.assign(deepClone(defaultOptions), options));

    const initMap = async () => {
        if (!element.value) return;

        state.view = new View({
            projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
            center: getOption.value.center, // 深圳坐标
            maxZoom: getOption.value.maxZoom,
            zoom: getOption.value.zoom
        });

        state.map = new Map({
            target: element.value,
            layers: [],
            view: state.view as View,
            // 禁止双击放大
            interactions: DefaultInteraction({ doubleClickZoom: false }),
            controls: DefaultsControl({
                zoom: true
            }).extend([
                // 比例尺
                new ScaleLine(),
                // 鼠标位置
                new MousePosition({
                    coordinateFormat: createCoordinateFormat
                })
            ])
        });

        // 添加鼠标悬浮手型为点击
        addMapEvent("pointermove", handlePointMove);

        // 添加影像地图
        addLayer("BASE_IMAGE_LAYER", createWTMSLayer("img", BASE_IMAGE_MAP_URL));
        // 添加影像注记
        addLayer("BASE_CIA_LAYER", createWTMSLayer("cia", BASE_CIA_MAP_URL));
    };

    // 鼠标悬浮移动事件 移动到点位时 变手型
    const handlePointMove = (e: any) => {
        if (state.map) {
            const map = state.map as Map;
            const pixel = map.getEventPixel(e.originalEvent);
            const feature = map.forEachFeatureAtPixel(pixel, (feature) => feature);
            if (feature) {
                const type = feature?.getGeometry?.()?.getType();
                if (type === "Point") {
                    map.getTargetElement().style.cursor = "pointer";
                }
            } else {
                map.getTargetElement().style.cursor = "auto";
            }
        }
    };

    // 创建瓦片加载图层
    const createWTMSLayer = (layerType: string, mapKey: string) => {
        const projectionExtent = projection.getExtent();
        const size = getWidth(projectionExtent) / 256;
        const resolutions = new Array(18);
        const matrixIds = new Array(18);
        for (let i = 0; i < 18; i++) {
            resolutions[i] = size / Math.pow(2, i);
            matrixIds[i] = i;
        }

        return new TileLayer({
            source: new WMTS({
                url: mapKey,
                layer: layerType,
                matrixSet: "c",
                format: "tiles",
                projection,
                tileGrid: new WMTSTileGrid({
                    origin: getTopLeft(projectionExtent),
                    resolutions,
                    matrixIds
                }),
                style: "default",
                wrapX: true
            })
        });
    };

    // 鼠标位置格式化
    const createCoordinateFormat = (coordinate: number[] | undefined) => {
        return `${coordinate?.[0].toFixed(4)}°E  ${coordinate?.[1].toFixed(4)}°N`;
    };

    // 添加图层
    const addLayer = (layerId: string, layers: Layer) => {
        if (state.map) {
            state.map.addLayer(layers);
            state.layerRegister[layerId] = layers;
        }
    };

    // 删除图层
    const removeLayer = (layerId: string) => {
        if (state.map) {
            const layer = getLayer(layerId);

            state.map.removeLayer(layer);
            delete state.layerRegister[layerId];
        }
    };

    // 清除所有图层
    const clearLayer = () => {
        if (state.map) {
            Object.keys(state.layerRegister).forEach((layerId: string) => removeLayer(layerId));
        }
    };

    // 获取图层
    const getLayer = (layerId: string) => {
        return state.layerRegister[layerId];
    };

    // 获取所有图层
    const getAllLayer = () => {
        return state.layerRegister;
    };

    // 打点
    const createPoint = (pointList: IPoint[], options: IPointOption) => {
        if (getLayer("POINT_LAYER")) {
            removeLayer("POINT_LAYER");
        }
        const features = pointList.map((point) => {
            const feature = new Feature({
                geometry: new Point([point.x, point.y]),
                item: point
            });

            const style = new Style({
                image: new Icon({
                    src: options.img,
                    width: options?.width ?? 32,
                    height: options?.height ?? 32
                })
            });

            feature.setStyle(style);

            return feature;
        });

        const vectorSource = new VectorSource({
            features
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource
        });

        addLayer("POINT_LAYER", vectorLayer);
    };

    // 清除所有的点
    const clearPoint = () => {
        removeLayer("POINT_LAYER");
    };

    // 注册事件
    const addMapEvent = (eventType: any, callback: (...args: any[]) => void) => {
        if (state.map) {
            state.map.on(eventType, callback);
            state.eventList.push({
                event: eventType,
                callback
            });
        }
    };

    // 移除事件
    const removeMapEvent = (eventType: any) => {
        if (state.map) {
            const index = state.eventList.findIndex((item) => item.event === eventType);
            if (index > -1) {
                state.map.un(eventType, state.eventList[index].callback);
                state.eventList.splice(index, 1);
            }
        }
    };

    // 清除所有事件
    const clearMapEvent = () => {
        state.eventList.forEach((item) => removeMapEvent(item.event));
        state.eventList = [];
    };

    // 设置图层显示隐藏
    const setLayerVisible = (layerId: string, visible?: boolean) => {
        if (state.map) {
            const layer = getLayer(layerId);
            layer.setVisible(visible ?? !layer.getVisible());
        }
    };

    // 设置地图中心
    const setCenter = (center: number[]) => {
        if (state.view) {
            state.view.setCenter(center);
        }
    };

    // 设置地图层级
    const setZoom = (zoom: number) => {
        if (state.view) {
            state.view.setZoom(zoom);
        }
    };

    return {
        ...toRefs(state),
        projection,
        addLayer,
        removeLayer,
        clearLayer,
        getLayer,
        createPoint,
        clearPoint,
        getAllLayer,
        addMapEvent,
        removeMapEvent,
        clearMapEvent,
        setLayerVisible,
        setCenter,
        setZoom
    };
};
