<script lang="tsx">
import selectProps, { extraProps } from "./props";
import { useVModel } from "@vueuse/core";
import { omit, isArray, isEmpty, isFunction } from "@/utils";
export default defineComponent({
    props: selectProps,
    emits: ["update:modelValue", "update:modelLabel", "change"],
    setup(props, { attrs, emit, slots }) {
        const selectValue = useVModel(props, "modelValue", emit, { defaultValue: "" });
        const selectLabel = useVModel(props, "modelLabel", emit, { defaultValue: "" });
        const baseSelectRef = ref();
        const selectOptions = ref(props.options);

        const getPropsValue = computed(() => {
            const newProps = { ...omit(props, Object.keys(extraProps)) } as any;
            return { ...newProps, ...attrs, collapseTags: false };
        });

        onMounted(() => {
            props.multiple && renderTag();
            props.init && getSelectApi();
        });

        const handleChange = (val: any) => {
            const { labelInValue, labelKey, valueKey, multiple, valueObject } = props;
            let newVal = isArray(val) ? (val as string[]) : [val];
            if (valueObject) {
                newVal = newVal.map((item) => item[valueKey]);
            }
            const currentOption = unref(selectOptions).filter((item) => newVal.includes(item[valueKey]));
            selectLabel.value = multiple ? currentOption?.map((item) => item[labelKey]) : currentOption[0]?.[labelKey];

            if (labelInValue) {
                emit("change", multiple ? currentOption || [] : currentOption[0] || {});
                return;
            }
            emit("change", val);
        };

        const handleVisibleChange = async (visible: boolean) => {
            if (visible && unref(selectOptions).length === 0) {
                getSelectApi();
            }
        };

        const getSelectApi = async () => {
            const { params, api } = props;
            if (!isFunction(api)) return;
            const res = await api(params);
            selectOptions.value = res.data?.list || res.data;
        };

        const renderTag = () => {
            if (!unref(baseSelectRef)) {
                return;
            }
            const tag = document.createElement("span");
            tag.style.display = "none";
            tag.className = "el-tag el-tag--info el-tag--default el-tag--light el-tag-max-count";
            unref(baseSelectRef).$refs.tags?.children?.[0].appendChild(tag);
        };

        const renderMaxTagCount = () => {
            nextTick(() => {
                if (!unref(baseSelectRef)) {
                    return;
                }
                const { maxTagCount, maxTagPlaceholder } = props;
                Array.from(unref(baseSelectRef).$refs.tags?.children?.[0].children || [])
                    .filter((item: any) => {
                        if (item.className.includes("el-tag-max-count")) {
                            const selectCount = unref(selectValue) as string[];
                            if (selectCount.length > maxTagCount) {
                                item.style.display = "inline-flex";
                                item.innerHTML = `<span class="el-tag__content"><span class="el-select__tags-text">
                                    ${
                                        maxTagPlaceholder
                                            ? maxTagPlaceholder(selectCount.length - maxTagCount)
                                            : `+${selectCount.length - maxTagCount}`
                                    }
                                    </span></span>`;
                            } else {
                                item.style.display = "none";
                            }
                            return false;
                        }
                        return true;
                    })
                    .forEach((item: any, index) => {
                        if (index >= maxTagCount) {
                            item.style.display = "none";
                        } else {
                            item.style.display = "inline-flex";
                        }
                    });
            });
        };

        const renderText = () => {
            const { valueObject, modelValue, valueKey, labelKey } = props;
            let labelList = [];
            const newVal = isArray(modelValue) ? (modelValue as string[]) : [modelValue];
            if (valueObject) {
                labelList = newVal.map((item: any) => item[labelKey]);
            } else {
                newVal.forEach((item) => {
                    const optionFind = unref(selectOptions).find((v) => v[valueKey] === item);
                    labelList.push(optionFind ? optionFind[labelKey] : item);
                });
            }
            return <span>{labelList.join()}</span>;
        };

        const renderSelect = () => {
            return (
                <el-select
                    ref={baseSelectRef}
                    {...getPropsValue.value}
                    vModel={selectValue.value}
                    onChange={handleChange}
                    onVisible-change={handleVisibleChange}
                >
                    {getOptionRender()}
                </el-select>
            );
        };

        const renderTreeSelect = () => {
            return (
                <el-tree-select
                    ref={baseSelectRef}
                    {...getPropsValue.value}
                    vModel={selectValue.value}
                    check-strictly
                    default-expand-all
                    onVisible-change={handleVisibleChange}
                    data={selectOptions.value}
                />
            );
        };

        const getOptionRender = () => {
            const { valueKey, labelKey, valueObject, modelValue, modelLabel, multiple } = props;
            if (slots.default) {
                return slots.default();
            }
            const optionList = unref(selectOptions).map((item: any) => {
                return (
                    <el-option key={item[valueKey]} label={item[labelKey]} value={valueObject ? item : item[valueKey]} disabled={item.disabled}>
                        {slots.option?.({ scope: item })}
                    </el-option>
                );
            });
            if (
                !multiple &&
                !valueObject &&
                !isEmpty(modelValue) &&
                (unref(selectOptions).length === 0 || !unref(selectOptions).find((item: any) => item[valueKey] === modelValue))
            ) {
                optionList.push(<el-option label={modelLabel} value={modelValue} />);
            }
            return optionList;
        };

        return () => {
            const { text, tree, multiple } = props;
            if (multiple) {
                renderMaxTagCount();
            }
            if (text) {
                return renderText();
            }
            if (tree) {
                return renderTreeSelect();
            }
            return renderSelect();
        };
    }
});
</script>

<style scoped></style>
