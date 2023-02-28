import{_ as S}from"./index-d9c2c0d5.js";import{d as C,r as _,b,a1 as w,x,o as E,B as I,w as h,f as m,g as u,a6 as M,cd as P,b2 as T,c as O,h as $,ec as L,i as U}from"./index-2e4d6250.js";import{e as q,a as v,b as A,d as K,c as j}from"./role-c52ec112.js";import{_ as z}from"./base-form.vue_vue_type_script_setup_true_lang-7c5d10cf.js";import{E as V}from"./el-tree-6d6a3a2e.js";import"./el-checkbox-8fd6afa3.js";import{F as c}from"./componentEnum-75f2f242.js";import{S as G}from"./basic-2a5cf92e.js";import{g as H}from"./menu-4c9a6641.js";import"./base-table-7b17ffc8.js";import"./el-tag-73cc0598.js";import"./base-select.vue_vue_type_script_lang-d1331d18.js";import"./_Uint8Array-dae95bcd.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-9ef810d9.js";import"./base-column-setting-9e8376f1.js";import"./vuedraggable.umd-8385bb60.js";import"./vue.runtime.esm-bundler-e3ed4727.js";import"./index-56bf70a1.js";import"./el-col-fec1900f.js";import"./base-filter-e4f7e7b4.js";import"./el-form-item-1c77742a.js";import"./base-input-number-c527e19c.js";import"./localeData-987033d0.js";function N(a){const d=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:c.SELECT,config:{options:G}}],f=[{fieldName:"id",fieldDesc:"id",showOverflowTooltip:!0},{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0"},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",formType:"tag"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"switch",callFunction:a==null?void 0:a.changeSwitch},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:175,fixed:"right",operation:[{icon:"edit",label:"\u7F16\u8F91",callFunction:a==null?void 0:a.edit},{icon:"delete",label:"\u5220\u9664",confirm:!0,callFunction:a==null?void 0:a.delete}]}],r=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",fieldType:c.INPUT},{fieldName:"menuIds",fieldDesc:"\u83DC\u5355",fieldType:c.SLOT},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",fieldType:c.INPUT,config:{type:"textarea"}}];return{filterColumn:d,tableColumn:f,dialogColumn:r}}const J=C({__name:"RoleDialog",emits:["success"],setup(a,{expose:d,emit:f}){const{success:r}=T(),{dialogColumn:p}=N(),i=_(),l=_(),s=_(),e=b({isEdit:!1,treeData:[],defaultProps:{children:"children",label:"menuName"},formModel:{}}),D={roleName:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:["blur","change"]}],role:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",trigger:["blur","change"]}],menuIds:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355",trigger:["blur","change"]}]};w(async()=>{const t=await H();e.treeData=t.data});const y=x(()=>e.isEdit?"\u4FEE\u6539\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),F=(t={})=>{u(i).showDialog(),M(()=>{u(l).instance.resetFields(),e.isEdit=!!t.id,e.isEdit?(Object.assign(e.formModel,t),u(s).setCheckedKeys(t.menuIds)):u(s).setCheckedKeys([])})},o=()=>{u(i).hideDialog()},n=async t=>{Object.assign(e.formModel,{menuIds:u(s).getCheckedKeys()}),await u(l).instance.validate(async g=>{if(!!g){t(!0);try{e.isEdit?await q(e.formModel):await v(e.formModel),r(e.isEdit?"\u4FEE\u6539\u6210\u529F":"\u65B0\u589E\u6210\u529F\uFF01"),f("success"),o()}finally{t(!1)}}})};return d({showDialog:F,hideDialog:o}),(t,g)=>{const B=V,R=z,k=P;return E(),I(k,{ref_key:"baseDialogRef",ref:i,width:"560px",title:u(y),onSave:n},{default:h(()=>[m(R,{ref_key:"baseFormRef",ref:l,columns:u(p),rules:D,model:e.formModel},{menuIds:h(()=>[m(B,{ref_key:"roleTreeRef",ref:s,"node-key":"id","highlight-current":"",data:e.treeData,props:e.defaultProps,"show-checkbox":"","expand-on-click-node":!1},null,8,["data","props"])]),_:1},8,["columns","model"])]),_:1},8,["title"])}}}),Q={class:"system-role-container"},W=C({name:"Role"}),Fe=C({...W,setup(a){const{tableColumn:d,filterColumn:f}=N({edit:D,delete:y,changeSwitch:F}),{success:r}=T(),p=b({columns:f,onSearch:s,showOpen:!1,searchInfo:{}}),i=b({columns:d,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:s}),l=_();w(()=>{s()});async function s(){const{currentPage:o,pageSize:n}=i.pagination,t=await A({...p.searchInfo,currentPage:o,pageSize:n});i.data=t.data.list||[],i.pagination.total=t.data.total}function e(){u(l).showDialog()}function D(o){u(l).showDialog(o.row)}async function y(o){const{id:n}=o.row;await K({id:n}),r("\u5220\u9664\u6210\u529F"),s()}async function F(o){return L(`\u786E\u8BA4\u8981${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u8BE5\u89D2\u8272\u5417?`).then(async()=>{await j({id:o.id}),r(`${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F}`),s()})}return(o,n)=>{const t=U,g=S;return E(),O("div",Q,[m(g,{"table-title":"\u89D2\u8272\u5217\u8868","filter-config":p,"table-config":i},{buttons:h(()=>[m(t,{type:"primary",onClick:e},{default:h(()=>[$("\u65B0\u589E\u89D2\u8272")]),_:1})]),_:1},8,["filter-config","table-config"]),m(J,{ref_key:"roleDialogRef",ref:l,onSuccess:s},null,512)])}}});export{Fe as default};