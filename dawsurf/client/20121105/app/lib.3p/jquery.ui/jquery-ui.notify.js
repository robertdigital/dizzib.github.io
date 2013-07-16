/* jQuery Notify UI Widget 1.5 by Eric Hynds
 * http://www.erichynds.com/jquery/a-jquery-ui-growl-ubuntu-notification-widget/
 *
 * Depends:
 *   - jQuery 1.4+
 *   - jQuery UI 1.8 widget factory
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
*/(function(a){a.widget("ech.notify",{options:{speed:500,expires:5e3,stack:"below",custom:!1,queue:!1},_create:function(){var b=this;this.templates={},this.keys=[],this.element.addClass("ui-notify").children().addClass("ui-notify-message ui-notify-message-style").each(function(c){var d=this.id||c;b.keys.push(d),b.templates[d]=a(this).removeAttr("id").wrap("<div></div>").parent().html()}).end().empty().show()},create:function(b,c,d){typeof b=="object"&&(d=c,c=b,b=null);var e=this.templates[b||this.keys[0]];return d&&d.custom&&(e=a(e).removeClass("ui-notify-message-style").wrap("<div></div>").parent().html()),this.openNotifications=this.openNotifications||0,(new a.ech.notify.instance(this))._create(c,a.extend({},this.options,d),e)}}),a.extend(a.ech.notify,{instance:function(a){this.__super=a,this.isOpen=!1}}),a.extend(a.ech.notify.instance.prototype,{_create:function(b,c,d){this.options=c;var e=this,f=d.replace(/#(?:\{|%7B)(.*?)(?:\}|%7D)/g,function(a,c){return c in b?b[c]:""}),g=this.element=a(f),h=g.find(".ui-notify-close");return typeof this.options.click=="function"&&g.addClass("ui-notify-click").bind("click",function(a){e._trigger("click",a,e)}),h.length&&h.bind("click",function(){return e.close(),!1}),this.__super.element.queue("notify",function(){e.open(),typeof c.expires=="number"&&c.expires>0&&setTimeout(a.proxy(e.close,e),c.expires)}),(!this.options.queue||this.__super.openNotifications<=this.options.queue-1)&&this.__super.element.dequeue("notify"),this},close:function(){var b=this.options.speed;return this.element.fadeTo(b,0).slideUp(b,a.proxy(function(){this._trigger("close"),this.isOpen=!1,this.element.remove(),this.__super.openNotifications-=1,this.__super.element.dequeue("notify")},this)),this},open:function(){if(this.isOpen||this._trigger("beforeopen")===!1)return this;var a=this;return this.__super.openNotifications+=1,this.element[this.options.stack==="above"?"prependTo":"appendTo"](this.__super.element).css({display:"none",opacity:""}).fadeIn(this.options.speed,function(){a._trigger("open"),a.isOpen=!0}),this},widget:function(){return this.element},_trigger:function(a,b,c){return this.__super._trigger.call(this,a,b,c)}})})(jQuery);