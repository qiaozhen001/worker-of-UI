$.goTopButton = function(){
   var $button = $('<div class="goTopButton"></div>');
   var $arrow = $('<div class="goTopButton-arrow"></div>');
   $button.append($arrow);
   $('body').append($button);
   $button.hide();
  

   	
   	$(window).on('scroll',function(){
   		var foo = $('body').scrollTop();
   		console.log(foo);
   		if(foo>10){
   			$button.show();
   		}else{
   			$button.hide();
   			}
   	});
  

   



   
   $button.click(function(){
   	$('body').animate({scrollTop: 0},'100');
   });

};

$.goTopButton();

