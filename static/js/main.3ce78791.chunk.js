(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),i=n(23),r=n.n(i),j=(n(34),n(35),n(56)),a=n(11),s=n(9),u=n(2),b=function(){return Object(u.jsx)("h1",{children:"Home Page"})},l=function(){return Object(u.jsx)("h1",{children:"About Page"})},O=n(12),h=n(57);var d=function(){var t=function(t,e){var n=Object(c.useState)((function(){var n=window.localStorage.getItem(e);return null!==n?JSON.parse(n):t})),o=Object(O.a)(n,2),i=o[0],r=o[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,r]}(!1,"login"),e=Object(O.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(n?"Logout":"Login"),r=Object(O.a)(i,2),j=r[0],a=r[1];return Object(u.jsx)(h.a,{onClick:function(t){console.log("Prev isLogin? "+n),a(n?"Login":"Logout"),o(!n)},children:j})};var g=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d,{}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{id:"navigation",children:[Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/about",children:"About"})})]})}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(u.jsx)(s.a,{path:"/about",component:l})]})]})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(a.a,{children:Object(u.jsx)(g,{})})}),document.getElementById("root")),x()}},[[53,1,2]]]);
//# sourceMappingURL=main.3ce78791.chunk.js.map