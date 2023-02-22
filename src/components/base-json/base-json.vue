<template>
    <VueJsonPretty :deep="3" :showLength="true" :showLineNumber="true" :showIcon="true" v-bind="$attrs" :data="data" />
</template>

<script lang="ts" setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

const props = defineProps({
    data: Object
});
</script>
