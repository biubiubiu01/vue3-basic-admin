interface ProxyStorage {
    getItem(key: string): any;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
}

class VStorage implements ProxyStorage {
    protected storage: ProxyStorage;

    constructor(storageModel: ProxyStorage) {
        this.storage = storageModel;
    }

    public getItem(key: string): any {
        return this.storage.getItem(key);
    }

    public setItem(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    public removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    public clear(): void {
        this.storage.clear();
    }
}

export const local = new VStorage(localStorage);

export const session = new VStorage(sessionStorage);
