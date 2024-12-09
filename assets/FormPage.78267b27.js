import{i as D,m as y,c as u,g as F,q as M,l as j,h as V,k as I,d as E,r as $,a9 as N,aX as b,aY as k,aa as U,ab as m,aZ as Y,f as n,ae as d,a_ as B,a$ as w,aj as z,a5 as G,ah as X,b0 as K,b1 as O,ac as q,b2 as g,af as v,ai as S,F as L}from"./index.29034545.js";import{Q as R}from"./QForm.a92faebf.js";import{a as C}from"./api.48d7475f.js";const T={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Z(){const{props:e,proxy:{$q:t}}=F(),a=D(M,y);if(a===y)return console.error("QPageSticky needs to be child of QLayout"),y;const o=u(()=>{const s=e.position;return{top:s.indexOf("top")!==-1,right:s.indexOf("right")!==-1,bottom:s.indexOf("bottom")!==-1,left:s.indexOf("left")!==-1,vertical:s==="top"||s==="bottom",horizontal:s==="left"||s==="right"}}),i=u(()=>a.header.offset),r=u(()=>a.right.offset),l=u(()=>a.footer.offset),h=u(()=>a.left.offset),Q=u(()=>{let s=0,c=0;const f=o.value,x=t.lang.rtl===!0?-1:1;f.top===!0&&i.value!==0?c=`${i.value}px`:f.bottom===!0&&l.value!==0&&(c=`${-l.value}px`),f.left===!0&&h.value!==0?s=`${x*h.value}px`:f.right===!0&&r.value!==0&&(s=`${-x*r.value}px`);const p={transform:`translate(${s}, ${c})`};return e.offset&&(p.margin=`${e.offset[1]}px ${e.offset[0]}px`),f.vertical===!0?(h.value!==0&&(p[t.lang.rtl===!0?"right":"left"]=`${h.value}px`),r.value!==0&&(p[t.lang.rtl===!0?"left":"right"]=`${r.value}px`)):f.horizontal===!0&&(i.value!==0&&(p.top=`${i.value}px`),l.value!==0&&(p.bottom=`${l.value}px`)),p}),A=u(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function P(s){const c=j(s.default);return V("div",{class:A.value,style:Q.value},e.expand===!0?c:[V("div",c)])}return{$layout:a,getStickyContent:P}}var H=I({name:"QPageSticky",props:T,setup(e,{slots:t}){const{getStickyContent:a}=Z();return()=>a(t)}});const J=E({name:"FormPage",props:{endpoint:{type:String,required:!0},modelValue:{type:Object,default:$({}),required:!0},titleValue:{type:String,default:"Default",required:!0},iconValue:{type:String,default:"info",required:!0},editValue:{type:Boolean,default:!0,required:!0}},setup(e){return{user:N.get(),data:e.modelValue,title:$(e.titleValue),editMod:$(e.editValue)}},watch:{"$route.params":function(e){e&&window.location.reload()}},async mounted(){var e;((e=this.$route.params)==null?void 0:e.id)==="new"?this.title="Tambah "+this.title:(this.title="Edit "+this.title,this.editMod=!1,this.getData(this.$route.meta.roles))},methods:{async getData(e){var a,o;if(!e.some(i=>{var r;return[(r=this.user)==null?void 0:r.role,this.user.title].includes(i)}))return this.noAccess();const{data:t}=await C.get(this.endpoint+"/"+((a=this.$route.params)==null?void 0:a.id));if(t){if(this.$route.path.includes("profile")&&t.id!==((o=this.user)==null?void 0:o.id))return this.noAccess();Object.entries(t).forEach(([i,r])=>{Object.prototype.hasOwnProperty.call(t,i)&&(this.data[i]=i==="isActive"?String(r):r)})}},async actionBtn(e,t){b.create({title:"Information",message:`Are you sure you this ${e} ?`,ok:{label:"yes",color:"positive"},cancel:{label:"no",color:"negative"}}).onOk(async()=>{switch(e){case"edit":this.editMod=!0;break;case"save":if(await this.onAction())try{const{status:o}=await C.post(this.endpoint+"/",t);(o===200||o===201)&&this.isSussess(e)}catch{k.create({message:`User Gagal Di ${e}`,color:"negative",progress:!0,timeout:1e3})}break;case"update":if(await this.onAction())try{const{status:o}=await C.patch(this.endpoint+"/"+(t==null?void 0:t.id),t);(o===200||o===201)&&this.isSussess(e)}catch{k.create({message:`User Gagal Di ${e}`,color:"negative",progress:!0,timeout:1e3})}break;case"close":this.$router.go(-1);break;default:k.create({message:`Aksi '${e}' tidak diketahui`,color:"negative",progress:!0,timeout:1e3});break}}).onCancel(()=>!1)},isSussess(e){const t=`Data ${this.title} ${e} successfully`;switch(e){case"save":case"update":case"hapus":return b.create({title:"Success",message:t,persistent:!0}).onOk(()=>this.$router.go(-1));default:this.$router.go(-1);break}},async onAction(){const e=this.$refs.form.getValidationComponents();for(const t of e)if(t.rules&&!t.modelValue)return this.$q.notify({progress:!0,timeout:1e3,type:"negative",message:`${t.name||t.label} is required!`}),t.$el.querySelector("input, textarea, select").focus(),this.$refs.form.validate();return!0},noAccess(){return b.create({title:"Information",message:"You don't have this access",persistent:!0}).onOk(()=>this.$router.go(-1))}}}),W={class:"text-center text-weight-bold text-h6"},_={class:"q-mx-xs text-h6"};function ee(e,t,a,o,i,r){return m(),Y(L,null,[n(R,{ref:"form"},{default:d(()=>[n(B,{flat:"",bordered:"",class:"bg-white q-pa-md q-mt-xs border-radius-md"},{default:d(()=>[n(w,null,{default:d(()=>[z("div",W,[n(G,{name:e.iconValue,style:{"margin-top":"-5px"}},null,8,["name"]),z("span",_,X(e.title),1)])]),_:1}),n(K),n(w,{class:"q-mx-xs"},{default:d(()=>[O(e.$slots,"body",{model:e.data,edit:e.editMod},void 0,!0)]),_:3})]),_:3})]),_:3},512),n(H,{expand:"",position:"top"},{default:d(()=>[n(B,{flat:"",bordered:"",class:"nav-bar full-width bg-white shadow-1"},{default:d(()=>[n(w,{class:"btn-action q-gutter-md",align:"left"},{default:d(()=>[e.data.id&&!e.editMod?(m(),q(v,{key:0,dense:"",size:"md",icon:"edit",color:"positive",label:e.$q.screen.width<599?"":"Edit",style:g(e.$q.screen.width<599?"":"width: 120px; font-size: 0.8rem"),onClick:t[0]||(t[0]=l=>e.actionBtn("edit",e.data))},null,8,["label","style"])):S("",!0),!e.data.id&&e.editMod?(m(),q(v,{key:1,dense:"",size:"md",icon:"add",color:"positive",label:e.$q.screen.width<599?"":"Save",style:g(e.$q.screen.width<599?"":"width: 120px; font-size: 0.8rem"),onClick:t[1]||(t[1]=l=>e.actionBtn("save",e.data))},null,8,["label","style"])):S("",!0),e.data.id&&e.editMod?(m(),q(v,{key:2,dense:"",size:"md",icon:"save",color:"primary",label:e.$q.screen.width<599?"":"update",style:g(e.$q.screen.width<599?"":"width: 120px; font-size: 0.8rem"),onClick:t[2]||(t[2]=l=>e.actionBtn("update",e.data))},null,8,["label","style"])):S("",!0),n(v,{dense:"",size:"md",icon:"close",color:"negative",label:e.$q.screen.width<599?"":"Close",style:g(e.$q.screen.width<599?"":"width: 120px; font-size: 0.8rem"),onClick:t[3]||(t[3]=l=>e.actionBtn("close",e.data))},null,8,["label","style"]),O(e.$slots,"action",{model:e.data},void 0,!0)]),_:3})]),_:3})]),_:3})],64)}var oe=U(J,[["render",ee],["__scopeId","data-v-69a545c0"]]);export{oe as F};
