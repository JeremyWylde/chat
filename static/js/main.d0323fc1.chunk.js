(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(43),s=a.n(c),u=a(6),l=a.n(u),o=a(10),m=a(3),i=(a(52),a(12)),p=a.n(i);var E=function(e){var t=e.onLogin,a=Object(n.useState)(""),c=Object(m.a)(a,2),s=c[0],u=c[1],i=Object(n.useState)(""),E=Object(m.a)(i,2),d=E[0],f=E[1],b=Object(n.useState)(!1),h=Object(m.a)(b,2),O=h[0],v=h[1],N=function(){var e=Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s&&d){e.next=2;break}return e.abrupt("return",alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f"));case 2:return a={chatId:s,userName:d},v(!0),e.next=6,p.a.post("https://beautiful-crater-lake-06500.herokuapp.com/rooms",a);case 6:t(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"join-block1"},r.a.createElement("input",{type:"text",placeholder:"Chat ID",value:s,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Name",value:d,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{onClick:N,disabled:O,className:"btn btn-success"},O?"Entering...":"Enter"))},d=a(45),f=a(4),b=function(e,t){switch(t.type){case"JOINED":return Object(f.a)(Object(f.a)({},e),{},{joined:!0,userName:t.payload.userName,chatId:t.payload.chatId});case"SET_USERS":return Object(f.a)(Object(f.a)({},e),{},{users:t.payload});case"NEW_MESSAGE":return Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[t.payload])});default:return e}},h=a(44),O=a.n(h)()("https://beautiful-crater-lake-06500.herokuapp.com");a(101);var v=function(e){var t=e.users,a=e.messages,n=e.userName,c=e.chatId,s=e.onAddMessage,u=r.a.useState(""),l=Object(m.a)(u,2),o=l[0],i=l[1],p=r.a.useRef(null);r.a.useEffect((function(){p.current.scroll(0,p.current.scrollHeight)}),[a]);var E=function(e){return e.userName===n?"message_my":"message"};return r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"chat-users"},"Chat:",r.a.createElement("b",null,c),r.a.createElement("hr",null),r.a.createElement("b",null,"Users (",t.length,"):"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:e+t},e)})))),r.a.createElement("div",{className:"chat-messages"},r.a.createElement("div",{ref:p,className:"messages"},a.map((function(e){return r.a.createElement("div",{key:e.text,className:E(e)},r.a.createElement("p",null,e.text),r.a.createElement("div",null,r.a.createElement("span",null,e.userName)))}))),r.a.createElement("form",null,r.a.createElement("textarea",{value:o,onChange:function(e){i(e.target.value)},className:"form-control",rows:"3"}),r.a.createElement("button",{onClick:function(){O.emit("ROOM:NEW_MESSAGE",{userName:n,chatId:c,text:o}),s({userName:n,text:o}),i("")},type:"button",className:"btn btn-primary"},"Send"))))};var N=function(){var e=Object(n.useReducer)(b,{joined:!1,chatId:null,userName:null,users:[],messages:[]}),t=Object(m.a)(e,2),a=t[0],c=t[1],s=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"JOINED",payload:t}),O.emit("ROOM:JOIN",t),e.next=4,p.a.get("https://beautiful-crater-lake-06500.herokuapp.com/rooms/".concat(t.chatId));case 4:a=e.sent,n=a.data,u(n.users);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){c({type:"SET_USERS",payload:e})},i=function(e){c({type:"NEW_MESSAGE",payload:e})};return Object(n.useEffect)((function(){O.on("ROOM:SET_USERS",u),O.on("ROOM:NEW_MESSAGE",(function(e){return i(e)}))}),[]),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"join-block"},a.joined?r.a.createElement(v,Object.assign({},a,{onAddMessage:i})):r.a.createElement(E,{onLogin:s})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},46:function(e,t,a){e.exports=a(102)},52:function(e,t,a){},98:function(e,t){}},[[46,1,2]]]);
//# sourceMappingURL=main.d0323fc1.chunk.js.map