(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var o=t(46),r=t(19),i=t(0),a=t.n(i),c=t(43),l=t.n(c),s=Object(i.createContext)();e.b=function(n){var e=Object(i.useState)(""),t=Object(r.a)(e,2),c=t[0],d=t[1],m=Object(i.useState)([]),u=Object(r.a)(m,2),h=u[0],f=u[1],b=Object(i.useState)(!1),p=Object(r.a)(b,2),g=p[0],x=p[1],y=Object(i.useState)(!0),w=Object(r.a)(y,2),v=w[0],E=w[1],z={input:c,setInput:d,isError:g,setIsError:x,todos:h,setTodos:f,showActTodos:v,setShowActTodos:E,addTodo:function(n){if(n.preventDefault(),c.trim().length<3)x(!0);else{x(!1);var e={id:l.a.v4(),title:c,completed:!1};d(""),f([].concat(Object(o.a)(h),[e]))}}};return a.a.createElement(s.Provider,Object.assign({value:z},n))}},44:function(n,e,t){n.exports=t.p+"static/media/pomodoro.a11bce7d.svg"},51:function(n,e,t){n.exports=t(70)},70:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(40),a=t.n(i),c=t(80),l=t(10),s=t(79),d=t(12),m={breakpoints:["768px","1024px","1200px"],fontSizes:[12,14,16,18,24,30,40],colors:{orange:"#f44336",red:"#BA000D",white:"#FFFFFF",black:"#000000",gray:"#6A6868"},fonts:{main:"Catamaran, sans-serif"}};function u(){var n=Object(d.a)([""," ",""]);return u=function(){return n},n}var h="\n  html {\n    box-sizing: border-box;\n    font-family: ".concat(m.fonts.main,";\n    color: ").concat(m.colors.black,";\n    background-color:").concat(m.colors.white,";\n    font-weight: 400;\n    font-size: 20px;\n  }\n\n  body{\n    margin: 0 auto;\n    background-color: ").concat(m.colors.white,";\n  }\n  a{\n    text-decoration: none;\n    color: inherit;\n  }\n  button :focus{ \n    outline: none;\n  }   \n"),f=Object(l.b)(u(),'\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',h),b=t(35),p=t(44),g=t.n(p);function x(){var n=Object(d.a)(["\n  background: ",";\n"]);return x=function(){return n},n}function y(){var n=Object(d.a)(["\n  background: ",";\n"]);return y=function(){return n},n}var w=Object(l.c)(s.a)(y(),function(n){return n.theme.colors.red}),v=Object(l.c)(s.a)(x(),function(n){return n.theme.colors.orange}),E=function(){return r.a.createElement(s.a,{width:"43vw",height:"100vh",bgcolor:"black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(s.a,{position:"fixed",top:"200px",left:"200px"},r.a.createElement("img",{src:g.a,alt:"icon"})),r.a.createElement(w,{width:"220px",height:"220px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(v,{width:"192px",height:"192px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",border:"8px solid black"},r.a.createElement(s.a,{color:"white",fontSize:"50px",margin:"10px"},r.a.createElement("i",{className:"fas fa-play"})))),r.a.createElement(s.a,{marginTop:"20px",width:"277px",height:"90px",fontWeight:"bold",fontSize:"90px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"},"25:00"),r.a.createElement(s.a,{marginTop:"20px",width:"304px",fontSize:"30px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"},"The first thing to do..."))},z=t(38),j=t(14);function k(){var n=Object(d.a)(["\n  width: 50px;\n  height: 50px;\n  animation: "," 0.8s linear infinite;\n  padding: 1rem;\n  font-size: 50px;\n"]);return k=function(){return n},n}function O(){var n=Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return O=function(){return n},n}var S=Object(l.d)(O()),I=l.c.div(k(),S),C=function(){return r.a.createElement(s.a,{width:"100vw",height:"100vh",position:"absolute",top:"0",left:"0",zIndex:"modal"},r.a.createElement(s.a,{width:"100w",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(I,null,r.a.createElement("i",{className:"fas fa-spinner"})),r.a.createElement(s.a,{fontSize:"30px"},"Now Loading...")))},F=Object(o.lazy)(function(){return t.e(3).then(t.bind(null,86))}),A=Object(o.lazy)(function(){return t.e(4).then(t.bind(null,87))}),R=Object(o.lazy)(function(){return t.e(5).then(t.bind(null,88))}),T=Object(o.lazy)(function(){return Promise.all([t.e(7),t.e(6)]).then(t.bind(null,90))}),P=function(){return r.a.createElement(o.Suspense,{fallback:r.a.createElement(C,null)},r.a.createElement(z.a,null,r.a.createElement(s.a,{width:"57vw",height:"100vh",display:"flex",flexDirection:"column"},r.a.createElement(A,null),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/Pomodoro-Timer/",component:T}),r.a.createElement(j.a,{path:"/Pomodoro-Timer/analytics",component:F}),r.a.createElement(j.a,{path:"/Pomodoro-Timer/ringtones",component:R})))))},D=function(){return r.a.createElement(c.b,{injectFirst:!0},r.a.createElement(l.a,{theme:m},r.a.createElement(b.b,null,r.a.createElement(s.a,{width:"100vw",height:"100vh",display:"flex"},r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(P,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.637546b0.chunk.js.map