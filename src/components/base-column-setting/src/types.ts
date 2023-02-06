import type { Column } from "@/components/base-table";

export interface ColumnState {
    dialogType: number;
    checkAll: boolean;
    checkedList: string[];
    checkColumnList: Column[];
    isIndeterminate: boolean;
}

export * from "@/components/base-table";
