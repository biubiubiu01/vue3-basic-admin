<template>
    <div class="page-func-drag">
        <base-box title="基础示例">
            <el-row :gutter="24">
                <el-col :span="12">
                    <Draggable v-model="state.list1" :animation="100" item-key="id">
                        <template #item="{ element }">
                            <div class="list-item">
                                {{ element.name }}
                            </div>
                        </template>
                    </Draggable>
                </el-col>
                <el-col :span="12">
                    <base-json :data="state.list1" :showLineNumber="false" :showIcon="false"></base-json>
                </el-col>
            </el-row>
        </base-box>

        <base-box title="左右拖拽">
            <el-row :gutter="24">
                <el-col :span="6">
                    <Draggable v-model="state.list2" :animation="100" item-key="id" group="people">
                        <template #item="{ element }">
                            <div class="list-item">
                                {{ element.name }}
                            </div>
                        </template>
                    </Draggable>
                </el-col>

                <el-col :span="6">
                    <Draggable v-model="state.list3" :animation="100" item-key="id" group="people">
                        <template #item="{ element }">
                            <div class="list-item">
                                {{ element.name }}
                            </div>
                        </template>
                    </Draggable>
                </el-col>
                <el-col :span="6">
                    <base-json :data="state.list2" :showLineNumber="false" :showIcon="false"></base-json>
                </el-col>
                <el-col :span="6">
                    <base-json :data="state.list3" :showLineNumber="false" :showIcon="false"></base-json>
                </el-col>
            </el-row>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import Draggable from "vuedraggable";

const state = reactive({
    list1: [
        {
            name: "Vue",
            id: 1
        },
        {
            name: "React",
            id: 2
        },
        {
            name: "Angular",
            id: 3
        }
    ],
    list2: [
        {
            name: "left1",
            id: 1
        },
        {
            name: "left2",
            id: 2
        },
        {
            name: "left3",
            id: 3
        }
    ],
    list3: [
        {
            name: "right1",
            id: 4
        },
        {
            name: "right2"
        }
    ]
});
</script>

<style lang="scss" scope>
.list-item {
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: move;
    & + .list-item {
        border-top: 0;
    }
}
</style>
