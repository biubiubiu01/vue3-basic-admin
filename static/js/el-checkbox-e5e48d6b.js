import{ak as O,N as Q,al as ke,S as A,L as X,am as J,an as pe,ao as xe,ap as ye,aq as Ce,ar as Y,as as $,Q as R,y as M,R as N,s as E,v as p,at as V,au as Se,av as T,U as Z,V as _,a5 as j,aw as ee,r as F,P as L,ax as Le,T as U,ay as ne,d as C,a6 as ae,x as P,o as x,A as le,w as te,e as H,C as k,g as a,az as B,c as y,aA as I,aB as w,B as z,a4 as Ee,i as oe,t as se,ab as G,E as ie,F as D,D as Be,m as Ie,n as we,H as $e,W as Ne,G as Ve,ad as ue}from"./index-dea3e1d5.js";function Fe(e){return e}function Ge(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}var Te=800,Pe=16,ze=Date.now;function De(e){var n=0,t=0;return function(){var l=ze(),s=Pe-(l-t);if(t=l,s>0){if(++n>=Te)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Oe(e){return function(){return e}}var Ae=O?function(e,n){return O(e,"toString",{configurable:!0,enumerable:!1,value:Oe(n),writable:!0})}:Fe;const Re=Ae;var Me=De(Re);const Ue=Me;var K=Math.max;function He(e,n,t){return n=K(n===void 0?e.length-1:n,0),function(){for(var l=arguments,s=-1,d=K(l.length-n,0),c=Array(d);++s<d;)c[s]=l[n+s];s=-1;for(var i=Array(n+1);++s<n;)i[s]=l[s];return i[n]=t(c),Ge(e,this,i)}}var Ke=9007199254740991;function We(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ke}var qe="[object Arguments]";function W(e){return Q(e)&&ke(e)==qe}var re=Object.prototype,Qe=re.hasOwnProperty,Xe=re.propertyIsEnumerable,Je=W(function(){return arguments}())?W:function(e){return Q(e)&&Qe.call(e,"callee")&&!Xe.call(e,"callee")};const de=Je;function Ye(e,n){for(var t=-1,l=n.length,s=e.length;++t<l;)e[s+t]=n[t];return e}var q=A?A.isConcatSpreadable:void 0;function Ze(e){return X(e)||de(e)||!!(q&&e&&e[q])}function ce(e,n,t,l,s){var d=-1,c=e.length;for(t||(t=Ze),s||(s=[]);++d<c;){var i=e[d];n>0&&t(i)?n>1?ce(i,n-1,t,l,s):Ye(s,i):l||(s[s.length]=i)}return s}function _e(e){var n=e==null?0:e.length;return n?ce(e,1):[]}function je(e){return Ue(He(e,void 0,_e),e+"")}function en(e,n){return e!=null&&n in Object(e)}function nn(e,n,t){n=J(n,e);for(var l=-1,s=n.length,d=!1;++l<s;){var c=pe(n[l]);if(!(d=e!=null&&t(e,c)))break;e=e[c]}return d||++l!=s?d:(s=e==null?0:e.length,!!s&&We(s)&&xe(c,s)&&(X(e)||de(e)))}function an(e,n){return e!=null&&nn(e,n,en)}function ln(e,n,t){for(var l=-1,s=n.length,d={};++l<s;){var c=n[l],i=ye(e,c);t(i,c)&&Ce(d,J(c,e),i)}return d}function tn(e,n){return ln(e,n,function(t,l){return an(e,l)})}var on=je(function(e,n){return e==null?{}:tn(e,n)});const sn=on,S=Symbol("checkboxGroupContextKey"),be={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:Y,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ve={[$]:e=>R(e)||M(e)||N(e),change:e=>R(e)||M(e)||N(e)},un=({model:e,isChecked:n})=>{const t=E(S,void 0),l=p(()=>{var d,c;const i=(d=t==null?void 0:t.max)==null?void 0:d.value,v=(c=t==null?void 0:t.min)==null?void 0:c.value;return!V(i)&&e.value.length>=i&&!n.value||!V(v)&&e.value.length<=v&&n.value});return{isDisabled:Se(p(()=>(t==null?void 0:t.disabled.value)||l.value)),isLimitDisabled:l}},rn=(e,{model:n,isLimitExceeded:t,hasOwnLabel:l,isDisabled:s,isLabeledByFormItem:d})=>{const c=E(S,void 0),{formItem:i}=T(),{emit:v}=ee();function u(o){var b,h;return o===e.trueLabel||o===!0?(b=e.trueLabel)!=null?b:!0:(h=e.falseLabel)!=null?h:!1}function m(o,b){v("change",u(o),b)}function g(o){if(t.value)return;const b=o.target;v("change",u(b.checked),o)}async function f(o){t.value||!l.value&&!s.value&&d.value&&(o.composedPath().some(ge=>ge.tagName==="LABEL")||(n.value=u([!1,e.falseLabel].includes(n.value)),await j(),m(n.value,o)))}const r=p(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return Z(()=>e.modelValue,()=>{r.value&&(i==null||i.validate("change").catch(o=>_()))}),{handleChange:g,onClickRoot:f}},dn=e=>{const n=F(!1),{emit:t}=ee(),l=E(S,void 0),s=p(()=>V(l)===!1),d=F(!1);return{model:p({get(){var i,v;return s.value?(i=l==null?void 0:l.modelValue)==null?void 0:i.value:(v=e.modelValue)!=null?v:n.value},set(i){var v,u;s.value&&L(i)?(d.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&i.length>(l==null?void 0:l.max.value),d.value===!1&&((u=l==null?void 0:l.changeEvent)==null||u.call(l,i))):(t($,i),n.value=i)}}),isGroup:s,isLimitExceeded:d}},cn=(e,n,{model:t})=>{const l=E(S,void 0),s=F(!1),d=p(()=>{const u=t.value;return N(u)?u:L(u)?u.map(Le).includes(e.label):u!=null?u===e.trueLabel:!!u}),c=U(p(()=>{var u;return(u=l==null?void 0:l.size)==null?void 0:u.value}),{prop:!0}),i=U(p(()=>{var u;return(u=l==null?void 0:l.size)==null?void 0:u.value})),v=p(()=>!!(n.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:s,checkboxSize:i,hasOwnLabel:v}},bn=(e,{model:n})=>{function t(){L(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&t()},me=(e,n)=>{const{formItem:t}=T(),{model:l,isGroup:s,isLimitExceeded:d}=dn(e),{isFocused:c,isChecked:i,checkboxButtonSize:v,checkboxSize:u,hasOwnLabel:m}=cn(e,n,{model:l}),{isDisabled:g}=un({model:l,isChecked:i}),{inputId:f,isLabeledByFormItem:r}=ne(e,{formItemContext:t,disableIdGeneration:m,disableIdManagement:s}),{handleChange:o,onClickRoot:b}=rn(e,{model:l,isLimitExceeded:d,hasOwnLabel:m,isDisabled:g,isLabeledByFormItem:r});return bn(e,{model:l}),{inputId:f,isLabeledByFormItem:r,isChecked:i,isDisabled:g,isFocused:c,checkboxButtonSize:v,checkboxSize:u,hasOwnLabel:m,model:l,handleChange:o,onClickRoot:b}},vn=["tabindex","role","aria-checked"],mn=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],fn=["id","aria-hidden","disabled","value","name","tabindex"],hn=C({name:"ElCheckbox"}),gn=C({...hn,props:be,emits:ve,setup(e){const n=e,t=ae(),{inputId:l,isLabeledByFormItem:s,isChecked:d,isDisabled:c,isFocused:i,checkboxSize:v,hasOwnLabel:u,model:m,handleChange:g,onClickRoot:f}=me(n,t),r=P("checkbox");return(o,b)=>(x(),le(ie(!a(u)&&a(s)?"span":"label"),{class:k([a(r).b(),a(r).m(a(v)),a(r).is("disabled",a(c)),a(r).is("bordered",o.border),a(r).is("checked",a(d))]),"aria-controls":o.indeterminate?o.controls:null,onClick:a(f)},{default:te(()=>[H("span",{class:k([a(r).e("input"),a(r).is("disabled",a(c)),a(r).is("checked",a(d)),a(r).is("indeterminate",o.indeterminate),a(r).is("focus",a(i))]),tabindex:o.indeterminate?0:void 0,role:o.indeterminate?"checkbox":void 0,"aria-checked":o.indeterminate?"mixed":void 0},[o.trueLabel||o.falseLabel?B((x(),y("input",{key:0,id:a(l),"onUpdate:modelValue":b[0]||(b[0]=h=>I(m)?m.value=h:null),class:k(a(r).e("original")),type:"checkbox","aria-hidden":o.indeterminate?"true":"false",name:o.name,tabindex:o.tabindex,disabled:a(c),"true-value":o.trueLabel,"false-value":o.falseLabel,onChange:b[1]||(b[1]=(...h)=>a(g)&&a(g)(...h)),onFocus:b[2]||(b[2]=h=>i.value=!0),onBlur:b[3]||(b[3]=h=>i.value=!1)},null,42,mn)),[[w,a(m)]]):B((x(),y("input",{key:1,id:a(l),"onUpdate:modelValue":b[4]||(b[4]=h=>I(m)?m.value=h:null),class:k(a(r).e("original")),type:"checkbox","aria-hidden":o.indeterminate?"true":"false",disabled:a(c),value:o.label,name:o.name,tabindex:o.tabindex,onChange:b[5]||(b[5]=(...h)=>a(g)&&a(g)(...h)),onFocus:b[6]||(b[6]=h=>i.value=!0),onBlur:b[7]||(b[7]=h=>i.value=!1)},null,42,fn)),[[w,a(m)]]),H("span",{class:k(a(r).e("inner"))},null,2)],10,vn),a(u)?(x(),y("span",{key:0,class:k(a(r).e("label"))},[z(o.$slots,"default"),o.$slots.default?G("v-if",!0):(x(),y(Ee,{key:0},[oe(se(o.label),1)],64))],2)):G("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var kn=D(gn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const pn=["name","tabindex","disabled","true-value","false-value"],xn=["name","tabindex","disabled","value"],yn=C({name:"ElCheckboxButton"}),Cn=C({...yn,props:be,emits:ve,setup(e){const n=e,t=ae(),{isFocused:l,isChecked:s,isDisabled:d,checkboxButtonSize:c,model:i,handleChange:v}=me(n,t),u=E(S,void 0),m=P("checkbox"),g=p(()=>{var f,r,o,b;const h=(r=(f=u==null?void 0:u.fill)==null?void 0:f.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(b=(o=u==null?void 0:u.textColor)==null?void 0:o.value)!=null?b:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}});return(f,r)=>(x(),y("label",{class:k([a(m).b("button"),a(m).bm("button",a(c)),a(m).is("disabled",a(d)),a(m).is("checked",a(s)),a(m).is("focus",a(l))])},[f.trueLabel||f.falseLabel?B((x(),y("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=o=>I(i)?i.value=o:null),class:k(a(m).be("button","original")),type:"checkbox",name:f.name,tabindex:f.tabindex,disabled:a(d),"true-value":f.trueLabel,"false-value":f.falseLabel,onChange:r[1]||(r[1]=(...o)=>a(v)&&a(v)(...o)),onFocus:r[2]||(r[2]=o=>l.value=!0),onBlur:r[3]||(r[3]=o=>l.value=!1)},null,42,pn)),[[w,a(i)]]):B((x(),y("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=o=>I(i)?i.value=o:null),class:k(a(m).be("button","original")),type:"checkbox",name:f.name,tabindex:f.tabindex,disabled:a(d),value:f.label,onChange:r[5]||(r[5]=(...o)=>a(v)&&a(v)(...o)),onFocus:r[6]||(r[6]=o=>l.value=!0),onBlur:r[7]||(r[7]=o=>l.value=!1)},null,42,xn)),[[w,a(i)]]),f.$slots.default||f.label?(x(),y("span",{key:2,class:k(a(m).be("button","inner")),style:Be(a(s)?a(g):void 0)},[z(f.$slots,"default",{},()=>[oe(se(f.label),1)])],6)):G("v-if",!0)],2))}});var fe=D(Cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Sn=Ie({modelValue:{type:we(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Y,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Ln={[$]:e=>L(e),change:e=>L(e)},En=C({name:"ElCheckboxGroup"}),Bn=C({...En,props:Sn,emits:Ln,setup(e,{emit:n}){const t=e,l=P("checkbox"),{formItem:s}=T(),{inputId:d,isLabeledByFormItem:c}=ne(t,{formItemContext:s}),i=async u=>{n($,u),await j(),n("change",u)},v=p({get(){return t.modelValue},set(u){i(u)}});return $e(S,{...sn(Ne(t),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:i}),Z(()=>t.modelValue,()=>{t.validateEvent&&(s==null||s.validate("change").catch(u=>_()))}),(u,m)=>{var g;return x(),le(ie(u.tag),{id:a(d),class:k(a(l).b("group")),role:"group","aria-label":a(c)?void 0:u.label||"checkbox-group","aria-labelledby":a(c)?(g=a(s))==null?void 0:g.labelId:void 0},{default:te(()=>[z(u.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var he=D(Bn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const wn=Ve(kn,{CheckboxButton:fe,CheckboxGroup:he});ue(fe);const $n=ue(he);export{wn as E,Ye as a,de as b,$n as c,_e as f,We as i,sn as p};
