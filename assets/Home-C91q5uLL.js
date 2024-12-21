import{r,o as y,c as b,a as c,b as p,d as s,w as v,v as k,e as _,f as M,g as j,F as C,h as B,t as d,_ as z,i as V,j as x}from"./index-Bbn711gh.js";import{a as A}from"./axios-CEIEoI4z.js";const L="/WorkNest_2025_vite/assets/BG_Pngtreeclean-D8yFFN_W.jpg",N=async(n,o={})=>{try{return await A.get(n,{params:o})}catch(a){throw console.error(`GET 請求失敗: ${n}`,a.response||a),a}},H={class:"min-h-screen bg-slate-50 min-w-[375px]"},S={class:"container mx-auto px-4"},O={class:"filter-panel flex flex-col sm:flex-row items-center justify-between gap-4 my-4"},F={class:"filter-checkbox flex items-center gap-2 text-gray-700"},D={class:"stores-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"},$={class:"md:flex"},E={class:"md:w-2/5"},I=["src","alt"],P={class:"p-4 md:p-5 md:w-3/5"},T={class:"text-lg font-semibold text-gray-800 mb-2 truncate"},U={class:"space-y-2"},G={class:"flex items-start"},K={class:"text-gray-600 text-sm truncate"},W={class:"flex items-start"},Q={class:"text-gray-600 text-sm truncate"},q={class:"mt-3 flex flex-wrap gap-1.5"},J={class:"px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full"},R={class:"px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full"},X={__name:"Main",setup(n){const o=r([]),a=r(!1),h=r(null);async function g(){try{a.value=!0,console.log("開始請求 API...");const l=await N("/");console.log("API 返回的原始資料:",l),o.value=Object.values(l).map(e=>({...e,powerOutlet:e.powerOutlet===!0||e.powerOutlet==="是"})),console.log("清洗後的資料:",o.value)}catch(l){h.value=l.message,console.error("請求失敗:",l)}finally{a.value=!1}}y(()=>{g()});const u=r(""),m=r(!1),i=r(""),w=b(()=>o.value.filter(l=>{const e=!u.value||l.city===u.value,t=!m.value||l.powerOutlet===!0,f=!i.value||l.StoreName.toLowerCase().includes(i.value.toLowerCase())||l.address.toLowerCase().includes(i.value.toLowerCase());return e&&t&&f}));return(l,e)=>(c(),p("main",H,[e[7]||(e[7]=s("div",{class:"relative"},[s("div",{class:"absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/20 z-10"}),s("img",{src:L,alt:"背景圖片",class:"h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover"}),s("div",{class:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20"})],-1)),s("div",S,[s("div",O,[v(s("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),class:"filter-select border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"},e[3]||(e[3]=[s("option",{value:""},"全部城市",-1),s("option",{value:"台北"},"台北",-1),s("option",{value:"新北"},"新北",-1)]),512),[[k,u.value]]),s("label",F,[v(s("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=t=>m.value=t),class:"w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"},null,512),[[_,m.value]]),e[4]||(e[4]=M(" 有插座 "))]),v(s("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>i.value=t),placeholder:"搜尋店名或地址",class:"filter-input border border-gray-300 rounded-md p-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[j,i.value]])]),s("div",D,[(c(!0),p(C,null,B(w.value,t=>(c(),p("div",{key:t.id,class:"bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto w-full"},[s("div",$,[s("div",E,[s("img",{src:t.spacePhoto,alt:t.StoreName,class:"h-48 w-full object-cover md:h-full"},null,8,I)]),s("div",P,[s("h3",T,d(t.StoreName),1),s("div",U,[s("div",G,[e[5]||(e[5]=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"})],-1)),s("p",K,d(t.address),1)]),s("div",W,[e[6]||(e[6]=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),s("p",Q,d(t.businessHours),1)])]),s("div",q,[s("span",J," 插座: "+d(t.powerOutlet?"有":"無"),1),s("span",R," 最低消費: "+d(t.minSpend)+"元 ",1)])])])]))),128))])])]))}},Y={},Z={class:"min-h-screen bg-gray-100 py-8 px-4"};function ss(n,o){return c(),p("div",Z,o[0]||(o[0]=[V('<div class="max-w-4xl mx-auto"><h2 class="text-2xl font-bold text-gray-800 mb-6">搜尋結果</h2><div class="space-y-6"><div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="md:flex"><div class="md:w-1/3"><img src="https://picsum.photos/id/681/600/101" alt="咖啡廳照片" class="h-48 w-full object-cover md:h-full"></div><div class="p-6 md:w-2/3"><h3 class="text-xl font-semibold text-gray-800 mb-2">湛盧咖啡．台大館</h3><div class="space-y-2"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg><p class="text-gray-600 text-sm">台北市 1 區 1 7777號</p></div><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p class="text-gray-600 text-sm">週一至週日：10:00 ~ 20:00</p></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><span class="text-gray-600 text-sm">台北市</span></div></div><div class="mt-4 flex flex-wrap gap-2"><span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">插座: 有</span><span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">場地類型: 未定義</span><span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">最低消費: 100元</span></div></div></div></div><div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="md:flex"><div class="md:w-1/3"><img src="https://picsum.photos/id/682/600/101" alt="咖啡廳照片" class="h-48 w-full object-cover md:h-full"></div><div class="p-6 md:w-2/3"><h3 class="text-xl font-semibold text-gray-800 mb-2">FAKEFAKE000777AAAAADD新咖啡777777店</h3><div class="space-y-2"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg><p class="text-gray-600 text-sm">台北市 1 區 1 7777號</p></div><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p class="text-gray-600 text-sm">週一至週日：10:00 ~ 20:00</p></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><span class="text-gray-600 text-sm">台北市</span></div></div><div class="mt-4 flex flex-wrap gap-2"><span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">插座: 有</span><span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">場地類型: 未定義</span><span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">最低消費: 100元</span></div></div></div></div><div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="md:flex"><div class="md:w-1/3"><img src="https://picsum.photos/id/683/600/101" alt="咖啡廳照片" class="h-48 w-full object-cover md:h-full"></div><div class="p-6 md:w-2/3"><h3 class="text-xl font-semibold text-gray-800 mb-2">firebase1208已被修改的004</h3><div class="space-y-2"><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg><p class="text-gray-600 text-sm">台北市 1 區 1 7777號</p></div><div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p class="text-gray-600 text-sm">週一至週日：10:00 ~ 20:00</p></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg><span class="text-gray-600 text-sm">新北市</span></div></div><div class="mt-4 flex flex-wrap gap-2"><span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">插座: 未定義</span><span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">場地類型: 未定義</span><span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">最低消費: 100元</span></div></div></div></div></div></div>',1)]))}const es=z(Y,[["render",ss]]),ts={class:"contciner"},as={__name:"Home",setup(n){return(o,a)=>(c(),p("div",ts,[x(X),x(es)]))}};export{as as default};
