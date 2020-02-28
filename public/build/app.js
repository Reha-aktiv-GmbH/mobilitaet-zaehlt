(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/global.scss":
/*!********************************!*\
  !*** ./assets/css/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/global.scss */ "./assets/css/global.scss");
/* harmony import */ var _css_global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_global_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ "./node_modules/@fortawesome/fontawesome-free/js/all.min.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_parallax_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-parallax.js */ "./node_modules/jquery-parallax.js/parallax.min.js");
/* harmony import */ var jquery_parallax_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_parallax_js__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.





var $animation_elements = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.animation-element');
var $window = jquery__WEBPACK_IMPORTED_MODULE_1___default()(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.each($animation_elements, function () {
    var $element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height; //check to see if this current container is within viewport

    if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
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
jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-toggle="popover"]').popover();
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJGFuaW1hdGlvbl9lbGVtZW50cyIsIiQiLCIkd2luZG93Iiwid2luZG93IiwiY2hlY2tfaWZfaW5fdmlldyIsIndpbmRvd19oZWlnaHQiLCJoZWlnaHQiLCJ3aW5kb3dfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwid2luZG93X2JvdHRvbV9wb3NpdGlvbiIsImVhY2giLCIkZWxlbWVudCIsImVsZW1lbnRfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJlbGVtZW50X3RvcF9wb3NpdGlvbiIsIm9mZnNldCIsInRvcCIsImVsZW1lbnRfYm90dG9tX3Bvc2l0aW9uIiwiYWRkQ2xhc3MiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsIm9uIiwidHJpZ2dlciIsInBvcG92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxtQkFBbUIsR0FBR0MsNkNBQUMsQ0FBQyxvQkFBRCxDQUEzQjtBQUNBLElBQUlDLE9BQU8sR0FBR0QsNkNBQUMsQ0FBQ0UsTUFBRCxDQUFmOztBQUVBLFNBQVNDLGdCQUFULEdBQ0E7QUFDSSxNQUFJQyxhQUFhLEdBQUdILE9BQU8sQ0FBQ0ksTUFBUixFQUFwQjtBQUNBLE1BQUlDLG1CQUFtQixHQUFHTCxPQUFPLENBQUNNLFNBQVIsRUFBMUI7QUFDQSxNQUFJQyxzQkFBc0IsR0FBSUYsbUJBQW1CLEdBQUdGLGFBQXBEO0FBRUFKLCtDQUFDLENBQUNTLElBQUYsQ0FBT1YsbUJBQVAsRUFBNEIsWUFBWTtBQUNwQyxRQUFJVyxRQUFRLEdBQUdWLDZDQUFDLENBQUMsSUFBRCxDQUFoQjtBQUNBLFFBQUlXLGNBQWMsR0FBR0QsUUFBUSxDQUFDRSxXQUFULEVBQXJCO0FBQ0EsUUFBSUMsb0JBQW9CLEdBQUdILFFBQVEsQ0FBQ0ksTUFBVCxHQUFrQkMsR0FBN0M7QUFDQSxRQUFJQyx1QkFBdUIsR0FBSUgsb0JBQW9CLEdBQUdGLGNBQXRELENBSm9DLENBTXBDOztBQUNBLFFBQUtLLHVCQUF1QixJQUFJVixtQkFBNUIsSUFDQ08sb0JBQW9CLElBQUlMLHNCQUQ3QixFQUNzRDtBQUNsREUsY0FBUSxDQUFDTyxRQUFULENBQWtCLFNBQWxCO0FBQ0FQLGNBQVEsQ0FBQ1EsTUFBVCxHQUFrQkQsUUFBbEIsQ0FBMkIsWUFBM0I7QUFDSCxLQUpELE1BSU87QUFDSFAsY0FBUSxDQUFDUyxXQUFULENBQXFCLFNBQXJCO0FBQ0FULGNBQVEsQ0FBQ1EsTUFBVCxHQUFrQkMsV0FBbEIsQ0FBOEIsWUFBOUI7QUFDSDtBQUNKLEdBZkQ7QUFnQkg7O0FBRURsQixPQUFPLENBQUNtQixFQUFSLENBQVcsZUFBWCxFQUE0QmpCLGdCQUE1QjtBQUNBRixPQUFPLENBQUNvQixPQUFSLENBQWdCLFFBQWhCO0FBQ0FyQiw2Q0FBQyxDQUFDLFlBQVk7QUFDVkEsK0NBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCc0IsT0FBN0I7QUFDSCxDQUZBLENBQUQsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL2dsb2JhbC5zY3NzJztcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCdcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLm1pbic7XG5pbXBvcnQgJ2pxdWVyeS1wYXJhbGxheC5qcyc7XG5cbnZhciAkYW5pbWF0aW9uX2VsZW1lbnRzID0gJCgnLmFuaW1hdGlvbi1lbGVtZW50Jyk7XG52YXIgJHdpbmRvdyA9ICQod2luZG93KTtcblxuZnVuY3Rpb24gY2hlY2tfaWZfaW5fdmlldygpXG57XG4gICAgdmFyIHdpbmRvd19oZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgIHZhciB3aW5kb3dfdG9wX3Bvc2l0aW9uID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcbiAgICB2YXIgd2luZG93X2JvdHRvbV9wb3NpdGlvbiA9ICh3aW5kb3dfdG9wX3Bvc2l0aW9uICsgd2luZG93X2hlaWdodCk7XG5cbiAgICAkLmVhY2goJGFuaW1hdGlvbl9lbGVtZW50cywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgZWxlbWVudF9oZWlnaHQgPSAkZWxlbWVudC5vdXRlckhlaWdodCgpO1xuICAgICAgICB2YXIgZWxlbWVudF90b3BfcG9zaXRpb24gPSAkZWxlbWVudC5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBlbGVtZW50X2JvdHRvbV9wb3NpdGlvbiA9IChlbGVtZW50X3RvcF9wb3NpdGlvbiArIGVsZW1lbnRfaGVpZ2h0KTtcblxuICAgICAgICAvL2NoZWNrIHRvIHNlZSBpZiB0aGlzIGN1cnJlbnQgY29udGFpbmVyIGlzIHdpdGhpbiB2aWV3cG9ydFxuICAgICAgICBpZiAoKGVsZW1lbnRfYm90dG9tX3Bvc2l0aW9uID49IHdpbmRvd190b3BfcG9zaXRpb24pICYmXG4gICAgICAgICAgICAoZWxlbWVudF90b3BfcG9zaXRpb24gPD0gd2luZG93X2JvdHRvbV9wb3NpdGlvbikpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICAkZWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcygnaW4tdmlzaWJsZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2luLXZpZXcnKTtcbiAgICAgICAgICAgICRlbGVtZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpbi12aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuJHdpbmRvdy5vbignc2Nyb2xsIHJlc2l6ZScsIGNoZWNrX2lmX2luX3ZpZXcpO1xuJHdpbmRvdy50cmlnZ2VyKCdzY3JvbGwnKTtcbiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==