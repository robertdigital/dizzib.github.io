(function(e){e(["when"],function(e){"use strict";function r(e){this._resolvers=e.resolvers;this._pluginApi=e.pluginApi}r.prototype={isRef:function(e){return e&&e.hasOwnProperty("$ref")},parse:function(e){return this.create(e.$ref,e)},create:function(e,r){var n,t,i;n=this;t=e.indexOf("!");i=e.substring(0,t);e=e.substring(t+1);return{resolver:i,name:e,options:r,resolve:function(){return n._resolve(i,e,r)}}},_resolve:function(r,n,t){var i,s;i=e.defer();if(r){s=this._resolvers[r];if(s){s(i.resolver,n,t||{},this._pluginApi)}else{i.reject("No resolver plugin found: "+r)}}else{i.reject("Cannot resolve ref: "+n)}return i.promise}};return r})})(typeof define=="function"?define:function(e,r){module.exports=r.apply(this,e.map(function(e){return require(e)}))});