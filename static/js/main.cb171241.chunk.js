(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(23),r=n.n(o),j=(n(34),n(35),n(56)),s=n(11),a=n(9),u=n(2),b=function(){return Object(u.jsx)("h1",{children:"Home Page"})},l=function(){return Object(u.jsx)("h1",{children:"About Page"})},O=n(12),h=n(57);function g(e,t,n){var i=Object(c.useState)((function(){var c=n.getItem(t);return null!==c?JSON.parse(c):e})),o=Object(O.a)(i,2),r=o[0],j=o[1];return Object(c.useEffect)((function(){n.setItem(t,JSON.stringify(r))}),[t,r]),[r,j]}var d=function(){var e=g(!1,"login",window.sessionStorage),t=Object(O.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(n?"Logout":"Login"),r=Object(O.a)(o,2),j=r[0],s=r[1];return Object(u.jsx)(h.a,{onClick:function(e){console.log("Prev isLogin? "+n),s(n?"Login":"Logout"),i(!n)},children:j})};var x=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{id:"navigation",children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/about",children:"About"})})]})}),Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{exact:!0,path:"/",component:b}),Object(u.jsx)(a.a,{path:"/about",component:l})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s.a,{basename:"/react-gh-page-test1",children:Object(u.jsx)(x,{})})}),document.getElementById("root")),f()}},[[53,1,2]]]);
//# sourceMappingURL=main.cb171241.chunk.js.map