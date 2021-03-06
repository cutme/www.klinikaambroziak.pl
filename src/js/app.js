/*jshint expr:true */

(function(window, document, $, amb, undefined) {
	'use strict';
	
	$(document).ready(function() {
		
		amb.Layout.lazy();
		amb.Layout.showOnScroll();
		amb.Layout.svgInline();
		amb.Nav.init();
		amb.Slider.init();
		amb.Helper.isInView();
		amb.Helper.isMobile();

		amb.Helper.exist('#longbox') && amb.Longbox.init();
		amb.Helper.exist('#map') && amb.googleMap.init();
		amb.Helper.exist('#team') && amb.Team.init();	
		amb.Helper.exist('.js-niceSelect') && amb.Helper.ns();
		
//		$("#container").niceScroll();
	});

}(window, document, jQuery, window.amb = window.amb || {}));
