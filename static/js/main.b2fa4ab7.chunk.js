(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,a){e.exports=a.p+"static/media/homeText.5225d8d2.md"},225:function(e,t,a){e.exports=a(552)},244:function(e,t,a){},246:function(e,t,a){},327:function(e,t,a){},513:function(e,t,a){},515:function(e,t,a){},517:function(e,t,a){},519:function(e,t,a){},521:function(e,t,a){},524:function(e,t,a){},541:function(e,t,a){},543:function(e,t,a){},545:function(e,t,a){},549:function(e,t,a){},552:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(34),i=a.n(c),s=a(558),l=a(38),o=a(212),u=a(17),m=a(9),p=a(10),h=a(12),d=a(11),f=a(13),g=a(83),v=a.n(g),b=a(560),E=a(215),y=a(559),k=a(87),O=a(557),j=function(e){var t=e.component,a=e.authenticated,n=Object(k.a)(e,["component","authenticated"]);return r.a.createElement(E.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(O.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},w=a(556),C=a(3),S=a(6),N=a.n(S),x=a(14),A="https://application-manager.herokuapp.com";function D(e,t,a){return I.apply(this,arguments)}function I(){return(I=Object(x.a)(N.a.mark(function e(t,a,n){var r,c,i,s,l,o,u=arguments;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>3&&void 0!==u[3]&&u[3],c="".concat(A).concat(a),i={method:t,headers:{}},n&&!r&&(i.body=JSON.stringify(n),i.headers["content-type"]="application/json"),n&&r&&(i.body=n),(s=window.localStorage.getItem("token"))&&(i.headers.Authorization="Bearer ".concat(s)),e.prev=7,e.next=10,fetch(c,i);case 10:l=e.sent,e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(7),console.error("Error fetching",e.t0),e.abrupt("return",{status:500,result:{errors:[{message:"Villa vi\xf0 a\xf0 s\xe6kja g\xf6gn"}]}});case 17:if(204!==l.status){e.next=19;break}return e.abrupt("return",{status:l.status,result:null});case 19:return e.next=21,l.json();case 21:if(o=e.sent,401!==l.status||!o.error||!s){e.next=27;break}throw window.localStorage.removeItem("token"),window.localStorage.removeItem("user"),window.location="/login?tokenExpired",Error("token expired");case 27:return e.abrupt("return",{status:l.status,result:o});case 28:case"end":return e.stop()}},e,this,[[7,13]])}))).apply(this,arguments)}var F={get:D.bind(null,"GET"),post:D.bind(null,"POST"),patch:D.bind(null,"PATCH"),upload:D.bind(null,"POST"),delete:D.bind(null,"DELETE")},T="LOGIN_REQUEST",P="LOGIN_SUCCESS",_="LOGIN_FAILURE",U="LOGIN_LOGOUT";function R(e,t){return{type:P,isFetching:!1,isAuthenticated:!0,user:e,token:t,message:null}}var B="UPDATE_REQUEST",L="UPDATE_FAILURE";var M=function(e,t){return function(){var a=Object(x.a)(N.a.mark(function a(n){var r,c,i,s;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:T,isFetching:!0,isAuthenticated:!1,message:null}),a.next=3,F.post("/login",{username:e,password:t});case 3:(r=a.sent).status>=400&&n((l=r.result.error||"Villa",{type:_,isFetching:!1,isAuthenticated:!1,message:l})),200===r.status&&(console.log(r.result),c=r.result,i=c.token,s=c.user,localStorage.setItem("token",i),localStorage.setItem("user",JSON.stringify(s)),n(R(s,i)));case 6:case"end":return a.stop()}var l},a,this)}));return function(e){return a.apply(this,arguments)}}()},G=function(){return function(){var e=Object(x.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),t({type:U,isFetching:!1,isAuthenticated:!1,user:null});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},V=(a(244),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){(0,a.props.dispatch)(G())},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=(this.props.auth.user||{}).name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.t,{className:"user__nav-item"},r.a.createElement("p",null,"Skr\xe1\xf0/ur inn sem: ",r.a.createElement("strong",null,e))),r.a.createElement(C.t,{className:"user__nav-item"},r.a.createElement(C.b,{color:"danger",size:"sm",onClick:this.handleLogout},"\xdatskr\xe1")))}}]),t}(n.Component)),z=Object(u.b)(function(e){return{auth:e.auth}})(V),J=(a(246),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.auth;return r.a.createElement(C.v,{color:"dark",dark:!0,expand:"md"},r.a.createElement(C.w,{tag:w.a,to:"/"},"Ums\xf3knarferli"),r.a.createElement(C.x,{onClick:this.toggle}),r.a.createElement(C.i,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(C.s,{navbar:!0},r.a.createElement(C.t,null,r.a.createElement(C.u,{tag:w.a,to:"/diagram"},"Diagram")),r.a.createElement(C.t,null,r.a.createElement(C.u,{tag:w.a,to:"/new"},"N\xfd ums\xf3kn")),r.a.createElement(C.t,null,r.a.createElement(C.u,{tag:w.a,to:"/applications"},"Breyta ums\xf3knir"))),r.a.createElement(C.s,{className:"ml-auto",navbar:!0},e.isAuthenticated&&r.a.createElement(z,null),!e.isAuthenticated&&r.a.createElement(C.t,null,r.a.createElement(C.u,{tag:w.a,to:"/login"},r.a.createElement(C.b,{color:"primary"},"Innskr\xe1ning"))))))}}]),t}(n.Component)),W=Object(u.b)(function(e){return{auth:e.auth}},null,null,{pure:!1})(J),Y=a(218),$=a.n(Y),H=(a(327),a(219)),K=a.n(H),q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={terms:null},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(N.a.mark(function e(){var t,a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(K.a);case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,this.setState({terms:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.terms;return r.a.createElement("div",{className:"home"},r.a.createElement($.a,{source:e}))}}]),t}(n.Component),Q=a(217),X=a(142),Z=a(220),ee=a(23),te=a.n(ee);function ae(e){return e.replace(/\s/g,"-")}a(476),a(478);var ne=a(221),re=(a(513),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"circle"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader"})))))}}]),t}(n.Component)),ce=(a(515),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectionRange:null,minDate:null,maxDate:null},a.handler=function(e){var t=e.selectionRange;a.setState({selectionRange:t})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data.map(function(e){return new Date(e.date)}),t=new Date(Math.min.apply(Math,Object(X.a)(e))),a=new Date(Math.max.apply(Math,Object(X.a)(e))),n={startDate:t,endDate:a,key:"selectionRange"};this.setState({minDate:t,maxDate:a,selectionRange:n})}},{key:"noApplications",value:function(e){return r.a.createElement("div",{className:"diagram-wrapper"},r.a.createElement("h2",{className:"diagram__no-data"},"Engar ums\xf3knir"),this.dateRangePicker(e))}},{key:"dateRangePicker",value:function(e){return r.a.createElement(ne.DateRangePicker,{ranges:[e],minDate:new Date(this.state.minDate),maxDate:new Date(this.state.maxDate),onChange:this.handler,months:2,direction:"horizontal"})}},{key:"render",value:function(){var e=this.state.selectionRange;if(!e)return r.a.createElement(re,null);var t=this.props.data,a=e.startDate,n=e.endDate,c=t.filter(function(e){return new Date(e.date)>=a&&new Date(e.date)<=n});if(0===c.length)return this.noApplications(e);var i=function(e){var t=te.a.uniqBy(e,function(e){return e.company}),a=te.a.chain(t).map(function(t){var a=t.company,n=te.a.countBy(e,function(e){var a=e.company,n=e.posName;return a===t.company?n:null});return delete n.null,{source:a,targets:n}}).map(function(e){return te.a.map(e.targets,function(t,a){return{source:ae(e.source),target:ae(a),value:t}})}).flatten().value(),n=te.a.chain(e).map(function(e){return e.posName}).union().map(function(e){return{id:ae(e),name:ae(e),label:e}}).value(),r=te.a.chain(e).map(function(e){return[e.posName,e.process[0]]}).countBy().map(function(e,t){var a=t.split(",");return{source:ae(a[0]),target:ae(a[1]),value:e}}).value(),c=te.a.chain(e).filter(function(e){return e.process.length>1}).map(function(e){return function(e){var t=[];return e.forEach(function(a,n){n<e.length-1&&t.push([a,e[n+1]])}),t}(e.process)}).flatten().countBy().map(function(e,t){var a=t.split(",");return{source:ae(a[0]),target:ae(a[1]),value:e}}).value(),i=te.a.chain(e).map(function(e){return e.process}).flatten().union().map(function(e){return{id:ae(e),name:ae(e),label:e}}).value(),s=te.a.map(t,function(e){var t=e.company;return{id:ae(t),name:ae(t),label:t}});return{nodes:te.a.concat(s,n,i),links:te.a.concat(a,r,c)}}(c),s=i.nodes,l=i.links;return r.a.createElement("div",{className:"diagram-component"},r.a.createElement("div",{className:"diagram-wrapper"},r.a.createElement(Z.ResponsiveSankey,{data:{nodes:s,links:l},margin:{top:40,right:60,bottom:40,left:60},align:"justify",colors:"category10",nodeOpacity:1,nodeWidth:18,linkHoverOpacity:.5,nodeBorderColor:"inherit:darker(0.8)",labelPosition:"outside",labelOrientation:"vertical",labelPadding:16,labelTextColor:"inherit:darker(1)",enableLabels:!0,labelFormat:function(e){return s.find(function(t){return t.id===e}).label},motionStiffness:120,motionDamping:11})),this.dateRangePicker(e))}}]),t}(n.Component)),ie=(a(517),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchApplications()}},{key:"fetchApplications",value:function(){var e=Object(x.a)(N.a.mark(function e(){var t,a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/applications",e.prev=1,e.next=4,F.get("/applications");case 4:t=e.sent,a=t.result,this.setState({loading:!1,applications:a}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Error fetching applications",e.t0),this.setState({error:!0,loading:!1});case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.applications,a=e.loading,n=e.error;return a?r.a.createElement(re,null):n?r.a.createElement("h1",null,"An error occurred"):r.a.createElement("div",{className:"diagram"},t&&t.length>0&&r.a.createElement(ce,{data:t}),(!t||0===t.length)&&r.a.createElement("div",{className:"no-applications"},r.a.createElement("h2",null,"Engar ums\xf3knir \xed gagnagrunni"),r.a.createElement("h3",null,"Til a\xf0 nota t\xf6flu \xfearf a\xf0 vera me\xf0 a.m.k eina ums\xf3kn \xed gagnagrunni"),r.a.createElement(Q.a,{to:"".concat("/umsoknarferli","/new")},r.a.createElement(C.b,{color:"primary",size:"lg"},"N\xfd ums\xf3kn"))))}}]),t}(n.Component)),se=Object(u.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}})(ie),le=a(18),oe=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.errors;return 0===e.length?null:r.a.createElement("ul",{className:this.props.className},e.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("label",{htmlFor:e.field},e.message))}))}}]),t}(n.Component);function ue(e){var t=e.id,a=e.valid,n=e.label,c=e.help,i=Object(k.a)(e,["id","valid","label","help"]);return r.a.createElement(C.l,{id:t},r.a.createElement(C.n,null,n),r.a.createElement(C.m,Object.assign({},i,{valid:a,invalid:null!==a&&!a})),c&&r.a.createElement(C.k,null,c))}var me=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",name:"",loading:!1,registered:!1,errors:[]},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;n&&a.setState(Object(le.a)({},n,r))},a.handleSubmit=function(){var e=Object(x.a)(N.a.mark(function e(t){var n,r,c,i,s,l;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),n=a.state,r=n.username,c=n.password,i=n.name,e.next=5,F.post("/register",{username:r,password:c,name:i});case 5:(s=e.sent).status>=400&&(l=s.result.errors||[],a.setState({loading:!1,errors:l})),201===s.status&&a.setState({loading:!1,registered:!0});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.name,c=e.loading,i=e.errors;return e.registered?r.a.createElement("div",null,r.a.createElement("h2",null,"N\xfdskr\xe1ning t\xf3kst!"),r.a.createElement("p",null,r.a.createElement("a",{href:"/login"},"Innskr\xe1ning"))):r.a.createElement("div",{className:"register"},r.a.createElement(C.j,null,r.a.createElement(C.y,null,r.a.createElement(C.h,{xs:12,md:4},r.a.createElement("h2",null,"N\xfdskr\xe1ning"),r.a.createElement(oe,{errors:i}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ue,{id:"formControlsUsername",type:"text",label:"Username",name:"username",autoFocus:!0,valid:0===i.length?null:!i.find(function(e){return"username"===e.field}),onChange:this.handleInputChange,value:t}),r.a.createElement(ue,{id:"formControlsPassword",type:"password",label:"Password",name:"password",valid:0===i.length?null:!i.find(function(e){return"password"===e.field}),onChange:this.handleInputChange,value:a}),r.a.createElement(ue,{id:"formControlsPassword",type:"text",label:"Name",name:"name",valid:0===i.length?null:!i.find(function(e){return"name"===e.field}),onChange:this.handleInputChange,value:n}),r.a.createElement(C.b,{type:"submit",disabled:c},"N\xfdskr\xe1")),r.a.createElement("p",null,r.a.createElement(Q.a,{className:"login__link",to:"".concat("/umsoknarferli","/login")},"Innskr\xe1ning"))))))}}]),t}(n.Component),pe=Object(u.b)(function(e){return{authenticated:e.auth.authenticated}})(me),he=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",validationState:null},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;n&&a.setState(Object(le.a)({},n,r))},a.handleSubmit=function(){var e=Object(x.a)(N.a.mark(function e(t){var n,r,c,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=a.props.dispatch,r=a.state,c=r.username,i=r.password,n(M(c,i));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleLogout=function(e){(0,a.props.dispatch)(G())},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=this.props,c=n.location,i=n.isFetching,s=n.isAuthenticated,l=n.message,o=c.search.indexOf("tokenExpired")>=0;if(s)try{var u=c.state.from.pathname;return r.a.createElement(O.a,{to:u})}catch(m){return r.a.createElement(O.a,{to:"/"})}return r.a.createElement("div",{className:"login"},r.a.createElement(C.j,null,r.a.createElement(C.y,null,r.a.createElement(C.h,{xs:12,md:4},r.a.createElement("h2",null,"Innskr\xe1ning"),o&&r.a.createElement("p",null,"Innskr\xe1ning er \xfatrunnin"),l&&r.a.createElement("p",{className:"login__error"},l),i&&r.a.createElement("p",{className:"login__message"},"Skr\xe1i inn ",r.a.createElement("em",null,t),"..."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ue,{id:"formControlsUsername",type:"text",label:"Username",name:"username",autoFocus:!0,valid:null,onChange:this.handleInputChange,value:t}),r.a.createElement(ue,{id:"formControlsPassword",type:"password",label:"Password",name:"password",valid:null,onChange:this.handleInputChange,value:a}),r.a.createElement(C.b,{type:"submit",disabled:i},"Innskr\xe1")),r.a.createElement("p",null,r.a.createElement(Q.a,{className:"login__link",to:"/register"},"N\xfdskr\xe1ning"))))))}}]),t}(n.Component),de=Object(u.b)(function(e){return{isFetching:e.auth.isFetching,isAuthenticated:e.auth.isAuthenticated,message:e.auth.message}})(he),fe=(a(519),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={history:[],step:"start",process:[],finished:!1},a.steps={start:[{value:"done",label:"Bi\xf0 athugun"},{value:"vidtal",label:"Vi\xf0tal"},{value:"done",label:"Neitun"}],vidtal:[{value:"done",label:"Neitun"},{value:"aVidtal",label:"Anna\xf0 vi\xf0tal"},{value:"done",label:"Bo\xf0 \xed starf"}],aVidtal:[{value:"done",label:"Neitun"},{value:"done",label:"Bo\xf0 \xed starf"}]},a.finish=function(e){var t=a.props,n=t.finish,r=t.name;n(a.state.process,r),a.setState({finished:!0})},a.redo=function(e){a.setState({finished:!1})},a.next=function(e){var t=e.target,n=t.value,r=t.textContent,c=a.state,i=c.step,s=c.process,l=c.history;s.push(r),l.push(i),a.setState({step:n,process:s,history:l})},a.previous=function(e){var t=a.state,n=t.process,r=t.history;n.pop();var c=r.pop();a.setState({process:n,history:r,step:c})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.process;if(e){var t=["start","vidtal","aVidtal"],a=e.length;a<3&&t.splice(a),this.setState({process:e,history:t,step:"done",finished:!0})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.step,n=t.process,c=t.finished,i=this.props.errors,s=void 0===i?[]:i,l=this.steps[a],o="";return s.length>0&&(o=s.find(function(e){return"process"===e.field})?"error":"success"),r.a.createElement("div",{className:"application-process"},r.a.createElement(C.d,{className:"history ".concat(o)},r.a.createElement(C.e,null,n.length>0&&n.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t+e},r.a.createElement("p",null,e),t!==n.length-1&&r.a.createElement("p",null,"\u2192"))}))),l&&!c&&r.a.createElement(C.c,{className:"process-options"},l.map(function(t){var a=t.value,n=t.label;return r.a.createElement(C.b,{key:n,onClick:e.next,value:a},n)})),"start"!==a&&!c&&r.a.createElement("div",{className:"process-operation"},r.a.createElement(C.b,{color:"danger",onClick:this.previous},"Til baka"),r.a.createElement(C.b,{color:"success",onClick:this.finish},"Kl\xe1ra")),c&&r.a.createElement("div",{className:"process-operation"},r.a.createElement(C.b,{color:"warning",onClick:this.redo},"Breyta")))}}]),t}(n.Component)),ge=(a(521),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={company:"",posName:"",process:[],date:"",loading:!1,registered:!1,errors:[]},a.timerID=null,a.finishState=function(e){a.setState({process:e})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;n&&a.setState(Object(le.a)({},n,r))},a.handleSubmit=function(){var e=Object(x.a)(N.a.mark(function e(t){var n,r,c,i,s,l,o;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0}),n=a.state,r=n.company,c=n.posName,i=n.process,s=n.date,e.next=5,F.post("/applications",{company:r,posName:c,process:i,date:s});case 5:(l=e.sent).status>=400&&(o=l.result.errors||[],a.setState({loading:!1,errors:o})),201===l.status&&(a.setState({loading:!1,registered:!0}),a.timerID=setTimeout(function(){return a.setState({registered:!1})},4e3));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state,t=e.company,a=e.posName,n=e.loading,c=e.errors,i=e.registered,s=e.date;return r.a.createElement("div",{className:"register"},i&&r.a.createElement(C.a,{color:"success"},"T\xf3kst a\xf0 vista ums\xf3kn \xed gagnagrunn"),r.a.createElement(C.j,null,r.a.createElement(C.y,null,r.a.createElement(C.h,{xs:12,md:6},r.a.createElement("h2",null,"N\xfd ums\xf3kn"),r.a.createElement(oe,{errors:c}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ue,{id:"formControlsCompany",type:"text",label:"Fyrirt\xe6ki",name:"company",autoFocus:!0,valid:0===c.length?null:!c.find(function(e){return"company"===e.field}),onChange:this.handleInputChange,value:t}),r.a.createElement(ue,{id:"formControlsPosName",type:"text",label:"St\xf6\xf0uheiti",name:"posName",valid:0===c.length?null:!c.find(function(e){return"posName"===e.field}),onChange:this.handleInputChange,value:a}),r.a.createElement(ue,{id:"formControlsDate",type:"date",label:"Dagsetning",name:"date",valid:0===c.length?null:!c.find(function(e){return"date"===e.field}),onChange:this.handleInputChange,value:s}),r.a.createElement(C.l,{id:"formControlsState"},r.a.createElement(C.n,null,"Ferli"),r.a.createElement(fe,{finish:this.finishState,errors:c})),r.a.createElement(C.b,{type:"submit",color:"primary",disabled:n},"Senda ums\xf3kn"))))))}}]),t}(n.Component)),ve=a(51),be=a(88),Ee=a.n(be),ye=(a(524),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={display:!0},a.displayTimer=null,a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.display,a=this.props.state,n="circle-loader",c="checkmark error";switch(void 0===a?"false":a){case"true":t||this.setState({display:!0}),clearTimeout(this.displayTimer),this.displayTimer=setTimeout(function(){e.setState({display:!1})},1e3);break;case"done":if(!t)return null;n+=" load-complete",c+="draw checkmark-display";break;case"failed":clearTimeout(this.displayTimer),n+=" load-error",c+=" checkmark-display";break;default:return null}return r.a.createElement("div",{className:n},r.a.createElement("div",{className:c}))}}]),t}(n.Component)),ke=a(222),Oe=a.n(ke),je=a(43),we=a.n(je),Ce=a(223),Se=a.n(Ce),Ne=(a(538),a(539),a(541),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,deleteApplication:null},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;if(n){var c=n.split("."),i=Object(ve.a)(c,2),s=i[0],l=i[1],o=a.state.applications;a.setState({applications:Ee()(o,Object(le.a)({},s,Object(le.a)({},l,{$set:r})))})}},a.handleEnter=function(e){if("Enter"===e.key){e.preventDefault();var t=e.target,n=t.name,r=t.value,c=n.split("."),i=Object(ve.a)(c,2),s=i[0],l=i[1];a.patch(s,Object(le.a)({},l,r))}},a.handleDayChange=function(){var e=Object(x.a)(N.a.mark(function e(t,n,r){var c,i,s,l,o,u,m;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:c=r.props.name,i=c.split("."),s=Object(ve.a)(i,2),l=s[0],o=s[1],u=Object(je.formatDate)(t,"YYYY-MM-DD"),m=a.state.applications,a.setState({applications:Ee()(m,Object(le.a)({},l,Object(le.a)({},o,{$set:u})))}),a.patch(l,{date:u});case 6:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.patch=function(){var e=Object(x.a)(N.a.mark(function e(t,n){var r,c;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/applications/".concat(t),e.prev=1,(c=a.state.patching)[t]="true",a.setState({patching:c}),e.next=7,F.patch(r,n);case 7:e.sent.status>=400?c[t]="failed":c[t]="done",a.setState({patching:c}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Error patching applications",e.t0),a.setState({error:!0});case 16:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t,a){return e.apply(this,arguments)}}(),a.deleteClick=function(e){a.setState({deleteApplication:e})},a.deleteConfirm=Object(x.a)(N.a.mark(function e(){var t,n,r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.deleteApplication,n="/applications/".concat(t),e.prev=2,e.next=5,F.delete(n);case 5:204===e.sent.status&&((r=a.state.applications).splice(t,1),a.setState({applications:r})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error patching applications",e.t0),a.setState({error:!0});case 13:return e.prev=13,a.setState({deleteApplication:null}),e.finish(13);case 16:case"end":return e.stop()}},e,this,[[2,9,13,16]])})),a.deleteCancel=function(){a.setState({deleteApplication:null})},a.finishProcess=function(e,t){var n=t.split("."),r=Object(ve.a)(n,2),c=r[0],i=r[1],s=a.state.applications;a.setState({applications:Ee()(s,Object(le.a)({},c,Object(le.a)({},i,{$set:e})))}),a.patch(c,{process:e})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchApplications()}},{key:"fetchApplications",value:function(){var e=Object(x.a)(N.a.mark(function e(){var t,a,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/applications",e.prev=1,e.next=4,F.get("/applications");case 4:t=e.sent,a=t.result,n=a.map(function(){return{state:"false",timeOut:null}}),this.setState({loading:!1,applications:a,patching:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error fetching applications",e.t0),this.setState({error:!0,loading:!1});case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.applications,n=t.loading,c=t.error,i=t.deleteApplication,s=t.patching;if(n)return r.a.createElement(re,null);if(c)return r.a.createElement("h1",null,"An error occurred");if(!a||0===a.length)return r.a.createElement("div",{className:"no-applications"},r.a.createElement("h2",null,"Engar ums\xf3knir \xed gagnagrunni"),r.a.createElement("h3",null,"Til a\xf0 nota t\xf6flu \xfearf a\xf0 vera me\xf0 a.m.k eina ums\xf3kn \xed gagnagrunni"),r.a.createElement(Q.a,{to:"".concat("/umsoknarferli","/new")},r.a.createElement(C.b,{color:"primary",size:"lg"},"N\xfd ums\xf3kn")));var l=a.map(function(e,t){return{application:e,index:t}});return l.sort(function(e,t){var a=e.application,n=t.application;return Date.parse(n.date)-Date.parse(a.date)}),r.a.createElement(C.j,{className:"applications-page"},r.a.createElement(C.o,{isOpen:!!Number.isInteger(i),toggle:this.deleteConfirm},r.a.createElement(C.r,{toggle:this.deleteCancel},"Ey\xf0a ums\xf3kn"),r.a.createElement(C.p,null,"Ertu viss um a\xf0 \xfe\xfa viljir ey\xf0a ums\xf3kninni?"),r.a.createElement(C.q,null,r.a.createElement(C.b,{color:"danger",onClick:this.deleteConfirm},"Sta\xf0festa"),r.a.createElement(C.b,{onClick:this.deleteCancel},"H\xe6tta vi\xf0"))),r.a.createElement(C.y,null,l.map(function(t){var a=t.index,n=t.application;return r.a.createElement(C.h,{key:a,className:"application-col",md:12,lg:6,xl:4},r.a.createElement("form",{id:a},r.a.createElement(C.d,{className:"application-section"},r.a.createElement(C.g,null,r.a.createElement("h4",null,r.a.createElement(C.m,{type:"text",name:"".concat(a,".company"),value:n.company,onKeyPress:e.handleEnter,onChange:e.handleInputChange}))),r.a.createElement(C.e,null,r.a.createElement(C.y,null,r.a.createElement(C.h,{xs:6},r.a.createElement(Se.a,{name:"".concat(a,".posName"),className:"form-control",value:n.posName,onKeyPress:e.handleEnter,onChange:e.handleInputChange})),r.a.createElement(C.h,{xs:6},r.a.createElement(Oe.a,{name:"".concat(a,".date"),value:Object(je.formatDate)(n.date,"ll","is"),formatDate:je.formatDate,parseDate:je.parseDate,format:"ll",onDayChange:e.handleDayChange,dayPickerProps:{localeUtils:we.a,locale:"is"}})))),r.a.createElement(C.f,{onClick:e.processClick},r.a.createElement(fe,{name:"".concat(a,".process"),process:n.process,finish:e.finishProcess})),r.a.createElement("span",{tabIndex:"0",name:"".concat(a,".delete"),className:"delete",onClick:function(){return e.deleteClick(a)}}))),r.a.createElement(ye,{state:s[a]}))})))}}]),t}(n.Component)),xe=Object(u.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}})(Ne),Ae=(a(543),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement(v.a,{title:"S\xed\xf0a fannst ekki"}),r.a.createElement("h1",null,"S\xed\xf0a fannst ekki"))}}]),t}(n.Component)),De=(a(545),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return r.a.createElement("main",{className:"main"},r.a.createElement(v.a,{defaultTitle:"Ums\xf3knarferli",titleTemplate:"%s - Ums\xf3knarferli"}),r.a.createElement(W,null),r.a.createElement("div",{className:"main__content"},r.a.createElement(b.a,{location:this.props.location},r.a.createElement(E.a,{path:"/",exact:!0,component:q}),r.a.createElement(j,{path:"/diagram",exact:!0,authenticated:e,component:se}),r.a.createElement(E.a,{path:"/register",exact:!0,component:pe}),r.a.createElement(E.a,{path:"/login",exact:!0,component:de}),r.a.createElement(j,{path:"/new",exact:!0,authenticated:e,component:ge}),r.a.createElement(j,{path:"/applications",exact:!0,authenticated:e,component:xe}),r.a.createElement(E.a,{component:Ae}))))}}]),t}(n.Component)),Ie=Object(y.a)(Object(u.b)(function(e){return{auth:e.auth}})(De)),Fe=a(35),Te={isFetching:!1,isAuthenticated:!!localStorage.getItem("token"),user:JSON.parse(localStorage.getItem("user")||"{}")},Pe=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(Fe.a)({},e,{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated,message:t.message});case P:return Object(Fe.a)({},e,{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated,user:t.user,message:t.message});case _:return Object(Fe.a)({},e,{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated,message:t.message});case U:return Object(Fe.a)({},e,{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated,user:null});case B:return Object(Fe.a)({},e,{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated,username:t.name});case"UPDATE_SUCCESS":return Object(Fe.a)({},e,{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated,user:t.user,message:t.message});case L:return Object(Fe.a)({},e,{isFetching:t.isFetching,isAuthenticated:t.isAuthenticated,message:t.message});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(547),a(549);var _e=Object(l.d)(Pe,Object(l.a)(o.a));i.a.render(r.a.createElement(u.a,{store:_e},r.a.createElement(s.a,{basename:"/umsoknarferli"},r.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[225,2,1]]]);
//# sourceMappingURL=main.b2fa4ab7.chunk.js.map