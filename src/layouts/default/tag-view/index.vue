<template>
    <TagScroll>
        <router-link
            class="tag-item pointer flex-row-center"
            v-for="item in getTagList"
            :key="item.path"
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
                @click.prevent.stop="closeTag(item.path)"
                v-if="item?.meta?.close !== false && getTagList.length !== 1"
            />
        </router-link>
        <!-- <template #action>
            <div class="tag-action tag-shadow flex-row-center">
                <TagFullScreen />
                <tagAction :action-list="getActionList" :event="handleMenuEvent" />
            </div>
        </template> -->
    </TagScroll>
</template>

<script lang="ts" setup>
import { useTagViewSetting } from "../hooks/useTagViewSetting";
import TagScroll from "./tag-scroll.vue";
import TagFullScreen from "./tag-fullscreen.vue";
import tagAction from "./tag-action.vue";

const { getTagList, getActionList, closeTag, addTag, handleMenuEvent } = useTagViewSetting();

const route = useRoute();

const tagWrapperRefList = ref<HTMLDivElement[]>([]);

const setTagWrapperRef = (el: any) => {
    tagWrapperRefList.value.push(el);
};

/**
 * 移动tag
 */
const moveToTag = () => {
    // const index = unref(getTagList).findIndex((item) => item.path === route.path);
    //     const eleWidth = tagWrapperRefList.value[index].$el.offsetWidth;
    //     const eleLeft = tagWrapperRefList.value[index].$el.offsetLeft;
    //     // const scrollOuterWidth = this.$refs.scrollOuter.offsetWidth;
    //     // // 标签在左边
    //     // if (eleLeft == 0 && index == 0) {
    //     //     this.tagBodyLeft = 0;
    //     //     return;
    //     // }
    //     // if (eleLeft < -this.tagBodyLeft) {
    //     //     this.tagBodyLeft = -eleLeft + 4;
    //     // } else if (eleLeft > -this.tagBodyLeft && eleLeft + eleWidth < -this.tagBodyLeft + scrollOuterWidth) {
    //     //     this.tagBodyLeft = Math.min(0, scrollOuterWidth - eleWidth - eleLeft - 4);
    //     // } else {
    //     //     this.tagBodyLeft = -(eleLeft - (scrollOuterWidth - 4 - eleWidth));
    //     // }
};

watch(
    route,
    (nl) => {
        addTag(nl);
    },
    {
        immediate: true
    }
);
</script>

<style lang="scss" scoped>
@use "./index.scss";
</style>
