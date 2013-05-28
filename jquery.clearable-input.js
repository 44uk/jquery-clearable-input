/**
 * jquery.clearableinput - https://github.com/yukku0423/jquery-clearableinput
 * jQuery Plugin. tested on 1.9.1
 *
 * Copyright 2013 (c) yukku0423 (yukku0423@gmail.com)
 * Licensed Under the MIT.
 *
 * $Date: 2013-05-23
 */
(function (jQuery) {
    jQuery.fn.clearableInput = function (args) {
        var options = jQuery.extend({
            wrapper: '<div/>',
            wrapper_class: 'clearable-input-wrapper',
            icon: '<span>(X)</span>',
            icon_class: 'clearable-input-icon',
            adjust_right: '2px',
            adjust_top: '2px',
            hide_if_empty: true
        }, args);

        var $this = jQuery(this);
        var $wrapper = jQuery(options.wrapper);
        var $icon = jQuery(options.icon);

        $wrapper.addClass(options.wrapper_class)
            .css('position', 'relative')
            .css('display', 'inline-block')
            .css('width', $this.outerWidth(true))
        ;

        $icon.addClass(options.icon_class)
            .css('position', 'absolute')
            .css('right', options['adjust_right'])
            .css('top', options['adjust_top'])
        ;

        $icon.bind('click', function (e) {
            var $this = jQuery(this);

            $this.parent().find('input').val('');

            if (options.hide_if_empty) {
                $this.hide();
            }

            if (typeof (options.callback) === 'function') {
                options.callback();
            }
        });

        if (options.hide_if_empty) {
            if ($this.val() == '') {
              $icon.hide();
            }

            $this.bind('keyup', function () {
                var $this = jQuery(this);
                var $icon = $this.parent().children('.' + options.icon_class);

                if ($this.val() == '') {
                    $icon.hide();
                } else {
                    $icon.show();
                }
            });
        }

        $this.wrap($wrapper).after($icon);
    }
}(jQuery));
