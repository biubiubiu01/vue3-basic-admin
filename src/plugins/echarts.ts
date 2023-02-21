import * as echarts from "echarts/core";
import "echarts-wordcloud";
import "echarts-liquidfill";

import { BarChart, LineChart, PieChart, MapChart, PictorialBarChart, RadarChart, ScatterChart, GraphChart, HeatmapChart } from "echarts/charts";

import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    PolarComponent,
    AriaComponent,
    ParallelComponent,
    LegendComponent,
    RadarComponent,
    ToolboxComponent,
    DataZoomComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GraphicComponent
} from "echarts/components";

import { CanvasRenderer } from "echarts/renderers";

echarts.use([
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    PolarComponent,
    AriaComponent,
    ParallelComponent,
    BarChart,
    LineChart,
    PieChart,
    MapChart,
    RadarChart,
    CanvasRenderer,
    PictorialBarChart,
    RadarComponent,
    ToolboxComponent,
    DataZoomComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GraphicComponent,
    ScatterChart,
    GraphChart,
    HeatmapChart
]);

export default echarts;
