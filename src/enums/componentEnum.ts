import BaseInput from "@/components/base-input/base-input.vue";
import BaseSelect from "@/components/base-select/base-select.vue";
import BaseInputNumber from "@/components/base-input-number/base-input-number.vue";
import BaseIconPicker from "@/components/base-icon/base-icon-picker.vue";
import BaseDatePicker from "@/components/base-date-picker/base-date-picker.vue";
import BaseTinymce from "@/components/base-tinymce/base-tinymce.vue";
import BaseVditor from "@/components/base-vditor/base-vditor.vue";
import { ElSwitch, ElColorPicker } from "element-plus";
import type { Component } from "vue";

/**
 * formType 自定义类型
 */
export enum FormTypeEnum {
    INPUT = "input",
    NUMBER = "number",
    DATE = "date",
    SWITCH = "switch",
    SELECT = "select",
    TREE_SELECT = "tree-select",
    TAG = "tag",
    SLOT = "slot",
    OPERATION = "operation",
    TINYMCE = "tinymce",
    VDITOR = "vditor",
    ICON = "icon",
    COLOR = "color"
}

const componentMap = new Map<FormTypeEnum, Component>();

componentMap.set(FormTypeEnum.INPUT, BaseInput);
componentMap.set(FormTypeEnum.NUMBER, BaseInputNumber);
componentMap.set(FormTypeEnum.SELECT, BaseSelect);
componentMap.set(FormTypeEnum.SWITCH, ElSwitch);
componentMap.set(FormTypeEnum.ICON, BaseIconPicker);
componentMap.set(FormTypeEnum.DATE, BaseDatePicker);
componentMap.set(FormTypeEnum.TINYMCE, BaseTinymce);
componentMap.set(FormTypeEnum.VDITOR, BaseVditor);
componentMap.set(FormTypeEnum.COLOR, ElColorPicker);

export { componentMap };
