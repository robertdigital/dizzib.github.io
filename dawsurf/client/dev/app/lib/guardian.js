(function(){define(["lib/sys/log"],function(n){var r;return new(r=function(){function r(){}r.prototype.assert=function(r){var e,t;if(!(t=r())){n.add(e=("Assertion failed: "+r+" evaluated false at "+(new Error).stack).replace(/\n/g,""));throw new Error(e)}return t};return r}())})}).call(this);