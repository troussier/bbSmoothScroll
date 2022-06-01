/*
 * スムーズスクロールプラグイン
 */
;(function($){
    'use strict';
    
    $.fn.bbSmoothScroll = function(options) {
        var settings = $.extend({
            duration: 800,
            padding: 0,
            pushHash: true
        }, options);
        
        var $page = $('html, body');
        var events = "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove";
        function scrollStop() {
            $page.stop();
        }
        this.on('click', function(e){
            var $this = $(this);
            e.preventDefault();
            var $target = $(decodeURI(this.hash));
            if (!$target.length) {
                return;
            }
            var hashOffset = $target.offset().top;
            var duration = ($this.data('bbss-duration') !== undefined) ? $this.data('bbss-duration') : settings.duration;
            var padding = ($this.data('bbss-padding') !== undefined) ? $this.data('bbss-padding') : settings.padding;
            $page.on(events, scrollStop);
            $page.not(':animated').animate({
                scrollTop: hashOffset - padding
            }, duration, 'swing', function() {
                $page.off(events, scrollStop);
            });
            var pushHash = (function() {
                if ($this.data('bbss-push-hash') === 1) return true;
                if ($this.data('bbss-push-hash') === 0) return false;
                return settings.pushHash;
            })();
            if (pushHash !== false) {
                window.history.pushState(null, null, this.hash);
            }
        });
        
        return this;
    };
}(jQuery));
