import{_ as R}from"./index-d9c2c0d5.js";import{d as T,b as F,r as E,a1 as x,V as U,o as C,B,w,f as _,_ as P,g as s,m as k,x as $,a6 as L,b8 as V,cd as A,b2 as I,c as O,e as j,h as K,ec as q,i as z}from"./index-2e4d6250.js";import{e as M,a as H,g as G,d as J,c as Q}from"./user-1d20ad04.js";import{F as m}from"./componentEnum-75f2f242.js";import{g as N}from"./role-c52ec112.js";import{g as S}from"./dept-15782a63.js";import{S as W}from"./basic-2a5cf92e.js";import{_ as X}from"./index-56bf70a1.js";import{E as Y}from"./el-tree-6d6a3a2e.js";import"./el-checkbox-8fd6afa3.js";import{_ as Z}from"./base-form.vue_vue_type_script_setup_true_lang-7c5d10cf.js";import"./base-table-7b17ffc8.js";import"./el-tag-73cc0598.js";import"./base-select.vue_vue_type_script_lang-d1331d18.js";import"./_Uint8Array-dae95bcd.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-9ef810d9.js";import"./base-column-setting-9e8376f1.js";import"./vuedraggable.umd-8385bb60.js";import"./vue.runtime.esm-bundler-e3ed4727.js";import"./base-filter-e4f7e7b4.js";import"./base-input-number-c527e19c.js";import"./localeData-987033d0.js";import"./el-col-fec1900f.js";import"./el-form-item-1c77742a.js";function v(u){const p=[{fieldName:"username",fieldDesc:"\u7528\u6237\u540D",fieldType:m.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272",fieldType:m.SELECT,config:{api:N,labelKey:"roleName",valueKey:"role"}},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:m.SELECT,config:{options:W}}],a=[{fieldName:"id",fieldDesc:"id",showOverflowTooltip:!0},{fieldName:"username",fieldDesc:"\u7528\u6237\u540D"},{fieldName:"deptName",fieldDesc:"\u90E8\u95E8",showOverflowTooltip:!0},{fieldName:"role",fieldDesc:"\u89D2\u8272",formType:"tag"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"switch",callFunction:u==null?void 0:u.changeSwitch},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0,active:!1},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:155,fixed:"right",operation:[{icon:"edit",label:"\u7F16\u8F91",callFunction:u==null?void 0:u.edit},{icon:"delete",label:"\u5220\u9664",confirm:!0,callFunction:u==null?void 0:u.delete}]}],i=[{fieldName:"username",fieldDesc:"\u7528\u6237\u540D",fieldType:m.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272",fieldType:m.SELECT,config:{api:N,valueKey:"role",multiple:!0}},{fieldName:"deptId",fieldDesc:"\u6240\u5C5E\u90E8\u95E8",fieldType:m.SELECT,config:{api:S,tree:!0,multiple:!0,init:!0,nodeKey:"deptId",props:{label:"deptName",children:"children"}}},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",fieldType:m.INPUT,config:{type:"textarea"}}];return{filterColumn:p,tableColumn:a,dialogColumn:i}}const ee=T({__name:"DeptTree",emits:["filter"],setup(u,{emit:p}){const a=F({keyword:"",treeData:[],defaultProps:{children:"children",label:"deptName"}}),i=E();x(()=>{c()});const c=async()=>{const e=await S();a.treeData=e.data},f=(e,n)=>e?n[a.defaultProps.label].includes(e):!0,d=e=>{p("filter",e.deptId)};return U(()=>a.keyword,e=>{s(i).filter(e)}),(e,n)=>{const h=P,D=Y,y=X;return C(),B(y,{title:"\u7EC4\u7EC7\u67B6\u6784",showHelp:"",helpText:"\u70B9\u51FB\u90E8\u95E8\u53EF\u663E\u793A\u5BF9\u5E94\u7684\u7528\u6237",class:"account-dept"},{extra:w(()=>[_(h,{modelValue:a.keyword,"onUpdate:modelValue":n[0]||(n[0]=g=>a.keyword=g),size:"small",style:{width:"145px"}},null,8,["modelValue"])]),default:w(()=>[_(D,{ref_key:"deptTreeRef",ref:i,"node-key":"deptId","highlight-current":"",data:a.treeData,props:a.defaultProps,"default-expand-all":"","expand-on-click-node":!1,onNodeClick:d,"filter-node-method":f},null,8,["data","props"])]),_:1})}}});const te=k(ee,[["__scopeId","data-v-1106f145"]]),ae=T({__name:"UserDialog",emits:["success"],setup(u,{expose:p,emit:a}){const{success:i}=I(),c=F({}),{dialogColumn:f}=v(),d=E(),e=E(),n=E(!1),h={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["blur","change"]}],role:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur","change"]}],deptId:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u90E8\u95E8",trigger:["blur","change"]}]},D=$(()=>s(n)?"\u4FEE\u6539\u7528\u6237":"\u65B0\u589E\u7528\u6237"),y=(o={})=>{s(d).showDialog(),L(()=>{var l,r;s(e).instance.resetFields(),n.value=!!o.id,s(n)&&Object.assign(c,o,{role:(l=o.role)==null?void 0:l.split(","),deptId:(r=o.deptId)==null?void 0:r.split(",").map(b=>parseFloat(b))})})},g=()=>{s(d).hideDialog()},t=async o=>{await s(e).instance.validate(async l=>{if(!l)return;const r=V(c);Object.assign(r,{deptId:r.deptId.join(),role:r.role.join()}),o(!0);try{s(n)?await M(r):await H(r),i(s(n)?"\u4FEE\u6539\u6210\u529F":"\u65B0\u589E\u6210\u529F\uFF01"),a("success"),g()}finally{o(!1)}})};return p({showDialog:y,hideDialog:g}),(o,l)=>{const r=Z,b=A;return C(),B(b,{ref_key:"baseDialogRef",ref:d,width:"560px",title:s(D),onSave:t},{default:w(()=>[_(r,{ref_key:"baseFormRef",ref:e,columns:s(f),rules:h,model:c},null,8,["columns","model"])]),_:1},8,["title"])}}}),oe={class:"system-account-container flex"},se={class:"account-user"},ue=T({name:"Account"}),ne=T({...ue,setup(u){const{tableColumn:p,filterColumn:a}=v({edit:D,delete:y,changeSwitch:g}),{success:i}=I(),c=F({columns:a,showOpen:!1,onSearch:e,searchInfo:{deptId:""}}),f=F({columns:p,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:e}),d=E();x(()=>{e()});async function e(){const{currentPage:t,pageSize:o}=f.pagination,l=await G({...c.searchInfo,currentPage:t,pageSize:o});f.data=l.data.list||[],f.pagination.total=l.data.total}function n(t){c.searchInfo.deptId=t,e()}function h(){s(d).showDialog()}function D(t){s(d).showDialog(t.row)}async function y(t){const{id:o}=t.row;await J({id:o}),i("\u5220\u9664\u6210\u529F"),e()}async function g(t){return q(`\u786E\u8BA4\u8981${t.status===0?"\u542F\u7528":"\u505C\u7528"}\u8BE5\u7528\u6237\u5417?`).then(async()=>{await Q({id:t.id}),i(`${t.status===0?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F`),e()})}return(t,o)=>{const l=z,r=R;return C(),O("div",oe,[_(te,{onFilter:n}),j("div",se,[_(r,{"table-title":"\u7528\u6237\u5217\u8868","filter-config":c,"table-config":f},{buttons:w(()=>[_(l,{type:"primary",onClick:h},{default:w(()=>[K("\u65B0\u589E\u7528\u6237")]),_:1})]),_:1},8,["filter-config","table-config"])]),_(ae,{ref_key:"userDialogRef",ref:d,onSuccess:e},null,512)])}}});const Se=k(ne,[["__scopeId","data-v-47514756"]]);export{Se as default};
