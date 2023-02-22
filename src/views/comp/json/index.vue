<template>
    <div class="com-json-container">
        <base-box title="基础示例"> <base-json :data="jsonData" /></base-box>
    </div>
</template>

<script lang="ts" setup>
const jsonData = [
    {
        name: "高明",
        type: "text",
        time: "刚刚",
        remark: "发布了一条动态",
        content: "我本将心向明月，奈何明月照沟渠。"
    },
    {
        name: "不知名用户",
        type: "text",
        time: "15分钟前",
        remark: "关注了张三",
        content: ""
    },
    {
        name: "马保国",
        type: "image",
        time: "20分钟前",
        remark: "发布了一组照片"
    },
    {
        name: "李白",
        type: "text",
        time: "35分钟前",
        remark: "发布了《清平调·其一》",
        content: `云想衣裳花想容，春风拂槛露华浓。
                  若非群玉山头见，会向瑶台月下逢。`
    },
    {
        name: "王勃",
        type: "text",
        time: "35分钟前",
        remark: "发布了一条动态",
        content: "落霞与孤鹜齐飞，秋水共长天一色。"
    },
    {
        name: "Admin",
        type: "text",
        time: "45分钟前",
        remark: "实现了系统基本功能",
        content: "基础功能已经实现，欢迎使用或提bug啊~"
    }
];
</script>

<style lang="scss" scoped></style>
