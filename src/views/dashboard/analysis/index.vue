<template>
    <div class="page-analysis-container hidden">
        <CardList :loading="loading" />
        <TurnoverAnalysis :loading="loading" class="mt20" />
        <DetailAnalysis :loading="loading" class="mt20" />
    </div>
</template>

<script lang="ts" setup>
import CardList from "./components/CardList.vue";
import TurnoverAnalysis from "./components/TurnoverAnalysis.vue";
import DetailAnalysis from "./components/DetailAnalysis.vue";

const loading = ref(true);

setTimeout(() => {
    loading.value = false;
}, 1200);
</script>

<style lang="scss" scoped></style>
