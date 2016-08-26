/*
 * スムーズスクロールプラグイン
 * $('.scroll').bbSmoothScroll({
 *     duration: 800,
 *     padding: 0
 * });
 * <a href="#jumpto" class="scroll" data-duration="800" data-padding="0">FIRE<a>
 */
;(function($){
    'use strict';
    
    $.fn.bbSmoothScroll = function(options) {
        var settings = $.extend({
            duration: 800,
            padding: 0
        }, options);
        
        var $page = $('html, body');
        var events = "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove";
        function scrollStop() {
            $page.stop();
        }
        this.on('click', function(e){
            var $this = $(this);
            e.preventDefault();
            var $target = $(this.hash);
            if (!$target.length) {
                return;
            }
            var hashOffset = $target.offset().top;
            var duration = $this.data('duration') || settings.duration;
            var padding = $this.data('padding') || settings.padding;
            $page.on(events, scrollStop);
            $page.not(':animated').animate({
                scrollTop: hashOffset - padding
            }, duration, 'swing', function() {
                $page.off(events, scrollStop);
            });
            window.history.pushState(null, null, this.hash);
        });
        
        return this;
    };
}(jQuery));


