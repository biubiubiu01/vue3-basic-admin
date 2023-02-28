<template>
    <div class="com-table-container">
        <base-box title="基础table">
            <base-table :columns="TableColumn" :data="tableData" v-bind="tableConfig"> </base-table>
            <div class="mt30">
                <el-checkbox-group v-model="checkList" @change="changeCheck">
                    <el-checkbox v-for="item in TableCheckList" :key="item.fieldName" :label="item.fieldName">{{ item.fieldDesc }}</el-checkbox>
                </el-checkbox-group>
            </div>
        </base-box>

        <base-box title="自定义table">
            <base-table :columns="TableColumn2" :data="tableData2">
                <template #tableColumn="{ scope, column }">
                    <div v-if="column.fieldName === 'img'">
                        <el-image
                            :src="scope.row.img"
                            :zoom-rate="1.2"
                            :preview-src-list="imgList"
                            preview-teleported
                            fit="cover"
                            style="width: 120px; height: 80px"
                        />
                    </div>
                </template>
            </base-table>
        </base-box>

        <base-box title="列字段配置">
            <template #extra>
                <base-column-setting v-model:table-columns="table3Config.columns" :show-filter="false" />
            </template>
            <base-table :columns="table3Config.columns" :data="tableData2" show-setting>
                <template #tableColumn="{ scope, column }">
                    <div v-if="column.fieldName === 'img'">
                        <el-image
                            :src="scope.row.img"
                            :zoom-rate="1.2"
                            :preview-src-list="imgList"
                            preview-teleported
                            fit="cover"
                            style="width: 120px; height: 80px"
                        />
                    </div>
                </template>
            </base-table>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { TableColumn, TableColumn2, TableCheckList } from "../colums";

const tableData = ref([
    {
        id: "123",
        payName: "马保国",
        status: "已付款",
        time: "2023-02-20",
        money: 1314,
        remark: "闪电五连鞭"
    },
    {
        id: "124",
        payName: "Kenneth",
        status: "已评价",
        time: "2023-02-20",
        money: 2086,
        remark: "到了打电话"
    }
]);

const tableData2 = ref([
    {
        id: "123",
        status: "成功",
        img: "https://i.328888.xyz/2023/02/28/eu4MP.jpeg"
    },
    {
        id: "124",
        status: "成功,Nice",
        img: "https://i.328888.xyz/2023/02/28/euUmt.jpeg"
    }
]);

const table3Config = reactive({
    columns: TableColumn2
});

const imgList = [
    "https://i.328888.xyz/2023/02/28/eu4MP.jpeg",
    "https://i.328888.xyz/2023/02/28/euUmt.jpeg",
    "https://i.328888.xyz/2023/02/28/euDtX.jpeg"
];
const checkList = ref(["showHeader", "highlightCurrentRow"]);

const tableConfig = reactive<any>({
    stripe: false,
    border: false,
    showSummary: false,
    indexShow: false,
    showPagination: false,
    selectionShow: false,
    showHeader: true,
    highlightCurrentRow: true
});

const changeCheck = (val: any) => {
    for (const i in tableConfig) {
        tableConfig[i] = val.includes(i);
    }
};
</script>

<style lang="scss" scoped></style>
