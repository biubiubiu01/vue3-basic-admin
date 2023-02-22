<template>
    <div class="page-func-drag-resize">
        <base-box height="600px" class="grid">
            <base-drag-resize
                v-for="(item, index) in list"
                :key="index"
                :w="item.w"
                :h="item.h"
                :x="item.x"
                :y="item.y"
                class="resize-item flex-center"
            >
                <span class="index">{{ index + 1 }}</span>
            </base-drag-resize>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
const list = ref([
    {
        w: 150,
        h: 150,
        x: 0,
        y: 0
    },
    {
        w: 150,
        h: 150,
        x: 200,
        y: 100
    }
]);
</script>

<style lang="scss" scope>
.grid {
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuXzAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIuODA4OTg4NzY0MDQ0OTQwNSIgeT0iMC4wNTYxNzk3NzUyODA4OTU2OCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIj48cGF0aCBkPSJNIDEwIDAgSDAgTTAgMCBWMCAxMCIgc3Ryb2tlPSIjRTdFOEVBIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PHBhdHRlcm4gaWQ9InBhdHRlcm5fMSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iNDIuODA4OTg4NzY0MDQ0OTQiIHk9IjAuMDU2MTc5Nzc1MjgwODk1NjgiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTSA1MCAwIEgwIE0wIDAgVjAgNTAiIHN0cm9rZT0iI0NCQ0VEMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm5fMCkiLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm5fMSkiLz48L3N2Zz4=");
    .resize-item {
        background-color: var(--el-color-primary);

        .index {
            font-size: 35px;
            color: #fff;
        }
    }
}
</style>
