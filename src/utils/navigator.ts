export const getOS = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Windows NT 10.0") !== -1) return "Windows 10";
    if (userAgent.indexOf("Windows NT 6.2") !== -1) return "Windows 8";
    if (userAgent.indexOf("Windows NT 6.1") !== -1) return "Windows 7";
    if (userAgent.indexOf("Windows NT 6.0") !== -1) return "Windows Vista";
    if (userAgent.indexOf("Windows NT 5.1") !== -1) return "Windows XP";
    if (userAgent.indexOf("Windows NT 5.0") !== -1) return "Windows 2000";
    if (userAgent.indexOf("Mac") !== -1) return "Mac/iOS";
    if (userAgent.indexOf("X11") !== -1) return "UNIX";
    if (userAgent.indexOf("Linux") !== -1) return "Linux";
    return "Other";
};

export const getBrowse = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.match(/msie/) != null || userAgent.match(/trident/) != null) return "IE";

    if (userAgent.match(/firefox/) != null) return "firefox";

    if (userAgent.match(/opera/) != null || userAgent.match(/opr/) != null) return "opera";

    if (userAgent.match(/edge/) != null) return "edge";

    if (userAgent.match(/bidubrowser/) != null) return "baidu";

    if (userAgent.match(/metasr/) != null) return "sougou";

    if (userAgent.match(/tencenttraveler/) != null || userAgent.match(/qqbrowse/) != null) return "QQ";

    if (userAgent.match(/chrome/) != null) return "chrome";

    if (userAgent.match(/safari/) != null) return "Safari";

    return "others";
};
