(this["webpackJsonpshopify-challenge-2"]=this["webpackJsonpshopify-challenge-2"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(16),r=n.n(s),o=n(19),l=n(7),u=n.n(l),j=n(17),b=n(4),d=function(e){var t=e.text,n=e.onChange,i=e.resetText;return Object(c.jsxs)("div",{className:"SearchBar",children:[Object(c.jsx)("label",{htmlFor:"text",children:"Movie Title "}),Object(c.jsxs)("div",{className:"bar",children:[Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("i",{className:"fas fa-search icon"}),Object(c.jsx)("input",{type:"text",name:"title",value:t,onChange:n})]}),Object(c.jsx)("button",{className:"reset",onClick:i,children:"Reset"})]})]})},h=function(e){var t=e.movies,n=e.text,i=e.addNomination,a=e.isNominated;return t.length>0&&Object(c.jsxs)("div",{className:"Movies",children:[Object(c.jsxs)("h2",{children:['Results for "',n,'"']}),t.length>0&&Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsxs)("li",{children:[e.Title," (",e.Year,") "," "," ",Object(c.jsx)("button",{onClick:function(){return i(e)},disabled:a(e),children:"Nominate"})]},e.imdbID)}))})]})},m=function(e){var t=e.nominations,n=e.removeNomination;return Object(c.jsxs)("div",{className:"Nominations",children:[Object(c.jsx)("h2",{children:"Nominations"}),0===t.length&&Object(c.jsx)("h3",{children:"You haven't nominated any movies yet!"}),t.length>0&&Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsxs)("li",{children:[e.Title," (",e.Year,") "," "," ",Object(c.jsx)("button",{onClick:function(){return n(e)},children:"Remove"})]},e.imdbID)}))})]})},x=function(e){var t=e.alert;return null!==t&&Object(c.jsxs)("div",{className:"Alert alert-".concat(t.type),children:[Object(c.jsx)("i",{className:"fas fa-info-circle"})," ",t.msg]})},f=n(18),O=n.n(f),v=(n(44),function(){var e=Object(i.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)([]),r=Object(b.a)(s,2),l=r[0],f=r[1],v=Object(i.useState)([]),p=Object(b.a)(v,2),N=p[0],g=p[1],y=Object(i.useState)(null),S=Object(b.a)(y,2),k=S[0],w=S[1];Object(i.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://www.omdbapi.com/?apikey=".concat("cda01371","&s=").concat(t));case 2:n=e.sent,f(n.data.Search||[]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(n),5===N.length&&I("You've reached the maximum number of nominations!","success")}),[n,N]);var I=function(e,t){w({msg:e,type:t}),setTimeout((function(){return w(null)}),3e3)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x,{alert:k}),Object(c.jsx)("h1",{children:"The Shoppies"}),Object(c.jsx)(d,{text:n,onChange:function(e){return a(e.target.value)},resetText:function(){return a("")}}),Object(c.jsx)(h,{movies:l,text:n,addNomination:function(e){N.length<5?g([].concat(Object(o.a)(N),[e])):I("You already have 5 nominations!","danger")},isNominated:function(e){return!!N.find((function(t){return t.imdbID===e.imdbID}))}}),Object(c.jsx)(m,{nominations:N,removeNomination:function(e){g(N.filter((function(t){return t.imdbID!==e.imdbID})))}})]})});r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.47430389.chunk.js.map