(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["underscore","curl","model/setting/plugin-path","lib/guardian"],function(b,c,d){var e;return e=function(){function e(){this._init=a(this._init,this),this._check_for_timely_load=a(this._check_for_timely_load,this),this.ready=a(this.ready,this),this.kill=a(this.kill,this),this.init=a(this.init,this)}return e.prototype._PLUGIN_LOAD_TIMEOUT_MS=15e3,e.prototype.init=function(){return this._is_loaded=!1,setTimeout(this._check_for_timely_load,this._PLUGIN_LOAD_TIMEOUT_MS),b.extend(curl_cfg.paths,{plugin:d.value()}),c(curl_cfg),this._wire_child().then(this._init,this._fail)},e.prototype.kill=function(){return this._kill()},e.prototype.on_init=function(){},e.prototype.on_kill=function(){},e.prototype.on_ready=function(){},e.prototype.ready=function(){return this.on_ready()},e.prototype._check_for_timely_load=function(){if(!this._is_loaded)throw new Error("Plugin failed to load within "+this._TIMEOUT_MS/1e3+" seconds.")},e.prototype._fail=function(a){throw a},e.prototype._init=function(b){return this._kill=a(function(){return this.on_kill(),b.destroy()},this),this.on_init(),this._is_loaded=!0},e}(),new e})}).call(this);