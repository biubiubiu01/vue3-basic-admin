<template>
    <div class="com-echarts-graph-container hidden">
        <base-box title="PHP天下第一">
            <base-charts type="graph" :options="GraphOptions1" height="600px" />
        </base-box>
        <base-box title="海贼王人物关系图">
            <base-charts type="graph" :options="GraphOptions2" height="800px" />
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { GraphOptions1, GraphOptions2 } from "../column";
</script>

<style lang="scss" scoped></style>
