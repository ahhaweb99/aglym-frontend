$(document).ready(function(){
	//Script for top menus (main-site, language, search) =========================== //
	var menuArray=[$('#main-site-nav'), $('#language-nav'), $('#search-field')];
	var animDuration = 500;
	//main mobile navigation toggle
	$('#main-nav-link').click(function(){

		if(menuArray[2].hasClass('on')) {
			menuArray[2].removeClass('on');
			setTimeout(function(){ toggleMenus(menuArray[0],menuArray[1]); }, animDuration)
		} else {
			toggleMenus(menuArray[0],menuArray[1]);
		}
		
	});

	function toggleMenus(m1, m2) {

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

		var wrapperHeight = $('#main-nav-wrapper').height();

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


});

