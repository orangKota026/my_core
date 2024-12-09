import{b as Ft,Q as Vt,a as Dt}from"./QResizeObserver.0e27a28a.js";import{k as E,h as s,l as U,p as Lt,a5 as ie,g as I,c as d,H as $e,J as Re,U as Mt,r as D,w as N,aN as et,o as tt,aP as Nt,aO as At,n as at,V as jt,W as je,a0 as lt,aI as Et,aJ as Qt,b8 as zt,b9 as Ee,ba as Pe,bb as Qe,bc as Ht,N as rt,bd as Ut,a6 as qe,a8 as W,af as j,b0 as It,d as Wt,aY as K,a9 as Kt,aX as ze,aa as Gt,be as Jt,ab as x,ac as G,ae as F,f as V,aj as He,ah as _e,b1 as Ce,b3 as Ue,b2 as Xt,aC as Yt,ag as ke,ai as Zt,aZ as J,bf as Ie,F as We}from"./index.29034545.js";import{u as ea,a as ta,c as nt,Q as aa}from"./QSelect.c5021be5.js";import{a as Ke}from"./api.48d7475f.js";var pe=E({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const c=I(),{proxy:{$q:i}}=c,v=r=>{l("click",r)};return()=>{if(e.props===void 0)return s("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},U(a.default));let r,o;const f=c.vnode.key;if(f){if(r=e.props.colsMap[f],r===void 0)return}else r=e.props.col;if(r.sortable===!0){const n=r.align==="right"?"unshift":"push";o=Lt(a.default,[]),o[n](s(ie,{class:r.__iconClass,name:i.iconSet.table.arrowUp}))}else o=U(a.default);const h={class:r.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:r.headerStyle,onClick:n=>{r.sortable===!0&&e.props.sort(r),v(n)}};return s("th",h,o)}}}),Ge=E({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:a}){const l=d(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>s("tr",{class:l.value},U(a.default))}}),Je=E({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const l=I(),c=d(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return s("td",{class:c.value},U(a.default));const i=l.vnode.key,v=(e.props.colsMap!==void 0?e.props.colsMap[i]:null)||e.props.col;if(v===void 0)return;const{row:r}=e.props;return s("td",{class:c.value+v.__tdClass(r),style:v.__tdStyle(r)},U(a.default))}}});const la=["horizontal","vertical","cell","none"];var ra=E({name:"QMarkupTable",props:{...$e,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>la.includes(e)}},setup(e,{slots:a}){const l=I(),c=Re(e,l.proxy.$q),i=d(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(c.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>s("div",{class:i.value},[s("table",{class:"q-table"},U(a.default))])}});function ot(e,a){return s("div",e,[s("table",{class:"q-table"},a)])}const na={list:Ft,table:ra},oa=["list","table","__qtable"];var sa=E({name:"QVirtualScroll",props:{...ea,type:{type:String,default:"list",validator:e=>oa.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:Mt},setup(e,{slots:a,attrs:l}){let c;const i=D(null),v=d(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:r,localResetVirtualScroll:o,padVirtualScroll:f,onVirtualScrollEvt:h}=ta({virtualScrollLength:v,getVirtualScrollTarget:C,getVirtualScrollEl:_}),n=d(()=>{if(v.value===0)return[];const B=(O,p)=>({index:r.value.from+p,item:O});return e.itemsFn===void 0?e.items.slice(r.value.from,r.value.to).map(B):e.itemsFn(r.value.from,r.value.to-r.value.from).map(B)}),b=d(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=d(()=>e.scrollTarget!==void 0?{}:{tabindex:0});N(v,()=>{o()}),N(()=>e.scrollTarget,()=>{y(),w()});function _(){return i.value.$el||i.value}function C(){return c}function w(){c=jt(_(),e.scrollTarget),c.addEventListener("scroll",h,je.passive)}function y(){c!==void 0&&(c.removeEventListener("scroll",h,je.passive),c=void 0)}function T(){let B=f(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(B=a.before().concat(B)),lt(a.after,B)}return et(()=>{o()}),tt(()=>{w()}),Nt(()=>{w()}),At(()=>{y()}),at(()=>{y()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?ot({ref:i,class:"q-table__middle "+b.value},T()):s(na[e.type],{...l,ref:i,class:[l.class,b.value],...q.value},T)}}});const ia={xs:2,sm:4,md:6,lg:10,xl:14};function Xe(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var ua=E({name:"QLinearProgress",props:{...$e,...Et,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=I(),c=Re(e,l.$q),i=Qt(e,ia),v=d(()=>e.indeterminate===!0||e.query===!0),r=d(()=>e.reverse!==e.query),o=d(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),f=d(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),h=d(()=>Xe(e.buffer!==void 0?e.buffer:1,r.value,l.$q)),n=d(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=d(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),q=d(()=>Xe(v.value===!0?1:e.value,r.value,l.$q)),_=d(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${v.value===!0?"in":""}determinate`),C=d(()=>({width:`${e.value*100}%`})),w=d(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const y=[s("div",{class:b.value,style:h.value}),s("div",{class:_.value,style:q.value})];return e.stripe===!0&&v.value===!1&&y.push(s("div",{class:w.value,style:C.value})),s("div",{class:f.value,style:o.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},lt(a.default,y))}}});let X=0;const ca={fullscreen:Boolean,noRouteFullscreenExit:Boolean},da=["update:fullscreen","fullscreen"];function va(){const e=I(),{props:a,emit:l,proxy:c}=e;let i,v,r;const o=D(!1);zt(e)===!0&&N(()=>c.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),N(()=>a.fullscreen,b=>{o.value!==b&&f()}),N(o,b=>{l("update:fullscreen",b),l("fullscreen",b)});function f(){o.value===!0?n():h()}function h(){o.value!==!0&&(o.value=!0,r=c.$el.parentNode,r.replaceChild(v,c.$el),document.body.appendChild(c.$el),X++,X===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:n},Ee.add(i))}function n(){o.value===!0&&(i!==void 0&&(Ee.remove(i),i=void 0),r.replaceChild(c.$el,v),o.value=!1,X=Math.max(0,X-1),X===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return et(()=>{v=document.createElement("span")}),tt(()=>{a.fullscreen===!0&&h()}),at(n),Object.assign(c,{toggleFullscreen:f,setFullscreen:h,exitFullscreen:n}),{inFullscreen:o,toggleFullscreen:f}}function fa(e,a){return new Date(e)-new Date(a)}const ga={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function ba(e,a,l,c){const i=d(()=>{const{sortBy:o}=a.value;return o&&l.value.find(f=>f.name===o)||null}),v=d(()=>e.sortMethod!==void 0?e.sortMethod:(o,f,h)=>{const n=l.value.find(_=>_.name===f);if(n===void 0||n.field===void 0)return o;const b=h===!0?-1:1,q=typeof n.field=="function"?_=>n.field(_):_=>_[n.field];return o.sort((_,C)=>{let w=q(_),y=q(C);return n.rawSort!==void 0?n.rawSort(w,y,_,C)*b:w==null?-1*b:y==null?1*b:n.sort!==void 0?n.sort(w,y,_,C)*b:Pe(w)===!0&&Pe(y)===!0?(w-y)*b:Qe(w)===!0&&Qe(y)===!0?fa(w,y)*b:typeof w=="boolean"&&typeof y=="boolean"?(w-y)*b:([w,y]=[w,y].map(T=>(T+"").toLocaleString().toLowerCase()),w<y?-1*b:w===y?0:b)})});function r(o){let f=e.columnSortOrder;if(Ht(o)===!0)o.sortOrder&&(f=o.sortOrder),o=o.name;else{const b=l.value.find(q=>q.name===o);b!==void 0&&b.sortOrder&&(f=b.sortOrder)}let{sortBy:h,descending:n}=a.value;h!==o?(h=o,n=f==="da"):e.binaryStateSort===!0?n=!n:n===!0?f==="ad"?h=null:n=!1:f==="ad"?n=!0:h=null,c({sortBy:h,descending:n,page:1})}return{columnToSort:i,computedSortMethod:v,sort:r}}const ma={filter:[String,Object],filterMethod:Function};function ha(e,a){const l=d(()=>e.filterMethod!==void 0?e.filterMethod:(c,i,v,r)=>{const o=i?i.toLowerCase():"";return c.filter(f=>v.some(h=>{const n=r(h,f)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(o)!==-1}))});return N(()=>e.filter,()=>{rt(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function ya(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ye(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Sa={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function wa(e,a){const{props:l,emit:c}=e,i=D(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),v=d(()=>{const n=l["onUpdate:pagination"]!==void 0?{...i.value,...l.pagination}:i.value;return Ye(n)}),r=d(()=>v.value.rowsNumber!==void 0);function o(n){f({pagination:n,filter:l.filter})}function f(n={}){rt(()=>{c("request",{pagination:n.pagination||v.value,filter:n.filter||l.filter,getCellValue:a})})}function h(n,b){const q=Ye({...v.value,...n});if(ya(v.value,q)===!0){r.value===!0&&b===!0&&o(q);return}if(r.value===!0){o(q);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?c("update:pagination",q):i.value=q}return{innerPagination:i,computedPagination:v,isServerSide:r,requestServerInteraction:f,setPagination:h}}function qa(e,a,l,c,i,v){const{props:r,emit:o,proxy:{$q:f}}=e,h=d(()=>c.value===!0?l.value.rowsNumber||0:v.value),n=d(()=>{const{page:p,rowsPerPage:$}=l.value;return(p-1)*$}),b=d(()=>{const{page:p,rowsPerPage:$}=l.value;return p*$}),q=d(()=>l.value.page===1),_=d(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(h.value/l.value.rowsPerPage))),C=d(()=>b.value===0?!0:l.value.page>=_.value),w=d(()=>(r.rowsPerPageOptions.includes(a.value.rowsPerPage)?r.rowsPerPageOptions:[a.value.rowsPerPage].concat(r.rowsPerPageOptions)).map($=>({label:$===0?f.lang.table.allRows:""+$,value:$})));N(_,(p,$)=>{if(p===$)return;const Y=l.value.page;p&&!Y?i({page:1}):p<Y&&i({page:p})});function y(){i({page:1})}function T(){const{page:p}=l.value;p>1&&i({page:p-1})}function B(){const{page:p,rowsPerPage:$}=l.value;b.value>0&&p*$<h.value&&i({page:p+1})}function O(){i({page:_.value})}return r["onUpdate:pagination"]!==void 0&&o("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:b,isFirstPage:q,isLastPage:C,pagesNumber:_,computedRowsPerPageOptions:w,computedRowsNumber:h,firstPage:y,prevPage:T,nextPage:B,lastPage:O}}const _a={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Ca=["update:selected","selection"];function ka(e,a,l,c){const i=d(()=>{const C={};return e.selected.map(c.value).forEach(w=>{C[w]=!0}),C}),v=d(()=>e.selection!=="none"),r=d(()=>e.selection==="single"),o=d(()=>e.selection==="multiple"),f=d(()=>l.value.length!==0&&l.value.every(C=>i.value[c.value(C)]===!0)),h=d(()=>f.value!==!0&&l.value.some(C=>i.value[c.value(C)]===!0)),n=d(()=>e.selected.length);function b(C){return i.value[C]===!0}function q(){a("update:selected",[])}function _(C,w,y,T){a("selection",{rows:w,added:y,keys:C,evt:T});const B=r.value===!0?y===!0?w:[]:y===!0?e.selected.concat(w):e.selected.filter(O=>C.includes(c.value(O))===!1);a("update:selected",B)}return{hasSelectionMode:v,singleSelection:r,multipleSelection:o,allRowsSelected:f,someRowsSelected:h,rowsSelectedNumber:n,isRowSelected:b,clearSelection:q,updateSelection:_}}function Ze(e){return Array.isArray(e)?e.slice():[]}const Pa={expanded:Array},pa=["update:expanded"];function $a(e,a){const l=D(Ze(e.expanded));N(()=>e.expanded,r=>{l.value=Ze(r)});function c(r){return l.value.includes(r)}function i(r){e.expanded!==void 0?a("update:expanded",r):l.value=r}function v(r,o){const f=l.value.slice(),h=f.indexOf(r);o===!0?h===-1&&(f.push(r),i(f)):h!==-1&&(f.splice(h,1),i(f))}return{isRowExpanded:c,setExpanded:i,updateExpanded:v}}const Ra={visibleColumns:Array};function Ta(e,a,l){const c=d(()=>{if(e.columns!==void 0)return e.columns;const o=e.rows[0];return o!==void 0?Object.keys(o).map(f=>({name:f,label:f.toUpperCase(),field:f,align:Pe(o[f])?"right":"left",sortable:!0})):[]}),i=d(()=>{const{sortBy:o,descending:f}=a.value;return(e.visibleColumns!==void 0?c.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):c.value).map(n=>{const b=n.align||"right",q=`text-${b}`;return{...n,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:q+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===o?` sorted ${f===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>q+" "+n.classes:_=>q+" "+n.classes(_):()=>q}})}),v=d(()=>{const o={};return i.value.forEach(f=>{o[f.name]=f}),o}),r=d(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(l.value===!0?1:0));return{colList:c,computedCols:i,computedColsMap:v,computedColspan:r}}const se="q-table__bottom row items-center",st={};nt.forEach(e=>{st[e]={}});var Ba=E({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{},...st,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...$e,...ca,...Ra,...ma,...Sa,...Pa,..._a,...ga},emits:["request","virtualScroll",...da,...pa,...Ca],setup(e,{slots:a,emit:l}){const c=I(),{proxy:{$q:i}}=c,v=Re(e,i),{inFullscreen:r,toggleFullscreen:o}=va(),f=d(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),h=D(null),n=D(null),b=d(()=>e.grid!==!0&&e.virtualScroll===!0),q=d(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),_=d(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(r.value===!0?" fullscreen scroll":"")),C=d(()=>_.value+(e.loading===!0?" q-table--loading":""));N(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+_.value,()=>{b.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:w,computedPagination:y,isServerSide:T,requestServerInteraction:B,setPagination:O}=wa(c,z),{computedFilterMethod:p}=ha(e,O),{isRowExpanded:$,setExpanded:Y,updateExpanded:it}=$a(e,l),ue=d(()=>{let t=e.rows;if(T.value===!0||t.length===0)return t;const{sortBy:u,descending:g}=y.value;return e.filter&&(t=p.value(t,e.filter,L.value,z)),ft.value!==null&&(t=gt.value(e.rows===t?t.slice():t,u,g)),t}),Te=d(()=>ue.value.length),A=d(()=>{let t=ue.value;if(T.value===!0)return t;const{rowsPerPage:u}=y.value;return u!==0&&(ee.value===0&&e.rows!==t?t.length>te.value&&(t=t.slice(0,te.value)):t=t.slice(ee.value,te.value)),t}),{hasSelectionMode:Q,singleSelection:ut,multipleSelection:Be,allRowsSelected:ct,someRowsSelected:Oe,rowsSelectedNumber:ce,isRowSelected:de,clearSelection:dt,updateSelection:Z}=ka(e,l,A,f),{colList:vt,computedCols:L,computedColsMap:xe,computedColspan:Fe}=Ta(e,y,Q),{columnToSort:ft,computedSortMethod:gt,sort:ve}=ba(e,y,vt,O),{firstRowIndex:ee,lastRowIndex:te,isFirstPage:fe,isLastPage:ge,pagesNumber:ae,computedRowsPerPageOptions:bt,computedRowsNumber:le,firstPage:be,prevPage:me,nextPage:he,lastPage:ye}=qa(c,w,y,T,O,Te),mt=d(()=>A.value.length===0),ht=d(()=>{const t={};return nt.forEach(u=>{t[u]=e[u]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function yt(){b.value===!0&&n.value.reset()}function St(){if(e.grid===!0)return Ot();const t=e.hideHeader!==!0?Ne:null;if(b.value===!0){const g=a["top-row"],m=a["bottom-row"],S={default:P=>De(P.item,a.body,P.index)};if(g!==void 0){const P=s("tbody",g({cols:L.value}));S.before=t===null?()=>P:()=>[t()].concat(P)}else t!==null&&(S.before=t);return m!==void 0&&(S.after=()=>s("tbody",m({cols:L.value}))),s(sa,{ref:n,class:e.tableClass,style:e.tableStyle,...ht.value,scrollTarget:e.virtualScrollTarget,items:A.value,type:"__qtable",tableColspan:Fe.value,onVirtualScroll:qt},S)}const u=[_t()];return t!==null&&u.unshift(t()),ot({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},u)}function wt(t,u){if(n.value!==null){n.value.scrollTo(t,u);return}t=parseInt(t,10);const g=h.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const m=h.value.querySelector(".q-table__middle.scroll"),S=g.offsetTop-e.virtualScrollStickySizeStart,P=S<m.scrollTop?"decrease":"increase";m.scrollTop=S,l("virtualScroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:P})}}function qt(t){l("virtualScroll",t)}function Ve(){return[s(ua,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function De(t,u,g){const m=f.value(t),S=de(m);if(u!==void 0)return u(Le({key:m,row:t,pageIndex:g,__trClass:S?"selected":""}));const P=a["body-cell"],k=L.value.map(R=>{const ne=a[`body-cell-${R.name}`],oe=ne!==void 0?ne:P;return oe!==void 0?oe(Ct({key:m,row:t,pageIndex:g,col:R})):s("td",{class:R.__tdClass(t),style:R.__tdStyle(t)},z(R,t))});if(Q.value===!0){const R=a["body-selection"],ne=R!==void 0?R(kt({key:m,row:t,pageIndex:g})):[s(qe,{modelValue:S,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(oe,xt)=>{Z([m],[t],oe,xt)}})];k.unshift(s("td",{class:"q-table--col-auto-width"},ne))}const M={key:m,class:{selected:S}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=R=>{l("rowClick",R,t,g)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=R=>{l("rowDblclick",R,t,g)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=R=>{l("rowContextmenu",R,t,g)}),s("tr",M,k)}function _t(){const t=a.body,u=a["top-row"],g=a["bottom-row"];let m=A.value.map((S,P)=>De(S,t,P));return u!==void 0&&(m=u({cols:L.value}).concat(m)),g!==void 0&&(m=m.concat(g({cols:L.value}))),s("tbody",m)}function Le(t){return Se(t),t.cols=t.cols.map(u=>W({...u},"value",()=>z(u,t.row))),t}function Ct(t){return Se(t),W(t,"value",()=>z(t.col,t.row)),t}function kt(t){return Se(t),t}function Se(t){Object.assign(t,{cols:L.value,colsMap:xe.value,sort:ve,rowIndex:ee.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),Q.value===!0&&W(t,"selected",()=>de(t.key),(u,g)=>{Z([t.key],[t.row],u,g)}),W(t,"expand",()=>$(t.key),u=>{it(t.key,u)})}function z(t,u){const g=typeof t.field=="function"?t.field(u):u[t.field];return t.format!==void 0?t.format(g,u):g}const H=d(()=>({pagination:y.value,pagesNumber:ae.value,isFirstPage:fe.value,isLastPage:ge.value,firstPage:be,prevPage:me,nextPage:he,lastPage:ye,inFullscreen:r.value,toggleFullscreen:o}));function Pt(){const t=a.top,u=a["top-left"],g=a["top-right"],m=a["top-selection"],S=Q.value===!0&&m!==void 0&&ce.value>0,P="q-table__top relative-position row items-center";if(t!==void 0)return s("div",{class:P},[t(H.value)]);let k;if(S===!0?k=m(H.value).slice():(k=[],u!==void 0?k.push(s("div",{class:"q-table__control"},[u(H.value)])):e.title&&k.push(s("div",{class:"q-table__control"},[s("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(k.push(s("div",{class:"q-table__separator col"})),k.push(s("div",{class:"q-table__control"},[g(H.value)]))),k.length!==0)return s("div",{class:P},k)}const Me=d(()=>Oe.value===!0?null:ct.value);function Ne(){const t=pt();return e.loading===!0&&a.loading===void 0&&t.push(s("tr",{class:"q-table__progress"},[s("th",{class:"relative-position",colspan:Fe.value},Ve())])),s("thead",t)}function pt(){const t=a.header,u=a["header-cell"];if(t!==void 0)return t(we({header:!0})).slice();const g=L.value.map(m=>{const S=a[`header-cell-${m.name}`],P=S!==void 0?S:u,k=we({col:m});return P!==void 0?P(k):s(pe,{key:m.name,props:k},()=>m.label)});if(ut.value===!0&&e.grid!==!0)g.unshift(s("th",{class:"q-table--col-auto-width"}," "));else if(Be.value===!0){const m=a["header-selection"],S=m!==void 0?m(we({})):[s(qe,{color:e.color,modelValue:Me.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":Ae})];g.unshift(s("th",{class:"q-table--col-auto-width"},S))}return[s("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function we(t){return Object.assign(t,{cols:L.value,sort:ve,colsMap:xe.value,color:e.color,dark:v.value,dense:e.dense}),Be.value===!0&&W(t,"selected",()=>Me.value,Ae),t}function Ae(t){Oe.value===!0&&(t=!1),Z(A.value.map(f.value),A.value,t)}const re=d(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function $t(){if(e.hideBottom===!0)return;if(mt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,m=a["no-data"],S=m!==void 0?[m({message:g,icon:i.iconSet.table.warning,filter:e.filter})]:[s(ie,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),g];return s("div",{class:se+" q-table__bottom--nodata"},S)}const t=a.bottom;if(t!==void 0)return s("div",{class:se},[t(H.value)]);const u=e.hideSelectedBanner!==!0&&Q.value===!0&&ce.value>0?[s("div",{class:"q-table__control"},[s("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(ce.value)])])]:[];if(e.hidePagination!==!0)return s("div",{class:se+" justify-end"},Tt(u));if(u.length!==0)return s("div",{class:se},u)}function Rt(t){O({page:1,rowsPerPage:t.value})}function Tt(t){let u;const{rowsPerPage:g}=y.value,m=e.paginationLabel||i.lang.table.pagination,S=a.pagination,P=e.rowsPerPageOptions.length>1;if(t.push(s("div",{class:"q-table__separator col"})),P===!0&&t.push(s("div",{class:"q-table__control"},[s("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),s(aa,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:bt.value,displayValue:g===0?i.lang.table.allRows:g,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":Rt})])),S!==void 0)u=S(H.value);else if(u=[s("span",g!==0?{class:"q-table__bottom-item"}:{},[g?m(ee.value+1,Math.min(te.value,le.value),le.value):m(1,Te.value,le.value)])],g!==0&&ae.value>1){const k={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(k.size="sm"),ae.value>2&&u.push(s(j,{key:"pgFirst",...k,icon:re.value[0],disable:fe.value,onClick:be})),u.push(s(j,{key:"pgPrev",...k,icon:re.value[1],disable:fe.value,onClick:me}),s(j,{key:"pgNext",...k,icon:re.value[2],disable:ge.value,onClick:he})),ae.value>2&&u.push(s(j,{key:"pgLast",...k,icon:re.value[3],disable:ge.value,onClick:ye}))}return t.push(s("div",{class:"q-table__control"},u)),t}function Bt(){const t=e.gridHeader===!0?[s("table",{class:"q-table"},[Ne()])]:e.loading===!0&&a.loading===void 0?Ve():void 0;return s("div",{class:"q-table__middle"},t)}function Ot(){const t=a.item!==void 0?a.item:u=>{const g=u.cols.map(S=>s("div",{class:"q-table__grid-item-row"},[s("div",{class:"q-table__grid-item-title"},[S.label]),s("div",{class:"q-table__grid-item-value"},[S.value])]));if(Q.value===!0){const S=a["body-selection"],P=S!==void 0?S(u):[s(qe,{modelValue:u.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(k,M)=>{Z([u.key],[u.row],k,M)}})];g.unshift(s("div",{class:"q-table__grid-item-row"},P),s(It,{dark:v.value}))}const m={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(m.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(m.onClick=S=>{l("RowClick",S,u.row,u.pageIndex)}),e.onRowDblclick!==void 0&&(m.onDblclick=S=>{l("RowDblclick",S,u.row,u.pageIndex)})),s("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(u.selected===!0?" q-table__grid-item--selected":"")},[s("div",m,g)])};return s("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},A.value.map((u,g)=>t(Le({key:f.value(u),row:u,pageIndex:g}))))}return Object.assign(c.proxy,{requestServerInteraction:B,setPagination:O,firstPage:be,prevPage:me,nextPage:he,lastPage:ye,isRowSelected:de,clearSelection:dt,isRowExpanded:$,setExpanded:Y,sort:ve,resetVirtualScroll:yt,scrollTo:wt,getCellValue:z}),Ut(c.proxy,{filteredSortedRows:()=>ue.value,computedRows:()=>A.value,computedRowsNumber:()=>le.value}),()=>{const t=[Pt()],u={ref:h,class:C.value};return e.grid===!0?t.push(Bt()):Object.assign(u,{class:[u.class,e.cardClass],style:e.cardStyle}),t.push(St(),$t()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),s("div",u,t)}}});const Oa=Wt({name:"ViewTable",props:{endpoint:{type:String,required:!0},rowKey:{type:String,required:!0},columns:{type:Array,required:!0,validator:e=>e.every(a=>a.name&&a.label)},sort:{type:String,default:"id"},title:{type:String,default:"default"},icon:{type:String,default:"tune"}},async mounted(){if(!this.endpoint||!this.columns)return K.create({message:"Error Network",color:"negative",progress:!0,timeout:1e3});this.getData(this.$route.meta.roles)},setup(e){return{user:Kt.get(),rows:D([]),pagination:D({sortBy:e.sort,descending:!0,page:1,rowsPerPage:25}),filter:D(),loading:D(!0)}},methods:{async getData(e){if(e&&!e.some(a=>{var l;return[(l=this.user)==null?void 0:l.role,this.user.title].includes(a)}))return ze.create({title:"Information",message:"You don't have this access",persistent:!0}).onOk(()=>this.$router.go(-1));this.loading=!0;try{const{data:a}=await Ke.get(this.endpoint,{params:{search:this.filter,pagination:this.pagination}});typeof a=="object"&&a&&(this.rows=a[0]),this.loading=!1}catch(a){K.create({message:a.message,color:"negative",progress:!0,timeout:1e3}),this.loading=!1}},onFilter(e){return this.filter=e,this.getData()},setHeight(){const{css:e,offset:a}=Jt,l=this.$q.screen.height;let{top:c}=a(this.$refs.view.$el);c=c<0?70:c;const i=c-50,v=l-c-i+"px";e(this.$refs.view.$el,{maxHeight:v}),e(this.$refs.view.$el,{height:v})},async actionBtn(e,a){switch(e){case"add":this.$router.push(`${this.$route.path}/new`);break;case"show":this.$router.push(`${this.$route.path}/${a.id}`);break;case"delete":try{ze.create({title:"Information",message:`Are you sure you ${e} ${a[this.$props.sort]} ?`,ok:{label:"yes",color:"positive"},cancel:{label:"no",color:"negative"}}).onOk(async()=>{const{status:l}=await Ke.delete(this.endpoint+"/"+a.id);(l===200||l===201)&&K.create({message:`Data ${e} successfully`,color:"positive",progress:!0,timeout:1e3}),this.getData()}).onCancel(()=>!1)}catch{this.getData(),K.create({message:`Aksi '${e}' error`,color:"negative",progress:!0,timeout:1e3})}break;default:K.create({message:`Aksi '${e}' tidak diketahui`,color:"negative",progress:!0,timeout:1e3});break}}}}),xa={class:"text-h6 q-mr-md text-grey-9"},Fa={class:"q-gutter-sm"},Va={key:0,class:"q-gutter-sm"},Da={key:1,class:"q-gutter-sm"},La={key:1};function Ma(e,a,l,c,i,v){return x(),G(Ba,{bordered:"",class:"components-view",ref:"view",rows:e.rows,"row-key":e.rowKey,columns:e.columns,pagination:e.pagination,"onUpdate:pagination":[a[3]||(a[3]=r=>e.pagination=r),a[4]||(a[4]=r=>e.getData())],loading:e.loading,"binary-state-sort":""},{top:F(()=>[V(Vt,{onResize:e.setHeight},null,8,["onResize"]),V(ie,{class:"text-grey-9",name:e.icon,size:"md"},null,8,["name"]),He("div",xa,_e(e.title),1),He("div",Fa,[e.$slots.header?Ce(e.$slots,"header",{key:1}):(x(),G(j,{key:0,rounded:"",outline:"",round:e.$q.screen.width<599,color:"primary",icon:"add",label:e.$q.screen.width<599?"":"Add",onClick:a[0]||(a[0]=r=>e.actionBtn("add"))},null,8,["round","label"]))]),V(Dt),V(Yt,{rounded:"",primary:"",dense:"",clearable:"",class:Ue(e.$q.screen.width<599?"q-mt-sm":""),standout:"bg-blue-grey-8 text-white",debounce:"500",placeholder:"Search",style:Xt(e.$q.screen.width<599?"width: 400px":"width: 230px"),modelValue:e.filter,"onUpdate:modelValue":[a[1]||(a[1]=r=>e.filter=r),a[2]||(a[2]=r=>e.onFilter(e.filter))]},{prepend:F(()=>[V(ie,{name:"search"})]),_:1},8,["class","style","modelValue"])]),header:F(r=>[V(Ge,{props:r},{default:F(()=>[e.$slots.action||!e.$slots.action?(x(),G(pe,{key:0},{default:F(()=>a[5]||(a[5]=[ke("Action")])),_:1})):Zt("",!0),(x(!0),J(We,null,Ie(r.cols,o=>(x(),G(pe,{key:o.name,props:r},{default:F(()=>[ke(_e(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:F(r=>[V(Ge,{props:r},{default:F(()=>[V(Je,{"auto-width":"",align:"center"},{default:F(()=>[e.$slots.action?(x(),J("div",Da,[Ce(e.$slots,"action",{props:r.row})])):(x(),J("div",Va,[V(j,{rounded:"",outline:"",icon:"visibility",color:"white","text-color":"info",size:"sm",onClick:o=>e.actionBtn("show",r.row)},null,8,["onClick"]),V(j,{rounded:"",outline:"",icon:"delete",color:"white","text-color":"negative",size:"sm",onClick:o=>e.actionBtn("delete",r.row)},null,8,["onClick"])]))]),_:2},1024),(x(!0),J(We,null,Ie(r.cols,o=>(x(),G(Je,{key:o.name,props:r,class:Ue(o.class?typeof o.class=="function"?o.class(r.row):o.class:"q-gutter-sm")},{default:F(()=>[e.$slots?Ce(e.$slots,o.name,{key:0,row:r.row},()=>[ke(_e(o.value),1)]):(x(),J("span",La))]),_:2},1032,["props","class"]))),128))]),_:2},1032,["props"])]),_:3},8,["rows","row-key","columns","pagination","loading"])}var Qa=Gt(Oa,[["render",Ma]]);export{Qa as V};
