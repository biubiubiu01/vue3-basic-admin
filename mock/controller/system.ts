import { MockMethod } from "vite-plugin-mock";
import dayjs from "dayjs";
import { userData, deptData, roleData, dictKey, dictData } from "../constant";
import { RequestParams, resultSuccess } from "../utils";

function filterTable(filter: any) {
    const { type = "equal", data, key, value } = filter;
    if (type === "equal") {
        return data.filter((item: any) => item[key] === value);
    } else if (type === "include") {
        return data.filter((item: any) => item[key].search(value) !== -1);
    }
}

function filterStatus(list: any[]) {
    const arr = JSON.parse(JSON.stringify(list));
    return arr.filter((item: any) => {
        if (item.status === 1 && item.children) {
            item.children = filterStatus(item.children);
        }
        return item.status === 1;
    });
}

function filterDeptId(list: any[], deptId?: number): number[] {
    const deptIdArr: number[] = [];
    list.forEach((item) => {
        if (item.deptId === deptId || item.parentId === deptId) {
            deptIdArr.push(item.deptId);
        }
        if (item.children) {
            deptIdArr.push(...filterDeptId(item.children, item.parentId === deptId ? item.deptId : deptId));
        }
    });
    return deptIdArr;
}

function getDeptName(deptArr: any[], deptId: string[]): string[] {
    const deptStrArr: string[] = [];
    deptArr.forEach((item) => {
        if (deptId.includes(item.deptId + "")) {
            deptStrArr.push(item.deptName);
        }
        if (item.children) {
            deptStrArr.push(...getDeptName(item.children, deptId));
        }
    });
    return deptStrArr;
}

function addDept(deptArr: any[], data: any) {
    deptArr.forEach((item) => {
        if (item.deptId === data.parentId) {
            item.children = (item.children || []).concat([data]);
            item.children.sort((a: any, b: any) => a.sort - b.sort);
        } else if (item.children) {
            addDept(item.children, data);
        }
    });
}

export default [
    {
        url: "/api/user/getUserList",
        method: "get",
        response: (request: RequestParams) => {
            const { role, username, status, deptId } = request.query;
            let list = userData;
            if (role) {
                list = filterTable({ data: list, key: "role", value: role });
            }
            if (username) {
                list = filterTable({ data: list, key: "username", value: username, type: "include" });
            }
            if (deptId) {
                const deptIdArr = filterDeptId(deptData, parseFloat(deptId));
                list = list.filter((item) => item.deptId.split(",").some((val) => deptIdArr.includes(parseFloat(val))));
            }
            if (status) {
                list = filterTable({ data: list, key: "status", value: parseFloat(status) });
            }
            return resultSuccess({
                list: list || [],
                total: list?.length || 0
            });
        }
    },
    {
        url: "/api/user/addUser",
        method: "post",
        response: (request: RequestParams) => {
            const { username, deptId, role, remark } = request.body;
            userData.push({
                id: userData[userData.length - 1]?.id + 1 || 1,
                username,
                deptId,
                remark,
                role,
                deptName: getDeptName(deptData, deptId.split(",")).join(),
                status: 0,
                createTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
            });
            return resultSuccess();
        }
    },
    {
        url: "/api/user/editUser",
        method: "put",
        response: (request: RequestParams) => {
            const { id } = request.body;
            userData.forEach((item) => {
                if (item.id === id) {
                    Object.assign(item, request.body);
                }
            });
            return resultSuccess();
        }
    },
    {
        url: "/api/user/deleteUser",
        method: "delete",
        response: (request: RequestParams) => {
            const { id } = request.query;
            const index = userData.findIndex((item) => item.id === id);
            userData.splice(index, 1);
            return resultSuccess();
        }
    },
    {
        url: "/api/user/changeStatus",
        method: "put",
        response: (request: RequestParams) => {
            const { id } = request.body;
            userData.forEach((item) => {
                if (item.id === id) {
                    item.status = item.status === 0 ? 1 : 0;
                }
            });
            return resultSuccess();
        }
    },
    {
        url: "/api/role/getRoleList",
        method: "get",
        response: (request: RequestParams) => {
            const { roleName, status } = request.query;
            let list = roleData;
            if (roleName) {
                list = filterTable({ data: list, key: "roleName", value: roleName, type: "include" });
            }
            if (status) {
                list = filterTable({ data: list, key: "status", value: parseFloat(status) });
            }
            return resultSuccess({
                list: list || [],
                total: list?.length || 0
            });
        }
    },
    {
        url: "/api/role/getAllRoleList",
        method: "get",
        response: (request: RequestParams) => {
            return resultSuccess(roleData);
        }
    },
    {
        url: "/api/role/addRole",
        method: "post",
        response: (request: RequestParams) => {
            const { roleName, role, menuIds, remark } = request.body;
            roleData.push({
                id: roleData[roleData.length - 1]?.id + 1 || 1,
                roleName,
                role,
                remark,
                status: 0,
                createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                menuIds
            });
            return resultSuccess();
        }
    },
    {
        url: "/api/role/editRole",
        method: "put",
        response: (request: RequestParams) => {
            const { id } = request.body;
            roleData.forEach((item) => {
                if (item.id === id) {
                    Object.assign(item, request.body);
                }
            });
            return resultSuccess();
        }
    },
    {
        url: "/api/role/deleteRole",
        method: "delete",
        response: (request: RequestParams) => {
            const { id } = request.query;
            const index = roleData.findIndex((item) => item.id === id);
            roleData.splice(index, 1);
            return resultSuccess();
        }
    },
    {
        url: "/api/role/changeStatus",
        method: "put",
        response: (request: RequestParams) => {
            const { id } = request.body;
            roleData.forEach((item) => {
                if (item.id === id) {
                    item.status = item.status === 0 ? 1 : 0;
                }
            });
            return resultSuccess();
        }
    },
    {
        url: "/api/dept/getDeptList",
        method: "get",
        response: (request: RequestParams) => {
            return resultSuccess(deptData);
        }
    },
    {
        url: "/api/dept/getDeptTreeList",
        method: "get",
        response: (request: RequestParams) => {
            return resultSuccess(filterStatus(deptData));
        }
    },
    {
        url: "/api/dept/addDept",
        method: "post",
        response: (request: RequestParams) => {
            const { deptName, parentId, remark, sort, status } = request.body;
            addDept(deptData, {
                deptName,
                sort,
                remark,
                status,
                createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                deptId: Math.floor(Math.random() * 1000),
                parentId,
                children: []
            });
            return resultSuccess();
        }
    },
    {
        url: "/api/dict/key",
        method: "get",
        response: (request: RequestParams) => {
            return resultSuccess(dictKey);
        }
    },
    {
        url: "/api/dict/data",
        method: "get",
        response: (request: RequestParams) => {
            return resultSuccess(dictData);
        }
    }
] as MockMethod[];
