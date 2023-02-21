export const remoteLoad = (url: string) => {
    return new Promise((resolve, reject) => {
        const existingScript = document.getElementById(url);
        // 如果script不存在
        if (!existingScript) {
            const script = document.createElement("script");
            script.id = url;
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
            script.onload = function () {
                setTimeout(() => {
                    this.onerror = this.onload = null;
                    resolve(true);
                }, 500);
            };
            script.onerror = function () {
                this.onerror = this.onload = null;
                reject(new Error("加载失败" + url));
            };
        } else {
            setTimeout(() => {
                resolve(true);
            }, 500);
        }
    });
};
