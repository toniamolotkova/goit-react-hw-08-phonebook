(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{164:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",btn:"ContactForm_btn__2Bpnz"}},165:function(t,e,n){t.exports={title:"Section_title__2S6oE"}},166:function(t,e,n){t.exports={item:"ContactsList_item__2O7n3",btn:"ContactsList_btn__3aoj_"}},167:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},275:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return J}));var a=n(112),r=n(0),c=n(164),s=n.n(c),u=n(12),i=n(17),o=n.n(i),l=n(26),b=n(20),p=n.n(b);n(53);function f(){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("./contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(o.a.mark((function t(e){var n,a,r,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,a=e.number,r={name:n,number:a},t.next=4,p.a.post("./contacts",r);case 4:return c=t.sent,s=c.data,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.delete("./contacts/".concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}p.a.defaults.baseURL="https://connections-api.herokuapp.com";var O=n(7),v=n(162),_=n(30),w=function(t){return t.contacts.filter},y=Object(_.a)([w,function(t){return t.contacts.items}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))})),k=n(23),g=n(1);var C=function(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)(""),b=Object(a.a)(i,2),p=b[0],f=b[1],j=Object(u.b)(),h=Object(u.c)(y),d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":f(a);break;default:return}},x=function(){c(""),f("")};return Object(g.jsxs)("form",{onSubmit:function(t){var e;(t.preventDefault(),h.find((function(t){return t.name===n})))?k.b.error("".concat(n," is already in contacts")):(j((e={name:n,number:p},function(){var t=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(O.b()),t.prev=1,t.next=4,m(e);case 4:a=t.sent,n(O.c(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(O.a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())),x())},className:s.a.form,children:[Object(g.jsxs)("label",{className:s.a.label,children:["Name",Object(g.jsx)("input",{className:s.a.input,type:"text",name:"name",value:n,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(g.jsxs)("label",{className:s.a.label,children:["Phone",Object(g.jsx)("input",{className:s.a.input,type:"tel",name:"number",value:p,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(g.jsxs)("button",{type:"submit",className:s.a.btn,children:["Add contact",Object(g.jsx)(v.b,{style:{marginLeft:10,width:25,height:25}})]})]})},N=n(165),F=n.n(N),L=function(t){var e=t.title,n=t.children;return Object(g.jsxs)("section",{className:F.a.section,children:[e&&Object(g.jsx)("h2",{className:F.a.title,children:e}),n]})},A=n(166),z=n.n(A),S=function(){var t=Object(u.c)(y),e=Object(u.b)(),n=function(t){return e(function(t){return function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.f()),e.prev=1,e.next=4,d(t);case 4:n(O.g(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(O.e(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(t))};return Object(r.useEffect)((function(){return e(function(){var t=Object(l.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O.i()),t.prev=1,t.next=4,f();case 4:n=t.sent,e(O.j(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(O.h(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[e]),Object(g.jsx)("ul",{className:z.a.list,children:t.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(g.jsxs)("li",{className:z.a.item,children:[Object(g.jsxs)("span",{children:[e," "]}),Object(g.jsx)("span",{children:a}),Object(g.jsxs)("button",{type:"button",onClick:function(){return n(r)},className:z.a.btn,children:["Delete",Object(g.jsx)(v.a,{style:{marginLeft:5,width:15,height:15}})]})]},r)}))})},D=n(167),Z=n.n(D),B=function(){var t=Object(u.c)((function(t){return w(t)})),e=Object(u.b)();return Object(g.jsxs)("label",{className:Z.a.label,children:["Find contacts by name:",Object(g.jsx)("input",{type:"text",value:t,onChange:function(t){return e(Object(O.d)(t.target.value))},className:Z.a.input,placeholder:"Fiona Holmse"})]})},J=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(L,{title:"Contacts",children:[Object(g.jsx)(B,{}),Object(g.jsx)(S,{})]})]})}}}]);
//# sourceMappingURL=4.58d15aee.chunk.js.map