System.register(["./chunk-tip.js","./chunk-array.js"],(function(t){"use strict";var n,i,e,o,r,u,s,c,h,f,l,a,_,y,g,v,M;return{setters:[function(t){n=t.b,i=t.E,e=t.d,o=t.F,r=t.c,u=t.B,s=t.G},function(t){c=t.n,h=t.i,f=t.d,l=t.a,a=t.t,_=t.h,y=t.j,g=t.y,v=t.f,M=t.g}],execute:function(){t({a:H,b:function(){return n.apply(A(g,T,y,_,m,p,d,x,a).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},c:A,e:function(t,n){let i,e;if(void 0===n)for(const o of t)null!=o&&(void 0===i?o>=o&&(i=e=o):(i>o&&(i=o),e<o&&(e=o)));else{let o=-1;for(let r of t)null!=(r=n(r,++o,t))&&(void 0===i?r>=r&&(i=e=r):(i>r&&(i=r),e<r&&(e=r)))}return[i,e]},l:function(t,n){var i=M(!0),e=null,o=H,r=null;function u(u){var s,c,h,f=(u=v(u)).length,l=!1;for(null==e&&(r=o(h=Y())),s=0;s<=f;++s)!(s<f&&i(c=u[s],s,u))===l&&((l=!l)?r.lineStart():r.lineEnd()),l&&r.point(+t(c,s,u),+n(c,s,u));if(h)return r=null,h+""||null}return t="function"==typeof t?t:void 0===t?N:M(t),n="function"==typeof n?n:void 0===n?Z:M(n),u.x=function(n){return arguments.length?(t="function"==typeof n?n:M(+n),u):t},u.y=function(t){return arguments.length?(n="function"==typeof t?t:M(+t),u):n},u.defined=function(t){return arguments.length?(i="function"==typeof t?t:M(!!t),u):i},u.curve=function(t){return arguments.length?(o=t,null!=e&&(r=o(e)),u):o},u.context=function(t){return arguments.length?(null==t?e=r=null:r=o(e=t),u):e},u},p:Y,x:N,y:Z});var x=t("m",c((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t})));x.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?c((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,i){n.setTime(+n+i*t)}),(function(n,i){return(i-n)/t})):x:null};var d=t("s",c((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*h)}),(function(t,n){return(n-t)/h}),(function(t){return t.getUTCSeconds()}))),p=c((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*h)}),(function(t,n){t.setTime(+t+n*f)}),(function(t,n){return(n-t)/f}),(function(t){return t.getMinutes()})),m=c((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*h-t.getMinutes()*f)}),(function(t,n){t.setTime(+t+n*l)}),(function(t,n){return(n-t)/l}),(function(t){return t.getHours()})),T=t("d",c((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))),w=1e3,b=6e4,S=36e5,D=864e5,E=2592e6,k=31536e6;function F(t){return new Date(t)}function L(t){return t instanceof Date?+t:+new Date(+t)}function A(t,n,c,h,f,l,a,_,y){var g=i(e,e),v=g.invert,M=g.domain,x=y(".%L"),d=y(":%S"),p=y("%I:%M"),m=y("%I %p"),T=y("%a %d"),C=y("%b %d"),j=y("%B"),q=y("%Y"),I=[[a,1,w],[a,5,5e3],[a,15,15e3],[a,30,3e4],[l,1,b],[l,5,3e5],[l,15,9e5],[l,30,18e5],[f,1,S],[f,3,108e5],[f,6,216e5],[f,12,432e5],[h,1,D],[h,2,1728e5],[c,1,6048e5],[n,1,E],[n,3,7776e6],[t,1,k]];function P(i){return(a(i)<i?x:l(i)<i?d:f(i)<i?p:h(i)<i?m:n(i)<i?c(i)<i?T:C:t(i)<i?j:q)(i)}function Y(n,i,e,o){if(null==n&&(n=10),"number"==typeof n){var r=Math.abs(e-i)/n,c=u((function(t){return t[2]})).right(I,r);c===I.length?(o=s(i/k,e/k,n),n=t):c?(o=(c=I[r/I[c-1][2]<I[c][2]/r?c-1:c])[1],n=c[0]):(o=Math.max(s(i,e,n),1),n=_)}return null==o?n:n.every(o)}return g.invert=function(t){return new Date(v(t))},g.domain=function(t){return arguments.length?M(o.call(t,L)):M().map(F)},g.ticks=function(t,n){var i,e=M(),o=e[0],r=e[e.length-1],u=r<o;return u&&(i=o,o=r,r=i),i=(i=Y(t,o,r,n))?i.range(o,r+1):[],u?i.reverse():i},g.tickFormat=function(t,n){return null==n?P:y(n)},g.nice=function(t,n){var i=M();return(t=Y(t,i[0],i[i.length-1],n))?M(function(t,n){var i,e=0,o=(t=t.slice()).length-1,r=t[e],u=t[o];return u<r&&(i=e,e=o,o=i,i=r,r=u,u=i),t[e]=n.floor(r),t[o]=n.ceil(u),t}(i,t)):g},g.copy=function(){return r(g,A(t,n,c,h,f,l,a,_,y))},g}var C=Math.PI,j=2*C,q=1e-6,I=j-q;function P(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Y(){return new P}function B(t){this._context=t}function H(t){return new B(t)}function N(t){return t[0]}function Z(t){return t[1]}P.prototype=Y.prototype={constructor:P,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,i,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+i)+","+(this._y1=+e)},bezierCurveTo:function(t,n,i,e,o,r){this._+="C"+ +t+","+ +n+","+ +i+","+ +e+","+(this._x1=+o)+","+(this._y1=+r)},arcTo:function(t,n,i,e,o){t=+t,n=+n,i=+i,e=+e,o=+o;var r=this._x1,u=this._y1,s=i-t,c=e-n,h=r-t,f=u-n,l=h*h+f*f;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>q)if(Math.abs(f*s-c*h)>q&&o){var a=i-r,_=e-u,y=s*s+c*c,g=a*a+_*_,v=Math.sqrt(y),M=Math.sqrt(l),x=o*Math.tan((C-Math.acos((y+l-g)/(2*v*M)))/2),d=x/M,p=x/v;Math.abs(d-1)>q&&(this._+="L"+(t+d*h)+","+(n+d*f)),this._+="A"+o+","+o+",0,0,"+ +(f*a>h*_)+","+(this._x1=t+p*s)+","+(this._y1=n+p*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,i,e,o,r){t=+t,n=+n;var u=(i=+i)*Math.cos(e),s=i*Math.sin(e),c=t+u,h=n+s,f=1^r,l=r?e-o:o-e;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+c+","+h:(Math.abs(this._x1-c)>q||Math.abs(this._y1-h)>q)&&(this._+="L"+c+","+h),i&&(l<0&&(l=l%j+j),l>I?this._+="A"+i+","+i+",0,1,"+f+","+(t-u)+","+(n-s)+"A"+i+","+i+",0,1,"+f+","+(this._x1=c)+","+(this._y1=h):l>q&&(this._+="A"+i+","+i+",0,"+ +(l>=C)+","+f+","+(this._x1=t+i*Math.cos(o))+","+(this._y1=n+i*Math.sin(o))))},rect:function(t,n,i,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +i+"v"+ +e+"h"+-i+"Z"},toString:function(){return this._}},B.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}}}}}));
//# sourceMappingURL=chunk-line-61ccea21.js.map