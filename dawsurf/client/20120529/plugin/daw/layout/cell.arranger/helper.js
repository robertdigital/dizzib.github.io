(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["underscore","lib/guardian"],function(b){var c;return c=function(){function c(){this.trim_matrix=a(this.trim_matrix,this)}return c.prototype.assert_matrix_dimensions=function(a){var b,c,d,e,f;d=assert(function(){return a}).length,assert(function(){return d>0}),c=a[0].length,assert(function(){return c>0});for(e=0,f=a.length;e<f;e++)b=a[e],assert(function(){return b.length===c});return[c-1,d-1]},c.prototype.create_matrix=function(a,c){var d,e,f,g;d=[];while(a.length)d.push(b.first(a,c)),a=b.rest(a,c);f=b.last(d);if(f!=null&&f.length<c)for(e=1,g=c-f.length%c;1<=g?e<=g:e>=g;1<=g?e++:e--)f.push(0);return d},c.prototype.trim_matrix=function(a){var b,c,d;return d=this.assert_matrix_dimensions(a),b=d[0],c=d[1],a[c].reduce(function(a,b){return Math.abs(a)+b})===0&&(a.length=c),a},c}(),new c})}).call(this);