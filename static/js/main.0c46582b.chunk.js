(this.webpackJsonpshopApp2=this.webpackJsonpshopApp2||[]).push([[0],{29:function(t,e,n){t.exports={container:"Container_container__1dtWB"}},30:function(t,e,n){t.exports={Overlay:"Modal_Overlay__T6FnR",Modal:"Modal_Modal__1bVkh"}},31:function(t,e,n){t.exports={Overlay:"Modal_Overlay__IoC2P",Modal:"Modal_Modal__32cRq"}},36:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(11),u=n.n(a),o=(n(36),n(9)),i=n(8),s=n(29),l=n.n(s),b=n(0);var j=function(t){var e=t.children;return Object(b.jsx)("div",{className:l.a.container,children:e})},d=n(6),p=n(3),h=(n(44),{name:"",count:"",imageUrl:"/",width:"",height:"",weight:"",comments:""});var O=function(t){var e=t.onSubmit,n=t.onClose,c=Object(r.useState)(Object(p.a)({},h)),a=Object(o.a)(c,2),u=a[0],i=a[1],s=function(t){var e=t.target,n=e.name,r=e.value;i(Object(p.a)(Object(p.a)({},u),{},Object(d.a)({},n,r)))},l=u.name,j=u.count,O=u.width,f=u.height,v=u.weight,x=u.comments;return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(Object(p.a)({},u)),i(Object(p.a)({},h))},children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:l,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["count",Object(b.jsx)("input",{type:"text",name:"count",value:j,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["width",Object(b.jsx)("input",{type:"text",name:"width",value:O,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["height",Object(b.jsx)("input",{type:"text",name:"height",value:f,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["weight",Object(b.jsx)("input",{type:"text",name:"weight",value:v,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["comments",Object(b.jsx)("input",{type:"textarea",name:"comments",value:x,onChange:s,required:!0})]}),Object(b.jsx)("button",{type:"submit",children:"Add product"}),Object(b.jsx)("button",{type:"button",onClick:n,children:"Close"})]})},f=(n(45),n(30)),v=n.n(f),x=n(2),m=n.n(x),w=n(7),y=n(4),g=n(12),C=n.n(g);function k(){return q.apply(this,arguments)}function q(){return(q=Object(w.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("/products");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return S.apply(this,arguments)}function S(){return(S=Object(w.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.delete("/products/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return M.apply(this,arguments)}function M(){return(M=Object(w.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.post("/products",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t){return V.apply(this,arguments)}function V(){return(V=Object(w.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("/products/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t){return L.apply(this,arguments)}function L(){return(L=Object(w.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.patch("/products/".concat(e.id),e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}C.a.defaults.baseURL="http://localhost:3000";var N=Object(y.c)("product/get",function(){var t=Object(w.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,k();case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),A=Object(y.c)("product/delete",function(){var t=Object(w.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,_(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),I=Object(y.c)("product/add",function(){var t=Object(w.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,E(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),T=Object(y.c)("product/getId",function(){var t=Object(w.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,P(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),D=Object(y.c)("product/edit",function(){var t=Object(w.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,W(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),R=document.querySelector("#modal-root");var U=function(t){var e=t.onClose,n=Object(i.b)();Object(r.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(t){"Escape"===t.code&&e()};return Object(a.createPortal)(Object(b.jsx)("div",{className:v.a.Overlay,onClick:function(t){t.currentTarget===t.target&&e()},children:Object(b.jsx)(O,{onSubmit:function(t){n(I(t))},onClose:e})}),R)},B=function(t){return t.products.items};n(65);var J=function(t){var e=t.onClose,n=t.product,c=Object(r.useState)(Object(p.a)({},n)),a=Object(o.a)(c,2),u=a[0],i=a[1];Object(r.useEffect)((function(){i(Object(p.a)({},n))}),[n]);var s=function(t){var e=t.target,r=e.name,c=e.value;i(Object(p.a)(Object(p.a)({},n),{},Object(d.a)({},r,c)))},l=u.name,j=u.count,h=u.width,O=u.height,f=u.weight,v=u.comments;return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),W(u),e()},children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:l,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["count",Object(b.jsx)("input",{type:"text",name:"count",value:j,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["width",Object(b.jsx)("input",{type:"text",name:"width",value:h,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["height",Object(b.jsx)("input",{type:"text",name:"height",value:O,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["weight",Object(b.jsx)("input",{type:"text",name:"weight",value:f,onChange:s,required:!0})]}),Object(b.jsxs)("label",{children:["comments",Object(b.jsx)("input",{type:"textarea",name:"comments",value:v,onChange:s,required:!0})]}),Object(b.jsx)("button",{type:"submit",children:"Confirm"}),Object(b.jsx)("button",{type:"button",onClick:e,children:"Cancel"})]})},F=n(31),z=n.n(F),G=document.querySelector("#modal-root2");var H=function(t){var e=t.onClose,n=t.product,c=Object(i.b)();Object(r.useEffect)((function(){return window.addEventListener("keydown",u),function(){window.removeEventListener("keydown",u)}}));var u=function(t){"Escape"===t.code&&e()};return Object(a.createPortal)(Object(b.jsx)("div",{className:z.a.Overlay,onClick:function(t){t.currentTarget===t.target&&e()},children:Object(b.jsx)(J,{onSubmit:function(t){c(I(t))},onClose:e,product:n})}),G)},K={name:"",count:"",imageUrl:"/",width:"",height:"",weight:"",comments:""},Q=function(t){var e=t.products,n=t.deleteProd,c=Object(r.useState)(!1),a=Object(o.a)(c,2),u=a[0],s=a[1],l=Object(r.useState)(!1),j=Object(o.a)(l,2),d=j[0],h=j[1],O=Object(r.useState)(Object(p.a)({},K)),f=Object(o.a)(O,2),v=f[0],x=f[1],m=Object(i.b)();return Object(b.jsxs)("ul",{children:[e&&e.map((function(t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsxs)("p",{children:["Count: ",t.count]}),Object(b.jsxs)("p",{children:["width: ",t.width]}),Object(b.jsxs)("p",{children:["height: ",t.height]}),Object(b.jsxs)("p",{children:["weight: ",t.weight]}),Object(b.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"}),Object(b.jsx)("button",{type:"button",onClick:function(){P(t.id).then((function(t){return x(Object(p.a)({},t))})).then(h(!0))},children:"Edit"})]},t.id)})),u&&Object(b.jsx)(U,{onClose:function(){s(!1)}}),d&&Object(b.jsx)(H,{onClose:function(){h(!1),x(Object(p.a)({},K)),m(N())},product:v})]})};var X,Y=function(){var t=Object(i.c)(B),e=Object(i.b)(),n=Object(r.useState)(!1),c=Object(o.a)(n,2),a=c[0],u=c[1];return Object(r.useEffect)((function(){return e(N())}),[e]),Object(b.jsxs)(j,{children:[Object(b.jsx)("h2",{children:"Products"}),Object(b.jsx)("button",{type:"button",onClick:function(){u(!a)},children:"Add product"}),Object(b.jsx)(Q,{products:t,deleteProd:function(t){e(A(t)).then((function(){e(N())}))}}),a&&Object(b.jsx)(U,{onClose:function(){u(!1)}})]})},Z=n(14),$=(Object(y.b)("product/add",(function(t){return{payload:Object(p.a)({},t)}})),Object(y.b)("product/delete"),Object(y.b)("product/get"),Object(y.b)("product/getId"),Object(y.b)("product/edit"),n(10)),tt=Object(y.d)([],(X={},Object(d.a)(X,N.fulfilled,(function(t,e){return e.payload})),Object(d.a)(X,I.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(d.a)(X,A.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(d.a)(X,T.fulfilled,(function(t,e){return e.payload})),Object(d.a)(X,D.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),X)),et=Object($.b)({items:tt}),nt=Object(y.a)({reducer:{products:et},devTools:!1,middleware:function(t){return Object(Z.a)(t())}});u.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{store:nt,children:Object(b.jsx)(Y,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0c46582b.chunk.js.map