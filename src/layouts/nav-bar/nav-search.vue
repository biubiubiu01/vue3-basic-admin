<template>
    <el-tooltip placement="bottom" content="搜索">
        <base-icon svg-name="search" class="pointer box-hover action-item" :size="20" @click="showDialog = true" />
    </el-tooltip>
    <base-dialog v-model:visible="showDialog" top="80px" title="" class="search-dialog" min-height="200px" width="750px" closeOnPressEscape>
        <base-input v-model="searchKey" placeholder="搜索" prefix-icon="search" size="large" />
        <div class="nav-search-list mt15" v-if="searchList.length > 0">
            <div
                class="nav-search-item flex-row-center justify-between"
                :class="{ active: index === activeIndex }"
                v-for="(item, index) in searchList"
                :key="item.name"
                @click="handleRedirect"
                @mouseenter="handleMouseenter(index)"
            >
                <div class="flex-row-center">
                    <base-icon :icon="item.meta.icon" :size="20" />
                    <span class="nav-search-item-title">{{ item.meta.title }}</span>
                </div>
                <base-icon icon="svg-confirm" :size="20" />
            </div>
        </div>
        <el-empty description="暂无搜索结果" :image-size="64" v-else />
        <template #footer>
            <el-space :size="10" class="mt25">
                <div class="flex-row-center">
                    <base-icon icon="svg-confirm" class="nav-search-icon" :size="19" />
                    <span>确认</span>
                </div>
                <div class="flex-row-center">
                    <base-icon icon="svg-up" class="nav-search-icon" :size="19" />
                    <base-icon icon="svg-down" class="nav-search-icon" :size="19" />
                    <span>切换</span>
                </div>
                <div class="flex-row-center">
                    <base-icon icon="svg-esc" class="nav-search-icon" :size="19" />
                    <span>关闭</span>
                </div>
            </el-space>
        </template>
    </base-dialog>
</template>

<script lang="ts" setup>
import { usePermissionStoreWithOut } from "@/stores/modules/permission";
import { useRouter } from "vue-router";
import { deepClone } from "@/utils";
import { onKeyStroke, useDebounceFn } from "@vueuse/core";

const showDialog = ref(false);
const searchKey = ref("");
const activeIndex = ref(-1);

const searchList = ref<any[]>([]);

const router = useRouter();

const { getRoute } = usePermissionStoreWithOut();

const searchMenu = useDebounceFn(handleSearchMenu, 250);

function handleSearchMenu(val: string) {
    const keyword = val?.trim().toLocaleLowerCase();
    if (!keyword) {
        searchList.value = [];
        return;
    }
    searchList.value = filterMenu(deepClone(unref(getRoute)), keyword);
    activeIndex.value = unref(searchList).length > 0 ? 0 : -1;
}

function filterMenu(menuList: any[], keyword: string, parent?: any) {
    const res: any[] = [];
    menuList.forEach((item) => {
        Object.assign(item.meta, {
            icon: parent ? parent.meta.icon : item.meta.icon,
            title: parent ? `${parent.meta.title} > ${item.meta.title}` : item.meta.title
        });
        if (!item.meta.hidden && item.meta.title.toLocaleLowerCase().includes(keyword)) {
            res.push(item);
        }
        if (!item.meta.hideChildren && item.children) {
            res.push(...filterMenu(item.children, keyword, item));
        }
    });
    return res;
}

function handleRedirect() {
    if (unref(searchList).length === 0 || unref(activeIndex) < 0) {
        return;
    }
    showDialog.value = false;
    router.push({
        name: unref(searchList)[unref(activeIndex)].name
    });
    reset();
}

function handleMouseenter(index: number) {
    activeIndex.value = Number(index);
}

function handleUp() {
    if (!searchList.value.length) return;
    activeIndex.value--;
    if (activeIndex.value < 0) {
        activeIndex.value = searchList.value.length - 1;
    }
}

function handleDown() {
    if (!searchList.value.length) return;
    activeIndex.value++;
    if (activeIndex.value > searchList.value.length - 1) {
        activeIndex.value = 0;
    }
}

function reset() {
    searchKey.value = "";
    searchList.value = [];
}

onKeyStroke("Enter", handleRedirect);

onKeyStroke("ArrowUp", handleUp);

onKeyStroke("ArrowDown", handleDown);

watch(searchKey, () => {
    searchMenu(searchKey.value);
});
</script>

<style lang="scss">
.search-dialog {
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px #00000040;
    .el-dialog__body {
        padding-top: 0 !important;
    }
    .nav-search-icon {
        padding: 3px;
        border-radius: 2px;
        margin-right: 5px;
        box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px #1e235a66;
    }
    .nav-search-item {
        height: 54px;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 0 16px;
        cursor: pointer;
        border: 1px solid var(--base-column-header-color);
        &.active {
            background-color: var(--el-color-primary);
            color: var(--el-menu-active-color);
            box-shadow: 0 1px 3px var(--base-tag-shadow);
        }
        & + .nav-search-item {
            margin-top: 8px;
        }
        .nav-search-item-title {
            margin-left: 8px;
            font-size: 16px;
        }
    }
}
</style>
