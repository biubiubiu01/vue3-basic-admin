import type { AxiosRequestConfig } from "axios";

export class AxiosCancel {
    pendingMap: Map<string, AbortController>;
    constructor() {
        this.pendingMap = new Map<string, AbortController>();
    }

    generateReqKey(config: AxiosRequestConfig): string {
        const { method, url } = config;
        return [url || "", method || "", JSON.stringify(config.params), JSON.stringify(config.data)].join("&");
    }

    addPending(config: AxiosRequestConfig) {
        this.removePending(config);
        const requestKey: string = this.generateReqKey(config);
        if (!this.pendingMap.has(requestKey)) {
            const controller = new AbortController();
            config.signal = controller.signal;
            this.pendingMap.set(requestKey, controller);
        } else {
            config.signal = (this.pendingMap.get(requestKey) as AbortController).signal;
        }
    }

    removePending(config: AxiosRequestConfig) {
        const requestKey: string = this.generateReqKey(config);
        if (this.pendingMap.has(requestKey)) {
            (this.pendingMap.get(requestKey) as AbortController).abort();
            this.pendingMap.delete(requestKey);
        }
    }

    removeAllPending() {
        this.pendingMap.forEach((cancel: AbortController) => {
            cancel.abort();
        });
        this.reset();
    }

    reset() {
        this.pendingMap = new Map<string, AbortController>();
    }
}
