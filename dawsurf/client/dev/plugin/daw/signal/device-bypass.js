(function(){var i=function(i,t){return function(){return i.apply(t,arguments)}};define(["underscore","lib/guardian"],function(t,e){var r;return new(r=function(){function t(){this.refresh=i(this.refresh,this);this.ready_device=i(this.ready_device,this);this.remove_device=i(this.remove_device,this);this.add_param=i(this.add_param,this);this.add_group=i(this.add_group,this)}t.prototype._duid_by_puid=[];t.prototype.on_bypass=function(){};t.prototype.add_group=function(i){var t=this;if(this._duid!=null){e.assert(function(){return i.target_uid===t._duid})}else{this._duid=i.target_uid}return this._gname=i.name};t.prototype.add_param=function(i){var t=this;if(i.name!=="Bypass"||this._gname!=="*"){return}e.assert(function(){return t._duid!=null});this._duid_by_puid[i.uid]=this._duid;return this.refresh(i)};t.prototype.remove_device=function(i){var t,e,r,d;r=this._duid_by_puid;d=[];for(e in r){t=r[e];if(i.uid===t){d.push(delete this._duid_by_puid[e])}else{d.push(void 0)}}return d};t.prototype.ready_device=function(){return this._duid=void 0};t.prototype.refresh=function(i){if(this._duid_by_puid[i.uid]==null){return}return this.on_bypass({uid:this._duid_by_puid[i.uid],bypass:i.value>=50})};return t}())})}).call(this);