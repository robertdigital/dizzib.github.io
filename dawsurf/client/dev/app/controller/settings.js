(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define(["underscore","knockout","model/settings","lib/platform/features"],function(t,n,l,r){var u;return new(u=function(){function u(){this.init=e(this.init,this)}u.prototype.init=function(){var e,t,n,r,u;r=l.settings;u=[];for(t=0,n=r.length;t<n;t++){e=r[t];u.push(this.load(e))}return u};u.prototype.load=function(e){var l,u,a,i,o=this;if((i=(a=u=e).value)==null){a.value=n.observable(null)}u.value(u.value_default());u.is_bool=t.isBoolean(u.value());u.is_string=t.isString(u.value());u.value_display=n.computed(function(){return o._get_value_display(u)});if(!r.localstorage){return}if((l=localStorage[u.store_key])==null){return}return u.value(JSON.parse(l))};u.prototype.save=function(e){if(!r.localstorage){return}return localStorage[e.store_key]=JSON.stringify(e.value())};u.prototype._get_value_display=function(e){var t,n;switch(false){case!e.is_bool:if(e.value()){return(t=e.value_display_true)!=null?t:"yes"}else{return(n=e.value_display_false)!=null?n:"no"}break;default:return e.value()}};return u}())})}).call(this);