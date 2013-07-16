(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};define(["jquery","underscore","lib/guardian","input/touch","plugin/constants","text!./param.html","css!./cell","css!./param"],function(e,n,r,s,a,o){var i;return new(i=function(){function a(){this.setup=t(this.setup,this);this.revalue=t(this.revalue,this);this.render=t(this.render,this);this.rename=t(this.rename,this);this.disable_sensor=t(this.disable_sensor,this);this.enable_sensor=t(this.enable_sensor,this);this.init=t(this.init,this)}a.prototype.init=function(t){return this._render=n.template(o)};a.prototype.on_drag_start=function(){};a.prototype.on_drag_stop=function(){};a.prototype.on_touch_start=function(){};a.prototype.on_touch_tap=function(){};a.prototype.enable_sensor=function(t,e){var n=this;e.appendTo(t);e.on(s.event_name_start,function(e){return n.on_touch_start(t,e)});e.on("safe-tap",function(e){return n.on_touch_tap(t,e)});return t};a.prototype.disable_sensor=function(t){var e;e=t.data("sensor");e.off(s.event_name_start);e.off("safe-tap");return t};a.prototype.rename=function(t){return this._get_param(t).find(".name").html(t.name.fracture())};a.prototype.render=function(t,e){return this._render(n.extend(t,e))};a.prototype.revalue=function(t){var e,n,r;e=this._get_param(t).attr("value",t.value);n=e.find(".value").text(t.value_text);if(!n.hasClass(r=t.value_text.lenclass())){n.removeClass(function(t,e){return e.match(/len-(\d+|min|max)/g).join(" ")});n.addClass(r)}return e.find(".meter").width(""+t.value+"%")};a.prototype.setup=function(t){var e;t.data("sensor",e=t.children(".sensor"));return this.enable_sensor(t,e)};a.prototype._get_param=function(t){return e("#"+r.assert(function(){return t.uid})+".param")};return a}())})}).call(this);