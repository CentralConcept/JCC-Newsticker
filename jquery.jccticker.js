/**
 *  Project: jcc newsticker
 *  Description: lightweight Newsticker
 *  Author: Martin von Loh
 *  Version: 1.2
 *  License: GPLv3
 */
(function(jQuery, window, document) {
    
    var pluginName = 'jccticker',
        defaults = {
            element: this.element,
            timeout: 4000,
            effect: 'fade'
        },ticker,
        ticker = function () {
            setTimeout(function () {
                switch (defaults.effect) {
                case 'fade':
                    jQuery(defaults.element).children().eq(0).fadeOut(function () {
                        jQuery(this).detach().appendTo(defaults.element);
                        jQuery(defaults.element).children().eq(0).fadeIn();
                    });
                    break;
                case 'slide':
                    jQuery(defaults.element).children().eq(0).slideUp(function () {
                        jQuery(this).detach().appendTo(defaults.element);
                        jQuery(defaults.element).children().eq(0).slideDown();
                    });
                    break;
                default:
                    jQuery(defaults.element).children().eq(0).fadeOut(function () {
                        jQuery(this).detach().appendTo(defaults.element);
                        jQuery(defaults.element).children().eq(0).fadeIn();
                    });
                }
                ticker();
            }, defaults.timeout);
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = jQuery.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        defaults = this.options;
        this.init();
    }

    Plugin.prototype.init = function () {
        defaults.element = this.element;

    };

    jQuery.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!jQuery.data(this, 'plugin_' + pluginName)) {
                jQuery.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                if (jQuery(this).children().length > 1) {
                    jQuery(this).children().not(':first').hide();
                    ticker();
                }
            }
        });
    };

})(jQuery, window, document);