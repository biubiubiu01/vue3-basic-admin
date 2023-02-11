<template>
    <el-breadcrumb class="breadcrumb-wrapper">
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
            <div v-if="index === breadList.length - 1">{{ item.meta.title }}</div>
            <router-link v-else :to="item.path">{{ item?.meta?.title }}</router-link>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
const route = useRoute();

const breadList = ref<any[]>([]);

const getBreadList = () => {
    const matched = route.matched.filter((item) => item.meta && item.meta.title && !item.meta.hideChildren);
    breadList.value = matched;
};

watch(
    [route],
    () => {
        getBreadList();
    },
    {
        immediate: true
    }
);
</script>

<style lang="scss" scoped>
.breadcrumb-wrapper {
    padding: 0 8px;
}

@media (max-width: 992px) {
    .breadcrumb-wrapper {
        display: none;
    }
}
</style>
