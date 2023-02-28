import avatar01 from "@/assets/images/user/avatar01.png";
import avatar15 from "@/assets/images/user/avatar15.png";
import headImg from "@/assets/images/user/headImg.gif";

type TodoType = {
    title: string;
    value: number;
    icon: string;
};

type QuickType = {
    title: string;
    name: string;
    icon: string;
};

type DynamicType = {
    time: string;
    name: string;
    type: "image" | "text";
    remark: string;
    content: string | string[];
    headImg: string;
};

type NoticeType = {
    type: string;
    content: string;
};

export const todoList: TodoType[] = [
    {
        title: "风险预警",
        value: 5,
        icon: "svg-warning"
    },
    {
        title: "待反馈",
        value: 5,
        icon: "svg-feedback"
    },
    {
        title: "待审批",
        value: 16,
        icon: "svg-approval"
    },
    {
        title: "待阅读",
        value: 14,
        icon: "svg-read"
    }
];

export const quickList: QuickType[] = [
    {
        title: "图标",
        icon: "svg-icon",
        name: "Icon"
    },
    {
        title: "错误日志",
        icon: "svg-log",
        name: "ErrorLog"
    },
    {
        title: "用户管理",
        icon: "setting",
        name: "Account"
    },
    {
        title: "部门管理",
        icon: "setting",
        name: "Department"
    },
    {
        title: "角色管理",
        icon: "setting",
        name: "Role"
    },
    {
        title: "菜单管理",
        icon: "setting",
        name: "Menu"
    }
];

export const dynamicList: DynamicType[] = [
    {
        name: "高明",
        type: "text",
        time: "刚刚",
        remark: "发布了一条动态",
        content: "我本将心向明月，奈何明月照沟渠。",
        headImg: avatar01
    },
    {
        name: "不知名用户",
        type: "text",
        time: "15分钟前",
        remark: "关注了张三",
        content: "",
        headImg: avatar15
    },
    {
        name: "马保国",
        type: "image",
        time: "20分钟前",
        remark: "发布了一组照片",
        content: [
            "https://i.328888.xyz/2023/02/28/eu4MP.jpeg",
            "https://i.328888.xyz/2023/02/28/euUmt.jpeg",
            "https://i.328888.xyz/2023/02/28/euDtX.jpeg"
        ],
        headImg: avatar15
    },
    {
        name: "李白",
        type: "text",
        time: "35分钟前",
        remark: "发布了《清平调·其一》",
        content: `云想衣裳花想容，春风拂槛露华浓。
                  若非群玉山头见，会向瑶台月下逢。`,
        headImg: avatar15
    },
    {
        name: "王勃",
        type: "text",
        time: "35分钟前",
        remark: "发布了一条动态",
        content: "落霞与孤鹜齐飞，秋水共长天一色。",
        headImg: avatar01
    },
    {
        name: "Admin",
        type: "text",
        time: "45分钟前",
        remark: "实现了系统基本功能",
        content: "基础功能已经实现，欢迎使用或提bug啊~",
        headImg
    }
];

export const noticeList: NoticeType[] = [
    {
        type: "通知",
        content: "系统基础功能开发完成，欢迎使用啊~"
    },
    {
        type: "消息",
        content: "您申请的切换权限已经通过审批，请重新登录查看~"
    },
    {
        type: "通知",
        content: "你们什么身份啊，和我用一样的系统~"
    },
    {
        type: "通知",
        content: "不能喝坐小朋友那桌~"
    },
    {
        type: "消息",
        content: "您有一条OA提交未通过审核，未通过原因：信息不完整。"
    },
    {
        type: "消息",
        content: "【马保国】邀请你加入浑圆形意太极门"
    }
];
