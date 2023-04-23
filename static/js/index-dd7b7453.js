import{_ as S}from"./index-7ffd5008.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-22f78865.js";import{e as I,a as M,b as P,d as O,c as $}from"./role-6867f156.js";import{_ as v}from"./base-dialog.vue_vue_type_style_index_0_lang-ede0cede.js";import{_ as A}from"./base-form.vue_vue_type_script_setup_true_lang-f283f5de.js";import{d as C,r as _,b,a0 as w,v as L,o as E,A as U,w as h,f,g as i,a5 as q,c2 as T,c as K,i as j,ei as z}from"./index-dea3e1d5.js";import{E as V}from"./el-tree-6d6bf403.js";import"./el-checkbox-e5e48d6b.js";import{F as c}from"./componentEnum-5b7fa99f.js";import{S as G}from"./basic-2a5cf92e.js";import{g as H}from"./menu-743f5446.js";import"./base-table-cab511bd.js";/* empty css                 */import"./el-tag-d84f10ee.js";import"./base-select.vue_vue_type_script_lang-0e5115c3.js";import"./el-popper-deca58d6.js";import"./_Uint8Array-27b31b61.js";import"./debounce-f9c318a9.js";import"./index-337dd103.js";import"./el-empty-5c9929ab.js";import"./el-space-2d98409b.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-04b13769.js";import"./dropdown-7262a7f6.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-486ce22a.js";import"./base-input.vue_vue_type_script_setup_true_lang-a4e7371c.js";import"./base-column-setting-2234be66.js";import"./vuedraggable.umd-65e27c1f.js";import"./vue.runtime.esm-bundler-8e5f7356.js";import"./index-844f6123.js";import"./el-col-6ac2f80e.js";import"./base-filter-f49b4bff.js";import"./useTagViewSetting-614e0d1a.js";import"./el-form-item-42613a54.js";import"./index-a21d8604.js";import"./base-input-number-1d450847.js";import"./localeData-d8efea56.js";import"./index-fdd0f4cc.js";import"./position-f36c577e.js";function N(a){const m=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:c.SELECT,config:{options:G}}],d=[{fieldName:"id",fieldDesc:"id",showOverflowTooltip:!0},{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0"},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",formType:"tag"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"switch",callFunction:a==null?void 0:a.changeSwitch},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0},{fieldName:"#",fieldDesc:"\u64CD\u4F5C",formType:"operation",width:175,fixed:"right",operation:[{icon:"edit",label:"\u7F16\u8F91",callFunction:a==null?void 0:a.edit},{icon:"delete",label:"\u5220\u9664",confirm:!0,callFunction:a==null?void 0:a.delete}]}],l=[{fieldName:"roleName",fieldDesc:"\u89D2\u8272\u540D\u79F0",fieldType:c.INPUT},{fieldName:"role",fieldDesc:"\u89D2\u8272\u6807\u8BC6",fieldType:c.INPUT},{fieldName:"menuIds",fieldDesc:"\u83DC\u5355",fieldType:c.SLOT},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",fieldType:c.INPUT,config:{type:"textarea"}}];return{filterColumn:m,tableColumn:d,dialogColumn:l}}const J=C({__name:"RoleDialog",emits:["success"],setup(a,{expose:m,emit:d}){const{success:l}=T(),{dialogColumn:p}=N(),u=_(),r=_(),s=_(),e=b({isEdit:!1,treeData:[],defaultProps:{children:"children",label:"menuName"},formModel:{}}),D={roleName:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:["blur","change"]}],role:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",trigger:["blur","change"]}],menuIds:[{type:"array",required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355",trigger:["blur","change"]}]};w(async()=>{const t=await H();e.treeData=t.data});const y=L(()=>e.isEdit?"\u4FEE\u6539\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),F=(t={})=>{i(u).showDialog(),q(()=>{i(r).instance.resetFields(),e.isEdit=!!t.id,e.isEdit?(Object.assign(e.formModel,t),i(s).setCheckedKeys(t.menuIds)):i(s).setCheckedKeys([])})},o=()=>{i(u).hideDialog()},n=async t=>{Object.assign(e.formModel,{menuIds:i(s).getCheckedKeys()}),await i(r).instance.validate(async g=>{if(!!g){t(!0);try{e.isEdit?await I(e.formModel):await M(e.formModel),l(e.isEdit?"\u4FEE\u6539\u6210\u529F":"\u65B0\u589E\u6210\u529F\uFF01"),d("success"),o()}finally{t(!1)}}})};return m({showDialog:F,hideDialog:o}),(t,g)=>{const B=V,R=A,k=v;return E(),U(k,{ref_key:"baseDialogRef",ref:u,width:"560px",title:i(y),onSave:n},{default:h(()=>[f(R,{ref_key:"baseFormRef",ref:r,columns:i(p),rules:D,model:e.formModel},{menuIds:h(()=>[f(B,{ref_key:"roleTreeRef",ref:s,"node-key":"id","highlight-current":"",data:e.treeData,props:e.defaultProps,"show-checkbox":"","expand-on-click-node":!1},null,8,["data","props"])]),_:1},8,["columns","model"])]),_:1},8,["title"])}}}),Q={class:"system-role-container"},W=C({name:"Role"}),ve=C({...W,setup(a){const{tableColumn:m,filterColumn:d}=N({edit:D,delete:y,changeSwitch:F}),{success:l}=T(),p=b({columns:d,onSearch:s,showOpen:!1,searchInfo:{}}),u=b({columns:m,data:[],pagination:{currentPage:1,pageSize:10,total:0},onRefresh:s}),r=_();w(()=>{s()});async function s(){const{currentPage:o,pageSize:n}=u.pagination,t=await P({...p.searchInfo,currentPage:o,pageSize:n});u.data=t.data.list||[],u.pagination.total=t.data.total}function e(){i(r).showDialog()}function D(o){i(r).showDialog(o.row)}async function y(o){const{id:n}=o.row;await O({id:n}),l("\u5220\u9664\u6210\u529F"),s()}async function F(o){return z(`\u786E\u8BA4\u8981${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u8BE5\u89D2\u8272\u5417?`).then(async()=>{await $({id:o.id}),l(`${o.status===0?"\u542F\u7528":"\u505C\u7528"}\u6210\u529F}`),s()})}return(o,n)=>{const t=x,g=S;return E(),K("div",Q,[f(g,{"table-title":"\u89D2\u8272\u5217\u8868","filter-config":p,"table-config":u},{buttons:h(()=>[f(t,{type:"primary",onClick:e},{default:h(()=>[j("\u65B0\u589E\u89D2\u8272")]),_:1})]),_:1},8,["filter-config","table-config"]),f(J,{ref_key:"roleDialogRef",ref:r,onSuccess:s},null,512)])}}});export{ve as default};
