<template>
    <base-dialog ref="baseDialogRef" :title="title" :show-footer="false" :showFullscreen="false" :width="width + 40" @close="closeMedia">
        <div class="base-photograph-container">
            <video ref="videoRef" autoplay :style="getVideoStyle"></video>
            <div class="base-photograph-controls mt20">
                摄像头：
                <base-select v-model="state.selectedDevice" :clearable="false" :options="state.videoDevices" @change="changeDevice" />
                <template v-if="photo">
                    <base-button class="ml10" @click="handlePhoto" :loading="state.photoLoading">拍照</base-button>
                    <base-button class="ml10" @click="handleResetPhoto" v-if="state.photoUrl">重新拍照</base-button>
                    <base-button class="ml10" @click="handleUsePhoto" v-if="state.photoUrl">使用照片</base-button>
                    <img :src="state.photoUrl" v-if="state.photoUrl" class="absolute" :style="{ ...getVideoStyle, top: 0, left: 0 }" />
                </template>
                <template v-if="video">
                    <base-button class="ml10" @click="handleStartVideo">开始录制</base-button>
                    <base-button class="ml10" @click="handlePauseVideo">{{ state.isPause ? "继续" : "暂停" }}</base-button>
                    <base-button class="ml10" @click="handleStop">停止</base-button>
                    <base-button class="ml10" @click="handleUseVideo" v-if="state.videoUrl">使用视频</base-button>
                    <video
                        autoplay
                        :style="{ ...getVideoStyle, top: 0, left: 0 }"
                        :src="state.videoUrl"
                        controls
                        v-if="state.videoUrl"
                        class="absolute"
                    ></video>
                </template>
            </div>
        </div>
    </base-dialog>
</template>

<script lang="ts" setup>
import { useMessage } from "@/hooks";
const props = defineProps({
    title: {
        type: String,
        default: "拍照"
    },
    width: {
        type: Number,
        default: 640
    },
    height: {
        type: Number,
        default: 320
    },
    photo: {
        type: Boolean,
        default: false
    },
    video: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["getImg", "getVideo"]);

const { error } = useMessage();

const state = reactive<any>({
    videoDevices: [
        {
            label: "默认录像设备",
            value: "default"
        }
    ],
    constraints: {
        video: {
            deviceId: "default", // 设备id
            autoGainControl: true, // 自动增益控制
            echoCancellation: true, // 回声消除
            noiseSuppression: true, // 噪声抑制
            width: props.width,
            height: props.height,
            aspectRatio: props.width / props.height
        }
    },
    selectedDevice: "default",
    stream: null,
    photoLoading: false,
    photoUrl: null,
    mediaRecorder: null,
    chunkList: [],
    isPause: false,
    videoUrl: null
});

const baseDialogRef = ref();
const videoRef = ref();

const getVideoStyle = computed(() => {
    const { width, height } = props;
    return {
        width: `${width}px`,
        height: `${height}px`
    };
});

onMounted(() => {
    getDevices();
});

const showDialog = () => {
    state.stream = null;
    state.photoUrl = null;
    state.chunkList = [];
    state.videoUrl = null;
    unref(baseDialogRef).showDialog();
    initPhotograph();
};

const hideDialog = () => {
    unref(baseDialogRef).hideDialog();
};

const initPhotograph = () => {
    if (typeof MediaRecorder === "undefined" && !navigator?.mediaDevices?.getUserMedia) {
        return console.error("MediaRecorder not supported on your browser, use Firefox 30 or Chrome 49 instead.");
    }
    navigator.mediaDevices
        .getUserMedia(state.constraints)
        .then((stream) => {
            if (unref(videoRef)) {
                unref(videoRef).controls = false;
            }
            state.stream = stream;
            try {
                unref(videoRef).srcObject = stream;
                unref(videoRef).onloadedmetadata = () => {
                    unref(videoRef).play();
                };
            } catch (e) {
                error("初始化拍照设备失败！");
                console.log(e);
            }
        })
        .catch((err) => console.log(`navigator.getUserMedia error: ${err}`));
};

const changeDevice = (val: string) => {
    state.constraints.video.deviceId = val;
    state.selectedDevice = val;
    closeMedia();
    initPhotograph();
};

const getDevices = () => {
    if (navigator.mediaDevices) {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            devices.forEach((device, index) => {
                if (device.kind === "videoinput") {
                    state.videoDevices.push({
                        label: device.label || `录像设备-${index + 1}`,
                        value: device.deviceId
                    });
                }
            });
        });
    }
};

const closeMedia = () => {
    state.stream?.getTracks()?.forEach((track: any) => {
        track?.stop?.();
    });
    state.stream = null;
};

const handlePhoto = () => {
    if (state.photoUrl) return;
    state.photoLoading = true;
    const canvas = document.createElement("canvas");
    canvas.width = props.width;
    canvas.height = props.height;
    canvas.getContext("2d")!.drawImage(unref(videoRef), 0, 0, props.width, props.height);
    state.photoUrl = canvas.toDataURL("image/png");
    state.photoLoading = false;
};

const handleResetPhoto = () => {
    state.photoUrl = null;
};

const handleUsePhoto = () => {
    emit("getImg", state.photoUrl);
    hideDialog();
};

const handleStartVideo = () => {
    if (state.chunkList.length) return;
    initRecorder();
};

const handlePauseVideo = () => {
    state.isPause = !state.isPause;
    if (state.isPause) {
        state.mediaRecorder.pause();
    } else {
        state.mediaRecorder.resume();
    }
};

const handleStop = () => {
    if (state.videoUrl) return;
    state.mediaRecorder.stop();
    unref(videoRef).controls = true;
    state.isPause = false;
};

const handleUseVideo = () => {
    emit("getVideo", state.videoUrl);
    hideDialog();
};

const initRecorder = () => {
    state.mediaRecorder = new MediaRecorder(state.stream, {
        mimeType: "video/webm"
    });
    state.mediaRecorder.start(10);

    state.mediaRecorder.ondataavailable = (e: any) => {
        state.chunkList.push(e.data);
    };

    state.mediaRecorder.onerror = (e: Error) => {
        console.log("Error: ", e);
    };

    state.mediaRecorder.onstart = () => {
        console.log("Started & state = " + state.mediaRecorder.state);
    };

    state.mediaRecorder.onstop = () => {
        console.log("Stopped  & state = " + state.mediaRecorder.state);

        const blob = new Blob(state.chunkList, { type: "video/webm" });
        state.chunks = [];

        const videoURL = window.URL.createObjectURL(blob);
        state.videoUrl = videoURL;

        unref(videoRef).src = videoURL;
    };

    state.mediaRecorder.onpause = () => {
        console.log("Paused & state = " + state.mediaRecorder.state);
    };

    state.mediaRecorder.onresume = () => {
        console.log("Resumed  & state = " + state.mediaRecorder.state);
    };

    state.mediaRecorder.onwarning = (e: any) => {
        console.log("Warning: " + e);
    };
};

defineExpose({
    showDialog,
    hideDialog
});
</script>
