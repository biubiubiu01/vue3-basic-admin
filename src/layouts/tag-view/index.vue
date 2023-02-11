<template>
    <TagScroll ref="tagScrollRef">
        <template #item>
            <TagAction
                trigger="contextmenu"
                v-for="item in getTagList"
                :key="item.fullPath"
                :tag-item="item"
                is-tab
                :ref="setTagActionRef"
                @close-all="handleCloseTagAction"
            >
                <TagItem :tag="item" :ref="setTagWrapperRef" :closed="getTagList.length !== 1" @close="closeTag" />
            </TagAction>
        </template>
        <template #action>
            <div class="tag-action tag-shadow flex-row-center">
                <TagFullScreen />
                <TagAction>
                    <base-icon el-name="arrowDown" :size="18" />
                </TagAction>
            </div>
        </template>
    </TagScroll>
</template>

<script lang="ts" setup>
import { useResizeObserver, useDebounceFn } from "@vueuse/core";
import { useTagViewSetting } from "../hooks/useTagViewSetting";
import TagFullScreen from "./tag-fullscreen.vue";
import TagAction from "./tag-action.vue";
import TagScroll from "./tag-scroll.vue";
import TagItem from "./tag-item.vue";

const route = useRoute();

const { getTagList, closeTag, addTag } = useTagViewSetting();

const tagWrapperRefList = ref<any[]>([]);

const tagActionRefList = ref<any[]>([]);

const tagScrollRef = ref();

const setTagWrapperRef = (el: any) => {
    tagWrapperRefList.value.push(el);
};

const setTagActionRef = (el: any) => {
    tagActionRefList.value.push(el);
};

const handleCloseTagAction = () => {
    tagActionRefList.value.forEach((item) => {
        item?.close?.();
    });
};

async function handleMoveTag() {
    await nextTick();

    unref(tagScrollRef).moveToTag({
        tagList: unref(getTagList),
        refList: unref(tagWrapperRefList)
    });
}

useResizeObserver(
    tagScrollRef,
    useDebounceFn(() => {
        handleMoveTag();
    }, 200)
);

watch(
    () => route.path,
    () => {
        addTag(route);
        handleMoveTag();
    },
    {
        deep: true,
        immediate: true
    }
);
watch(
    getTagList,
    () => {
        handleMoveTag();
    },
    {
        deep: true
    }
);
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>
