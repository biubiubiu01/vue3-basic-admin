<template>
    <router-link to="/" class="flex-center side-logo">
        <base-icon svg-name="logo" :size="30" color="#fff" />
        <div class="side-logo-title text-hidden flex-auto">{{ title }}</div>
    </router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: ""
    }
});
</script>

<style scoped></style>
