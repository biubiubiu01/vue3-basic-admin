import { useLoading } from "@/hooks";

const loading = useLoading({
    minTime: 500
});

let loadingCount: number = 0;

export const addLoading = () => {
    if (loadingCount === 0) {
        loading.open();
    }
    loadingCount++;
};

export const closeLoading = () => {
    if (loadingCount > 0) {
        if (loadingCount === 1) {
            loading.close();
        }
        loadingCount--;
    }
};
