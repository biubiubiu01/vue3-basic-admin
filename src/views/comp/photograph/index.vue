<template>
    <div class="com-photograph-container">
        <base-box title="拍照">
            <base-button @click="handelClick(true)">点击拍照</base-button>
            <div class="mt15">
                <img :src="imgUrl" v-if="imgUrl" alt="" />
            </div>
        </base-box>

        <base-box title="录制">
            <base-button @click="handelClick(false)">录制</base-button>
            <div class="mt15">
                <video autoplay width="640" height="320" :src="videoUrl" controls v-if="videoUrl"></video>
            </div>
        </base-box>

        <base-photograph ref="basePhotographRef" @getImg="handleGetImg" @getVideo="handleGetVideo" :photo="photo" :video="!photo" />
    </div>
</template>

<script lang="ts" setup>
const basePhotographRef = ref();

const imgUrl = ref<null | string>(null);

const videoUrl = ref();

const photo = ref(false);

const handelClick = (bool = false) => {
    photo.value = bool;
    unref(basePhotographRef).showDialog();
};

const handleGetImg = (val: string) => {
    imgUrl.value = val;
};

const handleGetVideo = (val: string) => {
    videoUrl.value = val;
};
</script>

<style scoped></style>
