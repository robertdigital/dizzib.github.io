(function(define){define(function(){var classRx,trimLeadingRx,splitClassNamesRx,nodeProxyInvoke;classRx="(\\s+|^)(classNames)(\\b(?![\\-_])|$)";trimLeadingRx=/^\s+/;splitClassNamesRx=/(\b\s+\b)|(\s+)/g;function addClass(e,n){var t;t=_stripClass(e.className,n);e.className=t+(t&&n?" ":"")+n}function removeClass(e,n){e.className=_stripClass(e.className,n)}function toggleClass(e,n){var t;t=e.className.replace(trimLeadingRx,"");e.className=_stripClass(e.className,n);if(t==e.className){e.className=t+(t&&n?" ":"")+n}}function _stripClass(e,n){var t;if(!n){return e}n=n.replace(splitClassNamesRx,function(e,n,t){return t?"":"|"});t=new RegExp(classRx.replace("classNames",n),"g");return e.replace(t,"").replace(trimLeadingRx,"")}if(document&&document.appendChild.apply){nodeProxyInvoke=function jsInvoke(e,n,t){if(typeof n=="string"){n=e[n]}return n.apply(e,t)}}else{nodeProxyInvoke=function evalInvoke(node,method,args){var argsList;if(typeof method=="function"){return method.apply(node,args)}argsList=["a","b","c","d","e"].slice(0,args.length).join(",");function invoke(a,b,c,d,e){return eval("node."+method+"("+argsList+");")}return invoke.apply(this,args)}}function byId(e){return document.getElementById(e)}function queryAll(e,n){return(n||document).querySelectorAll(e)}function query(e,n){return(n||document).querySelector(e)}function placeAt(e,n,t){var r,s;if("length"in n){for(s=0;s<n.length;s++){placeAt(s===0?e:e.cloneNode(true),n[s],t)}return e}r=n.parentNode;if(!isNaN(t)){if(t<0){t=0}_insertBefore(n,e,n.childNodes[t])}else if(t=="at"){n.innerHTML="";_appendChild(n,e)}else if(t=="last"){_appendChild(n,e)}else if(t=="first"){_insertBefore(n,e,n.firstChild)}else if(t=="before"){_insertBefore(r,e,n)}else if(t=="after"){if(n==r.lastChild){_appendChild(r,e)}else{_insertBefore(r,e,n.nextSibling)}}else{throw new Error("Unknown dom insertion command: "+t)}return e}function _insertBefore(e,n,t){e.insertBefore(n,t)}function _appendChild(e,n){e.appendChild(n)}function nodeProxy(e){if(!e||!e.nodeType||!e.setAttribute||!e.getAttribute){return}return{get:function(n){if(n in e){return e[n]}else{return e.getAttribute(n)}},set:function(n,t){if(n in e){return e[n]=t}else{return e.setAttribute(n,t)}},invoke:function(n,t){return nodeProxyInvoke(e,n,t)},destroy:function(){if(e.destroy){e.destroy()}var n=e.parentNode;if(n){n.removeChild(e)}},clone:function(n){if(!n){n={}}return e.cloneNode(!("deep"in n)||n.deep)}}}return{byId:byId,querySelector:query,querySelectorAll:queryAll,placeAt:placeAt,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,nodeProxy:nodeProxy}})})(typeof define=="function"&&define.amd?define:function(e){module.exports=e()});