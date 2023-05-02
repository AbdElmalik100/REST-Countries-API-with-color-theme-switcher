import{_ as x,q as k,r as m,d as y,e as S,o as a,c as i,h as j,k as I,l as N,F as f,i as u,s as B,b as s,t as o,p as C,a as L}from"./index-7ec9ec10.js";import{L as A}from"./Loading-32586e93.js";const t=d=>(C("data-v-b60ebaa8"),d=d(),L(),d),O={class:"inner-page py-5"},P={key:1,class:"container"},R=t(()=>s("span",{class:"fs-5 me-1"},"← ",-1)),D={class:"left-side w-50"},E=["src"],U={class:"right-side flex-fill"},V={class:"country-name fw-bold mb-4"},F={class:"inf-cont d-flex align-items-start mb-5 justify-content-between gap-4"},T={class:"left-info w-100"},q={class:"info-box mb-1"},M=t(()=>s("span",{class:"fw-semibold"},"Native Name: ",-1)),$={class:"info-box mb-1"},z=t(()=>s("span",{class:"fw-semibold"},"Population: ",-1)),G={class:"info-box mb-1"},H=t(()=>s("span",{class:"fw-semibold"},"Region: ",-1)),J={class:"info-box mb-1"},K=t(()=>s("span",{class:"fw-semibold"},"Sub Region: ",-1)),Q={class:"info-box d-flex gap-1"},W=t(()=>s("span",{class:"fw-semibold"},"Capital: ",-1)),X={key:0},Y={key:1},Z={class:"right-info w-100"},ss={class:"info-box mb-1 d-flex gap-1"},es=t(()=>s("span",{class:"fw-semibold"},"Top Level Domain: ",-1)),ns={class:"info-box mb-1 d-flex gap-1"},as=t(()=>s("span",{class:"fw-semibold"},"Currencies: ",-1)),os={class:"info-box d-flex gap-1"},ts=t(()=>s("span",{class:"fw-semibold"},"Languages: ",-1)),is={class:"borders d-flex align-items-center gap-3"},ls=t(()=>s("span",{class:"fw-semibold"},"Border Countries: ",-1)),cs={class:"d-flex align-items-center gap-3 flex-wrap"},ds={key:0},_s={__name:"InnerPage",setup(d){const b=k(),c=m([]),_=m(!1),p=n=>Array.isArray(n)?n.join(", "):Object.values(n).join(", "),h=n=>{let l=[];return Object.values(n).forEach(r=>l.push(r.name)),l.join(", ")};return y(async()=>{_.value=!0,await fetch(`https://restcountries.com/v3.1/name/${b.params.countryName}`).then(n=>n.json()).then(n=>{_.value=!1,c.value=n,c.value[0].name.common==="Egypt"&&(c.value[0].borders=c.value[0].borders.filter(l=>l!=="ISR"))})}),(n,l)=>{const r=S("router-link");return a(),i("div",O,[_.value?(a(),j(A,{key:0})):(a(),i("div",P,[I(r,{to:"/",class:"back-button btn px-4 p-1 fw-semibold mb-5"},{default:N(()=>[R,B(" Back ")]),_:1}),(a(!0),i(f,null,u(c.value,(e,v)=>(a(),i("div",{class:"country-details d-flex align-items-center py-5 justify-content-between gap-5",key:v},[s("div",D,[s("img",{class:"w-100",src:e.flags.svg,alt:""},null,8,E)]),s("div",U,[s("h2",V,o(e.name.common),1),s("div",F,[s("div",T,[s("div",q,[M,s("span",null,o(Object.values(e.name.nativeName)[0].common),1)]),s("div",$,[z,s("span",null,o(e.population.toLocaleString("en-US")),1)]),s("div",G,[H,s("span",null,o(e.region),1)]),s("div",J,[K,s("span",null,o(e.subregion),1)]),s("div",Q,[W,s("div",null,[e.capital?(a(),i("span",Y,o(e.capital.join(", ")),1)):(a(),i("span",X,"Unknown"))])])]),s("div",Z,[s("div",ss,[es,s("div",null,[s("span",null,o(p(e.tld)),1)])]),s("div",ns,[as,s("div",null,[s("span",null,o(h(e.currencies)),1)])]),s("div",os,[ts,s("div",null,[s("span",null,o(p(e.languages)),1)])])])]),s("div",is,[ls,s("div",cs,[e.borders?(a(!0),i(f,{key:1},u(e.borders,(g,w)=>(a(),i("span",{class:"border-country p-1 px-4",key:w},o(g),1))),128)):(a(),i("span",ds,"Unknown"))])])])]))),128))]))])}}},ms=x(_s,[["__scopeId","data-v-b60ebaa8"]]);export{ms as default};
