(this.webpackJsonprequestinfo=this.webpackJsonprequestinfo||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(12),a=c.n(r),i=c(19),o=c(3),l=c(15),j=c(17),d=c(16),x=c(7),h=c(0);function b(){var e=new Date;return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsxs)("footer",{className:" d-flex flex-column flex-md-row justify-content-between py-1 px-1 px-md-4",children:[Object(h.jsxs)("span",{className:"text-center d-block",children:["\xa9 ",e.getUTCFullYear()," - Mohammad Hosein Shahpouri"]}),Object(h.jsxs)("p",{className:"d-flex flex-row align-items-center justify-content-center text-center mb-0",children:[Object(h.jsx)("span",{className:"",children:"Made with"}),Object(h.jsx)(x.a,{icon:"heart",className:"text-danger mx-1"}),Object(h.jsx)("span",{className:"",children:"and"}),Object(h.jsx)(x.a,{icon:"coffee",className:"text-light mx-1"})]})]}),Object(h.jsxs)("p",{className:" text-center mb-0",children:[Object(h.jsx)(x.a,{icon:["fab","react"],className:"mx-1 mt-1 text-info"}),Object(h.jsx)("span",{className:" text-info",children:n.version})]})]})}function f(e){return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center align-items-center flex-column ",children:e.children})}),Object(h.jsx)(b,{})]})}var m=c(4),u=c.n(m),O=Object(n.createContext)({Info:{},SetInfo:function(e){}});c(29);function p(){var e=Object(n.useContext)(O).Info,t="GTM"+(Math.floor(e.time_zone.offset)>0?"+"+Math.floor(e.time_zone.offset):Math.floor(e.time_zone.offset))+(e.time_zone.offset/.5%2!==0?":30":":00"),c=new Date(1e3*e.time_zone.current_time_unix);return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("h3",{className:"text-center mt-2",children:"Time:"}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Time Zone:"}),Object(h.jsx)("h4",{children:e.time_zone.name})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Time Zone Offset:"}),Object(h.jsx)("h4",{children:t})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Now:"}),Object(h.jsx)("h4",{children:"".concat(c.getDate(),"/").concat(c.getMonth()+1,"/").concat(c.getFullYear()," ").concat(c.getHours(),":").concat(c.getMinutes())})]})]})}var g=c(5);function w(){return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("h3",{className:"text-center mt-2",children:"Client:"}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"OS:"}),Object(h.jsx)("h4",{children:g.osName})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"OS Version:"}),Object(h.jsx)("h4",{children:g.osVersion})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Browser Name:"}),Object(h.jsx)("h4",{children:g.browserName})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Browser Version:"}),Object(h.jsx)("h4",{children:g.browserVersion})]})]})}var v=c(13),N=c(14),y="History";function S(){var e=JSON.parse(window.localStorage.getItem(y));return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("h3",{className:"text-center mt-2",children:"History:"}),function(){var t=[],c=0;for(var n in e){var s,r=e[n],a=[],i=0,o=Object(N.a)(r);try{for(o.s();!(s=o.n()).done;){var l=s.value;a.push(Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:l.Location}),Object(h.jsx)("h4",{children:l.Time})]},i++))}}catch(j){o.e(j)}finally{o.f()}t.push(Object(h.jsxs)("details",{children:[Object(h.jsx)("summary",{className:"h3",children:n}),a.reverse()]},c++))}return t}()]})}function _(){var e=Object(n.useRef)(null),t=Object(n.useContext)(O).Info,c="https://purecatamphetamine.github.io/country-flag-icons/3x2/"+t.country_code2+".svg";return Object(n.useEffect)((function(){var c=u.a.icon({iconUrl:v.a}),n=u.a.map(e.current).setView({lat:Number(t.latitude),lng:Number(t.longitude)},13);u.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(n),u.a.marker({lat:Number(t.latitude),lng:Number(t.longitude)},{icon:c}).addTo(n).bindPopup("Your Location").openPopup()})),Object(h.jsxs)(n.Fragment,{children:[Object(h.jsxs)("div",{className:"col-11 col-lg-5",children:[Object(h.jsx)("h1",{className:"text-center mb-0 mt-2",children:"You're connected to:"}),Object(h.jsx)("h1",{className:"text-center",children:t.ip})]}),Object(h.jsxs)("div",{className:"col-11 col-lg-5 d-flex flex-column",children:[Object(h.jsxs)("h2",{className:"text-center",children:["From ",t.country_name]}),Object(h.jsx)("img",{src:c,id:"flag",alt:t.country_name,className:"rounded-3"})]}),Object(h.jsxs)("div",{className:"col-11 col-lg-5",children:[Object(h.jsx)("h3",{className:"text-center mt-2",children:"On Map:"}),Object(h.jsx)("div",{className:"rounded-3",ref:e,id:"map"})]}),Object(h.jsxs)("div",{className:"col-12  col-lg-5",children:[Object(h.jsx)("h3",{className:"text-center mt-2",children:"Extra Information:"}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Continent:"}),Object(h.jsx)("h4",{children:t.continent_name})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"State:"}),Object(h.jsx)("h4",{children:t.state_prov})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"City:"}),Object(h.jsx)("h4",{children:t.city})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"District:"}),Object(h.jsx)("h4",{children:t.district})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"ISP:"}),Object(h.jsx)("h4",{children:t.isp})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Internet TLD:"}),Object(h.jsx)("h4",{children:t.country_tld})]}),Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(h.jsx)("h4",{children:"Calling Code:"}),Object(h.jsx)("h4",{children:t.calling_code})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(p,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(w,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(S,{})]})]})}function I(e){var t=e.data,c=Object(n.useState)(t),s=Object(i.a)(c,2),r=s[0],a=s[1];return document.title="You're Connected to ".concat(t.country_name,"(").concat(t.ip,")"),Object(h.jsx)(O.Provider,{value:{Info:r,SetInfo:a},children:Object(h.jsx)(f,{children:Object(h.jsx)(_,{})})})}o.b.add(l.a,d.a,j.a);var M=c(11),T=c.n(M),C=c(18);function F(){return(F=Object(C.a)(T.a.mark((function e(){var t,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.ipgeolocation.io/ipgeo?apiKey=","987b5388df5d47deb2412a03e7266aa8",e.next=4,fetch("https://api.ipgeolocation.io/ipgeo?apiKey=987b5388df5d47deb2412a03e7266aa8",{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(33);c(34).config();var L=document.getElementById("app");(function(){return F.apply(this,arguments)})().then((function(e){!function(e){var t=e.location,c=e.locationShort,n=new Date,s="".concat(n.getHours(),":").concat(n.getMinutes()),r="".concat(n.getDate(),"/").concat(n.getMonth()+1,"/").concat(n.getFullYear()),a={Location:t,LocationShort:c,Time:s},i=window.localStorage.getItem(y);i||(i="{}");var o=JSON.parse(i);o[r]?o[r].push(a):o[r]=[a],window.localStorage.setItem(y,JSON.stringify(o))}({location:"".concat(e.city,", ").concat(e.country_name),locationShort:e.country_code2}),a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(I,{data:e})}),L)})).catch((function(e){var t=document.querySelector("#loader p");t.innerHTML="Something Went Wrong <br /> Please Try Again Later",t.style.whiteSpace="normal",document.title="Something Went Wrong",console.error(e)})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/RequestInfo/sw.js")}))}},[[38,1,2]]]);
//# sourceMappingURL=main.92cb5f56.chunk.js.map