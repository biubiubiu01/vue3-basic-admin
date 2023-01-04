import type { Component } from "vue";
import { FilterTypeEnum } from "./type";

import BaseInput from "@/components/base-input/base-input.vue";
import BaseSelect from "@/components/base-select/base-select.vue";
import BaseInputNumber from "@/components/base-input-number/base-input-number.vue";

const componentMap = new Map<FilterTypeEnum, Component>();

componentMap.set(FilterTypeEnum.input, BaseInput);
componentMap.set(FilterTypeEnum.select, BaseSelect);
componentMap.set(FilterTypeEnum.number, BaseInputNumber);

export { componentMap };
