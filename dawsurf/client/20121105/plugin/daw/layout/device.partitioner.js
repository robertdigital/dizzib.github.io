(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["underscore","lib/guardian"],function(b){var c;return c=function(){function c(){this.partition=a(this.partition,this)}return c.prototype.partition=function(a,c){var d,e,f,g,h,i,j,k,l,m,n,o;assert(function(){return a&&c&&a.length===c.length}),m=this._get_parts(a,c),h=m[0],g=m[1],n=[[],assert(function(){return h["*"][0]})],j=n[0],l=n[1];for(i in h){d=h[i];if(i==="*")continue;k=b.compact(b.sortBy(d,function(a){return a.length})),o=[b.last(k),b.flatten(b.initial(k))],e=o[0],f=o[1],e.length>1?j.push({type:"tame",name:this._get_part_name(g[i],e),group_names:e}):f=f.concat(e),l=l.concat.apply(l,f)}return l=b.intersection(a,l),l.length>0&&j.insert({type:"wild",group_names:l},0),j},c.prototype._get_parts=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;i={},j={"*":[[]]};for(f=0,o=a.length;f<o;f++){e=a[f],c=0,k="*",d=e.replace(/left/i,"1").replace(/right/i,"2"),m=/(\d+)/g;if(b[f]>1)while((g=m.exec(d))!=null)l=g.index>0?d.slice(0,g.index-1+1||9e9):"",n=d.slice(g.index).replace(g[0],""),h=(l+n).trim_lr(),k=h.condense(),c=b[f];j[k]==null&&(i[k]=h,j[k]=[]),j[k][c]==null&&(j[k][c]=[]),j[k][c].push(e)}return[j,i]},c.prototype._get_part_name=function(a,b){return a.length?a:b.join("/")},c}(),new c})}).call(this);