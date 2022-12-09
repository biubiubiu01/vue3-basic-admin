import type { Column } from "@/components/base-table";

export interface ColumnState {
    dialogTitle: string;
    checkAll: boolean;
    checkedList: string[];
    checkColumnList: Column[];
    isIndeterminate: boolean;
}

export * from "@/components/base-table";
