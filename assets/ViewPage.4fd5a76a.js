import{V as o}from"./ViewTable.ed265dbe.js";import{a9 as t,d as r,ac as l,aa as i,ab as n}from"./index.a85dac0e.js";import"./QResizeObserver.c5a803ca.js";import"./api.d7dd8167.js";import"./format.f5aa3340.js";import"./axios.f7d2ff76.js";const s=r({name:"ViewPage",components:{ViewTable:o},setup(){return{APIs:"https://mycore.web.id/users",rowKey:"name",icon:"person",title:"Logging Email",sort:"username",column:[{name:"username",label:"Username",field:"username",align:"left",sortable:!0},{name:"email",label:"Email",field:"email",align:"left",sortable:!0},{name:"role",label:"Role",field:"role",align:"left",sortable:!0},{name:"isActive",label:"Status",field:"isActive",align:"left",sortable:!0,format:e=>e==!0?"Active":"Inactive"}]}}});function m(e,c,p,u,f,b){const a=l("ViewTable");return i(),n(a,{ref:"view",icon:e.icon,title:e.title,api:e.APIs,rowKey:e.rowKey,columns:e.column,sort:e.sort},null,8,["icon","title","api","rowKey","columns","sort"])}var A=t(s,[["render",m]]);export{A as default};
