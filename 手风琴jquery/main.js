

$.fn.accordion = function () {
	
	var $ul = this;
	console.log($ul);
	$ul.on('click','li',function(){
		console.log(1);
		if($(this).hasClass('selected')){
      		$(this).removeClass('selected');
   		}else{
      			$(this)
      			.addClass('selected')
      			.siblings('.selected')
      			.removeClass('selected');
  			}
	});

};

jQuery(document).ready(function($){
	$('ul').accordion();
});