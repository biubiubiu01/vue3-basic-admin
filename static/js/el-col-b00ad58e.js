import{m as g,n as r,q as c,d as f,s as O,v as p,x as b,y,z as S,o as h,A as w,w as _,B as $,C as v,g as o,D as j,E as N,F as C,G as E,H as k}from"./index-065da345.js";const x=Symbol("rowContextKey"),B=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>c({})},sm:{type:r([Number,Object]),default:()=>c({})},md:{type:r([Number,Object]),default:()=>c({})},lg:{type:r([Number,Object]),default:()=>c({})},xl:{type:r([Number,Object]),default:()=>c({})}}),P=f({name:"ElCol"}),A=f({...P,props:B,setup(i){const t=i,{gutter:n}=O(x,{gutter:p(()=>0)}),l=b("col"),m=p(()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=`${n.value/2}px`),e}),a=p(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const u=t[s];y(u)&&(s==="span"?e.push(l.b(`${t[s]}`)):u>0&&e.push(l.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{y(t[s])?e.push(l.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([u,d])=>{e.push(u!=="span"?l.b(`${s}-${u}-${d}`):l.b(`${s}-${d}`))})}),n.value&&e.push(l.is("guttered")),e});return(e,R)=>(h(),w(N(e.tag),{class:v([o(l).b(),o(a)]),style:j(o(m))},{default:_(()=>[$(e.$slots,"default")]),_:3},8,["class","style"]))}});var D=C(A,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const T=E(D),K=["start","center","end","space-around","space-between","space-evenly"],L=["top","middle","bottom"],q=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:K,default:"start"},align:{type:String,values:L,default:"top"}}),F=f({name:"ElRow"}),G=f({...F,props:q,setup(i){const t=i,n=b("row"),l=p(()=>t.gutter);k(x,{gutter:l});const m=p(()=>{const a={};return t.gutter&&(a.marginRight=a.marginLeft=`-${t.gutter/2}px`),a});return(a,e)=>(h(),w(N(a.tag),{class:v([o(n).b(),o(n).is(`justify-${t.justify}`,a.justify!=="start"),o(n).is(`align-${t.align}`,a.align!=="top")]),style:j(o(m))},{default:_(()=>[$(a.$slots,"default")]),_:3},8,["class","style"]))}});var H=C(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const M=E(H);export{T as E,M as a};