import{V as t}from"./ViewTable.a637e9ca.js";import{a9 as n,d as a,ac as l,aa as r,ab as i}from"./index.07ec8e48.js";import"./QResizeObserver.0ff85c87.js";import"./api.80704565.js";import"./format.f7a4548d.js";import"./axios.f7d2ff76.js";const s=a({name:"ViewPage",components:{ViewTable:t},setup(){return{endpoint:"accounts",rowKey:"name",icon:"account_circle",title:"Account",sort:"username",column:[{name:"username",label:"Username",field:"username",align:"left",sortable:!0},{name:"email",label:"Email",field:"email",align:"left",sortable:!0},{name:"role",label:"Role",field:"role",align:"left",sortable:!0},{name:"isActive",label:"Status",field:"isActive",align:"left",sortable:!0,format:e=>e==!0?"Active":"Inactive"}]}}});function m(e,c,u,p,f,d){const o=l("ViewTable");return r(),i(o,{ref:"view",icon:e.icon,title:e.title,endpoint:e.endpoint,rowKey:e.rowKey,columns:e.column,sort:e.sort},null,8,["icon","title","endpoint","rowKey","columns","sort"])}var y=n(s,[["render",m]]);export{y as default};