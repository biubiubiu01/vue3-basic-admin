import{d as f,o as l,c as m,f as e,w as a,a4 as B,b8 as A,g as $,A as g,e as o,t as i,ab as h,_ as V,l as b,r as F,i as E,b as v}from"./index-dea3e1d5.js";import{E as C,a as D}from"./el-col-6ac2f80e.js";import{_ as y}from"./index-844f6123.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-3dd1d4d0.js";import{_ as w}from"./base-charts.vue_vue_type_script_setup_true_lang-5b7c090e.js";import{_ as k}from"./base-seam-scroll.vue_vue_type_script_setup_true_lang-84bf7cae.js";import{E as L}from"./el-avatar-7e9dd8e8.js";import"./el-popper-deca58d6.js";import"./useChartsConfig-52ede03a.js";const U=[{title:"\u4ECA\u65E5\u6536\u76CA",value:10500,extraTitle:"\u603B\u6536\u76CA",extraValue:17500,prefix:"\xA5",suffix:"",icon:"svg-money"},{title:"\u4ECA\u65E5\u8BBF\u95EE\u91CF",value:16800,extraTitle:"\u603B\u8BBF\u95EE\u91CF",extraValue:130845,prefix:"",suffix:"\u6B21",icon:"svg-view"},{title:"\u5F85\u53D1\u8D27",value:626,extraTitle:"\u8BA2\u5355\u91CF",extraValue:1679,prefix:"",suffix:"\u4E2A",icon:"svg-deliver"},{title:"\u597D\u8BC4\u7387",value:98,extraTitle:"\u540C\u671F\u5BF9\u6BD4",extraValue:"+3.25%",prefix:"",suffix:"%",icon:"svg-good"}],N={class:"card-list-wrapper"},O={class:"card-item-title text-hidden"},z={class:"mt20 mb20 pl20"},I={key:0,class:"card-item-prefix"},M={key:1,class:"card-item-suffix"},R={class:"card-item-extra flex justify-between"},j=f({__name:"CardList",props:{loading:{type:Boolean,default:!1}},setup(s){return(n,c)=>{const r=S,p=V,_=y,d=C,u=D;return l(),m("div",N,[e(u,{gutter:16},{default:a(()=>[(l(!0),m(B,null,A($(U),t=>(l(),g(d,{key:t.title,span:6},{default:a(()=>[e(_,{loading:s.loading,class:"card-item",hover:""},{default:a(()=>[o("div",O,i(t.title),1),o("div",z,[t.prefix?(l(),m("span",I,i(t.prefix),1)):h("",!0),e(r,{"start-val":0,"end-val":t.value,size:34},null,8,["end-val"]),t.suffix?(l(),m("span",M,i(t.suffix),1)):h("",!0)]),o("div",R,[o("span",null,i(t.extraTitle),1),o("span",null,i(t.extraValue),1)]),e(p,{icon:t.icon,size:52,class:"card-item-icon"},null,8,["icon"])]),_:2},1032,["loading"])]),_:2},1024))),128))]),_:1})])}}});const W=b(j,[["__scopeId","data-v-e4fee5ca"]]),G={class:"flex-auto ml20"},P={class:"flex-row-center justify-between"},q={class:"dynamic-item-time"},H={class:"mt10 dynamic-item-content"},J={class:"dynamic-item-value"},K=f({__name:"TrueDynamic",setup(s){const n=F([{name:"\u4E0A\u6D77\u6D66\u4E1C\u5206\u5E97",imgUrl:"\u6D66\u4E1C",value:"2000",time:"\u521A\u521A"},{name:"\u4E0A\u6D77\u5F90\u6C47\u5206\u5E97",imgUrl:"\u5F90\u6C47",value:"8888",time:"3\u5206\u949F\u524D"},{name:"\u4E0A\u6D77\u677E\u6C5F\u5206\u5E97",imgUrl:"\u677E\u6C5F",value:"6688",time:"5\u5206\u949F\u524D"},{name:"\u4E0A\u6D77\u5B9D\u5C71\u5206\u5E97",imgUrl:"\u5B9D\u5C71",value:"1314",time:"10\u5206\u949F\u524D"},{name:"\u4E0A\u6D77\u6768\u6D66\u5206\u5E97",imgUrl:"\u6768\u6D66",value:"666",time:"12\u5206\u949F\u524D"}]),c=F({step:.6,autoPlay:!0});return(r,p)=>{const _=L,d=k;return l(),g(d,{data:n.value,options:c.value},{default:a(()=>[(l(!0),m(B,null,A(n.value,u=>(l(),m("div",{key:u.name,class:"dynamic-item flex-row-center"},[e(_,{size:42},{default:a(()=>[E(i(u.imgUrl),1)]),_:2},1024),o("div",G,[o("div",P,[o("span",null,i(u.name),1),o("span",q,i(u.time),1)]),o("div",H,[E(" \u606D\u559C\u6210\u529F\u5356\u51FA"),o("span",J,i(u.value),1),E("\u5143\u5546\u54C1 ")])])]))),128))]),_:1},8,["data","options"])}}});const Q=b(K,[["__scopeId","data-v-9e78eaef"]]),X=f({__name:"TurnoverAnalysis",props:{loading:{type:Boolean,default:!1}},setup(s){const n=v({xAxis:[{axisTick:{show:!1},axisLine:{lineStyle:{color:"rgb(160, 150, 167)"}},data:[...new Array(12)].map((c,r)=>`${r+1}\u6708`)}],series:[{barWidth:25,itemStyle:{color:"#409eff"},data:[60,75,55,40,100,140,160,120,140,85,95,75]}]});return(c,r)=>{const p=w,_=y,d=C,u=D;return l(),g(u,{gutter:16},{default:a(()=>[e(d,{span:16},{default:a(()=>[e(_,{loading:s.loading,title:"\u8425\u4E1A\u989D\u5EA6\u7EDF\u8BA1\u56FE"},{default:a(()=>[e(p,{type:"bar",options:n},null,8,["options"])]),_:1},8,["loading"])]),_:1}),e(d,{span:8},{default:a(()=>[e(_,{loading:s.loading,title:"\u5B9E\u65F6\u52A8\u6001"},{default:a(()=>[e(Q)]),_:1},8,["loading"])]),_:1})]),_:1})}}}),Y=f({__name:"DetailAnalysis",props:{loading:{type:Boolean,default:!1}},setup(s){const n=v({series:[{icon:"circle",radius:["35%","55%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:[{value:1048,name:"\u6E38\u620F"},{value:484,name:"\u996E\u98DF"},{value:300,name:"\u670D\u9970"},{value:780,name:"\u65C5\u6E38"}]}]}),c=["#4FD8FF","#C15FFF","#FF5F55","#FFC935","#767BFB"],r=v({series:[{gridSize:28,textStyle:{fontFamily:"sans-serif",color:()=>c[Math.floor(Math.random()*c.length)]},data:[{name:"ChatGpt",value:100},{name:"Vue3",value:70},{name:"TypeScript",value:55},{name:"AI",value:86},{name:"VITE",value:54},{name:"LowCode",value:85},{name:"React",value:65},{name:"ECharts",value:77},{name:"Three",value:66},{name:"Cesium",value:52},{name:"MapBox",value:43},{name:"Nuxt",value:51},{name:"Electron",value:32},{name:"Uniapp",value:48},{name:"Flutter",value:45}]}]}),p=v({radar:{indicator:[{name:"\u5976\u8336"},{name:"\u5496\u5561"},{name:"\u725B\u5976"},{name:"\u77FF\u6CC9\u6C34"},{name:"\u53EF\u4E50"},{name:"\u5176\u4ED6"}]},series:[{data:[{value:[75,85,80,80,90,90],name:"\u8BBF\u95EE",itemStyle:{color:"#FF9E8C"}},{value:[95,75,75,50,40,20],name:"\u8D2D\u4E70",itemStyle:{color:"#00D2C9"}}]}]});return(_,d)=>{const u=w,t=y,x=C,T=D;return l(),g(T,{gutter:16},{default:a(()=>[e(x,{span:8},{default:a(()=>[e(t,{loading:s.loading,title:"\u6D88\u8D39\u79CD\u7C7B\u5360\u6BD4"},{default:a(()=>[e(u,{type:"pie",options:n},null,8,["options"])]),_:1},8,["loading"])]),_:1}),e(x,{span:8},{default:a(()=>[e(t,{loading:s.loading,title:"\u70ED\u95E8\u641C\u7D22"},{default:a(()=>[e(u,{type:"wordcloud",options:r},null,8,["options"])]),_:1},8,["loading"])]),_:1}),e(x,{span:8},{default:a(()=>[e(t,{loading:s.loading,title:"\u6D4F\u89C8\u8F6C\u5316\u7387\u7EDF\u8BA1"},{default:a(()=>[e(u,{type:"radar",options:p},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})}}}),Z={class:"page-analysis-container hidden"},ce=f({__name:"index",setup(s){const n=F(!0);return setTimeout(()=>{n.value=!1},1200),(c,r)=>(l(),m("div",Z,[e(W,{loading:n.value},null,8,["loading"]),e(X,{loading:n.value,class:"mt20"},null,8,["loading"]),e(Y,{loading:n.value,class:"mt20"},null,8,["loading"])]))}});export{ce as default};
