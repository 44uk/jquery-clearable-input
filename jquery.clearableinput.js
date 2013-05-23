/*
 * jquery.clearableinput - https://github.com/yukku0423/jquery-clearableinput
 * jQuery Plugin. tested on 1.9.1
 *
 * Copyright 2013 (c) yukku0423 (yukku0423@gmail.com)
 * Licensed Under the MIT.
 *
 * $Date: 2013-05-23
 */

jQuery.fn.clearableInput = function(args){
    var options = jQuery.extend({
        wrapper: '<div/>',
        wrapper_class: 'clearable-input-wrapper',
        icon: '<span>(X)</span>',
        icon_class: 'clearable-input-icon',
        hide_if_empty: true
    }, args);

    var $this = $(this);
    var $wrapper = $(options.wrapper);
    var $icon = $(options.icon);

    $wrapper.addClass(options.wrapper_class)
        .css('position', 'relative')
        .css('width', $this.outerWidth(true))
    ;

    $icon.addClass(options.icon_class)
        .css('position', 'absolute')
        .css('right', '2px')
        .css('top', '2px')
    ;

    $icon.bind('click', function(e){
        var $this = $(this);

        $this.parent().find('input').val('');

        if (options.hide_if_empty) {
            $this.hide();
        }
    });

    if (options.hide_if_empty) {
        $icon.hide();

        $this.bind('keyup', function(e){
            var $this = $(this);
            var $icon = $this.parent().children('.' + options.icon_class);

            if($this.val() == '') {
                $icon.hide();
            } else {
                $icon.show();
            }
        });
    }

    $this.wrap($wrapper)
        .after($icon)
    ;
};
