(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);a(42);var n=a(19),r=a(0),o=a.n(r),c=a(15),l=a.n(c),u=a(39),m=a(12),i=a(64),s=a(65),d="ADD_FORM",E="REMOVE_FORM";var b=a(66),f=a(63),p=a(67),h=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{bg:"light",expand:"lg",className:"mb-3"},o.a.createElement(f.a,null,o.a.createElement(b.a.Brand,{href:"/"},"Tombotax"),o.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(p.a,{className:"mr-auto"},o.a.createElement(p.a.Link,{href:"/forms"},"Forms"))))),o.a.createElement(f.a,null,t))},v=Object(n.b)(function(e){return{formCount:e.count}},{addForm:function(e){return{type:d,payload:e}}})(function(e){return o.a.createElement(h,null,o.a.createElement(i.a,null,o.a.createElement(s.a,{xs:4},"Input Forms: ",e.formCount),o.a.createElement(s.a,{xs:4},o.a.createElement("button",{onClick:function(){return e.addForm(1)}},"Add Form"))))}),g=function(){return o.a.createElement(h,null,o.a.createElement(i.a,null,o.a.createElement(s.a,null,"Welcome to Tombotax!")))},w=function(){return o.a.createElement(u.a,null,o.a.createElement(m.a,{path:"/",exact:!0,component:g}),o.a.createElement(m.a,{path:"/forms",exact:!0,component:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(17),F=a(28),y={count:0};var O=Object(x.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(F.a)({},e,{count:e.count+t.payload});case E:return Object(F.a)({},e,{count:e.count-t.payload})}return e});O.subscribe(function(){return console.log("updated state: ",O.getState())}),l.a.render(o.a.createElement(n.a,{store:O},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.7e0d4ff0.chunk.js.map