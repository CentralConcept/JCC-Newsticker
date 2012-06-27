/**
 *  Project: jcc newsticker
 *  Description: lightweight Newsticker
 *  Author: Martin von Loh 
 *  Version: 1.2
 *  Dual MIT/BSD license
 */
;(function ( $, window, document, undefined ) {

    var pluginName = 'ticker',
        defaults = {
            element: this.element,
            timeout: 4000,
            effect : 'fade'
        };
        
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        defaults = this.options;
        this.init();
    }
    
    var ticker = function(){
        setTimeout(function(){
            switch (defaults.effect) {
                case 'fade':
                    $(defaults.element).children().eq(0).fadeOut(function(){
                        $(this).detach().appendTo(defaults.element);
                        $(defaults.element).children().eq(0).fadeIn();
                    });
                break;
                case 'slide':
                    $(defaults.element).children().eq(0).slideUp(function(){
                        $(this).detach().appendTo(defaults.element);
                        $(defaults.element).children().eq(0).slideDown();
                    });
                break;
                default:
                    $(defaults.element).children().eq(0).fadeOut(function(){
                        $(this).detach().appendTo(defaults.element);
                        $(defaults.element).children().eq(0).fadeIn();
                    });
                } 
            ticker();
        }, defaults.timeout);
    };

    Plugin.prototype.init = function () {
        defaults.element = this.element;
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
                if ($(this).children().length > 1){
                    $(this).children().not(':first').hide();
                    ticker();
		}
            }
        });
    }

})( jQuery, window, document );