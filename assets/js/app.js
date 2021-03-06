/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../css/global.scss';
// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
import $ from 'jquery';
import 'bootstrap'
import '@fortawesome/fontawesome-free/js/all.min';
import 'jquery-parallax.js';

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view()
{
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
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
$(function () {
    $('[data-toggle="popover"]').popover()
});
