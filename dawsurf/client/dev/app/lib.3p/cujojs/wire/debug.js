(function(t,e){e(["meld"],function(e){var n,r,o,i;function u(){}o=typeof console!="undefined"?console:t["console"]||{log:u,error:u};function c(t){var e=t.stack||t.stacktrace;if(!e){e=t.sourceURL&&t.line?t.sourceURL+":"+t.line:t.message||t}o.error(e)}n=a();r=5e3;function f(t,e){var r,o;r=n();o="(total: "+(e?r.total+"ms, context: "+e():r)+"): ";return"DEBUG "+o+t}function a(){var t,e;t=(new Date).getTime();e=t;return function n(){var n,r,o;n=(new Date).getTime();r=n-t;o=n-e;e=n;return{total:r,split:o,toString:function(){return""+o+"ms / "+r+"ms"}}}}function s(t){return!!t}function l(t){if(!t){return s}var e=t.test?t:new RegExp(t);return function(t){return e.test(t)}}function g(t){return typeof Node==="object"?t instanceof Node:t&&typeof t==="object"&&typeof t.nodeType==="number"&&typeof t.nodeName==="string"}i=function(){var t,n,r,i;t=0;n=".";for(var u=0;u<8;u++){n+=n}r="configure";i=/^[^_]/;function c(t,e,n,r){console.log(t+e+((new Date).getTime()-n.getTime())+"ms): ",r)}function f(e){return{around:function(r){var i,u,f,a;a=n.substr(0,t);u=a+"DEBUG: "+e+"."+r.method;++t;o.log(u,r.args);try{f=new Date;i=r.proceed();c(u," RETURN (",f,i);return i}catch(s){c(u," THROW (",f,s?s.toString():s);throw s}finally{--t}}}}return function(t,n,o){var u,c,a,s,p,d;s=t.trace.filter?l(t.trace.filter):o;p=t.trace.pointcut||i;a=t.trace.step||r;function m(t,e){return typeof t[e]==="function"&&e!=="wire$plugin"&&p.test(e)}function h(t){var e=[];if(g(t)){return e}for(var n in t){if(m(t,n)){e.push(n)}}return e}d=[];u=function(t,n){if(s(t)){d.push(e.add(n,h,f(t)))}};c=function(){for(var t=d.length-1;t>=0;--t){d[t].remove()}};var v=n[a]||function(t){t.resolve()};n[a]=function(t,e,n){u(e.path,e.target);v(t,e,n)};return{trace:u,untrace:c}}}();function p(){o.log("---------------------------------------------------")}return{wire$plugin:function d(t,e,n){var s,g,d,m,h,v,y,R,T,w,D,x;T=n.verbose;s=a();m=0;h="WIRING";x={trace:u,untrace:u};w=l(n.filter);function N(t){return f(t,s)}o.log(N("Context init"));t.then(function C(t){G();o.log(N("Context ready"),t)},function E(t){G();console.error(N("Context ERROR: ")+t,t);c(t)});e.then(function b(){x.untrace();o.log(N("Context destroyed"))},function O(t){x.untrace();o.error(N("Context destroy ERROR")+t,t);c(t)});function U(t,e){return function(n,r){G();var i=r.path;if(d[i]){d[i].status=t}if(e&&w(i)){var u=f(t+" "+(i||r.id||""),s);if(r.target){o.log(u,r.target,r.spec)}else{o.log(u,r)}}if(m){R=setTimeout(I,g)}n.resolve()}}d={};g=n.timeout||r;v=U("created",T);y=U("destroyed",true);function G(){clearTimeout(R);R=null}function I(){if(!R){return}var t,e,n,r,i;p();if(m){r=[];i=[];o.error(h+": No progress in "+g+"ms, status:");for(t in d){e=d[t];n=t+": "+e.status;(e.status=="ready"?r:i).push({msg:n,spec:e.spec})}if(i.length>0){p();o.log("Components that DID NOT finish wiring");for(t=i.length-1;t>=0;--t){e=i[t];o.error(e.msg,e.spec)}}if(r.length>0){p();o.log("Components that finished wiring");for(t=r.length-1;t>=0;--t){e=r[t];o.log(e.msg,e.spec)}}}else{o.error(h+": No components created after "+g+"ms")}p()}D={create:function(t,e){var n=e.path;m++;d[n||"(unnamed-"+m+")"]={spec:e.spec};v(t,e)},configure:U("configured",T),initialize:U("initialized",T),ready:U("ready",true),destroy:function(t,e){delete d[e.path];m--;h="DESTROY";y(t,e)}};if(n.trace){x=i(n,D,w)}R=setTimeout(I,g);return D}}})})(this,typeof define=="function"?define:function(t,e){module.exports=e.apply(this,t.map(function(t){return require(t)}))});