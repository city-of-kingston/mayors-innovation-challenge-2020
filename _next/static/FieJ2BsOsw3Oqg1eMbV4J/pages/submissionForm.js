(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{BLzl:function(e,t,a){"use strict";var o=a("wx14"),r=a("zLVn"),n=a("q1tI"),c=a.n(n),s=a("17x9"),l=a.n(s),i=a("TSYQ"),p=a.n(i),d=a("33Jr"),m={tag:d.b,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var t=e.className,a=e.cssModule,n=e.color,s=e.body,l=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,u=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),y=Object(d.a)(p()(t,"card",!!l&&"text-white",!!s&&"card-body",!!n&&(i?"border":"bg")+"-"+n),a);return c.a.createElement(m,Object(o.a)({},u,{className:y,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},ChEw:function(e,t,a){"use strict";var o=a("wx14"),r=a("zLVn"),n=a("q1tI"),c=a.n(n),s=a("17x9"),l=a.n(s),i=a("TSYQ"),p=a.n(i),d=a("33Jr"),m={tag:d.b,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.a)(p()(t,"card-title"),a);return c.a.createElement(n,Object(o.a)({},s,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},t.a=b},"G/Uc":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/submissionForm",function(){var e=a("zCe9");return{page:e.default||e}}])},JX7q:function(e,t,a){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",function(){return o})},dI71:function(e,t,a){"use strict";function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.d(t,"a",function(){return o})},rhny:function(e,t,a){"use strict";var o=a("wx14"),r=a("zLVn"),n=a("xQ8M"),c=a.n(n),s=a("q1tI"),l=a.n(s),i=a("17x9"),p=a.n(i),d=a("TSYQ"),m=a.n(d),b=a("33Jr"),u=p.a.oneOfType([p.a.number,p.a.string]),y=p.a.oneOfType([p.a.bool,p.a.number,p.a.string,p.a.shape({size:p.a.oneOfType([p.a.bool,p.a.number,p.a.string]),order:u,offset:u})]),f={tag:b.b,xs:y,sm:y,md:y,lg:y,xl:y,className:p.a.string,cssModule:p.a.object,widths:p.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},x=function(e){var t=e.className,a=e.cssModule,n=e.widths,s=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),p=[];n.forEach(function(t,o){var r=e[t];if(delete i[t],r||""===r){var n=!o;if(c()(r)){var s,l=n?"-":"-"+t+"-",d=O(n,t,r.size);p.push(Object(b.a)(m()(((s={})[d]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s)),a))}else{var u=O(n,t,r);p.push(u)}}}),p.length||p.push("col");var d=Object(b.a)(m()(t,p),a);return l.a.createElement(s,Object(o.a)({},i,{className:d}))};x.propTypes=f,x.defaultProps=j,t.a=x},sOKU:function(e,t,a){"use strict";var o=a("wx14"),r=a("zLVn"),n=a("JX7q"),c=a("dI71"),s=a("q1tI"),l=a.n(s),i=a("17x9"),p=a.n(i),d=a("TSYQ"),m=a.n(d),b=a("33Jr"),u={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:b.b,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,p=e.color,d=e.outline,u=e.size,y=e.tag,f=e.innerRef,j=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof j.children&&(j.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(d?"-outline":"")+"-"+p,x=Object(b.a)(m()(c,{close:s},s||"btn",s||O,!!u&&"btn-"+u,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),i);j.href&&"button"===y&&(y="a");var g=s?"Close":null;return l.a.createElement(y,Object(o.a)({type:"button"===y&&j.onClick?"button":void 0},j,{className:x,ref:f,onClick:this.onClick,"aria-label":a||g}))},t}(l.a.Component);y.propTypes=u,y.defaultProps={color:"secondary",tag:"button"},t.a=y},xQ8M:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},zCe9:function(e,t,a){"use strict";a.r(t);var o=a("0iUn"),r=a("sLSF"),n=a("MI3g"),c=a("a7VT"),s=a("Tit0"),l=a("q1tI"),i=a.n(l),p=a("/CMC"),d=(a("q4sD"),a("fTMe"),a("kOwS")),m=a("qNsG"),b=a("E/Ix"),u=a("BLzl"),y=a("wx14"),f=a("zLVn"),j=a("17x9"),O=a.n(j),x=a("TSYQ"),g=a.n(x),h=a("33Jr"),T={tag:h.b,className:O.a.string,cssModule:O.a.object},v=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(f.a)(e,["className","cssModule","tag"]),n=Object(h.a)(g()(t,"card-header"),a);return i.a.createElement(o,Object(y.a)({},r,{className:n}))};v.propTypes=T,v.defaultProps={tag:"div"};var C=v,w={tag:h.b,className:O.a.string,cssModule:O.a.object,innerRef:O.a.oneOfType([O.a.object,O.a.string,O.a.func])},N=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,r=e.tag,n=Object(f.a)(e,["className","cssModule","innerRef","tag"]),c=Object(h.a)(g()(t,"card-body"),a);return i.a.createElement(r,Object(y.a)({},n,{className:c,ref:o}))};N.propTypes=w,N.defaultProps={tag:"div"};var E=N,I=a("ChEw"),k={children:O.a.node,row:O.a.bool,check:O.a.bool,inline:O.a.bool,disabled:O.a.bool,tag:h.b,className:O.a.string,cssModule:O.a.object},M=function(e){var t=e.className,a=e.cssModule,o=e.row,r=e.disabled,n=e.check,c=e.inline,s=e.tag,l=Object(f.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(h.a)(g()(t,!!o&&"row",n?"form-check":"form-group",!(!n||!c)&&"form-check-inline",!(!n||!r)&&"disabled"),a);return"fieldset"===s&&(l.disabled=r),i.a.createElement(s,Object(y.a)({},l,{className:p}))};M.propTypes=k,M.defaultProps={tag:"div"};var L=M,F=a("xQ8M"),z=a.n(F),S=O.a.oneOfType([O.a.number,O.a.string]),P=O.a.oneOfType([O.a.string,O.a.number,O.a.shape({size:S,order:S,offset:S})]),G={children:O.a.node,hidden:O.a.bool,check:O.a.bool,size:O.a.string,for:O.a.string,tag:h.b,className:O.a.string,cssModule:O.a.object,xs:P,sm:P,md:P,lg:P,xl:P,widths:O.a.array},R={tag:"label",widths:["xs","sm","md","lg","xl"]},A=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},B=function(e){var t=e.className,a=e.cssModule,o=e.hidden,r=e.widths,n=e.tag,c=e.check,s=e.size,l=e.for,p=Object(f.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),d=[];r.forEach(function(t,o){var r=e[t];if(delete p[t],r||""===r){var n,c=!o;if(z()(r)){var s,l=c?"-":"-"+t+"-";n=A(c,t,r.size),d.push(Object(h.a)(g()(((s={})[n]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),a)}else n=A(c,t,r),d.push(n)}});var m=Object(h.a)(g()(t,!!o&&"sr-only",!!c&&"form-check-label",!!s&&"col-form-label-"+s,d,!!d.length&&"col-form-label"),a);return i.a.createElement(n,Object(y.a)({htmlFor:l},p,{className:m}))};B.propTypes=G,B.defaultProps=R;var Y=B,q=a("rhny"),J=a("JX7q"),_=a("dI71"),X={children:O.a.node,type:O.a.string,size:O.a.string,bsSize:O.a.string,valid:O.a.bool,invalid:O.a.bool,tag:h.b,innerRef:O.a.oneOfType([O.a.object,O.a.func,O.a.string]),plaintext:O.a.bool,addon:O.a.bool,className:O.a.string,cssModule:O.a.object},Q=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(J.a)(a)),a.focus=a.focus.bind(Object(J.a)(a)),a}Object(_.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,r=e.bsSize,n=e.valid,c=e.invalid,s=e.tag,l=e.addon,p=e.plaintext,d=e.innerRef,m=Object(f.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(o)>-1,u=new RegExp("\\D","g"),j=s||("select"===o||"textarea"===o?o:"input"),O="form-control";p?(O+="-plaintext",j=s||"input"):"file"===o?O+="-file":b&&(O=l?null:"form-check-input"),m.size&&u.test(m.size)&&(Object(h.c)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=m.size,delete m.size);var x=Object(h.a)(g()(t,c&&"is-invalid",n&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===j||s&&"function"===typeof s)&&(m.type=o),m.children&&!p&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(h.c)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),i.a.createElement(j,Object(y.a)({},m,{ref:d,className:x}))},t}(i.a.Component);Q.propTypes=X,Q.defaultProps={type:"text"};var U=Q,V={buttonText:"Send"},D="wrapper";function H(e){var t=e.components,a=Object(m.a)(e,["components"]);return Object(b.a)(D,Object(d.a)({},V,a,{components:t,mdxType:"MDXLayout"}),Object(b.a)("h3",null,"Submission Form"),Object(b.a)("br",null),Object(b.a)(u.a,{mdxType:"Card"},Object(b.a)(C,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Category "),Object(b.a)(E,{mdxType:"CardBody"},Object(b.a)(I.a,{mdxType:"CardTitle"},Object(b.a)("p",null,"Please select the category to which you are applying. ")),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"category",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Submission Category")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"select",style:{height:"40px"},mdxType:"Input"},Object(b.a)("option",null),Object(b.a)("option",null,"Smart Cities Challenge"),Object(b.a)("option",null,"Engaging Residents in Long-Term Care"),Object(b.a)("option",null,"Revitalizing Public Spaces"),Object(b.a)("option",null,"Reducing Carbon Emissions")))))),Object(b.a)("br",null),Object(b.a)(u.a,{mdxType:"Card"},Object(b.a)(C,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Participant 1 (Principle Contact) "),Object(b.a)(E,{mdxType:"CardBody"},Object(b.a)(I.a,{mdxType:"CardTitle"}),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant1Name",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Full Name *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Academic Institution *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Program of Study *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Year of Study *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Email *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"email",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant1AcademicIns",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Phone *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"number",style:{height:"40px"},mdxType:"Input"}))))),Object(b.a)("br",null),Object(b.a)(u.a,{mdxType:"Card"},Object(b.a)(C,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Participant 2"),Object(b.a)(E,{mdxType:"CardBody"},Object(b.a)(I.a,{mdxType:"CardTitle"}),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant2Name",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Full Name *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant2AcademicIns",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Academic Institution *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant2Study",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Program of Study *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Year of Study *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Email *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"email",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Phone *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"number",style:{height:"40px"},mdxType:"Input"}))))),Object(b.a)("br",null),Object(b.a)(u.a,{mdxType:"Card"},Object(b.a)(C,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Participant 3"),Object(b.a)(E,{mdxType:"CardBody"},Object(b.a)(I.a,{mdxType:"CardTitle"}),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant3Name",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Full Name *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant3AcademicIns",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Academic Institution *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{for:"participant3Study",sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Program of Study *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Year of Study *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Email *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"email",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Phone *")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"number",style:{height:"40px"},mdxType:"Input"}))))),Object(b.a)("br",null),Object(b.a)(u.a,{mdxType:"Card"},Object(b.a)(C,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Project Supports/Advisors "),Object(b.a)(E,{mdxType:"CardBody"},Object(b.a)(I.a,{mdxType:"CardTitle"},Object(b.a)("p",null,"In your proposal development process, you may have had a professional or expert in the field serve as an advisor to your team along the way. If so, please provide this information below. Please note that submissions from project supports and advisors will not be taken into account when assessing your application \u2013 you will be assessed on the merit of your proposal based on the outlined evaluation criteria.")),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Primary Support - Full Name")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Primary Support - Profession")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Primary Support - Email")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Secondary Support - Full Name")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Secondary Support - Profession")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Secondary Support - Email")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",style:{height:"40px"},mdxType:"Input"}))))),Object(b.a)("br",null),Object(b.a)(u.a,{mdxType:"Card"},Object(b.a)(C,{style:{backgroundColor:"rgba(52, 174, 169, 0.3)",fontWeight:"700"},mdxType:"CardHeader"}," Project Proposal "),Object(b.a)(E,{mdxType:"CardBody"},Object(b.a)(I.a,{mdxType:"CardTitle"},Object(b.a)("p",null,"Using the fields below please provide any relevant information related to your proposal. File types accepted include pdf and doc. The maximum file size is 1 MB. Note: If your file exceeds the maximum file size please include a link to a file-sharing site (e.g. Dropbox) in the Related Links field below.")),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"File Upload")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"file",multiple:!0,style:{height:"40px"},mdxType:"Input"}))),Object(b.a)(L,{row:!0,mdxType:"FormGroup"},Object(b.a)(Y,{sm:3,mdxType:"Label"}," ",Object(b.a)("strong",null,"Related Links")),Object(b.a)(q.a,{sm:8,mdxType:"Col"},Object(b.a)(U,{type:"text-area",mdxType:"Input"}))))),Object(b.a)("br",null))}H.isMDXComponent=!0;var W=a("sOKU");a.d(t,"default",function(){return K});var K=function(e){function t(e){return Object(o.default)(this,t),Object(n.default)(this,Object(c.default)(t).call(this,e))}return Object(s.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"page-container"},i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"svg-container left"},i.a.createElement("svg",{height:"200%",viewBox:"0 20 550 170",preserveAspectRatio:"xMinYMax"},i.a.createElement("defs",null,i.a.createElement(p.a,null),i.a.createElement("radialGradient",{id:"fade-left",cx:"0.5",cy:"0.5",r:"0.5",fx:"0.7",fy:"0.7"},i.a.createElement("stop",{offset:"50%",style:{stopColor:"white",stopOpacity:1}}),i.a.createElement("stop",{offset:"100%",style:{stopColor:"white",stopOpacity:0}})),i.a.createElement("radialGradient",{id:"fade-right",cx:"0.5",cy:"0.5",r:"0.5",fx:"0.3",fy:"0.7"},i.a.createElement("stop",{offset:"50%",style:{stopColor:"white",stopOpacity:1}}),i.a.createElement("stop",{offset:"100%",style:{stopColor:"white",stopOpacity:0}}))),i.a.createElement("mask",{id:"fade-left-mask"},i.a.createElement("rect",{id:"bg-left",x:"0",y:"0",width:"600",height:"200",fill:"url(#fade-left)"})),i.a.createElement("mask",{id:"fade-right-mask"},i.a.createElement("rect",{id:"bg-right",x:"0",y:"0",width:"600",height:"200",fill:"url(#fade-right)"})),i.a.createElement("g",{mask:"url(#fade-left-mask)"},i.a.createElement(p.b,{offX:350})))),i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:"static/MIC Logo.png",alt:"Mayor's Innovation Challenge Logo",className:"logo"})),i.a.createElement("div",{className:"svg-container right"},i.a.createElement("svg",{height:"200%",viewBox:"50 0 400 200",preserveAspectRatio:"xMaxYMax"},i.a.createElement("g",{mask:"url(#fade-right-mask)"},i.a.createElement(p.b,{flip:!0,offX:50}))))),i.a.createElement("div",{className:"content-container"},i.a.createElement("div",{className:"sidebar"},i.a.createElement("ul",{className:"links",style:{fontFamily:"Arial",fontSize:"25px"}}),i.a.createElement("svg",{width:"70",height:"100%",viewBox:"0 0 80 820",className:"nav-slider",preserveAspectRatio:"xMidYMid"},i.a.createElement("path",{d:"M 75 10 C 40 210, 40 610, 75 810",fill:"transparent",className:"line"}))),i.a.createElement("div",{className:"submit-proposal-content",id:"scroll-container",ref:this.scrollContainer},i.a.createElement(H,null),i.a.createElement(W.a,{className:"submit-proposal"}," ","Send"," "))))}}]),t}(l.Component)}},[["G/Uc",1,0]]]);