(function(e){function t(t){for(var a,o,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return s.p+"js/"+({about:"about",contact:"contact",projects:"projects"}[e]||e)+"."+{about:"9e5ad009",contact:"73357d45",projects:"7934ed69"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,contact:1,projects:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",contact:"contact",projects:"projects"}[e]||e)+"."+{about:"28f77432",contact:"56faefb0",projects:"344f99bf"}[e]+".css",r=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var b=document.getElementsByTagName("style");for(i=0;i<b.length;i++){l=b[i],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",b.name="ChunkLoadError",b.type=a,b.request=o,n[1](b)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e1d":function(e,t,n){e.exports=n.p+"img/Bulela.4f3e6b18.jpeg"},"0f64":function(e,t,n){"use strict";n("5039")},"1fa3":function(e,t,n){e.exports=n.p+"img/LOGO.862c0514.png"},5039:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=n("1fa3"),r=n.n(o),c={id:"nav"},i={class:"navbar navbar-expand-lg navbar-light bg-light"},s=Object(a["e"])("img",{href:"/",id:"logo",class:"d-block mx-auto mb-4 img-responsive",src:r.a,alt:"",style:{border:"3px solid white"},width:"80","border-radius":"45%",height:"80"},null,-1),l=Object(a["e"])("button",{class:"btn offie btn-primary",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},[Object(a["e"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},b={class:"navbar-nav"},d=Object(a["g"])("Home "),f=Object(a["e"])("span",{class:"sr-only"},null,-1),p=Object(a["g"])(" About "),v=Object(a["g"])(" Timeline "),m=Object(a["g"])(" Projects "),g=Object(a["g"])(" Testimonials "),h=Object(a["g"])(" Contact "),j={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},O=Object(a["e"])("div",{class:"offcanvas-header"},[Object(a["e"])("h5",{id:"offcanvasRightLabel"},"Offcanvas right"),Object(a["e"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),y={class:"offcanvas-body"},w=Object(a["g"])("Home "),k=Object(a["e"])("span",{class:"sr-only"},null,-1),x=Object(a["g"])(" About "),_=Object(a["g"])(" Timeline "),A=Object(a["g"])(" Projects "),P=Object(a["g"])(" Testimonials "),C=Object(a["g"])(" Contact ");function L(e,t,n,o,r,L){var S=Object(a["w"])("router-link"),T=Object(a["w"])("router-view"),N=Object(a["w"])("Footer");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["e"])("div",c,[Object(a["e"])("nav",i,[Object(a["h"])(S,{style:{"padding-right":"1100px"},class:"navbar-brand",to:"/"},{default:Object(a["A"])((function(){return[s]})),_:1}),l,Object(a["e"])("div",u,[Object(a["e"])("div",b,[Object(a["h"])(S,{id:"menu",to:"/",class:"nav-item nav-link active"},{default:Object(a["A"])((function(){return[d,f]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/about",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[p]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/timeline",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[v]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/projects",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[m]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/testimonials",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[g]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/contact",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[h]})),_:1})])])])]),Object(a["e"])("div",j,[O,Object(a["e"])("div",y,[Object(a["h"])(S,{id:"menu",to:"/",class:"nav-item nav-link active"},{default:Object(a["A"])((function(){return[w,k]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/about",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[x]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/timeline",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[_]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/projects",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[A]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/testimonials",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[P]})),_:1}),Object(a["h"])(S,{id:"menu",to:"/contact",class:"nav-item nav-link"},{default:Object(a["A"])((function(){return[C]})),_:1})])]),Object(a["h"])(T),Object(a["h"])(N)],64)}var S=n("9d8d"),T=n("fd2d"),N=n("0e1d"),B=n.n(N),E={class:"landing"},q=Object(a["f"])('<section style="object-fit:cover;padding-bottom:50px;" id="landing-page"><div class="px-4 py-5 text-center"><br><br><br><br><br><img id="landing-photo" class="d-block mx-auto mb-4 img-responsive" src="'+B.a+'" alt="" style="border:3px solid white;" width="372" height="357"><h1 id="purple-myname" class="display-5 fw-bold" style="font-family:sans-serif -apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, Oxygen, Ubuntu, Cantarell, &#39;Open Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif;"><b> Bulela Gomoshe</b></h1> <br><div class="col-lg-6 mx-auto"><h2 class="text-dark text-size-10pxlead mb-4"> I am an aspirant <b>Fullstack Developer</b>. <p>I offer <b>Web Development</b> services.</p><p> Lets connect!</p></h2></div><div class="d-grid gap-2 d-flex justify-content-center"><a style="color:rgb(49, 49, 49);" href=" https://github.com/BulelaG" target="_blank"><i style="font-size:2em;" class="bi bi-github"></i></a><a style="color:rgb(49, 66, 212);" href="https://www.linkedin.com/in/bulelag/" target="_blank"><i style="font-size:2em;" class="bi bi-linkedin"></i></a><a style="color:rgb(49, 66, 212);" href="https://www.linkedin.com/in/bulelag/" target="_blank"><img style="padding-top:5px;" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/34/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"></a><br><br><br><br><br><br></div></div></section>',1),F=[q];function H(e,t,n,o,r,c){return Object(a["q"])(),Object(a["d"])("div",E,F)}var I={name:"Landing-page",props:{msg:String}},M=n("6b0d"),R=n.n(M);const G=R()(I,[["render",H]]);var D=G,z={components:{Navbar:S["a"],Footer:T["a"],LandingPage:D}};n("a922");const U=R()(z,[["render",L]]);var J=U,W=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),K={class:"home"};function Q(e,t,n,o,r,c){var i=Object(a["w"])("Navbar"),s=Object(a["w"])("LandingPage");return Object(a["q"])(),Object(a["d"])("div",K,[Object(a["h"])(i),Object(a["h"])(s,{msg:"Welcome to my page.js App"})])}var V={name:"Home",components:{LandingPage:D,Navbar:S["a"],Footer:T["a"]}};n("dfac");const X=R()(V,[["render",Q],["__scopeId","data-v-efcb1a2a"]]);var Y=X,Z=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/timeline",name:"Timeline",component:function(){return n.e("projects").then(n.bind(null,"f67a"))}},{path:"/projects",name:"Projects",component:function(){return n.e("projects").then(n.bind(null,"acca"))}},{path:"/testimonials",name:"Testimonials",component:function(){return n.e("projects").then(n.bind(null,"66d9"))}}],$=Object(W["a"])({history:Object(W["b"])("/"),routes:Z}),ee=$;Object(a["c"])(J).use(ee).mount("#app")},"9d8d":function(e,t,n){"use strict";var a=n("7a23"),o={class:"nav"};function r(e,t,n,r,c,i){return Object(a["q"])(),Object(a["d"])("div",o)}var c={name:"Navbar"},i=n("6b0d"),s=n.n(i);const l=s()(c,[["render",r]]);t["a"]=l},a181:function(e,t,n){},a922:function(e,t,n){"use strict";n("a181")},c5d5:function(e,t,n){},dfac:function(e,t,n){"use strict";n("c5d5")},fd2d:function(e,t,n){"use strict";var a=n("7a23"),o=function(e){return Object(a["t"])("data-v-3afd436c"),e=e(),Object(a["r"])(),e},r={class:"footer"},c=o((function(){return Object(a["e"])("div",{class:"footer-copyright text-center py-3"},[Object(a["g"])("© 2020 Copyright: "),Object(a["e"])("a",{href:" https://github.com/BulelaG"}," Bulela Gomoshe")],-1)})),i=[c];function s(e,t,n,o,c,s){return Object(a["q"])(),Object(a["d"])("div",r,i)}var l={name:"Footer"},u=(n("0f64"),n("6b0d")),b=n.n(u);const d=b()(l,[["render",s],["__scopeId","data-v-3afd436c"]]);t["a"]=d}});
//# sourceMappingURL=app.45895558.js.map