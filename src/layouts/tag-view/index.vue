<template>
    <TagScroll>
        <router-link
            class="tag-item relative pointer flex-row-center"
            v-for="item in getTagList"
            :key="item.fullPath"
            :to="item.path"
            :class="{ active: $route.fullPath === item.fullPath }"
            :ref="setTagWrapperRef"
        >
            <span class="tag-title">{{ item?.meta?.title }}</span>
            <base-icon
                el-name="close"
                class="ml5 close-icon"
                :size="12"
                hover
                @click.prevent.stop="handleCloseTag(item)"
                v-if="item?.meta?.close !== false && getTagList.length !== 1"
            />
        </router-link>
        <template #action>
            <div class="tag-action tag-shadow flex-row-center">
                <TagFullScreen />
                <TagAction :action-list="getActionList" :event="handleMenuEvent">
                    <base-icon el-name="arrowDown" :size="18" />
                </TagAction>
            </div>
        </template>
    </TagScroll>
</template>

<script lang="ts" setup>
import { useTagViewSetting } from "../hooks/useTagViewSetting";
import TagScroll from "./tag-scroll.vue";
import TagFullScreen from "./tag-fullscreen.vue";
import TagAction from "./tag-action.vue";

const { getTagList, getActionList, closeTag, addTag, handleMenuEvent } = useTagViewSetting();

const route = useRoute();

const tagWrapperRefList = ref<any[]>([]);

const setTagWrapperRef = (el: any) => {
    tagWrapperRefList.value.push(el);
};

const handleCloseTag = (val: any) => {
    closeTag(val);
    moveToTag();
};

/**
 * 移动tag
 */
const moveToTag = () => {
    nextTick(() => {
        const index = unref(getTagList).findIndex((item) => item.path === route.path);
        const currentInstance = tagWrapperRefList.value[index];
        const parentInstance = currentInstance.$parent;

        const eleWidth = currentInstance.$el.offsetWidth;
        const eleLeft = currentInstance.$el.offsetLeft;
        const scrollOuterWidth = parentInstance.instance.offsetWidth;
        const tagBodyLeft = parentInstance.getBodyLeft;

        // 当前是第一个
        if (eleLeft === 0 && index === 0) {
            parentInstance.setBodyLeft(0);
            return;
        }

        if (eleLeft <= -tagBodyLeft) {
            parentInstance.setBodyLeft(-eleLeft);
            return;
        }

        if (eleLeft > -tagBodyLeft && eleLeft + eleWidth < -tagBodyLeft + scrollOuterWidth) {
            parentInstance.setBodyLeft(Math.min(0, scrollOuterWidth - eleWidth - eleLeft));
            return;
        }
        parentInstance.setBodyLeft(-(eleLeft - (scrollOuterWidth - eleWidth)));
    });
};

watch(
    route,
    (nl) => {
        addTag(nl);
        moveToTag();
    },
    {
        immediate: true
    }
);
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>
