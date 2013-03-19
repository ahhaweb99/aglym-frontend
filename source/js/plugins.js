// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.
$(window).load(function(){
		console.log('scripts');

	if($('.slider--large').length) {
		console.log('scripts-loading');
		yepnope({
  			load: ['js/vendor/jquery.royalslider.min.js', 'js/vendor/jquery.rs.auto-height.min.js', 'js/vendor/jquery.rs.bullets.min.js'],
  			complete: function () {
     		 // all the scripts have loaded, do whatever you want here
     		 	$('.slider--large').royalSlider({
				    arrowsNav: false,
				    fadeinLoadedSlide: true,
				    controlNavigationSpacing: 0,
				    imageAlignCenter:false,
				    loop: false,
				    loopRewind: true,
				    numImagesToPreload: 3,
				    keyboardNavEnabled: true,
				    usePreloader:true,
				    autoHeight:true,
				    allowCSS3:true,
				    controlNavigation: 'bullets'
		  		});

		  		setTimeout(function() { $('.slider--large').removeClass('inactive'); }, 1000);
		  	
 			 }
		});	

	}

	if($('.slider--with-panel').length) {
		yepnope({
  			load: ['js/vendor/jquery.royalslider.min.js', 'js/vendor/jquery.rs.auto-height.min.js', 'js/vendor/jquery.rs.bullets.min.js'],
  			complete: function () {
     		 // all the scripts have loaded, do whatever you want here
     		 	$('.slider--with-panel').royalSlider({
				    arrowsNav: false,
				    fadeinLoadedSlide: true,
				    controlNavigationSpacing: 0,
				    imageAlignCenter:false,
				    loop: false,
				    loopRewind: true,
				    numImagesToPreload: 3,
				    keyboardNavEnabled: true,
				    usePreloader:true,
				    autoHeight:true,
				    allowCSS3:true,
				    controlNavigation: 'bullets'
		  		});

		  		setTimeout(function() { $('.slider--with-panel').removeClass('inactive'); }, 1000);

     		}


		});	

	}
});