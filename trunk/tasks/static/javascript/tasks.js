/* Copyright 2007 Google */ (function() { 
function f(){this.j=null;this.ea=0;if(!window.RegExp)return;var a=[f.OPERA,f.IE,f.SAFARI,f.FIREFOX,f.NETSCAPE,f.MOZILLA],b=navigator.userAgent.toLowerCase();for(var e=0;e<a.length;e++){var c=a[e];if(b.indexOf(c)!=-1){this.j=c;var d=new RegExp(c+"[ /]?([0-9]+(.[0-9]+)?)");if(d.exec(b)!=null)this.ea=parseFloat(RegExp.$1);break}}}f.OPERA="opera";f.IE="ie";f.SAFARI="safari";f.FIREFOX="firefox";f.NETSCAPE="netscape";f.MOZILLA="mozilla";f.instance=function(){if(!f.f)f.f=new f;return f.f};f.prototype.type=
function(){return this.j};f.prototype.H=function(){return this.j==f.FIREFOX||this.j==f.MOZILLA||this.j==f.NETSCAPE};f.prototype.I=function(){return this.j==f.IE};function i(){j.addListener(window,"resize",k(this,this.q));j.addListener(window,"scroll",k(this,this.q))}i.instance=function(){if(!i.f)i.f=new i;return i.f};i.prototype.show=function(a,b,e){this.close();var c=self.pageYOffset;if(typeof c=="undefined")c=document.documentElement.scrollTop;var d=document.createElement("div");d.style.position="absolute";d.style.left="0px";d.style.top=c+"px";d.style.width="100%";d.style.height="100%";d.style.zIndex=10000;m(d,0.25);document.body.appendChild(d);d.style.backgroundColor=
"black";this.a=a;this.U=a.parentNode;this.e=d;this.s=e;if(a.parentNode){a.parentNode.removeChild(a);a.style.display=""}n(a,k(this,function(g,h){this.fa=g;this.$=h;var l=document.createElement("div");l.style.position="absolute";l.style.width=g+"px";l.style.height=h+"px";l.style.zIndex=10001;l.appendChild(a);this.h=l;this.q();a.style.display="";document.body.appendChild(l);if(b)b()}),0)};i.prototype.close=function(){if(this.e){this.e.parentNode.removeChild(this.e);this.e=null}if(this.h){this.h.parentNode.removeChild(this.h);
this.h=null}if(this.a){if(this.a.parentNode)this.a.parentNode.removeChild(this.a);if(this.U){this.a.style.display="none";this.U.appendChild(this.a)}}if(this.s){this.s();this.s=null}};i.prototype.q=function(){if(!this.e||!this.h)return;var a=self.pageYOffset;if(typeof a=="undefined")a=document.documentElement.scrollTop;var b=Math.floor((this.e.offsetWidth-this.fa)/2),e=Math.floor((this.e.offsetHeight-this.$)/2)+a;this.e.style.top=a+"px";this.h.style.left=b+"px";this.h.style.top=e+"px"};function q(a){a.onselectstart=r;a.unselectable="on";a.style.MozUserSelect="none";a.style.cursor="default"}function t(a){a.onselectstart=null;a.unselectable="off";a.style.MozUserSelect=""}function m(a,b){if(f.instance().I())a.style.filter="alpha(opacity="+Math.round(b*100)+")";else a.style.opacity=b}function u(a){if(a.stopPropagation)a.stopPropagation();else a.cancelBubble=true}function v(a){if(!a)a=window.event;if(a.preventDefault)a.preventDefault();else a.returnValue=false}function w(a,b){x(a,b,
true)}function y(a,b){x(a,b,false)}function x(a,b,e){var c=a.className.split(" "),d=[];for(var g=0;g<c.length;g++)if(c[g]!=b)d.push(c[g]);if(e)d.push(b);a.className=d.join(" ")};function z(a,b,e){this.a=a;this.Z=b;var c=e||a;j.addListener(c,"mousedown",k(this,this.P));q(c);if(c.setCapture)this.t=c;else this.t=window;j.addListener(this.t,"mouseup",k(this,this.R))}z.QUIVER_PIXELS=2;z.MAX_CLICK_TIME=500;z.prototype.C=function(){if(this.o){j.removeListener(this.o);this.o=null;if(document.releaseCapture)document.releaseCapture();j.trigger(this,"dragend")}};z.prototype.P=function(a){if(this.ga||this.o||!this.J(a))return;var b=this.a;if(b.parentNode.style.position!="absolute")b.parentNode.style.position=
"relative";if(b.style.position!="absolute"){var e=b.offsetLeft,c=b.offsetTop,d=b.offsetWidth,g=b.offsetHeight;b.style.left=e+"px";b.style.top=c+"px";b.style.width=d+"px";b.style.height=g+"px";b.style.position="absolute"}this.X=a.screenX;this.Y=a.screenY;this.ba=(new Date).getTime();this.ca=a.screenX;this.da=a.screenY;var h=this.t;if(h.setCapture)h.setCapture(true);this.o=j.addListener(h,"mousemove",k(this,this.Q));j.trigger(this,"dragstart")};z.prototype.R=function(a){this.C();var b=(new Date).getTime();
if(b-this.ba<=z.MAX_CLICK_TIME&&Math.abs(this.ca-a.screenX)<=z.QUIVER_PIXELS&&Math.abs(this.da-a.screenY)<=z.QUIVER_PIXELS)j.trigger(this,"click",a)};z.prototype.Q=function(a){var b=a.screenX-this.X,e=a.screenY-this.Y;this.X=a.screenX;this.Y=a.screenY;var c=this.a,d=c.offsetLeft+b,g=c.offsetTop+e;if(this.Z){var h=c.parentNode.offsetWidth-c.offsetWidth,l=c.parentNode.offsetHeight-c.offsetHeight;d=Math.max(0,Math.min(d,h));g=Math.max(0,Math.min(g,l))}c.style.left=d+"px";c.style.top=g+"px";j.trigger(this,
"drag")};z.prototype.J=function(a){if(f.instance().H())return a.button==0;return a.button==1};var A="__event_listeners__";function j(){this.n=[]}j.addListener=function(a,b,e){return j.l().B(a,b,e)};j.removeListener=function(a){j.l().p(a)};j.trigger=function(){j.prototype.y.apply(j.l(),arguments)};j.clearAll=function(){j.l().E()};j.clearElement=function(a){j.l().F(a)};j.l=function(){if(!j.f)j.f=new j;return j.f};j.prototype.B=function(a,b,e){var c;if(this.m(a))c=this.A(a,b,e);else c=this.z(a,b,e);this.n.push(c);var d=a[A];if(!d){d=[];a[A]=d}d.push(c);return c};j.prototype.p=function(a){if(this.m(a.instance))this.W(a);
else this.V(a);B(this.n,a);var b=a.instance[A];if(b)B(b,a)};j.prototype.y=function(a,b){if(this.m(a))throw new Error("Cannot trigger DOM events");var e="__event__"+b,c=a[e];if(!c)return;var d=[];for(var g=2;g<arguments.length;g++)d.push(arguments[g]);for(var g=0;g<c.length;g++)c[g].apply(a,d)};j.prototype.A=function(a,b,e){var c=e;if(a.addEventListener)a.addEventListener(b,e,false);else if(a.attachEvent){c=function(){e.call(a,window.event)};a.attachEvent("on"+b,c)}return{instance:a,eventName:b,callback:c}};
j.prototype.W=function(a){var b=a.instance;if(b.removeEventListener)b.removeEventListener(a.eventName,a.callback,false);else if(a.instance.detachEvent)b.detachEvent("on"+a.eventName,a.callback)};j.prototype.z=function(a,b,e){var c="__event__"+b,d=a[c];if(!d){d=[];a[c]=d}d.push(e);return{instance:a,eventName:b,callback:k}};j.prototype.V=function(a){var b="__event__"+a.eventName,e=a.instance[b];if(!e)return;B(e,a.callback)};j.prototype.E=function(){while(this.n.length>0)this.p(this.n[0])};j.prototype.F=
function(a){var b=a[A];if(!b)return;while(b.length>0)this.p(b[0])};j.prototype.m=function(a){return a==window||a==window.document||typeof a.nodeType!="undefined"};function C(a,b,e){var c=e||{},d;if(typeof ActiveXObject!="undefined")d=new ActiveXObject("Microsoft.XMLHTTP");else if(window.XMLHttpRequest)d=new XMLHttpRequest;else throw new Error("XMLHttpRequest not supported");if(b)d.onreadystatechange=function(){if(d.readyState==4){b.call(null,d.responseText,d.status);d.onreadystatechange=r}};var g="GET";if(c.post||c.body)g="POST";d.open(g,a,!c.synchronous);if(g=="POST"){var h=c.contentType||"application/x-www-form-urlencoded";d.setRequestHeader("Content-Type",
h)}if(c.username||c.password)d.send(c.body,c.username,c.password);else d.send(c.body);if(c.synchronous&&b)b.call(null,d.responseText,d.status)};function k(a,b){return function(){b.apply(a,arguments)}}function B(a,b){for(var e=0;e<a.length;e++)if(a[e]==b){a.splice(e,1);return true}return false}function r(){return false};function n(a,b,e){D([a],function(c){b(c[0][0],c[0][1])},e)}function D(a,b,e){var c=document.createElement("div");c.style.position="absolute";c.style.left=-screen.width+"px";c.style.top=-screen.height+"px";var d=e||screen.width;c.style.width=d+"px";c.style.height=screen.height+"px";var g=[];for(var h=0;h<a.length;h++){var l=document.createElement("div");l.style.position="absolute";l.style.left="0px";l.style.top="0px";c.appendChild(l);l.appendChild(a[h]);g.push(l)}document.body.appendChild(c);window.setTimeout(function(){var s=
[];for(var o=0;o<g.length;o++){var p=g[o];s.push([p.offsetWidth,p.offsetHeight]);p.removeChild(a[o]);p.parentNode.removeChild(p)}c.parentNode.removeChild(c);g=null;b(s)},0)};function E(a,b,e,c){this.aa=a;this.g=b;this.k=e;this.G=c}E.prototype.key=function(){return this.g};E.parseList=function(a){var b=[];function e(){}e.prototype=E.prototype;for(var c=0;c<a.length;c++){var d=new e;E.apply(d,a[c]);b.push(d)}return b};E.prototype.attach=function(a){var b=this.b("div",a,"task");if(this.G)w(b,"completed");b.style.position="relative";var e=this.b("table",b),c=this.b("tbody",e),d=this.b("tr",c),g=this.b("td",d,"checkbox"),h;try{h=document.createElement('<input type="checkbox"/>');
g.appendChild(h)}catch(l){h=this.b("input",g);h.type="checkbox"}h.name="task";h.value=this.g;h.checked=this.G;j.addListener(h,"click",k(this,this.K));j.addListener(h,"mousedown",u);var s=this.b("td",d,"description");this.d=this.b("div",s);this.d.style.position="relative";this.u();var o=new z(b,true);j.addListener(o,"dragstart",k(this,this.M));j.addListener(o,"dragend",k(this,this.L));j.addListener(o,"drag",k(this,this.N));j.addListener(o,"click",k(this,this.edit));this.D=h;this.a=b;return b};E.prototype.K=
function(){if(this.D.checked)w(this.a,"completed");else y(this.a,"completed");var a=["id="+encodeURIComponent(this.g)];if(this.D.checked)a.push("completed=1");C("/settaskcompleted.do",null,{post:true,body:a.join("&")})};E.prototype.edit=function(){if(this.i)return;var a;try{a=document.createElement('<input type="text"/>')}catch(b){a=this.b("input");a.type="text"}a.style.position="absolute";a.style.left=this.d.offsetLeft-3+"px";a.style.top=this.d.offsetTop-3+"px";a.style.width=this.d.offsetWidth+"px";
a.style.border="1px solid silver";a.style.padding="2px";a.style.margin="0";a.style.zIndex=1;a.value=this.k;t(this.a);j.addListener(a,"keypress",k(this,this.O));j.addListener(a,"blur",k(this,this.v));j.addListener(a,"mousedown",u);this.d.parentNode.appendChild(a);this.d.style.display="none";a.focus();this.i=a};E.prototype.O=function(a){if(a.keyCode==13){v(a);this.v()}else if(a.keyCode==27){v(a);this.r()}};E.prototype.r=function(){this.i.parentNode.removeChild(this.i);this.i=null;this.d.style.display=
"";q(this.a)};E.prototype.v=function(){var a=this.i.value!=this.k;if(a){this.k=this.i.value;this.u()}this.r();if(a)this.save()};E.prototype.u=function(){this.d.innerHTML="&nbsp;";var a=this.b("span",null,"text");a.appendChild(document.createTextNode(this.k));this.d.insertBefore(a,this.d.firstChild)};E.prototype.save=function(){var a=["list="+encodeURIComponent(this.aa),"description="+encodeURIComponent(this.k)];if(this.g)a.push("task="+encodeURIComponent(this.g));C("/edittask.do",k(this,this.S),{post:true,
body:a.join("&")})};E.prototype.S=function(a,b){if(b>=200&&b<300)this.g=a};E.prototype.M=function(){var a=document.createElement("div");a.style.width=this.a.offsetWidth+"px";a.style.height=this.a.offsetHeight+"px";this.a.parentNode.insertBefore(a,this.a);m(this.a,0.5);this.c=a};E.prototype.N=function(){var a=this.a.parentNode,b=this.a.offsetTop,e=this.a.offsetTop+this.a.offsetHeight;for(var c=a.firstChild;c!=null;c=c.nextSibling){if(c==this.a||c==this.c)continue;var d=c.offsetTop,g=c.offsetTop+c.offsetHeight,
h=(d+g)/2;if(d>e)continue;if(g<b)continue;if(d<b&&b<h)if(this.c.nextChild!=c){a.removeChild(this.c);a.insertBefore(this.c,c);return}if(e>h)if(c.nextChild!=this.c){a.removeChild(this.c);a.insertBefore(this.c,c.nextSibling);return}}};E.prototype.L=function(){if(!this.c)return;var a=this.a.parentNode;a.removeChild(this.a);this.a.style.position="relative";this.a.style.width="auto";this.a.style.height="auto";this.a.style.left="auto";this.a.style.top="auto";m(this.a,1);a.insertBefore(this.a,this.c);a.removeChild(this.c);
this.c=null;j.trigger(this,"positionchanged")};E.prototype.b=function(a,b,e){var c=document.createElement(a);if(e)c.className=e;if(b)b.appendChild(c);return c};function F(a,b){this.g=a;this.x=b}F.prototype.attach=function(a){var b=document.createElement("div");b.className="tasklist";b.style.position="relative";a.appendChild(b);this.a=b;var e=[];for(var c=0;c<this.x.length;c++){var d=this.x[c];e.push(d.key());var g=d.attach(b);g.task=d;j.addListener(d,"positionchanged",k(this,this.w))}this.T=e};F.prototype.w=
function(){var a=[];for(var b=this.a.firstChild;b!=null;b=b.nextSibling)if(b.task)a.push(b.task.key());var e=false;for(var c=0;c<a.length;c++)if(a[c]!=this.T[c]){e=true;break}if(!e)return;this.T=a;var d="tasks="+encodeURIComponent(a.join(","));C("/settaskpositions.do",null,{post:true,body:d})};F.prototype.newTask=function(){var a=new E(this.g,null,"",false);this.x.push(a);var b=a.attach(this.a);b.task=a;j.addListener(a,"positionchanged",k(this,this.w));a.edit()};function G(a,b){window[a]=b}G("Task",
E);G("TaskList",F);G("DialogBox",i);G("download",C);
 })();
