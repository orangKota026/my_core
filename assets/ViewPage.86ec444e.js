import{V as t}from"./ViewTable.d46a9c30.js";import{aa as n,d as a,ad as r,ab as l,ac as i}from"./index.29034545.js";import"./QResizeObserver.0e27a28a.js";import"./QSelect.c5021be5.js";import"./format.9c3aa289.js";import"./api.48d7475f.js";import"./axios.f7d2ff76.js";const s=a({name:"ViewPage",components:{ViewTable:t},setup(){return{endpoint:"accounts",rowKey:"name",icon:"account_circle",title:"Account",sort:"username",column:[{name:"username",label:"Username",field:"username",align:"left",sortable:!0},{name:"email",label:"Email",field:"email",align:"left",sortable:!0},{name:"role",label:"Role",field:"role",align:"left",sortable:!0},{name:"isActive",label:"Status",field:"isActive",align:"left",sortable:!0,format:e=>e==!0?"Active":"Inactive"}]}}});function m(e,c,p,u,f,d){const o=r("ViewTable");return l(),i(o,{ref:"view",icon:e.icon,title:e.title,endpoint:e.endpoint,rowKey:e.rowKey,columns:e.column,sort:e.sort},null,8,["icon","title","endpoint","rowKey","columns","sort"])}var A=n(s,[["render",m]]);export{A as default};
