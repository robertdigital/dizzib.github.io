(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};define(["jquery","underscore","css!./box","css!./cells"],function(e,n){var o;return new(o=function(){function n(){this._create_box=t(this._create_box,this);this.auto_expand=t(this.auto_expand,this);this.toggle=t(this.toggle,this);this.get_volume=t(this.get_volume,this);this.create=t(this.create,this);this.init=t(this.init,this)}n.prototype._AUTO_EXPAND_TAME_BOX_THRESHOLD=4;n.prototype.init=function(t){return t.$desk.on("safe-tap",".box.tame > .head",{toggle:this.toggle},function(t){t.data.toggle(e(this));return t.handled=true})};n.prototype.on_group_create=function(){};n.prototype.on_toggle=function(){};n.prototype.create=function(t){var n,o,i,r,a,s,u,h,p,c;n=t.$box=this._create_box(t);if(t.type==="wild"){o=e(e.zen(".cells")).appendTo(n)}h=t.groups;c=[];for(s=0,u=h.length;s<u;s++){p=h[s],a=p[0],i=p[1],r=p[2];if(t.type==="tame"){o=e(e.zen(".cells")).appendTo(n)}c.push(this.on_group_create({uid:a,name:i,tint:r,$cells:o}))}return c};n.prototype.get_volume=function(t){return t.find(".box:not(.hidden) .cell:not(.hidden)").length};n.prototype.toggle=function(t){var n;n=t.parents(".box").toggleClass("hidden");e(".group:not(:hidden), .head:not(:hidden)",n).indicate();return this.on_toggle({$target:n})};n.prototype.auto_expand=function(t){var e;if((e=t.find(".box.tame")).length<=this._AUTO_EXPAND_TAME_BOX_THRESHOLD){return e.removeClass("hidden")}};n.prototype._create_box=function(t){var n;n=e(e.zen(".box."+t.type));if(t.type==="tame"){n.addClass("hidden").append(e.zen(".head.cell>h3{"+t.name.fracture()+"}"))}return n};return n}())})}).call(this);