(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9725:function(e,l,t){Promise.resolve().then(t.bind(t,1496))},1496:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return F}});var a=t(7437),r=e=>{let{text:l,onClick:t,variant:r,className:s}=e;return(0,a.jsx)("button",{onClick:t,className:"".concat({neutral:"bg-black text-white",primary:"bg-cadastra-orange border-[1px] border-black text-white font-bold",outline:"bg-white text-[#666666] border-[1px] border-[#666666]"}[r]," p-2 w-full ").concat(s||""),children:l})},s=e=>{let{image:l,name:t,parcelamento:s,price:i,onClick:c}=e;return(0,a.jsxs)("div",{className:"flex flex-col items-center lg:max-w-[30%] max-w-[11rem] xs:max-w-unset min-w-20 ",children:[(0,a.jsx)("img",{src:l,alt:"image",className:"w-full"}),(0,a.jsx)("h4",{children:t.toUpperCase()}),(0,a.jsxs)("span",{className:"font-bold text-black",children:["R$ ",i.toFixed(2).replace(".",",")]}),(0,a.jsxs)("span",{children:["at\xe9 ",s[0],"x de R$",s[1].toFixed(2).replace(".",",")]}),(0,a.jsx)(r,{onClick:c,variant:"neutral",text:"COMPRAR"})]})},i=()=>(0,a.jsx)("div",{className:"p-2 w-full bg-black text-white flex justify-center items-center",children:(0,a.jsx)("span",{children:"CADASTRA: IMPLANTA\xc7\xc3O DE E-COMMERCE VTEX"})}),c=t(7692),n=e=>{let{cartProducts:l,onCartClick:t}=e;return(0,a.jsxs)("div",{className:"p-3 w-full border-b-2 border-cadastra-gray flex justify-between lg:px-28 px-6 items-center",children:[(0,a.jsx)("img",{src:"/img/company-logo.png",alt:"company logo"}),(0,a.jsxs)("div",{className:"relative cursor-pointer",onClick:t,children:[(0,a.jsx)(c.FVd,{size:20}),0!==l.length&&(0,a.jsx)("div",{className:"absolute flex items-center justify-center bg-cadastra-orange rounded-full w-3 h-3 p-2 -right-1 top-2",children:(0,a.jsx)("span",{className:"text-xs text-white",children:l.length})})]})]})},o=e=>{let{children:l}=e;return(0,a.jsx)("div",{className:"flex w-full justify-center",children:l})},d=t(2070);let x=[{value:"recents",label:"Mais recentes"},{value:"lowest",label:"Menor pre\xe7o"},{value:"biggest",label:"Maior pre\xe7o"}],m=[{label:"de R$0 at\xe9 R$50",value:1},{label:"de R$51 at\xe9 R$150",value:2},{label:"de R$151 at\xe9 R$300",value:3},{label:"de R$301 at\xe9 R$500",value:4},{label:"a partir de R$ 500",value:5}],p={option:(e,l)=>{let{isFocused:t}=l;return{...e,backgroundColor:t?"#FB953E":"white",color:t?"white":"black",borderRadius:"0","&:hover":{cursor:"pointer"}}},control:(e,l)=>{let{isFocused:t}=l;return{...e,borderColor:"black",color:t?"white":"black",borderRadius:"0",outline:"none",cursor:"pointer","&:hover":{outline:"none"}}}};var u=e=>{var l;let{onChange:t,selectedOrdering:s,onOrderClick:i,onFilterClick:c}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full lg:flex hidden justify-between py-8 px-28",children:[(0,a.jsx)("h1",{className:"text-2xl",children:"Blusas"}),(0,a.jsx)(d.ZP,{value:s,onChange:t,options:x,placeholder:(null===(l=x.find(e=>e.value===s))||void 0===l?void 0:l.label)||(0,a.jsx)("span",{children:"Ordenar por:"}),styles:p})]}),(0,a.jsx)("h1",{className:"text-2xl lg:hidden flex justify-center py-3 w-full",children:"Blusas"}),(0,a.jsxs)("div",{className:"lg:hidden p-2 flex",children:[(0,a.jsx)(r,{className:"w-1/2",text:"Filtar",onClick:c,variant:"outline"}),(0,a.jsx)(r,{className:"w-1/2",text:"Ordenar",onClick:i,variant:"outline"})]})]})},g=t(2265),h=t(9690);let j=e=>{let{onClick:l,checked:t}=e;return(0,a.jsx)("div",{onClick:l,className:"p-[2px] w-fit h-fit border border-solid border-[#808080]",children:(0,a.jsx)("div",{className:"w-3 h-3 ".concat(t?"bg-cadastra-orange":"bg-white")})})};var f=e=>{let{onClick:l,checked:t,label:r}=e;return(0,a.jsxs)("div",{className:"flex gap-4 cursor-pointer items-center",onClick:l,children:[(0,a.jsx)(j,{checked:t}),(0,a.jsx)("span",{children:r})]})},b=e=>{let{options:l,value:t,onChange:r}=e;return l.map(e=>(0,a.jsx)(f,{onClick:()=>r(e.value),checked:e.value===t,label:e.label}))},v=e=>{let{sizes:l,selectedSize:t,onFilter:r}=e;return(0,a.jsx)("div",{className:"flex flex-wrap w-[80%] gap-2",children:l.map(e=>(0,a.jsx)("div",{onClick:()=>r("size",e),className:"w-1/5 aspect-square border border-solid ".concat(t===e?"border-[#FB953E] text-black ":"border-[#808080] text-[#808080]"," flex justify-center items-center cursor-pointer"),children:e},e))})},N=e=>{let{products:l,onFilter:t,filters:r,closeFilter:s}=e,[i,c]=(0,g.useState)(!1),n=(0,g.useMemo)(()=>[...new Set(l.map(e=>{let{color:l}=e;return l}))].map(e=>({label:e,value:e})),[l]),o=(0,g.useMemo)(()=>[...new Set(l.flatMap(e=>{let{size:l}=e;return l}))].filter(Boolean),[l]);return(0,a.jsxs)("div",{className:"lg:flex lg:relative hidden w-fit flex-col gap-5 p-8 bg-white",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("h4",{className:"text-lg",children:"CORES"}),(0,a.jsx)(b,{options:n.slice(0,i?999:5),value:r.color,onChange:e=>t("color",e)}),(0,a.jsx)("div",{onClick:()=>{c(e=>!e)},className:"flex gap-3 items-center underline",children:(0,a.jsxs)("span",{className:"text-[#808080] cursor-pointer flex items-center gap-1",children:[i?"Ver cores principais":"Ver todas as cores",i?(0,a.jsx)(h.j9E,{className:"mt-1"}):(0,a.jsx)(h.cuw,{className:"mt-1"})]})}),(0,a.jsx)("button",{className:"absolute top-8 right-8 block lg:hidden",onClick:s,children:(0,a.jsx)(h.oHP,{})})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 w-full",children:[(0,a.jsx)("h4",{className:"text-lg",children:"TAMANHOS"}),(0,a.jsx)(v,{sizes:o,selectedSize:r.size,onFilter:t}),(0,a.jsx)("h4",{className:"text-lg",children:"FAIXA DE PRE\xc7O"}),(0,a.jsx)(b,{options:m,value:r.price,onChange:e=>t("price",e)})]})]})},w=t(9212),C=t.n(w),k=e=>{let{open:l,closeOrdering:t,selectedOrdering:r,setSelectedOrdering:s}=e;return(0,a.jsxs)("div",{className:"".concat(l?"left-0":"-left-full"," fixed w-screen h-screen bg-white top-0 bottom-0 transition-all transition-200"),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center p-6 border-b-2 border-cadastra-gray ",children:[(0,a.jsx)("span",{className:"text-2xl text-cadastra-gray-dark",children:"ORDENAR"}),(0,a.jsx)("button",{onClick:t,children:(0,a.jsx)(h.oHP,{className:"text-2xl"})})]}),(0,a.jsx)("div",{children:x.map(e=>(0,a.jsx)("div",{className:"flex p-6 text-lg ".concat(r===e.value?"bg-cadastra-orange text-white":"bg-white text-black"),onClick:()=>{s(r===e.value?null:e.value),t()},children:e.label},e.value))})]})},y=e=>{let{content:l,title:t}=e,[r,s]=(0,g.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items center text-[#808080] text-2xl py-2",onClick:()=>{s(e=>!e)},children:[(0,a.jsx)("h4",{children:t}),r?(0,a.jsx)(h.j9E,{className:"mt-1"}):(0,a.jsx)(h.cuw,{className:"mt-1"})]}),r&&(0,a.jsx)("div",{children:l})]})},R=e=>{let{products:l,onFilter:t,filters:s,filterOpen:i,closeFilter:c}=e,n=(0,g.useMemo)(()=>[...new Set(l.map(e=>{let{color:l}=e;return l}))].map(e=>({label:e,value:e})),[l]),o=(0,g.useMemo)(()=>[...new Set(l.flatMap(e=>{let{size:l}=e;return l}))],[l]);return(0,a.jsxs)("div",{className:"flex lg:hidden fixed w-screen flex-col gap-5 bg-white top-0 bottom-0 ".concat(i?"left-0":"-left-full"," transition-all duration-200"),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center p-6 border-b-2 border-cadastra-gray ",children:[(0,a.jsx)("span",{className:"text-2xl text-cadastra-gray-dark",children:"FILTRAR"}),(0,a.jsx)("button",{onClick:c,children:(0,a.jsx)(h.oHP,{className:"text-2xl"})})]}),(0,a.jsxs)("div",{className:"px-4 flex flex-col gap-3 overflow-scroll",children:[(0,a.jsx)(y,{title:"CORES",content:(0,a.jsx)(b,{options:n,value:s.color,onChange:e=>t("color",e)})}),(0,a.jsx)(y,{title:"TAMANHOS",content:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex-wrap w-[80%] gap-2 flex",children:o.map(e=>(0,a.jsx)("div",{onClick:()=>t("size",e),className:"max-w-[2.5rem] w-1/5 aspect-square border border-solid ".concat(s.size===e?"border-[#FB953E] text-black ":"border-[#808080] text-[#808080]"," flex justify-center items-center cursor-pointer"),children:e},e))})})}),(0,a.jsx)(y,{title:"FAIXA DE PRE\xc7O",content:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex-wrap w-[80%] gap-2 flex",children:(0,a.jsx)(b,{options:m,value:s.price,onChange:e=>t("price",e)})})})}),(0,a.jsxs)("div",{className:"w-full flex gap-2 pt-6",children:[(0,a.jsx)(r,{text:"APLICAR",onClick:c,variant:"primary",className:"border-none"}),(0,a.jsx)(r,{text:"LIMPAR",onClick:()=>{t("color",null),t("size",null),t("price",null),c()},variant:"outline",className:""})]})]})]})},S=t(3872);let O=e=>{let{product:l,onRemove:t}=e;return(0,a.jsxs)("div",{className:"flex gap-2 relative",children:[(0,a.jsx)("img",{className:"w-1/5",src:l.image,alt:"product image"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{children:l.name}),(0,a.jsxs)("span",{children:["R$ ",l.price.toFixed(2).replace(".",",")]})]}),(0,a.jsx)("div",{className:"absolute right-3 top-1 cursor-pointer",onClick:t,children:(0,a.jsx)(S.hKd,{color:"red",size:20})})]})};var P=e=>{let{cartOpen:l,setCartOpen:t,selectedProducts:r,setCartProducts:s}=e,i=(0,g.useMemo)(()=>r.reduce((e,l)=>e+l.price,0),[r]);return(0,a.jsxs)("div",{className:"flex ".concat(l?"lg:relative lg:w-1/3":"lg:hidden"," fixed w-screen flex-col gap-5 bg-white top-0 bottom-0 ").concat(l?"right-0":"-right-full"," transition-all duration-200"),children:[(0,a.jsxs)("div",{className:"flex justify-between items-center p-6 border-b-2 border-cadastra-gray",children:[(0,a.jsx)("span",{className:"text-2xl text-cadastra-gray-dark",children:"CARRINHO"}),(0,a.jsx)("button",{onClick:()=>t(!1),children:(0,a.jsx)(h.oHP,{className:"text-2xl"})})]}),r.map(e=>(0,a.jsx)(O,{product:e,onRemove:()=>s(l=>l.filter(l=>l.id!==e.id))})),(0,a.jsxs)("span",{className:"p-2 text-right font-bold",children:["Total: R$ ",i.toFixed(2).replace(".",",")]})]})},M=(e,l)=>{let[t,a]=(0,g.useState)(()=>{try{let t=localStorage.getItem(e);if(t)return JSON.parse(t);return localStorage.setItem(e,JSON.stringify(l)),l}catch(t){return localStorage.setItem(e,JSON.stringify(l)),l}});return[t,l=>{let r;r="function"==typeof l?l(t):l,localStorage.setItem(e,JSON.stringify(r)),a(r)}]},A=t(2126),z=JSON.parse('{"products":[{"id":"1","name":"Camiseta Mescla","price":28.8,"parcelamento":[3,9.33],"color":"Cinza","image":"/img/img_2.png","size":["M","GG"],"date":"1995-12-17"},{"id":"2","name":"Saia em couro","price":398,"parcelamento":[5,30],"color":"Preto","image":"/img/img_3.png","size":["G","40"],"date":"1996-12-17"},{"id":"3","name":"Cardigan Tigre","price":398.8,"parcelamento":[5,30],"color":"Laranja","image":"/img/img_4.png","size":["GG","44"],"date":"1997-12-17"},{"id":"4","name":"Cardigan off white","price":99.9,"parcelamento":[3,33.3],"color":"Branco","image":"/img/img_5.png","size":["U","46"],"date":"1998-12-17"},{"id":"5","name":"Body Leopardo","price":129.9,"parcelamento":[3,43.43],"color":"Amarelo","image":"/img/img_6.png","size":["M"],"date":"1999-12-17"},{"id":"6","name":"Casaco Pelos","price":398,"parcelamento":[5,30],"color":"Rosa","image":"/img/img_7.png","size":["GG","38"],"date":"1999-12-16"},{"id":"7","name":"Cropped Stripes","price":120,"parcelamento":[3,40],"color":"Amarelo","image":"/img/img_8.png","size":["36","U"],"date":"2000-12-17"},{"id":"8","name":"Camisa Transparente","price":398,"parcelamento":[5,30],"color":"Preto","image":"/img/img_9.png","size":["P"],"date":"2000-11-17"},{"id":"9","name":"Pochete Clutch","price":99,"parcelamento":[3,33],"color":"Preto","image":"/img/img_10.png","size":["M"],"date":"2003-12-17"},{"id":"10","name":"Pochete Clutch","price":99,"parcelamento":[3,33],"color":"Preto","image":"/img/img_10.png","size":["M"],"date":"2003-12-17"},{"id":"11","name":"Pochete Clutch","price":99,"parcelamento":[3,33],"color":"Preto","image":"/img/img_10.png","size":["M"],"date":"2003-12-17"},{"id":"12","name":"Pochete Clutch","price":99,"parcelamento":[3,33],"color":"Preto","image":"/img/img_10.png","size":["M"],"date":"2003-12-17"},{"id":"13","name":"Pochete Clutch","price":99,"parcelamento":[3,33],"color":"Preto","image":"/img/img_10.png","size":["M"],"date":"2003-12-17"},{"id":"14","name":"Pochete Clutch","price":99,"parcelamento":[3,33],"color":"Preto","image":"/img/img_10.png","size":["M"],"date":"2003-12-17"}]}');A.Z.create({baseURL:"http://localhost:5000/"});let E=async e=>{let{url:l}=e;return{data:z[l.split("/")[1]]}};function F(){let[e,l]=(0,g.useState)([]),[t,c]=(0,g.useState)({}),[d,x]=(0,g.useState)(!0),[m,p]=(0,g.useState)(!1),[h,j]=(0,g.useState)(null),[f,b]=(0,g.useState)(!1),[v,w]=(0,g.useState)(!1),[y,S]=(0,g.useState)(!1),[O,A]=M("products",[]),z=(e,l)=>"recents"===h?C()(l.date).unix()-C()(e.date).unix():"lowest"===h?e.price-l.price:"biggest"===h?l.price-e.price:0,F=[{x:0,y:50},{x:51,y:150},{x:151,y:300},{x:301,y:500},{x:500,y:99999999}],_=e=>l=>{let[t,a]=l;if("color"===t)return e[t]===a;if("size"===t)return e[t].includes(a);if("price"===t){let{x:l,y:t}=F[a-1];return e.price>=l&&e.price<=t}return!1},$=(0,g.useMemo)(()=>e.filter(e=>Object.entries(t).filter(e=>e[1]).every(_(e))).sort(z),[e,t,h]),I=async()=>{let{data:e}=await E({url:"/products"});console.log(e),l(e),x(!1)},G=(e,l)=>{c(t=>({...t,[e]:t[e]===l?null:l}))},T=e=>{j(e)};return(0,g.useEffect)(()=>{I()},[m]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(n,{cartProducts:O,onCartClick:()=>S(e=>!e)}),(0,a.jsx)(u,{onFilterClick:()=>b(!0),onOrderClick:()=>w(!0),onChange:e=>T(e.value),selectedOrdering:h}),(0,a.jsxs)(o,{children:[(0,a.jsx)(N,{filters:t,onFilter:G,products:e,filterOpen:f,closeFilter:()=>b(!1)}),(0,a.jsx)(R,{filters:t,onFilter:G,products:e,filterOpen:f,closeFilter:()=>b(!1)}),(0,a.jsx)(k,{open:v,closeOrdering:()=>w(!1),selectedOrdering:h,setSelectedOrdering:j}),(0,a.jsxs)("div",{className:"flex flex-row flex-wrap gap-4 justify-center max-w-[976px] w-full lg:p-8 p-2",children:[$.slice(0,m?999:9).map(e=>(0,a.jsx)(s,{...e,onClick:()=>A(l=>[...l,e])},e.id)),0===$.length&&!d&&(0,a.jsx)("div",{className:"w-full flex mt-4 justify-center text-lg",children:(0,a.jsx)("span",{children:"Sem resultados"})}),0!==$.length&&!d&&$.length>9&&(0,a.jsx)("div",{className:"w-full flex justify-center mt-6",children:(0,a.jsx)("div",{className:"w-48",children:(0,a.jsx)(r,{onClick:()=>{p(e=>!e)},text:m?"CARREGAR MENOS":"CARREGAR MAIS",variant:"primary"})})})]}),(0,a.jsx)(P,{cartOpen:y,setCartOpen:S,selectedProducts:O,setCartProducts:A})]})]}),!d&&(0,a.jsx)(i,{})]})}}},function(e){e.O(0,[665,240,259,990,440,971,23,744],function(){return e(e.s=9725)}),_N_E=e.O()}]);