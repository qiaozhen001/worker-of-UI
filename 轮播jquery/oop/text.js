$.fn.slides = function(options){
    console.log(this);

    this.each(function(){
    	//console.log(this);
    	var $art = $(this);
    	//console.log($art);
    	var current = 0;
    	var $pics = $art.children().wrapAll('<div class=list></div>').css({
    		float: 'left'
    	});
    	//console.log($pics.length);
    	var $list = $art.children().wrapAll('<div class=viewpoint></div>').css({
    		width: $pics.length * options.width,
    		overflow: 'hidden',
    		position: 'relative',
    		left: 0
    	});
    	var $viewpoint = $list.parent().css({
    		width: options.width,
    		overflow: 'hidden'
    	});

    	//var hover = false;
    	var $prev = $('<button>prev</button>').appendTo($viewpoint);
    	var $next = $('<button>next</button>').appendTo($viewpoint);
    	var go = function(index){
            console.log(index)
    		if (index<0) {
    			index = $pics.length-1;
    		};
    		if(index>$pics.length-1){
    			index = 0;
    		};
            if(timer){
                window.clearInterval(timer);
            };
            console.log(index);
    		$list.stop(true,true).animate({
    			left: index * (-options.width)
    		},function(){
    			current = index;
                autoplay();
    		});
    	};
    	$next.on('click',function(){
    		go(current+1);
    	});
    	$prev.on('click',function(){
    		go(current-1);
    	});
    	
    	//自动播放功能
        var timer;
        var autoplay = function(){
            timer = setInterval(function(){
                go(current+1);
            },4000);
        };
    	if(options.auto){
    		autoplay();
    	};

        //悬停
        $pics.on('mouseenter',function(){
            window.clearInterval(timer);
            //hover = true;
        }).on('mouseleave',function(){
            autoplay();
           // hover = false;
        });
    
    });
};

$('.arts').slides({
	width: 200,
	height: 150,
	auto: 'ture'
});