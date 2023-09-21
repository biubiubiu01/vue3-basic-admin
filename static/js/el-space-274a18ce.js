import{m as w,d as T,x as $,v as h,b2 as O,B as A,r as x,b4 as B,P as d,y as g,n as y,bM as C,Q as I,O as L,f as v,bN as o,i as R,bO as P,bP as V,G as Y}from"./index-065da345.js";const _=w({prefixCls:{type:String}}),z=T({name:"ElSpaceItem",props:_,setup(e,{slots:u}){const p=$("space"),i=h(()=>`${e.prefixCls||p.b()}__item`);return()=>O("div",{class:i.value},A(u,"default"))}}),N={small:8,default:12,large:16};function j(e){const u=$("space"),p=h(()=>[u.b(),u.m(e.direction),e.class]),i=x(0),n=x(0),m=h(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},l={alignItems:e.alignment};return[t,l,e.style]}),f=h(()=>{const t={paddingBottom:`${n.value}px`,marginRight:`${i.value}px`},l=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,l]});return B(()=>{const{size:t="small",wrap:l,direction:r,fill:a}=e;if(d(t)){const[s=0,c=0]=t;i.value=s,n.value=c}else{let s;g(t)?s=t:s=N[t||"small"]||N.small,(l||a)&&r==="horizontal"?i.value=n.value=s:r==="horizontal"?(i.value=s,n.value=0):(n.value=s,i.value=0)}}),{classes:p,containerStyle:m,itemStyle:f}}const k=w({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:y([String,Object,Array]),default:""},style:{type:y([String,Array,Object]),default:""},alignment:{type:y(String),default:"center"},prefixCls:{type:String},spacer:{type:y([Object,String,Number,Array]),default:null,validator:e=>C(e)||g(e)||I(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:L,validator:e=>g(e)||d(e)&&e.length===2&&e.every(g)}});var F=T({name:"ElSpace",props:k,setup(e,{slots:u}){const{classes:p,containerStyle:i,itemStyle:n}=j(e);function m(f,t="",l=[]){const{prefixCls:r}=e;return f.forEach((a,s)=>{P(a)?d(a.children)&&a.children.forEach((c,S)=>{P(c)&&d(c.children)?m(c.children,`${t+S}-`,l):l.push(v(z,{style:n.value,prefixCls:r,key:`nested-${t+S}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):V(a)&&l.push(v(z,{style:n.value,prefixCls:r,key:`LoopKey${t+s}`},{default:()=>[a]},o.PROPS|o.STYLE,["style","prefixCls"]))}),l}return()=>{var f;const{spacer:t,direction:l}=e,r=A(u,"default",{key:0},()=>[]);if(((f=r.children)!=null?f:[]).length===0)return null;if(d(r.children)){let a=m(r.children);if(t){const s=a.length-1;a=a.reduce((c,S,b)=>{const E=[...c,S];return b!==s&&E.push(v("span",{style:[n.value,l==="vertical"?"width: 100%":null],key:b},[C(t)?t:R(t,o.TEXT)],o.STYLE)),E},[])}return v("div",{class:p.value,style:i.value},a,o.STYLE|o.CLASS)}return r.children}}});const M=Y(F);export{M as E};