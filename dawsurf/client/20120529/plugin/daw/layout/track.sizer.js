(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["jquery","underscore","lib/platform/window","plugin/constants","plugin/element/gutter","plugin/element/track","lib/guardian"],function(b,c,d,e,f,g){var h;return h=function(){function b(){this._refresh_display_aspect=a(this._refresh_display_aspect,this),this.resize=a(this.resize,this)}return b.prototype._CELL_SIZE_CORRECTION=2,b.prototype._DISPLAY_ASPECT_CORRECTION=.8,b.prototype._TRACK_WIDTH_CORRECTION=8,b.prototype._x_sizes=[],b.prototype.on_resize=function(){},b.prototype.on_track_resize=function(){},b.prototype.resize=function(b){var c,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b==null&&(b={window:d}),this._refresh_display_aspect(b),s=g.get_volumes(),l=s[0],j=s[1],p=Math.sqrt(j)*assert(a(function(){return this._display_aspect},this));for(q=0,r=l.length;q<r;q++)t=l[q],c=t[0],k=t[1],m=Math.max(2,Math.floor(p*k/Math.max(1,j))),c.width(m*e.CELL_SIZE+this._CELL_SIZE_CORRECTION),u=[this._x_sizes[i=c.attr("id")],m],o=u[0],n=u[1],this._x_sizes[i]=n,h=c.is(b.$track)||c.is((v=b.$target)!=null?v.parents(".track"):void 0),(n!==o||h)&&this.on_track_resize({$track:c,x_size:n});return b.width_tracks=g.get_width_total()+f.get_width_total()+this._TRACK_WIDTH_CORRECTION,g.set_width(b),this.on_resize(b)},b.prototype._refresh_display_aspect=function(a){if(a.window)return this._display_aspect=this._DISPLAY_ASPECT_CORRECTION*a.window.width/a.window.height},b}(),new h})}).call(this);