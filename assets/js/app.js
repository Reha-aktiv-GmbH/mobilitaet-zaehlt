/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
require('../img/K+C_2019_Bewegt.jpg');
require('../img/K+C_2019_Läuft.jpg');
require('../img/K+C_2019_Miteinander.jpg');
// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
            $element.parent().addClass('in-visible');
        } else {
            $element.removeClass('in-view');
            $element.parent().removeClass('in-visible');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
