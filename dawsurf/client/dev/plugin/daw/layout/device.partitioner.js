(function(){var t=function(t,n){return function(){return t.apply(n,arguments)}};define(["underscore","lib/guardian"],function(n,e){var r;return new(r=function(){function r(){this.partition=t(this.partition,this)}r.prototype.partition=function(t,r){var i,a,o,u,l,c,p,s,f,g,h,_;e.assert(function(){return t&&r&&t.length===r.length});g=this._get_parts(t,r),l=g[0],u=g[1];h=[[],e.assert(function(){return l["*"][0]})],p=h[0],f=h[1];for(c in l){i=l[c];if(!(c!=="*")){continue}s=n.compact(n.sortBy(i,function(t){return t.length}));_=[n.last(s),n.flatten(n.initial(s))],a=_[0],o=_[1];if(a.length>1){p.push({type:"tame",name:this._get_part_name(u[c],a),group_names:a})}else{o=o.concat(a)}f=f.concat.apply(f,o)}f=n.intersection(t,f);if(f.length>0){p.insert({type:"wild",group_names:f},0)}return p};r.prototype._get_parts=function(t,n){var e,r,i,a,o,u,l,c,p,s,f,g,h,_;l={};c={"*":[[]]};for(a=h=0,_=t.length;h<_;a=++h){i=t[a];e=0;p="*";r=i.replace(/left/i,"1").replace(/right/i,"2");f=/(\d+)/g;if(n[a]>1){while((o=f.exec(r))!=null){s=o.index>0?r.slice(0,+(o.index-1)+1||9e9):"";g=r.slice(o.index).replace(o[0],"");u=(s+g).trim_lr();p=u.condense();e=n[a]}}if(!(c[p]!=null)){l[p]=u;c[p]=[]}if(!(c[p][e]!=null)){c[p][e]=[]}c[p][e].push(i)}return[c,l]};r.prototype._get_part_name=function(t,n){if(t.length){return t}else{return n.join("/")}};return r}())})}).call(this);