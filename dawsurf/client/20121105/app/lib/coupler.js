(function(){var a=Array.prototype.slice;define([],function(){var b;return b=function(a){var b;return(b=a.module_name)!=null?b:a.__proto__.constructor.name.replace(/Object/,"")},{connect:function(b,c,d,e){var f,g,h,i;(h=b.handler_arrs)==null&&(b.handler_arrs={});if(b.handler_arrs[c]==null){if(typeof (f=b[c])!="function")throw"Unable to find event "+c+" on "+b.module_name;if(typeof d[e]!="function")throw"Unable to find event "+e+" on "+d.module_name;b[c]=function(){var d,e,g,h,i,j,k,l;d=1<=arguments.length?a.call(arguments,0):[],h=f.apply(null,d),k=b.handler_arrs[c];for(i=0,j=k.length;i<j;i++)l=k[i],g=l[0],e=l[1],g[e].apply(g,d);return h}}return((i=(g=b.handler_arrs)[c])!=null?i:g[c]=[]).push([d,e]),this},disconnect:function(a,b,c,d){var e,f,g;if(a.handler_arrs==null)throw""+a.module_name+" does not have any handlers";if((f=a.handler_arrs[b])==null)throw"Unable to find any handlers on "+a.module_name+"#"+b+" ";return a.handler_arrs[b]=function(){var a,b,h,i;i=[];for(a=0,b=f.length;a<b;a++)h=f[a],g=h[0],e=h[1],(g!==c||e!==d)&&i.push([g,e]);return i}(),this}}})}).call(this);