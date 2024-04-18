import mqtt, { MqttClient } from "mqtt";
import { ref, reactive, Ref } from "vue";

const defaultConfig = {
    keepalive: 200,
    clean: true,
    connectTimeout: 2000,
    reconnectPeriod: 2000
};

interface IUser {
    name: string | number;
    time: number;
}

interface ISubScription {
    topic: string;
    qos: any;
}

const subscriptionList: ISubScription[] = [
    {
        topic: "/change_page",
        qos: 0
    },
    {
        topic: "/online/users",
        qos: 0
    },
    {
        topic: "/webrtc/conn",
        qos: 0
    },
    {
        topic: "/webrtc/call",
        qos: 0
    },
    {
        topic: "/banpiao/info",
        qos: 0
    },
    {
        topic: "/face/result",
        qos: 0
    }
];

const client: Ref<MqttClient | null> = ref(null);

const subscribeMap = new Map();

const onlineUserList: Ref<IUser[]> = ref([]);

export const useMqtt = (url, config) => {
    const state = reactive({
        url,
        clientId: null,
        options: Object.assign({}, defaultConfig, config)
    });

    /**
     * 连接mqtt
     * @param {Number} clientId
     * @returns
     */
    const connect = (clientId) => {
        return new Promise((resolve, reject) => {
            if (client.value) {
                resolve(true);
                return;
            }
            if (!clientId) {
                reject(new Error("mqtt clientId is required"));
                return;
            }
            state.clientId = clientId;
            client.value = mqtt.connect(state.url, { ...state.options, clientId }) as MqttClient;

            client.value.on("connect", () => {
                console.log("Connection succeeded!");
                resolve(true);
            });

            client.value.on("error", (error) => {
                console.log("Connection failed", error);
            });
        });
    };

    // 注册一个在线用户监听
    const createOnlineUser = () => {
        registerMessageListener("/online/users", (data) => {
            const findItem = onlineUserList.value.find((item) => item.name === data.name);
            if (!findItem) {
                onlineUserList.value.push(data);
            } else {
                findItem.time = data.time;
            }
            onlineUserList.value = onlineUserList.value.filter((item) => {
                // 3秒内如果该用户没有出现，就认为是已下线
                return data.time - item.time < 3;
            });
        });
    };

    // 关闭连接
    const disconnect = () => {
        if (getClientConnected()) {
            try {
                client.value!.end();
                client.value = null;
                subscribeMap.clear();
                console.log("Successfully disconnected!");
            } catch (error: any) {
                console.log("Disconnect failed", error.toString());
            }
        }
    };

    /**
     * 订阅连接
     * @param {String|Array} topic 订阅的地址
     * @returns
     */
    const doSubscribe = (topic) => {
        if (!getClientConnected()) {
            console.error("mqtt未连接，请先连接");
            return;
        }
        const topics = Array.isArray(topic) ? topic : [topic];
        const topicList = subscriptionList.filter((item) => topics.includes(item.topic) && !subscribeMap.get(item.topic));
        topicList.forEach((item) => {
            client.value!.subscribe(item.topic, { qos: item.qos }, (error) => {
                if (error) {
                    console.error("Subscribe to topics error", item.topic + error);
                    return;
                }
                if (item.topic === "/online/users") {
                    createOnlineUser();
                }
                subscribeMap.set(item.topic, true);
            });
        });
    };

    // 注册一个消息监听
    const registerMessageListener = (topic, callback) => {
        client.value!.on("message", (messageTopic, message) => {
            if (messageTopic === topic) {
                const objectData = JSON.parse(message.toString());
                callback(objectData);
            }
        });
    };

    /**
     * 取消订阅连接
     * @param {String|Array} topic 取消订阅的地址
     * @returns
     */
    const unSubscribe = (topic) => {
        if (!getClientConnected()) {
            console.error("mqtt未连接，请先连接");
            return;
        }
        const topics = Array.isArray(topic) ? topic : [topic];

        const topicList = topics.filter((item) => !subscribeMap.get(item));

        topicList.forEach((item) => {
            client.value!.unsubscribe(item, (error) => {
                if (error) {
                    console.log("Unsubscribe error", error);
                    return;
                }
                subscribeMap.delete(item);
            });
        });
    };

    /**
     * 发送消息
     * @param {String} topic 发送消息地址
     * @param {Object} payload 发送消息参数
     * @returns
     */
    const doPublish = (topic, payload) => {
        if (!getClientConnected()) {
            console.error("mqtt未连接，请先连接");
            return;
        }
        if (!subscribeMap.get(topic)) {
            console.error(`mqtt ${topic}未订阅，请先订阅在进行该操作`);
            return;
        }
        const findItem = subscriptionList.find((item) => item.topic === topic);
        if (!findItem) return;
        client.value!.publish(topic, payload, findItem.qos, (error) => {
            if (error) {
                console.log("Publish error", error);
            }
        });
    };

    const getClientConnected = () => {
        return client.value && client.value.connected;
    };

    return {
        connect,
        disconnect,
        doSubscribe,
        unSubscribe,
        doPublish,
        client,
        registerMessageListener,
        onlineUserList
    };
};
