(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["./helper","lib/guardian"],function(b){var c;return c=function(){function b(){this.stitch=a(this.stitch,this)}return b.prototype.stitch=function(a){var b,c,d,e,f,g,h,i,j,k;f=assert(function(){return a})[0].matrix.length;for(g=0,i=a.length;g<i;g++)c=a[g],assert(function(){return c.matrix.length===f});d=[];for(b=0,k=f-1;0<=k?b<=k:b>=k;0<=k?b++:b--){e=[];for(h=0,j=a.length;h<j;h++)c=a[h],e.push(c.matrix[b]);d.push(_.flatten(e))}return d},b}(),new c})}).call(this);