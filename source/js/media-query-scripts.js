$(document).ready(function(){
  //The scripts in here are triggered by listening to media querie events fired by mediaCheck.js
  var entry = false,
      exit = false;
 
  mediaCheck({
    media: '(max-width: 767px)',
    entry: function() {
       console.log('entry');

       entry = true;
       exit = false;
       closeExpanders();
       //switchTableContent();
    },
    exit: function() {
    	//remove mobile nav
        console.log('exit');


        entry = false;
        exit = true;

      	removeMenus();
        closeExpanders();
       // switchTableContent();
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

  function switchTableContent(o) {
    if($('table.responsive').length) {
      // if(exit) {
      //   var swapParent = $('table.checkout tr > td .switch-content')
      //   var swapContent = swapParent.html();
      //   var swapTarget = $('table.checkout tr > td.switch-target');
      //   swapTarget.html(swapContent);
      //   swapParent.html('');

      // } else {
      //   var swapParent = $('table.checkout tr > td.switch-target')
      //   var swapContent = swapParent.html();
      //   var swapTarget = $('table.checkout tr > td .switch-content');
      //   swapTarget.html(swapContent);
      //   swapParent.html('');
      // }
      
      
      // if(exit) {
      //   console.log('EXIT');
      //   var swapParent = $('table.responsive tr > td .switch-content');
      //   swapParent.each(function() {
      //       var swapContent = $(this).html();
      //       console.log(swapContent);

      //       var index = $(this).parent().index();
             

      //       var swapTarget = $('table.responsive tr > td:eq('+index+').switch-target');
      //        console.log($(swapTarget).html());
      //       $(swapTarget).html(swapContent);
      //   });
      // } else {
      //           console.log('ENTRY');

      //     var swapParent = $('table.responsive tr > td.switch-target');
      //   swapParent.each(function() {
      //       var swapContent = $(this).html();
      //        console.log(swapContent);
      //       var index = $(this).index();

      //       var swapTarget = $('table.responsive tr > td:eq('+index+') .switch-content');
          
      //       swapTarget.html(swapContent);
      //   });
      // }
   
    

    }
  }

});



