(function(){var t=function(t,n){return function(){return t.apply(n,arguments)}};define(function(){var n;return new(n=function(){function n(){this.rename=t(this.rename,this);this.remove=t(this.remove,this);this.move=t(this.move,this);this.insert=t(this.insert,this);this.add=t(this.add,this)}n.prototype.on_add=function(){};n.prototype.on_insert=function(){};n.prototype.on_move=function(){};n.prototype.on_remove=function(){};n.prototype.on_rename=function(){};n.prototype.add=function(t){return this.on_add(t)};n.prototype.insert=function(t){return this.on_insert(t)};n.prototype.move=function(t){return this.on_move(t)};n.prototype.remove=function(t){return this.on_remove(t)};n.prototype.rename=function(t){return this.on_rename(t)};return n}())})}).call(this);