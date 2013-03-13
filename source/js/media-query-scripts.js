$(document).ready(function(){
  //The scripts in here are triggered by listening to media querie events fired by mediaCheck.js
  
  mediaCheck({
    media: '(max-width: 767px)',
    entry: function() {
       closeExpanders();
    },
    exit: function() {
    	//remove mobile nav
      	removeMenus();
         closeExpanders();
    }

  });

  function removeMenus() {
  	$('#main-site-nav').removeAttr('style');
		$('#main-site-nav').removeClass('on');

		$('#language-nav').removeAttr('style');
		$('#language-nav').removeClass('on');

		$('#search-field').removeClass('on');
		$('#ipad-drop').removeClass('on');

    $('#sub-nav').removeAttr('style');
    $('#sub-nav').removeClass('on');


  }

  function closeExpanders(){

    $('.expander-content').removeClass('on');
    $('.expander-content').removeAttr('style');
    $('.expand').text('Open');
  }

});



