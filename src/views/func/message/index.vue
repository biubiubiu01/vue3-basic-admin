<template>
    <div class="page-func-message">
        <base-box title="函数触发message">
            <base-button type="info" @click="messageInfo('默认提示')">默认</base-button>
            <base-button type="primary" @click="messageSuccess('成功提示')">成功</base-button>
            <base-button type="warning" @click="messageWarning('警告提示')">警告</base-button>
            <base-button type="danger" @click="messageError('失败提示')">失败</base-button>
        </base-box>
        <base-box title="hook方式触发message">
            <base-button type="info" @click="info('默认提示')">默认</base-button>
            <base-button type="primary" @click="success('成功提示')">成功</base-button>
            <base-button type="warning" @click="warning('警告提示')">警告</base-button>
            <base-button type="danger" @click="error('失败提示')">失败</base-button>
        </base-box>
        <base-box title="多个确认框">
            <base-button type="primary" @click="confirm">点击弹出确认框</base-button>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
import { useMessage } from "@/hooks";
import { messageSuccess, messageError, messageInfo, messageWarning, messageBox } from "@/utils/message";

const { success, warning, error, info } = useMessage();

const confirm = async () => {
    await messageBox("你好");
    await messageBox("很高兴遇见你");
    await messageBox("再见");
};
</script>

<style lang="scss" scope></style>
