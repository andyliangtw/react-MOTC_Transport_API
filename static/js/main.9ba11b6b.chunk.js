(this["webpackJsonpreact-motc_transport_api"]=this["webpackJsonpreact-motc_transport_api"]||[]).push([[0],{59:function(t,e,n){},61:function(t,e,n){},69:function(t,e,n){},94:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(17),i=n.n(a),o=(n(59),n(24)),s=n(38),u=n(7),j=n(101),d=(n(60),n(18)),h=n(103),l=n(104),b=n(102),p={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23"},O=(n(61),n.p+"static/media/Dcard_Favicon_x520.80306699.png"),f=n(3);function x(){return Object(f.jsxs)(h.a,{bg:"light",expand:"lg",sticky:"top",children:[Object(f.jsxs)(h.a.Brand,{href:"/",children:[Object(f.jsx)("img",{src:O,alt:"Logo",className:"header-logo"})," ",Object(f.jsx)("b",{children:"2021 Web Frontend Intern Homework"})]}),Object(f.jsx)(h.a.Toggle,{"aria-controls":"navbar-nav"}),Object(f.jsx)(h.a.Collapse,{id:"navbar-nav",children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(l.a.Link,{href:"/scenicSpot",children:"\u5168\u90e8\u666f\u9ede"}),Object(f.jsx)(b.a,{title:"\u5404\u7e23\u5e02\u666f\u9ede",id:"navbar-citys",children:Object.entries(p).map((function(t,e){var n=Object(d.a)(t,2),c=n[0],r=n[1];return Object(f.jsx)(b.a.Item,{href:"/scenicSpot/".concat(c),children:r},e)}))})]})})]})}var v=n(23),m=n.n(v),g=n(41),C=n(33),S=n(100);n(69);function T(t){var e=t.center,n=t.size,c=t.relativeCenter,r=void 0!==c&&c,a="wrapper",i="spinner";return e&&(a="".concat(a,"_center")),r&&(a="".concat(a,"_relative--center")),n&&(i="".concat(i,"--").concat(n)),Object(f.jsx)("div",{className:a,children:Object(f.jsx)("div",{className:i})})}function y(t){return"object"!=typeof t?"":Object.entries(t).reduce((function(t,e,n){var c=Object(d.a)(e,2),r=c[0],a=c[1];return t+"".concat(0===n?"?":"&").concat(r,"=").concat(a)}),"")}function _(t){Object(c.useEffect)((function(){var e=function(){(function(){var t="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return t+window.pageYOffset>=e})()&&t()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t])}var w=n(53),E={},H=n.n(w).a.create();E.fire=function(){var t=Object(C.a)(m.a.mark((function t(e){var n,c=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:Object({NODE_ENV:"production",PUBLIC_URL:"/React-MOTC_Transport_API",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MOTC_API_HOST:"https://ptx.transportdata.tw/MOTC"}).REACT_APP_API_HOST,t.abrupt("return",H.request(Object(o.a)(Object(o.a)({},e),{},{headers:Object(o.a)({Authorization:sessionStorage.getItem("authToken")},e.headers),url:"".concat(n).concat(e.url)})).catch((function(t){throw t})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var P=E,k={getAllScenicSpots:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return P.fire({url:"/v2/Tourism/ScenicSpot".concat(y(t)),headers:{"Content-Type":"application/json"},method:"GET"},"https://ptx.transportdata.tw/MOTC")},getCityScenicSpots:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return P.fire({url:"/v2/Tourism/ScenicSpot/".concat(t).concat(y(e)),headers:{"Content-Type":"application/json"},method:"GET"},"https://ptx.transportdata.tw/MOTC")}},D=k;function A(){var t=Object(u.f)().city,e=Object(c.useState)([]),n=Object(d.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(0),o=Object(d.a)(i,2),s=o[0],j=o[1],h=Object(c.useState)(!0),l=Object(d.a)(h,2),b=l[0],O=l[1],x=Object(c.useCallback)(Object(C.a)(m.a.mark((function e(){var n,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={$top:30,$skip:30*s},O(!0),e.prev=2,!(t in p)){e.next=9;break}return e.next=6,D.getCityScenicSpots(t,n);case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,D.getAllScenicSpots(n);case 11:e.t0=e.sent;case 12:c=e.t0,r=c.data,O(!1),a((function(t){return[].concat(Object(g.a)(t),Object(g.a)(r))})),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(2),console.error(e.t1);case 21:case"end":return e.stop()}}),e,null,[[2,18]])}))),[t,s]);return Object(c.useEffect)((function(){x()}),[x]),_((function(){j(s+1)})),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(S.a,{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"No."}),Object(f.jsx)("th",{children:"\u666f\u9ede\u540d\u7a31"}),Object(f.jsx)("th",{children:"\u666f\u9ede\u7279\u8272\u7cbe\u7c21\u8aaa\u660e"})]})}),Object(f.jsx)("tbody",{children:r.map((function(t,e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e+1}),Object(f.jsx)("td",{children:Object(f.jsx)("b",{children:t.Name})}),Object(f.jsxs)("td",{children:[t.Description||t.DescriptionDetail,t.Description&&t.Description!==t.DescriptionDetail&&"......"]})]},e)}))})]}),b&&Object(f.jsx)(T,{relativeCenter:!0,size:"big"})]})}var F=[{path:"/",exact:!0,component:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Welcome here!"}),Object(f.jsx)("p",{children:"\u8acb\u9ede\u64ca\u9802\u7aef\u7684\u300c\u5168\u90e8\u666f\u9ede\u300d\u6216\u300c\u5404\u7e23\u5e02\u666f\u9ede\u300d\u4f86\u67e5\u770b\u666f\u9ede"})]})}},{path:"/scenicSpot",exact:!0,component:A},{path:"/scenicSpot/:city",component:A}];n(94);var I=function(){return Object(f.jsx)(s.a,{children:Object(f.jsx)(u.c,{children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(x,{}),F.map((function(t,e){return Object(f.jsx)(u.a,{path:t.path,exact:t.exact,render:function(e){return Object(f.jsx)(t.component,Object(o.a)({routes:t.routes},e))}},e)}))]})})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),L()}},[[95,1,2]]]);
//# sourceMappingURL=main.9ba11b6b.chunk.js.map