import{cq as s}from"./index-a5229f6a.js";var t=(e=>(e.USER_LIST="/user/getUserList",e.ADD_USER="/user/addUser",e.EDIT_USER="/user/editUser",e.DELETE_USER="/user/deleteUser",e.CHANGE_USER_STATUS="/user/changeStatus",e))(t||{});const r=e=>s.get("/user/getUserList",e),a=e=>s.post("/user/addUser",e),u=e=>s.delete("/user/deleteUser",e),U=e=>s.put("/user/editUser",e),o=e=>s.put("/user/changeStatus",e),_=Object.freeze(Object.defineProperty({__proto__:null,Api:t,getUserList:r,addUser:a,deleteUser:u,editUser:U,changeUserStatus:o},Symbol.toStringTag,{value:"Module"}));export{_,a,o as c,u as d,U as e,r as g};
