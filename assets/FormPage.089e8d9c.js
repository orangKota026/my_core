import{a9 as U,r as b,aa as c,aU as N,f as d,ad as o,ai as e,ag as p,bf as F,bg as I,af as r,ab as _,ah as h,ae as P,d as C,ac as q,aT as y}from"./index.07ec8e48.js";import{F as S}from"./FormPage.dacac98d.js";import{a as v,d as x,e as V}from"./format.f7a4548d.js";import{b as k,Q as A}from"./api.80704565.js";import"./QForm.bf1f81e7.js";import"./axios.f7d2ff76.js";const g="images/blank_profile.png",T={props:{modelValue:{type:Object,default:null},map:{type:Array,default:()=>["id","username","email"]},label:{type:String,required:!0},options:{type:Array},disable:{type:Boolean,default:!1},rules:{type:[Boolean,Array],default:()=>[]}},setup(){const l=b([]),t=b(null),s={}.RESOURCES||"http://localhost:7000resources/";return{def:l,opts:t,resource:s,defImage:g}},watch:{options(l){l&&l.length&&(this.def=l)}},mounted(){this.find().then(l=>this.def=l)},methods:{async find(l){if(this.opts)return l?[...this.opts].filter(t=>{const s=t.username?t.username.toLowerCase():"",u=t.email?t.email.toLowerCase():"";return s.indexOf(l)>-1||u.indexOf(l)>-1}):this.opts;{const{data:t}=await k.get("accounts",{params:{type:"select",search:l,pagination:{rowsPerPage:10,sortBy:"username",descending:!1}},errorNotification:!1});return this.map&&this.map.length?t[0].map(s=>{const u={};return this.map.forEach(m=>u[m]=s[m]||null),u}):t[0]}},async filterFn(l,t,s){if(l?l.toLowerCase():null){const m=await this.find(l.toLowerCase());t(()=>this.opts=m)}else{t(()=>this.opts=[...this.def]);return}},errorImg(l){l.target.src.indexOf(g)===-1&&(l.target.src=g)}}},B={class:"input-user"};function Q(l,t,s,u,m,w){return c(),N("div",B,[d(A,{dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",name:s.label,"label-slot":!s.modelValue,disable:s.disable,"model-value":s.modelValue,options:u.opts,"use-input":!s.modelValue,"input-debounce":"200",placeholder:s.modelValue?null:"Type username to find the user",onFilter:w.filterFn,"onUpdate:modelValue":t[1]||(t[1]=n=>l.$emit("update:modelValue",n)),rules:s.rules},{label:o(()=>[e("span",null,p(s.label),1)]),option:o(n=>[d(v,F(I(n.itemProps)),{default:o(()=>[d(x,null,{default:o(()=>[d(V,null,{default:o(()=>[r(p(n.opt.username?n.opt.username:n.opt.email),1)]),_:2},1024),n.opt.username?(c(),_(V,{key:0,caption:""},{default:o(()=>[r(p(n.opt.email),1)]),_:2},1024)):h("",!0)]),_:2},1024)]),_:2},1040)]),selected:o(()=>[s.modelValue?(c(),_(v,{key:0,dense:"",class:"full-width q-pa-none"},{default:o(()=>[d(x,null,{default:o(()=>[d(V,null,{default:o(()=>[r(p(s.modelValue.username?s.modelValue.username:s.modelValue.email),1)]),_:1}),s.modelValue.username?(c(),_(V,{key:0,caption:""},{default:o(()=>[r(p(s.modelValue.email),1)]),_:1})):h("",!0)]),_:1}),d(x,{side:""},{default:o(()=>[s.modelValue&&!s.disable?(c(),_(P,{key:0,class:"q-ml-sm",flat:"",round:"",size:"sm",icon:"close",onClick:t[0]||(t[0]=n=>l.$emit("update:modelValue",null))})):h("",!0)]),_:1})]),_:1})):h("",!0)]),"no-option":o(()=>[d(v,null,{default:o(()=>[d(x,{class:"text-grey"},{default:o(()=>t[2]||(t[2]=[r(" No results ")])),_:1})]),_:1})]),_:1},8,["name","label-slot","disable","model-value","options","use-input","placeholder","onFilter","rules"])])}var E=U(T,[["render",Q],["__scopeId","data-v-14752866"]]);const L=C({name:"FormUserPage",components:{FormPage:S,AccountSelect:E},setup(){return{endpoint:"employees",title:b("Employee"),data:b({}),editMod:b(!0)}}}),O={class:"row"},D={class:"col-12 q-mb-md"},R={class:"row items-center"},H={class:"col-md-9 col-xs-12"},M={class:"col-12 q-mb-md"},j={class:"row items-center"},G={class:"col-md-9 col-xs-12"},J={class:"col-12 q-mb-md"},K={class:"row items-center"},W={class:"col-md-9 col-xs-12"},X={class:"col-12 q-mb-md"},Y={class:"row items-center"},Z={class:"col-md-9 col-xs-12"},$={class:"col-12 q-mb-md"},ee={class:"row items-center"},te={class:"col-md-9 col-xs-12"};function le(l,t,s,u,m,w){const n=q("AccountSelect"),z=q("FormPage",!0);return c(),_(z,{endpoint:l.endpoint,"title-value":l.title,"model-value":l.data,"edit-value":l.editMod,ref:"form","icon-value":"person"},{body:o(({model:i,edit:f})=>[e("div",O,[e("div",D,[e("div",R,[t[0]||(t[0]=e("div",{class:"col-md-3 col-xs-12"},[e("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[r(" Account"),e("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),e("div",H,[d(n,{label:"Account",disable:!f,rules:[a=>a?!0:"This field is required!"],modelValue:i.accountId,"onUpdate:modelValue":a=>i.accountId=a},null,8,["disable","rules","modelValue","onUpdate:modelValue"])])])]),e("div",M,[e("div",j,[t[1]||(t[1]=e("div",{class:"col-md-3 col-xs-12"},[e("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[r(" Indetity Number"),e("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),e("div",G,[d(y,{disable:!f,dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",label:"Indetity Number",rules:[a=>a&&a.length>1||"This field is required!"],modelValue:i.indetityNumber,"onUpdate:modelValue":a=>i.indetityNumber=a},null,8,["disable","rules","modelValue","onUpdate:modelValue"])])])]),e("div",J,[e("div",K,[t[2]||(t[2]=e("div",{class:"col-md-3 col-xs-12"},[e("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[r(" Name"),e("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),e("div",W,[d(y,{disable:!f,dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",label:"Name",rules:[a=>a&&a.length>1||"This field is required!"],modelValue:i.name,"onUpdate:modelValue":a=>i.name=a},null,8,["disable","rules","modelValue","onUpdate:modelValue"])])])]),e("div",X,[e("div",Y,[t[3]||(t[3]=e("div",{class:"col-md-3 col-xs-12"},[e("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[r(" Title"),e("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),e("div",Z,[d(y,{disable:!f,dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",label:"Title",rules:[a=>a&&a.length>1||"This field is required!"],modelValue:i.title,"onUpdate:modelValue":a=>i.title=a},null,8,["disable","rules","modelValue","onUpdate:modelValue"])])])]),e("div",$,[e("div",ee,[t[4]||(t[4]=e("div",{class:"col-md-3 col-xs-12"},[e("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[e("span",{class:"text-right",style:{"font-size":"14px"}},"Hire Date")])],-1)),e("div",te,[d(y,{disable:!f,dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",label:"Hire Date",type:"date",modelValue:i.hire_date,"onUpdate:modelValue":a=>i.hire_date=a},null,8,["disable","modelValue","onUpdate:modelValue"])])])])])]),_:1},8,["endpoint","title-value","model-value","edit-value"])}var re=U(L,[["render",le]]);export{re as default};
