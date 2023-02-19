<template>
    <div class="com-button-container">
        <base-box title="按钮样式">
            <base-button v-for="item in typeList" :key="item" :type="item">{{ item }}</base-button>
        </base-box>
        <base-box title="plain按钮">
            <base-button v-for="item in typeList" :key="item" plain :type="item">{{ item }}</base-button>
        </base-box>
        <base-box title="round按钮">
            <base-button v-for="item in typeList" :key="item" round :type="item">{{ item }}</base-button>
        </base-box>
        <base-box title="文字按钮(link)">
            <base-button v-for="item in typeList" :key="item" link :type="item">{{ item }}</base-button>
        </base-box>
        <base-box title="文字按钮(text)">
            <base-button v-for="item in typeList" :key="item" text :type="item">{{ item }}</base-button>
        </base-box>
        <base-box title="disabled按钮">
            <base-button v-for="item in typeList" :key="item" disabled :type="item">{{ item }}</base-button>
        </base-box>
        <base-box title="loading按钮">
            <base-button v-for="item in typeList" :key="item" loading :type="item">{{ item }}</base-button>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
const typeList = ["default", "primary", "success", "info", "warning", "danger"];
</script>

<style lang="scss" scope></style>
