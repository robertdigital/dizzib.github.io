(function(){define(["jquery","underscore"],function(e,t){e.fn.indicate=function(){var i,l;if(e(this[0]).is(":visible")){i=e(this);l=function(){i.css({visibility:"hidden"});return t.delay(function(){return i.css({visibility:"visible"})},125)};t.repeat(l,250,3,true)}return this};e.fn.pos=function(){var e,t,i,l,n,s,o,f;s=[0,0,this[0]],l=s[0],n=s[1],i=s[2];while(i!=null&&i.offsetLeft!=null&&i.offsetTop!=null){o=[i.offsetLeft-i.scrollLeft,i.offsetTop-i.scrollTop],e=o[0],t=o[1];f=[l+e,n+t,i.offsetParent],l=f[0],n=f[1],i=f[2]}return{x:l,y:n}};return e.scrollbarWidth=function(){var e,t,i,l,n;if(n===void 0){e=document.createElement("p");e.style.width="100%";e.style.height="200px";t=document.createElement("div");t.style.position="absolute";t.style.top="0px";t.style.left="0px";t.style.visibility="hidden";t.style.width="200px";t.style.height="150px";t.style.overflow="hidden";t.appendChild(e);document.body.appendChild(t);i=e.offsetWidth;t.style.overflow="scroll";l=e.offsetWidth;if(i===l){l=t.clientWidth}document.body.removeChild(t);n=i-l}return n}})}).call(this);