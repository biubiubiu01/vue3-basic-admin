<template>
    <router-link to="/" class="flex-center side-logo">
        <base-icon svg-name="empty" :size="30" color="#fff" :hover="false" />
        <div class="side-logo-title text-hidden flex-auto" v-if="!collapse">{{ title }}</div>
    </router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    collapse: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped></style>
