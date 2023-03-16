<template>
    <div class="com-virtualscroll-container">
        <base-box title="基础示例">
            <base-virtual-list :total="data.length" :data="data" :item-height="50" :cache="5">
                <template #default="{ item, style }">
                    <div class="item" :style="style">
                        {{ item }}
                    </div>
                </template>
            </base-virtual-list>
        </base-box>
    </div>
</template>

<script lang="ts" setup>
const data = ref<any[]>([]);

for (let i = 0; i <= 100000; i++) {
    data.value.push(i);
}
</script>

<style lang="scss" scoped>
.item {
    line-height: 50px;
    text-align: center;
}
</style>
