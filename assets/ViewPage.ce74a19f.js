import{V as o}from"./ViewTable.6a5b806d.js";import{a9 as t,d as r,ac as l,aa as n,ab as i}from"./index.4c0b968a.js";import"./QResizeObserver.e70ef7dd.js";import"./api.80ea26b6.js";import"./format.16da6734.js";import"./axios.f7d2ff76.js";const s=r({name:"ViewPage",components:{ViewTable:o},setup(){return{APIs:"http://localhost:7000/users",rowKey:"name",icon:"person",title:"Users",sort:"username",column:[{name:"username",label:"Username",field:"username",align:"left",sortable:!0},{name:"email",label:"Email",field:"email",align:"left",sortable:!0},{name:"role",label:"Role",field:"role",align:"left",sortable:!0},{name:"isActive",label:"Status",field:"isActive",align:"left",sortable:!0,format:e=>e==!0?"Active":"Inactive"}]}}});function m(e,c,p,u,f,b){const a=l("ViewTable");return n(),i(a,{ref:"view",icon:e.icon,title:e.title,api:e.APIs,rowKey:e.rowKey,columns:e.column,sort:e.sort},null,8,["icon","title","api","rowKey","columns","sort"])}var y=t(s,[["render",m]]);export{y as default};
