<template>
    <div class="page-func-axios">
        <base-box title="基础示例(请打开f12查看network)">
            <base-button type="primary" @click="handleGet" class="mb25">触发一个get请求(默认成功不会提示)</base-button>
            <base-button type="primary" @click="handlePost" class="mb25">触发一个post请求(成功会提示)</base-button>
            <base-button type="primary" @click="handlePut" class="mb25">触发一个put请求(默认失败会提示)</base-button>
            <base-button type="primary" @click="handleDelete" class="mb25">触发一个delete请求(失败不会提示)</base-button>
        </base-box>

        <base-box title="所有接口请求完成才会关闭loading">
            <base-button type="primary" @click="handleInitApi" class="mb25">点击进行触发请求</base-button>
        </base-box>

        <base-box title="取消重复请求">
            <base-button type="primary" @click="handleSameApi" class="mb25">触发5个重复请求</base-button>
        </base-box>

        <base-box title="请求错误重试">
            <base-button type="primary" @click="handleRetry" class="mb25">错误后会重新请求三次</base-button>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { getTestApi, postTestApi, putTestApi, deleteTestApi, sameTestApi, retryApi } from "@/api/test";

const handleGet = async () => {
    await getTestApi();
};

const handlePost = async () => {
    await postTestApi();
};

const handlePut = async () => {
    await putTestApi();
};

const handleDelete = async () => {
    await deleteTestApi();
};

const handleInitApi = async () => {
    handleGet();
    setTimeout(() => {
        handleGet();
    }, 100);
    setTimeout(() => {
        handleGet();
    }, 200);
    setTimeout(() => {
        handleGet();
    }, 300);
    setTimeout(() => {
        handleGet();
    }, 400);
};

const handleSameApi = () => {
    sameTestApi();
    sameTestApi();
    sameTestApi();
    sameTestApi();
    sameTestApi();
};

const handleRetry = () => {
    retryApi();
};
</script>

<style lang="scss" scope></style>
