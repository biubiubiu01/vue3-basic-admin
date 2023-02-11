<template>
    <div class="page-redirect-container"></div>
</template>

<script lang="ts" setup>
import { omit } from "@/utils";
import { useLoading } from "@/hooks";

const route = useRoute();
const router = useRouter();

const { open, close } = useLoading({ modal: false });
open();

setTimeout(() => {
    close();
    router.replace({
        path: route.query.path as string,
        query: {
            ...omit(route.query, "path")
        }
    });
}, 700);
</script>

<style scoped></style>
