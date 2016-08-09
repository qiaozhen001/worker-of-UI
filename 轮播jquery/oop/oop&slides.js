function Slides($element,options){
  this.options = options;
  this.$element = $element;
  this.init();
 
  //this.hover = false;
};

Slides.prototype.init = function(){
      this.prepareHtml();
      
      this.bindEvent();
      if(this.options.auto){
        this.autoplay();}
      }
      

Slides.prototype.prepareHtml = function(){
      this.current = 1;
      var $art = this.$element;
      var options = this.options;
       this.current = 0;
      var $pics = $art.children().wrapAll('<div class=list></div>').css({
        float: 'left'
      });
      this.$pics = $pics;
      console.log($pics.length)
      var $list = $art.children().wrapAll('<div class=viewpoint></div>').css({
        width: $pics.length * options.width,
        overflow: 'hidden',
        position: 'relative',
        left: 0
      });
      this.$list = $list;
      var $viewpoint = $list.parent().css({
        width: options.width,
        overflow: 'hidden'
      });
      this.$viewpoint = $viewpoint;
      var $prev = $('<button>prev</button>').appendTo($viewpoint);
      this.$prev = $prev;
      var $next = $('<button>next</button>').appendTo($viewpoint);
      this.$next = $next;
      console.log($prev)
     
  }    


Slides.prototype.bindEvent = function(){
      var self = this
     
      this.$next.on('click',function(){
        self.next();
      });
      this.$prev.on('click',function(){
        self.prev();
      });
      this.$pics.on('mouseenter',function(){
        
            window.clearInterval(self.timer)
            //self.hover = true;
        }).on('mouseleave',function(){
            self.autoplay()
            //self.hover = false;
        });
};



Slides.prototype.prev = function(index){
    self = this
    timer = this.timer
   if (timer) {
    window.clearInterval(timer)
   }
    this.enableAutoplay = false
    this.$list.children().last().insertBefore(self.$list.children().first())
    this.$list.css('left',-this.options.width)
    this.$list.stop(true,true).animate({
      'left': 0,
      'opacity': '0',
      'flter': 'Alpha(Opacity=0)'
    },500,function(){
      self.$list.css({
        'opacity': '1',
      'flter': 'Alpha(Opacity=1)'
      })
      self.autoplay()
    })
   // this.$list.children().last().insertBefore(self.$list.children().first())

}

Slides.prototype.next = function(){
       self = this
       timer = this.timer
       if(timer){
        window.clearInterval(timer)
       }
      
       this.$list.stop(true,true).animate({
        'left': -this.options.width,
        'opacity': '0',
        'flter': 'Alpha(Opacity=0)'
       },500,function(){
          self.$list.css({
            'left':0 ,
            'opacity': '1',
            'flter': 'Alpha(Opacity=1)'
        })
          self.$list.children().first().insertAfter(self.$list.children().last());
          self.autoplay()
       })
}


Slides.prototype.autoplay = function(){
        var self = this
        if (this.timer) {
        window.clearInterval(self.timer)
      }
        this.timer = setInterval(function(){
               self.$list.stop(true,true).animate({
        'left': -self.options.width,
        'opacity': '0',
        'flter': 'Alpha(Opacity=0)'
       },500,function(){
          
          self.$list.css({
            'left':0 ,
            'opacity': '1',
        'flter': 'Alpha(Opacity=1)'
        })
          self.$list.children().first().insertAfter(self.$list.children().last());
         
       })
            },4000);
        };

$.fn.slides = function(options){
  this.each(function(){
    var element = this
    var slides = new Slides($(element),options)
  })
}      



$('.arts').slides({width:200,auto:true})
