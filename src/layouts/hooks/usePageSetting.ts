import { useMenuSetting } from "@/layouts/hooks/useMenuSetting";

export const usePageSetting = () => {
    const { getSystemTitle } = useMenuSetting();

    const setPageTitle = (title: string) => {
        document.title = title ? `${title}-${getSystemTitle.value}` : <string>getSystemTitle.value;
    };
    return {
        setPageTitle
    };
};
