(function(){var e=function(e,n){return function(){return e.apply(n,arguments)}};define(["jquery","underscore","lib/guardian","plugin/lib/ui/scrollport","plugin/model/setting/is-super-scroll","plugin/element/track","css!./mixer"],function(n,r,t,i,u,c){var o;return new(o=function(){function r(){this.create=e(this.create,this)}r.prototype.create=function(e){return c.prepend(e,this._create())};r.prototype._create=function(){return n.zen(".mixer")};return r}())})}).call(this);