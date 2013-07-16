(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=new(function(){function a(){this._wire_app=b(this._wire_app,this),this._start_app=b(this._start_app,this),this._check_for_timely_boot=b(this._check_for_timely_boot,this),this.boot=b(this.boot,this)}return a.prototype._TIMEOUT_MS=15e3,a.prototype._is_loaded=!1,a.prototype.fail=function(a){throw console.log("FAIL: ",a.message),a},a.prototype.boot=function(){var a=this;return window.onerror=function(a,b,c){if(confirm("A showstopper error just occurred.\n\n"+a+"\n\nUrl:"+b+"\n\nLine:"+c+"\n\nPress OK to reload the app or cancel to close this dialog"))return window.location.href=window.location.href},setTimeout(this._check_for_timely_boot,this._TIMEOUT_MS),curl(["lib.boot"],function(b){return b.load(a._wire_app)})},a.prototype._check_for_timely_boot=function(){if(!this._is_loaded)throw new Error("App failed to start within "+this._TIMEOUT_MS/1e3+" seconds.")},a.prototype._start_app=function(a){return console.log("starting"),a.controller_app.init(),this._is_loaded=!0,delete curl},a.prototype._wire_app=function(){return console.log("wiring"),curl("wire!app.wire").then(this._start_app,this.fail)},a}()),a.boot()}).call(this);