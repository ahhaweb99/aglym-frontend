$(document).ready(function(){
	//Script for top menus (main-site, language, search) =========================== //
	var menuArray=[$('#main-site-nav'), $('#language-nav'), $('#search-field'), $('#sub-nav')];
	var animDuration = 500;
	//main mobile navigation toggle
	$('#main-nav-link').click(function(){
		if(menuArray[2].hasClass('on')) {
			menuArray[2].removeClass('on');
			setTimeout(function(){ toggleMenus(menuArray[0],menuArray[1]); }, animDuration);
		} else {
			toggleMenus(menuArray[0],menuArray[1]);
		}
		
	});

	$('#sub-nav-link').click(function(){

			toggleSubNav();
	});

	function removeSubNav(){
		$('#sub-nav').removeClass('on');
		$('#sub-nav').removeAttr('style');

	}

	function toggleSubNav() {
			$('#sub-nav').toggleClass('on');
			if($('#sub-nav').hasClass('on')) {
				menuAnim($('#sub-nav'));
			} else {
				$('#sub-nav').removeClass('on');
				menuAnim($('#sub-nav'));
			}
			
	}

	function toggleMenus(m1, m2) {
		removeSubNav();
		if(m2.hasClass('on')) {
			menusOff();
			setTimeout(function(){ m1.toggleClass('on'); menuAnim(m1); },animDuration);
		} else {
			m1.toggleClass('on');
			menuAnim(m1);
		}
	}
	//mobile language navigation toggle
	$('#language-link').click(function(){

		if(menuArray[2].hasClass('on')) {
			menuArray[2].removeClass('on');
			setTimeout(function(){ toggleMenus(menuArray[1],menuArray[0]); }, animDuration)
		} else {
			toggleMenus(menuArray[1],menuArray[0]);
		}
	});

	//mobile search toggle
	$('#search-link').click(function(){
		if(menuArray[0].hasClass('on') || menuArray[1].hasClass('on') ) {
			menusOff();
			setTimeout(function(){ $('#search-field').toggleClass('on'); },animDuration);
		} else {
			
			$('#search-field').toggleClass('on');
			
		}
	});

	function menuAnim(menu) {

		var wrapperHeight = menu.parent().height();
		console.log(wrapperHeight);
		if(menu.attr('id') == 'sub-nav'){
			wrapperHeight = wrapperHeight - 42;
			//console.log('matches!');
		}
		// 	console.log('#main-nav');
		// 	wrapperHeight = $('#main-nav-wrapper').height();
		// } else {
		// 	console.log('#sub-nav', menu.parent());
		// 	wrapperHeight = $('#sub-nav').height();
		// }

		if(menu.hasClass('on')) {
			menu.css('height', wrapperHeight);
		} else {
			menu.removeAttr('style');
		}
	};

	function menusOff() {

		$.each(menuArray, function() {
			this.removeClass('on');
			this.removeAttr('style');
		});
	}

	$('#ipad-drop-link').click(function(){
		$('#ipad-drop').toggleClass('on');
	});

	$('#ipad-drop a').click(function(){
		$('#ipad-drop').removeClass('on');
	});

	// END -- Script for top menus (main-site, language, search) =========================== //

	if($('.widget--expander').length) {
		$('.expand').click(function(e){
			e.preventDefault();
			var expander = $(this).parent().find('.expander-content'); 
			expander.toggleClass('on');

			if(expander.hasClass('on')) {
				 $(this).text('Close')
			var parentHeight = $(this).parent().height();
			expander.css('height', parentHeight-50);

			} else {
				$(this).text('Open')
				expander.removeAttr('style');
			}
		});
	}

	if($('.reveal').length) {
		$('.reveal-link').click(function(e){
			e.preventDefault();
			var expander = $(this).parent(); 
			expander.toggleClass('on');

			if(expander.hasClass('on')) {
			
			var parentHeight = $(this).parent().height();
			expander.css('height', parentHeight);

			} else {
				
				expander.removeAttr('style');
			}
		});
	}
});

