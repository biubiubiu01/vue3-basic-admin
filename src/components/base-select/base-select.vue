<script lang="tsx">
import selectProps, { extraProps } from "./props";
import { useVModel } from "@vueuse/core";
import { omit, isArray, isEmpty } from "@/utils";
export default defineComponent({
    props: selectProps,
    emits: ["update:modelValue", "update:modelLabel", "change"],
    setup(props, { attrs, emit, slots }) {
        const selectValue = useVModel(props, "modelValue", emit, { defaultValue: "" });
        const selectLabel = useVModel(props, "modelLabel", emit, { defaultValue: "" });
        const baseSelectRef = ref();

        const getPropsValue = computed(() => {
            const newProps = { ...omit(props, Object.keys(extraProps)) } as any;
            return { ...newProps, ...attrs, collapseTags: false };
        });

        onMounted(() => {
            props.multiple && renderTag();
        });

        const handleChange = (val: any) => {
            const { options, labelInValue, labelKey, valueKey, multiple, valueObject } = props;
            let newVal = isArray(val) ? (val as string[]) : [val];
            if (valueObject) {
                newVal = newVal.map((item) => item[valueKey]);
            }
            const currentOption = options.filter((item) => newVal.includes(item[valueKey]));
            selectLabel.value = multiple ? currentOption?.map((item) => item[labelKey]) : currentOption[0]?.[labelKey];

            if (labelInValue) {
                emit("change", multiple ? currentOption || [] : currentOption[0] || {});
                return;
            }
            emit("change", val);
        };

        const renderTag = () => {
            if (!unref(baseSelectRef)) {
                return;
            }
            const tag = document.createElement("span");
            tag.style.display = "none";
            tag.className = "el-tag el-tag--info el-tag--default el-tag--light el-tag-max-count";
            unref(baseSelectRef).$refs.tags.children[0].appendChild(tag);
        };

        const renderMaxTagCount = () => {
            nextTick(() => {
                if (!unref(baseSelectRef)) {
                    return;
                }
                const { maxTagCount, maxTagPlaceholder } = props;
                Array.from(unref(baseSelectRef).$refs.tags.children[0].children)
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
            const { valueObject, options, modelValue, valueKey, labelKey, textType } = props;
            let labelList = [];
            const newVal = isArray(modelValue) ? (modelValue as string[]) : [modelValue];
            if (valueObject) {
                labelList = newVal.map((item: any) => item[labelKey]);
            } else {
                newVal.forEach((item) => {
                    const optionFind = options.find((v) => v[valueKey] === item);
                    if (optionFind) {
                        labelList.push(optionFind[labelKey]);
                    } else {
                        labelList.push(item);
                    }
                });
            }
            if (textType === "text") {
                return <span>{labelList.join()}</span>;
            } else if (textType === "tag") {
                return labelList.map((item) => (
                    <el-space size={8}>
                        <el-tag>{item}</el-tag>
                    </el-space>
                ));
            }
        };

        const renderSelectV2 = () => {
            <el-select-v2 ref={baseSelectRef} {...getPropsValue.value} vModel={selectValue.value} onChange={handleChange}>
                {getOptionRender()}
            </el-select-v2>;
        };

        const renderSelect = () => {
            return (
                <el-select ref={baseSelectRef} {...getPropsValue.value} vModel={selectValue.value} onChange={handleChange}>
                    {getOptionRender()}
                </el-select>
            );
        };

        const getOptionRender = () => {
            const { options, valueKey, labelKey, valueObject, modelValue, modelLabel, multiple } = props;
            if (slots.default) {
                return slots.default();
            }
            const optionList = options.map((item: any) => {
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
                (options.length === 0 || !options.find((item: any) => item[valueKey] === modelValue))
            ) {
                optionList.push(<el-option label={modelLabel} value={modelValue} />);
            }
            return optionList;
        };

        return () => {
            const { virtual, text, multiple } = props;
            multiple && renderMaxTagCount();
            return text ? renderText() : virtual ? renderSelectV2() : renderSelect();
        };
    }
});
</script>

<style scoped></style>
