(function(){define(["underscore","modernizr","lib/guardian"],function(a,b){var c;return new(c=function(){function c(){a.extend(this,b)}return c.prototype.orientation=window.onorientationchange!==void 0,c.prototype.is_moz_touch_enabled=function(){return b.mq("(-moz-touch-enabled)")},c}())})}).call(this);