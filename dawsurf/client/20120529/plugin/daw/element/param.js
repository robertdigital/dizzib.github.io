(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["jquery","strategy/touch","plugin/lib/datatype.extension/string","css!./cell","css!./param"],function(b,c){var d;return d=function(){function d(){this._create_param=a(this._create_param,this),this.revalue=a(this.revalue,this),this.rename=a(this.rename,this),this.add_group=a(this.add_group,this)}return d.prototype.on_add=function(){},d.prototype.on_drag_start=function(){},d.prototype.on_drag_stop=function(){},d.prototype.on_touch_start=function(){},d.prototype.on_touch_tap=function(){},d.prototype.add_group=function(a){var c,d,e,f,g;c=assert(function(){return b("#"+assert(function(){return a!=null?a.group_uid:void 0}))}),g=assert(function(){return a.group_params}).reverse();for(e=0,f=g.length;e<f;e++)d=g[e],c.after(this._create_param(a,d));if(c.parents(".box.wild").length)return c.siblings(".param[data-group-id='"+a.group_uid+"']").addClass("hidden")},d.prototype.rename=function(a){return b(".name","#"+a.uid+".param").html(a.name.fracture())},d.prototype.revalue=function(a){var c,d,e;return d=assert(function(){return b("#"+a.uid+".param")}),e=assert(function(){return b(".value",d)}),c=assert(function(){return b(".meter",d)}),d.attr("value",a.value),e.text(a.value_text),this._render(d,c,a.value)},d.prototype._create_param=function(d,e){var f,g,h,i,j,k,l;return j=b("<div/>").attr({id:e.uid,"class":"cell param tint_"+d.group_tint,"data-group-id":d.group_uid,value:e.value}),f=b("<div/>").attr({"class":"display"}),i=b("<div/>").attr({"class":"pad"}),g=b("<div/>").attr({"class":"meter"}),l=b("<div/>").attr({"class":"value"}).text(e.value_text),h=b("<div/>").attr({"class":"name"}).html(e.name.fracture()),k=b("<div/>").attr({"class":"sensor"}),k.on(c.event_name_start,a(function(a){return this.on_touch_start(e,c.get_raw_event(a))},this)),k.on("safe-tap",a(function(a){return this.on_touch_tap(e,a)},this)),e.name.length>14?h.addClass("font_reduce"):e.name.length<8&&h.addClass("font_enlarge"),this._render(j,g,e.value),f.append(g).append(l),i.append(h),j.append(f).append(i).append(k)},d.prototype._render=function(a,b,c){return b.width(""+c+"%"),c===0?a.addClass("min"):a.removeClass("min"),c===100?a.addClass("max"):a.removeClass("max")},d}(),new d})}).call(this);