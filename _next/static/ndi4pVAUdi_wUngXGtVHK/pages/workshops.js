(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"33Jr":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return u});n("I7wR");var a,r=n("17x9"),o=n.n(r);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}var i={};function s(e){i[e]||("undefined"!==typeof console&&console.error(e),i[e]=!0)}var l="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var u=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement},BLzl:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),c=n.n(o),i=n("17x9"),s=n.n(i),l=n("TSYQ"),u=n.n(l),b=n("33Jr"),p={tag:b.b,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},d=function(e){var t=e.className,n=e.cssModule,o=e.color,i=e.body,s=e.inverse,l=e.outline,p=e.tag,d=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(b.a)(u()(t,"card",!!s&&"text-white",!!i&&"card-body",!!o&&(l?"border":"bg")+"-"+o),n);return c.a.createElement(p,Object(a.a)({},f,{className:j,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},ChEw:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),c=n.n(o),i=n("17x9"),s=n.n(i),l=n("TSYQ"),u=n.n(l),b=n("33Jr"),p={tag:b.b,className:s.a.string,cssModule:s.a.object},d=function(e){var t=e.className,n=e.cssModule,o=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),s=Object(b.a)(u()(t,"card-title"),n);return c.a.createElement(o,Object(a.a)({},i,{className:s}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},I7wR:function(e,t,n){(function(t){var n="[object AsyncFunction]",a="[object Function]",r="[object GeneratorFunction]",o="[object Null]",c="[object Proxy]",i="[object Undefined]",s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),b=Object.prototype,p=b.hasOwnProperty,d=b.toString,f=u.Symbol,j=f?f.toStringTag:void 0;function v(e){return null==e?void 0===e?i:o:j&&j in Object(e)?function(e){var t=p.call(e,j),n=e[j];try{e[j]=void 0;var a=!0}catch(o){}var r=d.call(e);a&&(t?e[j]=n:delete e[j]);return r}(e):function(e){return d.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=v(e);return t==a||t==r||t==n||t==c}}).call(this,n("yLpj"))},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},w1zr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops",function(){var e=n("xJkb");return{page:e.default||e}}])},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",function(){return a})},xJkb:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),c=n("a7VT"),i=n("Tit0"),s=n("q1tI"),l=n.n(s),u=n("5Yp1"),b=n("kOwS"),p=n("qNsG"),d=n("E/Ix"),f=n("BLzl"),j=n("ChEw"),v=n("wx14"),y=n("zLVn"),O=n("17x9"),m=n.n(O),w=n("TSYQ"),h=n.n(w),g=n("33Jr"),x={tag:g.b,className:m.a.string,cssModule:m.a.object},T=function(e){var t=e.className,n=e.cssModule,a=e.tag,r=Object(y.a)(e,["className","cssModule","tag"]),o=Object(g.a)(h()(t,"card-text"),n);return l.a.createElement(a,Object(v.a)({},r,{className:o}))};T.propTypes=x,T.defaultProps={tag:"p"};var N=T,M=(l.a.createElement,{}),k="wrapper";function C(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(d.a)(k,Object(b.a)({},M,n,{components:t,mdxType:"MDXLayout"}),Object(d.a)("h2",null," Workshops and Events "),Object(d.a)("br",null),Object(d.a)("h4",null,"Save the dates:"),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Wednesday Nov. 13, 2019 ")),Object(d.a)(N,{mdxType:"CardText"},"Queen's University ",Object(d.a)("br",null),"Mitchell Hall  ",Object(d.a)("br",null),"5:30 p.m. \u2013 7:30 p.m.",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://www.eventbrite.ca/e/mayors-innovation-challenge-workshop-queens-university-tickets-76489948495",name:"start"},"Eventbrite - Click Me!"),Object(d.a)("br",null))),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Monday Nov. 18, 2019 ")),Object(d.a)(N,{mdxType:"CardText"},"St. Lawrence College ",Object(d.a)("br",null),"Innovation Hub ",Object(d.a)("br",null),"5:30 p.m. \u2013 7:30 p.m.",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://www.eventbrite.ca/e/mayors-innovation-challenge-workshop-st-lawrence-college-tickets-76490052807",name:"start"},"Eventbrite - Click Me!"),Object(d.a)("br",null))),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Wednesday Nov. 13, 2019 ")),Object(d.a)(N,{mdxType:"CardText"},"Queen's University ",Object(d.a)("br",null),"Mitchell Hall  ",Object(d.a)("br",null),"5:30 p.m. \u2013 7:30 p.m.",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://www.eventbrite.ca/e/mayors-innovation-challenge-workshop-queens-university-tickets-76489948495",name:"start"},"Eventbrite - Click Me!"),Object(d.a)("br",null))))}C.isMDXComponent=!0,n.d(t,"default",function(){return I});var E=l.a.createElement,I=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return E(u.a,{title:"Workshops - Kingston Mayor's Innovation Challenge",activeNavItem:"workshops"},E("div",{className:"content-container"},E("div",{className:"sidebar"},E("ul",{className:"links",style:{fontFamily:"Arial",fontSize:"25px"}}),E("svg",{width:"70",height:"100%",viewBox:"0 0 80 820",className:"nav-slider",preserveAspectRatio:"xMidYMid"},E("path",{d:"M 75 10 C 40 210, 40 610, 75 810",fill:"transparent",className:"line"}))),E("div",{className:"workshop-content",ref:this.scrollContainer},E(C,null),E("img",{src:"static/MIC-Craig.jpg",width:"100%",style:{paddingTop:"40px"}}))))}}]),t}(s.Component)},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",function(){return a})}},[["w1zr",1,0]]]);