import{_ as C,r as n,o as i,c as d,n as x,p as L,a as $,b as e,w as S,d as T,e as M,f as B,g as j,v as I,t as m,h as A,F as E,i as F,u as N,j as P,k as b,l as R,m as g}from"./index-62b2c0be.js";import{L as U}from"./Loading-94ecbac0.js";const V=p=>(L("data-v-9e908e38"),p=p(),$(),p),z=V(()=>e("span",{class:"fs-4"},"↑",-1)),D=[z],H={__name:"ScrollToTop",setup(p){const c=n(!1),l=()=>{window.scrollTo(top)};return window.addEventListener("scroll",()=>{window.scrollY>9e3?c.value=!0:c.value=!1}),(u,a)=>(i(),d("div",{class:x(`scroll-to-top-butn position-fixed d-flex align-items-center justify-content-center rounded-circle ${c.value?"active":""}`),onClick:l},D,2))}},O=C(H,[["__scopeId","data-v-9e908e38"]]);const Y={class:"home-page py-5"},q={class:"container"},G={class:"position-relative flex-fill"},J=e("i",{class:"search-icon fa-solid fa-magnifying-glass position-absolute"},null,-1),K={class:"select-box position-relative"},Q={class:"label d-block fw-semibold text-capitalize"},W=e("i",{class:"arrow-down fa-solid fa-chevron-down fa-sm"},null,-1),X={class:"the-countries py-5 min-vh-100 position-relative"},Z={key:1,class:"row"},ee={class:"img-cont"},se=["src"],oe={class:"info p-4 w-100"},te={class:"country-name fw-bolder fs-6 mb-3"},le={class:"info-box population mb-1"},ae=e("span",{class:"fw-semibold"},"Population: ",-1),ne={class:"info-box region mb-1"},ie=e("span",{class:"fw-semibold"},"Region: ",-1),ce={class:"info-box capital d-flex gap-1"},re=e("span",{class:"fw-semibold"},"Capital: ",-1),de={class:"w-100 d-flex"},ue={key:0},ve={key:1},pe={key:2,class:"text-center mt-5"},me={__name:"HomePage",setup(p){const c=n(!1),l=n(""),u=n(""),a=n([]),_=n([]),h=n(!1),w=n(!0),r=n(50);let f=[];S([u,l],([t,s])=>{t!==""?(w.value=!1,f=g(()=>a.value.filter(v=>v.name.common.toLowerCase().includes(u.value)||v.name.common.includes(u.value)))):s!==""?(w.value=!0,f=g(()=>_.value.filter(v=>v.region.toLowerCase()===l.value))):t===""&&(w.value=!0,f=g(()=>_.value))});const k=()=>{let t=r.value;if(r.value+=50,r.value===250&&r.value--,r.value<=a.value.length)for(let s=t;s<r.value;s++)_.value.push(a.value[s])};return T(async()=>{h.value=!0,await fetch("https://restcountries.com/v3.1/all").then(t=>t.json()).then(t=>{h.value=!1,a.value=t;for(let s=0;s<r.value;s++)_.value.push(a.value[s]);f=_.value,a.value=a.value.filter(s=>s.name.common!=="Israel")})}),window.addEventListener("click",t=>{t.target.classList[0]!=="drop-down"&&t.target.classList[0]!=="menu"&&t.target.classList[0]!=="label"&&t.target.classList[0]!=="arrow-down"&&(c.value=!1)}),(t,s)=>{const v=M("router-link");return i(),d("div",Y,[e("div",q,[e("form",{class:"d-flex align-items-center justify-content-between",onSubmit:s[7]||(s[7]=B(()=>{},["prevent"]))},[e("div",G,[J,j(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>u.value=o),class:"search p-3 border-0 px-4 w-50 rounded-1",type:"text",placeholder:"Search for a country..."},null,512),[[I,u.value]])]),e("div",K,[e("div",{onClick:s[1]||(s[1]=o=>c.value=!c.value),class:"drop-down p-3 px-4 rounded-1 d-flex align-items-center gap-5 justify-content-between"},[e("span",Q,m(l.value===""?"Filter By Region":l.value==="americas"?"America":l.value),1),W]),e("ul",{class:x(`menu w-100 d-flex flex-column position-absolute rounded-1 ${c.value?"active":""}`)},[e("li",{class:"fw-semibold",onClick:s[2]||(s[2]=o=>l.value="africa")},"Africa"),e("li",{class:"fw-semibold",onClick:s[3]||(s[3]=o=>l.value="americas")},"America"),e("li",{class:"fw-semibold",onClick:s[4]||(s[4]=o=>l.value="asia")},"Asia"),e("li",{class:"fw-semibold",onClick:s[5]||(s[5]=o=>l.value="europe")},"Europe"),e("li",{class:"fw-semibold",onClick:s[6]||(s[6]=o=>l.value="oceania")},"Oceania")],2)])],32),e("div",X,[h.value?(i(),A(U,{key:0})):(i(),d("div",Z,[(i(!0),d(E,null,F(N(f),(o,y)=>(i(),d("div",{class:"col-lg-3 col-md-4 mb-4",key:y},[b(v,{to:`/${o.name.common}`,class:"box d-block text-decoration-none rounded-1 h-100 position-relative"},{default:R(()=>[e("div",ee,[e("img",{class:"img-fluid w-100 h-100",src:o.flags.png,alt:""},null,8,se)]),e("div",oe,[e("h2",te,m(o.name.common),1),e("div",le,[ae,e("span",null,m(o.population.toLocaleString("en-US")),1)]),e("div",ne,[ie,e("span",null,m(o.region),1)]),e("div",ce,[re,e("div",de,[o.capital?(i(),d("span",ve,m(o.capital.join(", ")),1)):(i(),d("span",ue,"Unknown"))])])])]),_:2},1032,["to"])]))),128))])),r.value<a.value.length&&w.value?(i(),d("div",pe,[e("button",{onClick:k,class:"load-butn fw-semibold btn rounded-1 px-4 p-2"},"Load More")])):P("",!0)]),b(O)])])}}};export{me as default};
