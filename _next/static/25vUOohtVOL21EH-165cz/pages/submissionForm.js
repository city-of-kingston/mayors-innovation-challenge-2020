(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"33Jr":function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return p});a("I7wR");var o,r=a("17x9"),n=a.n(r);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=o),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}var s={};function l(e){s[e]||("undefined"!==typeof console&&console.error(e),s[e]=!0)}var i=window.Element||function(){};n.a.oneOfType([n.a.string,n.a.func,function(e,t,a){if(!(e[t]instanceof i))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},n.a.shape({current:n.a.any})]);var p=n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func}),n.a.arrayOf(n.a.oneOfType([n.a.func,n.a.string,n.a.shape({$$typeof:n.a.symbol,render:n.a.func})]))]);!window.document||window.document.createElement},BLzl:function(e,t,a){"use strict";var o=a("wx14"),r=a("zLVn"),n=a("q1tI"),c=a.n(n),s=a("17x9"),l=a.n(s),i=a("TSYQ"),p=a.n(i),d=a("33Jr"),b={tag:d.b,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},u=function(e){var t=e.className,a=e.cssModule,n=e.color,s=e.body,l=e.inverse,i=e.outline,b=e.tag,u=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),y=Object(d.a)(p()(t,"card",!!l&&"text-white",!!s&&"card-body",!!n&&(i?"border":"bg")+"-"+n),a);return c.a.createElement(b,Object(o.a)({},m,{className:y,ref:u}))};u.propTypes=b,u.defaultProps={tag:"div"},t.a=u},ChEw:function(e,t,a){"use strict";var o=a("wx14"),r=a("zLVn"),n=a("q1tI"),c=a.n(n),s=a("17x9"),l=a.n(s),i=a("TSYQ"),p=a.n(i),d=a("33Jr"),b={tag:d.b,className:l.a.string,cssModule:l.a.object},u=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.a)(p()(t,"card-title"),a);return c.a.createElement(n,Object(o.a)({},s,{className:l}))};u.propTypes=b,u.defaultProps={tag:"div"},t.a=u},"G/Uc":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/submissionForm",function(){var e=a("zCe9");return{page:e.default||e}}])},I7wR:function(e,t,a){(function(t){var a="[object AsyncFunction]",o="[object Function]",r="[object GeneratorFunction]",n="[object Null]",c="[object Proxy]",s="[object Undefined]",l="object"==typeof t&&t&&t.Object===Object&&t,i="object"==typeof self&&self&&self.Object===Object&&self,p=l||i||Function("return this")(),d=Object.prototype,b=d.hasOwnProperty,u=d.toString,m=p.Symbol,y=m?m.toStringTag:void 0;function f(e){return null==e?void 0===e?s:n:y&&y in Object(e)?function(e){var t=b.call(e,y),a=e[y];try{e[y]=void 0;var o=!0}catch(n){}var r=u.call(e);o&&(t?e[y]=a:delete e[y]);return r}(e):function(e){return u.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=f(e);return t==o||t==r||t==a||t==c}}).call(this,a("yLpj"))},JX7q:function(e,t,a){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",function(){return o})},TSYQ:function(e,t,a){var o;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&e.push(c)}else if("object"===n)for(var s in o)a.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},dI71:function(e,t,a){"use strict";function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.d(t,"a",function(){return o})},sOKU:function(e,t,a){"use strict";var o=a("wx14"),r=a("zLVn"),n=a("JX7q"),c=a("dI71"),s=a("q1tI"),l=a.n(s),i=a("17x9"),p=a.n(i),d=a("TSYQ"),b=a.n(d),u=a("33Jr"),m={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:u.b,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,p=e.color,d=e.outline,m=e.size,y=e.tag,f=e.innerRef,j=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof j.children&&(j.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(d?"-outline":"")+"-"+p,x=Object(u.a)(b()(c,{close:s},s||"btn",s||O,!!m&&"btn-"+m,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),i);j.href&&"button"===y&&(y="a");var g=s?"Close":null;return l.a.createElement(y,Object(o.a)({type:"button"===y&&j.onClick?"button":void 0},j,{className:x,ref:f,onClick:this.onClick,"aria-label":a||g}))},t}(l.a.Component);y.propTypes=m,y.defaultProps={color:"secondary",tag:"button"},t.a=y},xQ8M:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},zCe9:function(e,t,a){"use strict";a.r(t);var o=a("0iUn"),r=a("sLSF"),n=a("MI3g"),c=a("a7VT"),s=a("Tit0"),l=a("q1tI"),i=a.n(l),p=(a("/CMC"),a("b0oO")),d=a("9MUf"),b=(a("q4sD"),a("fTMe"),a("kOwS")),u=a("qNsG"),m=a("E/Ix"),y=a("BLzl"),f=a("wx14"),j=a("zLVn"),O=a("17x9"),x=a.n(O),g=a("TSYQ"),h=a.n(g),T=a("33Jr"),v={tag:T.b,className:x.a.string,cssModule:x.a.object},C=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(j.a)(e,["className","cssModule","tag"]),n=Object(T.a)(h()(t,"card-header"),a);return i.a.createElement(o,Object(f.a)({},r,{className:n}))};C.propTypes=v,C.defaultProps={tag:"div"};var w=C,N={tag:T.b,className:x.a.string,cssModule:x.a.object,innerRef:x.a.oneOfType([x.a.object,x.a.string,x.a.func])},I=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,r=e.tag,n=Object(j.a)(e,["className","cssModule","innerRef","tag"]),c=Object(T.a)(h()(t,"card-body"),a);return i.a.createElement(r,Object(f.a)({},n,{className:c,ref:o}))};I.propTypes=N,I.defaultProps={tag:"div"};var F=I,E=a("ChEw"),k={children:x.a.node,row:x.a.bool,check:x.a.bool,inline:x.a.bool,disabled:x.a.bool,tag:T.b,className:x.a.string,cssModule:x.a.object},L=function(e){var t=e.className,a=e.cssModule,o=e.row,r=e.disabled,n=e.check,c=e.inline,s=e.tag,l=Object(j.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(T.a)(h()(t,!!o&&"row",n?"form-check":"form-group",!(!n||!c)&&"form-check-inline",!(!n||!r)&&"disabled"),a);return"fieldset"===s&&(l.disabled=r),i.a.createElement(s,Object(f.a)({},l,{className:p}))};L.propTypes=k,L.defaultProps={tag:"div"};var M=L,S=a("xQ8M"),z=a.n(S),P=x.a.oneOfType([x.a.number,x.a.string]),G=x.a.oneOfType([x.a.string,x.a.number,x.a.shape({size:P,order:P,offset:P})]),R={children:x.a.node,hidden:x.a.bool,check:x.a.bool,size:x.a.string,for:x.a.string,tag:T.b,className:x.a.string,cssModule:x.a.object,xs:G,sm:G,md:G,lg:G,xl:G,widths:x.a.array},A={tag:"label",widths:["xs","sm","md","lg","xl"]},B=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},J=function(e){var t=e.className,a=e.cssModule,o=e.hidden,r=e.widths,n=e.tag,c=e.check,s=e.size,l=e.for,p=Object(j.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),d=[];r.forEach(function(t,o){var r=e[t];if(delete p[t],r||""===r){var n,c=!o;if(z()(r)){var s,l=c?"-":"-"+t+"-";n=B(c,t,r.size),d.push(Object(T.a)(h()(((s={})[n]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),a)}else n=B(c,t,r),d.push(n)}});var b=Object(T.a)(h()(t,!!o&&"sr-only",!!c&&"form-check-label",!!s&&"col-form-label-"+s,d,!!d.length&&"col-form-label"),a);return i.a.createElement(n,Object(f.a)({htmlFor:l},p,{className:b}))};J.propTypes=R,J.defaultProps=A;var _=J,q=x.a.oneOfType([x.a.number,x.a.string]),U=x.a.oneOfType([x.a.bool,x.a.number,x.a.string,x.a.shape({size:x.a.oneOfType([x.a.bool,x.a.number,x.a.string]),order:q,offset:q})]),Y={tag:T.b,xs:U,sm:U,md:U,lg:U,xl:U,className:x.a.string,cssModule:x.a.object,widths:x.a.array},Q={tag:"div",widths:["xs","sm","md","lg","xl"]},V=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},X=function(e){var t=e.className,a=e.cssModule,o=e.widths,r=e.tag,n=Object(j.a)(e,["className","cssModule","widths","tag"]),c=[];o.forEach(function(t,o){var r=e[t];if(delete n[t],r||""===r){var s=!o;if(z()(r)){var l,i=s?"-":"-"+t+"-",p=V(s,t,r.size);c.push(Object(T.a)(h()(((l={})[p]=r.size||""===r.size,l["order"+i+r.order]=r.order||0===r.order,l["offset"+i+r.offset]=r.offset||0===r.offset,l)),a))}else{var d=V(s,t,r);c.push(d)}}}),c.length||c.push("col");var s=Object(T.a)(h()(t,c),a);return i.a.createElement(r,Object(f.a)({},n,{className:s}))};X.propTypes=Y,X.defaultProps=Q;var D=X,H=a("JX7q"),W=a("dI71"),$={children:x.a.node,type:x.a.string,size:x.a.string,bsSize:x.a.string,valid:x.a.bool,invalid:x.a.bool,tag:T.b,innerRef:x.a.oneOfType([x.a.object,x.a.func,x.a.string]),plaintext:x.a.bool,addon:x.a.bool,className:x.a.string,cssModule:x.a.object},K=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(H.a)(a)),a.focus=a.focus.bind(Object(H.a)(a)),a}Object(W.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,r=e.bsSize,n=e.valid,c=e.invalid,s=e.tag,l=e.addon,p=e.plaintext,d=e.innerRef,b=Object(j.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),u=["radio","checkbox"].indexOf(o)>-1,m=new RegExp("\\D","g"),y=s||("select"===o||"textarea"===o?o:"input"),O="form-control";p?(O+="-plaintext",y=s||"input"):"file"===o?O+="-file":u&&(O=l?null:"form-check-input"),b.size&&m.test(b.size)&&(Object(T.c)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var x=Object(T.a)(h()(t,c&&"is-invalid",n&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===y||s&&"function"===typeof s)&&(b.type=o),b.children&&!p&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(T.c)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(y,Object(f.a)({},b,{ref:d,className:x}))},t}(i.a.Component);K.propTypes=$,K.defaultProps={type:"text"};var Z=K,ee={buttonText:"Send"},te="wrapper";function ae(e){var t=e.components,a=Object(u.a)(e,["components"]);return Object(m.a)(te,Object(b.a)({},ee,a,{components:t,mdxType:"MDXLayout"}),Object(m.a)("h3",null,"Submission Form"),Object(m.a)("br",null),Object(m.a)(y.a,{mdxType:"Card"},Object(m.a)(w,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Category "),Object(m.a)(F,{mdxType:"CardBody"},Object(m.a)(E.a,{mdxType:"CardTitle"},Object(m.a)("p",null,"Please select the category to which you are applying. ")),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"category",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Submission Category")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"select",style:{height:"40px"},mdxType:"Input"},Object(m.a)("option",null),Object(m.a)("option",null,"Smart Cities Challenge"),Object(m.a)("option",null,"Engaging Residents in Long-Term Care"),Object(m.a)("option",null,"Revitalizing Public Spaces"),Object(m.a)("option",null,"Reducing Carbon Emissions")))))),Object(m.a)("br",null),Object(m.a)(y.a,{mdxType:"Card"},Object(m.a)(w,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Participant 1 (Principle Contact) "),Object(m.a)(F,{mdxType:"CardBody"},Object(m.a)(E.a,{mdxType:"CardTitle"}),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant1Name",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Full Name *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Academic Institution *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Program of Study *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Year of Study *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Email *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"email",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Phone *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"number",style:{height:"40px"},mdxType:"Input"}))))),Object(m.a)("br",null),Object(m.a)(y.a,{mdxType:"Card"},Object(m.a)(w,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Participant 2"),Object(m.a)(F,{mdxType:"CardBody"},Object(m.a)(E.a,{mdxType:"CardTitle"}),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant2Name",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Full Name *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant2AcademicIns",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Academic Institution *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant2Study",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Program of Study *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Year of Study *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Email *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"email",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Phone *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"number",style:{height:"40px"},mdxType:"Input"}))))),Object(m.a)("br",null),Object(m.a)(y.a,{mdxType:"Card"},Object(m.a)(w,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Participant 3"),Object(m.a)(F,{mdxType:"CardBody"},Object(m.a)(E.a,{mdxType:"CardTitle"}),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant3Name",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Full Name *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant3AcademicIns",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Academic Institution *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{for:"participant3Study",sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Program of Study *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Year of Study *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Email *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"email",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Phone *")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"number",style:{height:"40px"},mdxType:"Input"}))))),Object(m.a)("br",null),Object(m.a)(y.a,{mdxType:"Card"},Object(m.a)(w,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Project Supports/Advisors "),Object(m.a)(F,{mdxType:"CardBody"},Object(m.a)(E.a,{mdxType:"CardTitle"},Object(m.a)("p",null,"In your proposal development process, you may have had a professional or expert in the field serve as an advisor to your team along the way. If so, please provide this information below. Please note that submissions from project supports and advisors will not be taken into account when assessing your application \u2013 you will be assessed on the merit of your proposal based on the outlined evaluation criteria.")),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Primary Support - Full Name")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Primary Support - Profession")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Primary Support - Email")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Secondary Support - Full Name")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Secondary Support - Profession")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Secondary Support - Email")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))))),Object(m.a)("br",null),Object(m.a)(y.a,{mdxType:"Card"},Object(m.a)(w,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Project Proposal "),Object(m.a)(F,{mdxType:"CardBody"},Object(m.a)(E.a,{mdxType:"CardTitle"},Object(m.a)("p",null,"Using the fields below please provide any relevant information related to your proposal. File types accepted include pdf and doc. The maximum file size is 1 MB. Note: If your file exceeds the maximum file size please include a link to a file-sharing site (e.g. Dropbox) in the Related Links field below.")),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"File Upload")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"file",multiple:!0,style:{height:"40px"},mdxType:"Input"}))),Object(m.a)(M,{row:!0,mdxType:"FormGroup"},Object(m.a)(_,{sm:3,mdxType:"Label"}," ",Object(m.a)("strong",null,"Related Links")),Object(m.a)(D,{sm:8,mdxType:"Col"},Object(m.a)(Z,{type:"text-area",mdxType:"Input"}))))),Object(m.a)("br",null))}ae.isMDXComponent=!0;var oe=a("sOKU");a.d(t,"default",function(){return re});var re=function(e){function t(e){return Object(o.default)(this,t),Object(n.default)(this,Object(c.default)(t).call(this,e))}return Object(s.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-container"},i.a.createElement(p.a,null),i.a.createElement(d.a,{active:"submit"}),i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"sidebar"},i.a.createElement("ul",{className:"links",style:{fontFamily:"Arial",fontSize:"25px"}}),i.a.createElement("svg",{width:"70",height:"100%",viewBox:"0 0 80 820",className:"nav-slider",preserveAspectRatio:"xMidYMid"},i.a.createElement("path",{d:"M 75 10 C 40 210, 40 610, 75 810",fill:"transparent",className:"line"}))),i.a.createElement("div",{className:"submit-proposal-content",id:"scroll-container",ref:this.scrollContainer},i.a.createElement(ae,null),i.a.createElement(oe.a,{className:"submit-proposal"}," ","Send"," "))))}}]),t}(l.Component)}},[["G/Uc",1,0]]]);