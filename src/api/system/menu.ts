import { asyncRoutes } from "@/router/basic";

export const getMenuList = () => {
    return new Promise((resolve) => {
        resolve({
            code: 200,
            data: generateRoutes(asyncRoutes),
            message: ""
        });
    });
};

// 模拟数据
function generateRoutes(routes: any[], path = "") {
    const res: any[] = [];
    routes.forEach((item) => {
        if (item.meta && item.meta.permission) {
            const temp: any = {
                id: Math.floor(Math.random() * 10000),
                permission: item.meta.permission,
                menuName: item.meta.title,
                icon: item.meta.icon,
                sort: item.meta.sort,
                path: path + item.path,
                status: 1,
                createTime: "2023-02-02 10:13:12"
            };
            if (item.path === "account") {
                temp.children = [
                    {
                        id: Math.floor(Math.random() * 10000),
                        permission: "admin_account:add",
                        menuName: "新增用户",
                        icon: "",
                        sort: 1,
                        path: "",
                        status: 1,
                        createTime: "2023-02-02 10:13:12"
                    }
                ];
            }
            if (item.path === "role") {
                temp.children = [
                    {
                        id: Math.floor(Math.random() * 10000),
                        permission: "admin_role:add",
                        menuName: "新增角色",
                        icon: "",
                        sort: 1,
                        path: "",
                        status: 1,
                        createTime: "2023-02-02 10:13:12"
                    }
                ];
            }
            if (item.children) {
                temp.children = generateRoutes(item.children, path + item.path + "/");
            }
            res.push(temp);
        }
    });
    return res;
}
