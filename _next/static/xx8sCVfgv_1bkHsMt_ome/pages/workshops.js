(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"33Jr":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return u});n("I7wR");var a,r=n("17x9"),o=n.n(r);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}var l={};function i(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var s="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof s))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var u=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement},BLzl:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),c=n.n(o),l=n("17x9"),i=n.n(l),s=n("TSYQ"),u=n.n(s),b=n("33Jr"),p={tag:b.b,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var t=e.className,n=e.cssModule,o=e.color,l=e.body,i=e.inverse,s=e.outline,p=e.tag,d=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(b.a)(u()(t,"card",!!i&&"text-white",!!l&&"card-body",!!o&&(s?"border":"bg")+"-"+o),n);return c.a.createElement(p,Object(a.a)({},f,{className:j,ref:d}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},ChEw:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),c=n.n(o),l=n("17x9"),i=n.n(l),s=n("TSYQ"),u=n.n(s),b=n("33Jr"),p={tag:b.b,className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,n=e.cssModule,o=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),i=Object(b.a)(u()(t,"card-title"),n);return c.a.createElement(o,Object(a.a)({},l,{className:i}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},I7wR:function(e,t,n){(function(t){var n="[object AsyncFunction]",a="[object Function]",r="[object GeneratorFunction]",o="[object Null]",c="[object Proxy]",l="[object Undefined]",i="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,u=i||s||Function("return this")(),b=Object.prototype,p=b.hasOwnProperty,d=b.toString,f=u.Symbol,j=f?f.toStringTag:void 0;function O(e){return null==e?void 0===e?l:o:j&&j in Object(e)?function(e){var t=p.call(e,j),n=e[j];try{e[j]=void 0;var a=!0}catch(o){}var r=d.call(e);a&&(t?e[j]=n:delete e[j]);return r}(e):function(e){return d.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=O(e);return t==a||t==r||t==n||t==c}}).call(this,n("yLpj"))},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},w1zr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshops",function(){var e=n("xJkb");return{page:e.default||e}}])},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",function(){return a})},xJkb:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),c=n("a7VT"),l=n("Tit0"),i=n("q1tI"),s=n.n(i),u=n("5Yp1"),b=n("kOwS"),p=n("qNsG"),d=n("E/Ix"),f=n("BLzl"),j=n("ChEw"),O=n("wx14"),y=n("zLVn"),m=n("17x9"),v=n.n(m),h=n("TSYQ"),w=n.n(h),g=n("33Jr"),x={tag:g.b,className:v.a.string,cssModule:v.a.object},T=function(e){var t=e.className,n=e.cssModule,a=e.tag,r=Object(y.a)(e,["className","cssModule","tag"]),o=Object(g.a)(w()(t,"card-text"),n);return s.a.createElement(a,Object(O.a)({},r,{className:o}))};T.propTypes=x,T.defaultProps={tag:"p"};var C=T,M=(s.a.createElement,{}),N="wrapper";function k(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(d.a)(N,Object(b.a)({},M,n,{components:t,mdxType:"MDXLayout"}),Object(d.a)("h2",null," Workshops and Events "),Object(d.a)("br",null),Object(d.a)("h4",null,"Save the dates:"),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Wednesday Nov. 13, 2019 ")),Object(d.a)(C,{mdxType:"CardText"},"Queen's University ",Object(d.a)("br",null),"Mitchell Hall  ",Object(d.a)("br",null),"5:30 p.m. \u2013 7:30 p.m.",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://www.eventbrite.ca/e/mayors-innovation-challenge-workshop-queens-university-tickets-76489948495",name:"start"},"Eventbrite - Click Me!"),Object(d.a)("br",null))),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Monday Nov. 18, 2019 ")),Object(d.a)(C,{mdxType:"CardText"},"St. Lawrence College ",Object(d.a)("br",null),"Innovation Hub ",Object(d.a)("br",null),"5:30 p.m. \u2013 7:30 p.m.",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://www.eventbrite.ca/e/mayors-innovation-challenge-workshop-st-lawrence-college-tickets-76490052807",name:"start"},"Eventbrite - Click Me!"),Object(d.a)("br",null))),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Monday Jan. 20, 2020 ")),Object(d.a)(C,{mdxType:"CardText"},"MIC Applicant Consultations ",Object(d.a)("br",null),"Queen's University ",Object(d.a)("br",null),"Mitchell Hall ",Object(d.a)("br",null),"12:00 p.m. \u2013 2:00 p.m.",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://bit.ly/2PWByQc",name:"start"},"Eventbrite - Register!"),Object(d.a)("br",null))),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Monday Jan. 20, 2020 ")),Object(d.a)(C,{mdxType:"CardText"},"MIC Applicant Consultations ",Object(d.a)("br",null),"St. Lawrence College ",Object(d.a)("br",null),"Innovation Hub ",Object(d.a)("br",null),"2:30 p.m. \u2013 4:30 p.m.",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://www.eventbrite.ca/e/mic-applicant-consultations-st-lawrence-college-registration-86520002657",name:"start"},"Eventbrite - Register!"),Object(d.a)("br",null))),Object(d.a)(f.a,{body:!0,outline:!0,color:"info",mdxType:"Card"},Object(d.a)(j.a,{mdxType:"CardTitle"},Object(d.a)("strong",null," Friday, Jan. 31 - Sunday, Feb. 2, 2020 ")),Object(d.a)(C,{mdxType:"CardText"},"QHacks ",Object(d.a)("br",null),"Mitchell Hall, Queen's University  ",Object(d.a)("br",null),"- ",Object(d.a)("a",{href:"https://qhacks.io/",name:"start"},"QHacks - Click Me!"),Object(d.a)("br",null))))}k.isMDXComponent=!0,n.d(t,"default",function(){return I});var E=s.a.createElement,I=function(e){function t(e){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).call(this,e))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return E(u.a,{title:"Workshops - Kingston Mayor's Innovation Challenge",activeNavItem:"workshops"},E("div",{className:"content-container"},E("div",{className:"sidebar"},E("ul",{className:"links",style:{fontFamily:"Arial",fontSize:"25px"}}),E("svg",{width:"70",height:"100%",viewBox:"0 0 80 820",className:"nav-slider",preserveAspectRatio:"xMidYMid"},E("path",{d:"M 75 10 C 40 210, 40 610, 75 810",fill:"transparent",className:"line"}))),E("div",{className:"workshop-content",ref:this.scrollContainer},E(k,null),E("img",{src:"static/MIC-Craig.jpg",width:"100%",style:{paddingTop:"40px"}}))))}}]),t}(i.Component)},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",function(){return a})}},[["w1zr",1,0]]]);