import{_ as u}from"./index-7ffd5008.js";import{ep as f,d,ba as _,b as m,a0 as g,o as b,c as h,f as y}from"./index-dea3e1d5.js";import{F as s}from"./componentEnum-5b7fa99f.js";import{S as l}from"./basic-2a5cf92e.js";import{g as C,a as D}from"./dict-5323e3b5.js";import"./base-table-cab511bd.js";/* empty css                 */import"./el-tag-d84f10ee.js";import"./base-select.vue_vue_type_script_lang-0e5115c3.js";import"./el-popper-deca58d6.js";import"./el-tree-6d6bf403.js";import"./index-a21d8604.js";import"./el-checkbox-e5e48d6b.js";import"./_Uint8Array-27b31b61.js";import"./debounce-f9c318a9.js";import"./index-337dd103.js";import"./el-empty-5c9929ab.js";import"./el-space-2d98409b.js";/* empty css                  *//* empty css                        */import"./el-dropdown-item-04b13769.js";import"./dropdown-7262a7f6.js";import"./base-dialog.vue_vue_type_style_index_0_lang-ede0cede.js";import"./index.vue_vue_type_script_setup_true_lang-22f78865.js";import"./base-icon-picker.vue_vue_type_style_index_0_lang-486ce22a.js";import"./base-input.vue_vue_type_script_setup_true_lang-a4e7371c.js";import"./base-column-setting-2234be66.js";import"./vuedraggable.umd-65e27c1f.js";import"./vue.runtime.esm-bundler-8e5f7356.js";import"./index-844f6123.js";import"./el-col-6ac2f80e.js";import"./base-filter-f49b4bff.js";import"./base-form.vue_vue_type_script_setup_true_lang-f283f5de.js";import"./el-form-item-42613a54.js";import"./useTagViewSetting-614e0d1a.js";import"./base-input-number-1d450847.js";import"./localeData-d8efea56.js";import"./index-fdd0f4cc.js";import"./position-f36c577e.js";function T(){return{filterColumn:[{fieldName:"dictType",fieldDesc:"\u5B57\u5178\u540D\u79F0",fieldType:s.SELECT,config:{api:C,labelKey:"dictName",valueKey:"dictType",clearable:!1}},{fieldName:"status",fieldDesc:"\u72B6\u6001",fieldType:s.SELECT,config:{options:l}}],tableColumn:[{fieldName:"dictLabel",fieldDesc:"\u5B57\u5178label",showOverflowTooltip:!0},{fieldName:"dictCode",fieldDesc:"\u5B57\u5178code",showOverflowTooltip:!0},{fieldName:"sort",fieldDesc:"\u6392\u5E8F"},{fieldName:"status",fieldDesc:"\u72B6\u6001",formType:"tag",type:e=>e.status===0?"danger":"",formatter:e=>f(l,e.status)},{fieldName:"createTime",fieldDesc:"\u521B\u5EFA\u65F6\u95F4",width:160},{fieldName:"remark",fieldDesc:"\u5907\u6CE8",showOverflowTooltip:!0}]}}const w={class:"system-dict-container"},pe=d({__name:"index",setup(n){const{tableColumn:i,filterColumn:e}=T(),p=_(),t=m({columns:e,onSearch:o,showOpen:!1,searchInfo:{dictType:""}}),a=m({columns:i,data:[],showPagination:!1,onRefresh:o});g(()=>{t.searchInfo.dictType=p.params.type,o()});async function o(){const r=await D({...t.searchInfo});a.data=r.data}return(r,E)=>{const c=u;return b(),h("div",w,[y(c,{"table-title":"\u5B57\u5178\u6570\u636E","filter-config":t,"table-config":a},null,8,["filter-config","table-config"])])}}});export{pe as default};