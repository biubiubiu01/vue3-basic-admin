<script lang="tsx">
import { PropType } from "vue";
import { OperationType } from "./types";

export default defineComponent({
    props: {
        operation: {
            type: Array as PropType<OperationType[]>
        },
        scope: {
            type: Object
        }
    },
    setup(props) {
        const renderButton = (item: any) => {
            return (
                <base-button type="primary" link onClick={() => !item.confirm && item.callFunction(props.scope)}>
                    <base-icon icon={item.icon} class="mr5" />
                    {item.label}
                </base-button>
            );
        };

        const renderConfirmButton = (item: any) => {
            return (
                <el-popconfirm title={`是否确认${item.label}?` || item.tip} onConfirm={() => item.callFunction(props.scope)}>
                    {{
                        reference: () => renderButton(item)
                    }}
                </el-popconfirm>
            );
        };

        const renderDropMenu = () => {
            const extraOperation = props.operation?.slice(2);
            return (
                <el-dropdown-menu>
                    {extraOperation?.map((item) => (
                        <el-dropdown-item>{renderButton(item)}</el-dropdown-item>
                    ))}
                </el-dropdown-menu>
            );
        };

        return () => {
            const defaultOperation = props.operation?.slice(0, 2).map((item) => {
                return item.confirm ? renderConfirmButton(item) : renderButton(item);
            });
            const moreOperation =
                props.operation!.length > 2
                    ? [
                          <el-dropdown
                              v-slots={{
                                  dropdown: () => renderDropMenu()
                              }}
                          >
                              <base-icon icon="svg-more" class="pointer more-icon" size={20} />
                          </el-dropdown>
                      ]
                    : [];

            return <el-space>{defaultOperation?.concat(moreOperation)}</el-space>;
        };
    }
});
</script>

<style scoped>
.more-icon {
    color: var(--el-color-primary);
}
</style>
