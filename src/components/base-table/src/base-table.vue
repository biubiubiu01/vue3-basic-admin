<template>
    <div class="base-table">
        <el-table row-key="id" v-bind="getPropsValue" v-loading="loading" header-cell-class-name="base-table-header-cell">
            <el-table-column fixed="left" type="expand" v-if="expandShow">
                <template #default="scope">
                    <slot name="expand" :scope="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column :selectable="handleSelectable" fixed="left" type="selection" width="50" v-if="selectionShow" />
            <el-table-column label="序号" fixed="left" type="index" width="60" align="center" v-if="indexShow" />
            <template v-if="!$slots.default">
                <el-table-column
                    v-for="(item, index) in columnList"
                    :key="index"
                    :column-key="item.fieldName"
                    :prop="item.fieldName"
                    :label="item.fieldDesc"
                    :width="item.width"
                    :fixed="item.fixed"
                    :min-width="item.minWidth || 80"
                    :show-overflow-tooltip="item.showOverflowTooltip"
                    :align="item.align || 'center'"
                >
                    <template #header="scope">
                        <template v-if="!$slots.header">
                            <span v-if="item.required" class="base-table-required"> * </span>
                            {{ scope.column.label }}
                        </template>
                        <slot name="header" :scope="scope" :column="item"></slot>
                    </template>
                    <template #default="scope">
                        <template v-if="item.formType === FormTypeEnum.SLOT">
                            <slot name="tableColumn" :scope="scope" :column="item"></slot>
                        </template>
                        <template v-else-if="item.formType === FormTypeEnum.TAG">
                            <el-tag
                                v-for="tag in getTableColumnValue(item, scope)?.split(',')"
                                :key="tag"
                                :type="isFunction(item.type) ? item.type(scope.row) : item.type"
                                >{{ tag }}</el-tag
                            >
                        </template>
                        <template v-else-if="item.formType === FormTypeEnum.SWITCH">
                            <el-switch
                                v-model="scope.row[item.fieldName]"
                                :active-value="1"
                                :inactive-value="0"
                                :before-change="item?.callFunction?.bind(null, scope.row)"
                            />
                        </template>
                        <template v-else-if="item.formType === FormTypeEnum.OPERATION">
                            <base-table-operation :operation="item.operation" :scope="scope" />
                        </template>
                        <template v-else-if="isUndefined(item.formType)">
                            {{ getTableColumnValue(item, scope) }}
                        </template>
                        <template v-else>
                            <component
                                v-model="scope.row[item.fieldName]"
                                :is="componentMap.get(item.formType as FormTypeEnum)"
                                class="w100"
                                v-bind="item.config"
                            />
                        </template>
                    </template>
                </el-table-column>
            </template>
            <template #empty>
                <el-empty description="暂无数据" :image-size="64" v-if="!$slots.empty" />
                <slot name="empty"></slot>
            </template>
        </el-table>
        <base-pagination
            v-if="showPagination"
            v-model:current-page="pagination[currentKey]"
            v-model:page-size="pagination[pageSizeKey]"
            v-bind="getPaginationValue"
            @current-change="handleCurrentChange"
            @size-change="handleCurrentChange"
            :class="`base-table-pagination mt10 base-table-pagination-${position}`"
        />
    </div>
</template>

<script lang="ts" setup>
import tableProps, { extraProps } from "./props";
import { omit, isUndefined, isFunction } from "@/utils";
import { FormTypeEnum, componentMap } from "@/enums/componentEnum";

const props = defineProps(tableProps);

const emit = defineEmits(["selectable", "pagination-change"]);

const attrs = useAttrs();

const getPropsValue = computed(() => {
    const newProps = { ...omit(props, Object.keys(extraProps)) } as any;
    return { ...newProps, ...attrs };
});

const getPaginationValue = computed(() => {
    const newProps = props.pagination;
    if (!newProps.total) {
        newProps.total = props.data?.length || 0;
    }
    return { ...newProps };
});

const getTableColumnValue = computed(() => {
    return (item: any, scope: any) => {
        return isFunction(item.formatter) ? item.formatter(scope.row) : scope.row[item.fieldName];
    };
});

const columnList = computed(() => {
    return props.columns.filter((item) => isUndefined(item.active) || item.active);
});

const handleSelectable = (row: any, index: Number) => {
    let flag = true;
    emit("selectable", { row, index }, (bool: boolean) => {
        flag = bool;
    });
    return flag;
};

const handleCurrentChange = () => {
    const { pageSizeKey, currentKey } = props.pagination;
    emit("pagination-change", {
        [pageSizeKey]: props.pagination[pageSizeKey],
        [currentKey]: props.pagination[currentKey]
    });
};
</script>

<style lang="scss" scoped>
@use "./base-table.scss";
</style>
