(function(){define(function(){var t;return new(t=function(){function t(){}t.prototype.event_name_start="touchstart";t.prototype.event_name_move="touchmove";t.prototype.event_name_end="touchend";t.prototype.get_raw_event=function(t){return t.originalEvent.touches[0]};t.prototype.__create_event_by_raw=function(t){return{originalEvent:{touches:[t]}}};return t}())})}).call(this);