<script lang="tsx">
export default defineComponent({
    props: {
        icon: {
            type: String
        },
        title: {
            type: String
        }
    },
    setup(props) {
        return () => {
            return (
                <div class="text-hidden" title={props.title}>
                    <base-icon icon={props.icon} hover={false} />
                    {props.title}
                </div>
            );
        };
    }
});
</script>

<style scoped></style>
