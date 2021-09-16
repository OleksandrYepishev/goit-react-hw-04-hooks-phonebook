(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{27:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,s,u,d,b,p,l,m=t(0),x=t.n(m),h=t(8),j=t.n(h),f=t(15),g=t(7),O=t(29),w=t(9),v=t(10),y=t(11),C=t(12),k=t(16),S=t(14),I=t(2),z=t(3),A=z.a.form(a||(a=Object(I.a)(["\n  display: block;\n  outline: 1px solid gray;\n  max-width: 550px;\n  padding: 30px;\n  margin-top: 30px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  background-color: whitesmoke;\n"]))),J=z.a.label(r||(r=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n  font-size: 20px;\n"]))),N=z.a.input(i||(i=Object(I.a)(["\n  display: blcok;\n  height: 25px;\n  margin-top: 15px;\n  min-width: 300px;\n  margin-right: auto;\n"]))),D=z.a.button(o||(o=Object(I.a)(["\n  font-size: 15px;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  cursor: pointer;\n"]))),E=t(1),L=function(n){Object(k.a)(t,n);var e=Object(S.a)(t);function t(){var n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.nameInputId=Object(O.a)(),n.numberInputId=Object(O.a)(),n.handleChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(v.a)({},a,r))},n.handleSubmit=function(e){var t=n.state,a=t.name,r=t.number;e.preventDefault(),n.props.onSubmit(a,r),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(C.a)(t,[{key:"render",value:function(){return Object(E.jsxs)(A,{onSubmit:this.handleSubmit,children:[Object(E.jsxs)(J,{htmlFor:this.nameInputId,children:["Name",Object(E.jsx)(N,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(E.jsxs)(J,{htmlFor:this.numberInputId,children:["Number",Object(E.jsx)(N,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(E.jsx)(D,{type:"submit",children:"Add contact"})]})}}]),t}(m.Component),F=z.a.ul(c||(c=Object(I.a)(["\n  list-style: none;\n  outline: 1px solid gray;\n  padding: 30px;\n  max-width: 550px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  font-size: 25px;\n  font-weight: normal;\n  background-color: whitesmoke;\n"]))),Z=z.a.li(s||(s=Object(I.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.25fr;\n  margin-bottom: 10px;\n  font-style: italic;\n"]))),q=z.a.button(u||(u=Object(I.a)(["\n  padding: 5px;\n  border-radius: 7px;\n  cursor: pointer;\n"]))),B=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(E.jsx)(F,{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(E.jsxs)(Z,{children:[Object(E.jsxs)("span",{children:[a,":"]})," ",Object(E.jsx)("span",{children:r}),Object(E.jsx)(q,{type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})},M=z.a.label(d||(d=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  font-size: 20px;\n  max-width: 550px;\n  font-weight: normal;\n  outline: 1px solid gray;\n  padding: 30px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  background-color: whitesmoke;\n"]))),R=z.a.input(b||(b=Object(I.a)(["\n  height: 25px;\n  margin-top: 15px;\n  max-width: 250px;\n"]))),T=function(n){var e=n.value,t=n.onChange;return Object(E.jsxs)(M,{children:["Find contacts by name",Object(E.jsx)(R,{type:"text",value:e,onChange:t})]})},H=z.a.div(p||(p=Object(I.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 40px 15px 0 15px;\n"]))),K=function(n){var e=n.children;return Object(E.jsx)(H,{children:e})},P=z.a.h1(l||(l=Object(I.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),$=function(){var n=Object(m.useState)(w),e=Object(g.a)(n,2),t=e[0],a=e[1],r=Object(m.useState)(""),i=Object(g.a)(r,2),o=i[0],c=i[1],s=Object(m.useRef)(!0);Object(m.useEffect)((function(){var n=localStorage.getItem("contacts"),e=JSON.parse(n);e&&a(e)}),[]),Object(m.useEffect)((function(){s.current?s.current=!1:localStorage.setItem("contacts",JSON.stringify(t))}),[t]);var u=t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())}));return Object(E.jsxs)(K,{children:[Object(E.jsxs)(P,{children:["Phonebook",Object(E.jsx)(L,{onSubmit:function(n,e){var r={id:Object(O.a)(),name:n,number:e};t.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts")):a((function(n){return[r].concat(Object(f.a)(n))}))}})]}),Object(E.jsxs)(P,{children:["Contacts",Object(E.jsx)(T,{value:o,onChange:function(n){c(n.currentTarget.value)}}),Object(E.jsx)(B,{contacts:u,onDeleteContact:function(n){return a((function(e){return e.filter((function(e){return e.id!==n}))}))}})]})]})};t(27);j.a.render(Object(E.jsx)(x.a.StrictMode,{children:Object(E.jsx)($,{})}),document.getElementById("root"))},9:function(n){n.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')}},[[28,1,2]]]);
//# sourceMappingURL=main.cf5fe757.chunk.js.map