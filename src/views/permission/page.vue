<template>
    <div class="">
        <base-box title="基础示例">
            <div class="test">该页面仅admin可见</div>
        </base-box>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.test {
    height: 300px;
    line-height: 300px;
    color: red;
    font-size: 36px;
}
</style>
