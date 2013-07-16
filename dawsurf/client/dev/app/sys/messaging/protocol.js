(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define(["lib/guardian","sys/messaging/entity/folder","sys/messaging/entity/param"],function(t,n,s){var a;return new(a=function(){a.prototype._VERSION="B2";a.prototype.TRIGGERS={BANG:"BA",PARAM_UPDATE:"PU",PROTOCOL_PROBE:"XP"};function a(){this.handshake=e(this.handshake,this);this.COMMANDS={FA:n.add,FC:n.clear,FI:n.insert,FM:n.move,FR:n.ready,FX:n.remove,FN:n.rename,PA:s.add,PN:s.rename,PV:s.revalue,XP:this.handshake}}a.prototype.on_handshake_fail=function(){};a.prototype.on_handshake_pass=function(){};a.prototype.handshake=function(e){if(t.assert(function(){return e.version})===this._VERSION){return this.on_handshake_pass()}else{return this.on_handshake_fail({message:"Unable to start because this app uses message protocol "+this._VERSION+"										but the server uses "+e.version+". Please update this app and/or the server to										compatible versions."})}};return a}())})}).call(this);