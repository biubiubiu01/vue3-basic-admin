let lastTime = 0;
const prefixes = "webkit moz ms o".split(" "); // 各浏览器前缀

let requestAnimationFrame: any;
let cancelAnimationFrame: any;

const isServer: boolean = typeof window === "undefined";
if (isServer) {
    requestAnimationFrame = function () {};
    cancelAnimationFrame = function () {};
} else {
    requestAnimationFrame = window.requestAnimationFrame;
    cancelAnimationFrame = window.cancelAnimationFrame;
    let prefix: string;
    // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
    for (let i = 0; i < prefixes.length; i++) {
        if (!!requestAnimationFrame && !!cancelAnimationFrame) {
            break;
        }
        prefix = prefixes[i];
        requestAnimationFrame = requestAnimationFrame || (window as any)[prefix + "RequestAnimationFrame"];
        cancelAnimationFrame =
            cancelAnimationFrame || (window as any)[prefix + "CancelAnimationFrame"] || (window as any)[prefix + "CancelRequestAnimationFrame"];
    }

    // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
    if (!requestAnimationFrame || !cancelAnimationFrame) {
        requestAnimationFrame = function (callback: (params?: any) => void) {
            const currTime = new Date().getTime();
            // 为了使setTimeout的尽可能的接近每秒60帧的效果
            const timeToCall = Math.max(0, 16 - (currTime - lastTime));
            const id = window.setTimeout(() => {
                // eslint-disable-next-line
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

        cancelAnimationFrame = function (id: number) {
            window.clearTimeout(id);
        };
    }
}

export { requestAnimationFrame, cancelAnimationFrame };
