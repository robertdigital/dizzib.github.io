(function(){define(function(){return Array.prototype.insert=function(a,b){return this.splice(b,0,a),this},Array.prototype.remove=function(a){var b,c;return(b=this.indexOf(a))>-1&&([].splice.apply(this,[b,b-b+1].concat(c=[])),c),this}})}).call(this);