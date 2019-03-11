$(function(){
  (function(){
/*-----------选项卡------------*/ 
   $('.list-con li').has('ul').mouseover(function(){
    var that = $(this);
    that.children('ul').show();
   }).mouseout(function(){
    $(this).children('ul').hide();
   })
  })();

 /*----------无缝滚动------------*/
 (function(){
    var ImgLi = $('.like-wrap li'), 
             BtnL =  $('.caileft'),
             BtnR =  $('.cairight'),
             Box =   $('.yourlike');
         var num = 0, 
             timer,    
             len = ImgLi.length; // 图像的总个数
         var wid = ImgLi.first().width();// 一张图的宽

        // 0.无缝滚动初始化
        ImgLi.first().clone().appendTo($('.like-wrap'));
        ImgLi.last().clone().prependTo($('.like-wrap'));
        $('.like-wrap').css({marginLeft:-wid});
      
       // 4. 通过点击左右按钮切换图像
     BtnL.click(function(){
           play(num-1);
      })
      BtnR.click(function(){
           play(num+1);
      })
       // 换图函数
        function play(n){
           // 1. 通animate 动画无缝滚动图
           // 图往左走负值(下一个图), 图往右走正值(上一张图)
           var dir = n>num?-1:1; // 图走的方向
           var dis =Math.abs(n-num);  // 通过按钮选图的跨度
           $('.like-wrap').animate({
               marginLeft:'+='+wid*dir*dis
           },500,function(){
               if(n>len-1){
                  n = 0;
                  $('.like-wrap').css({marginLeft:-wid});
               }else if(n<0){
                  n = len -1;
                  $('.like-wrap').css({marginLeft:-wid*len});
               }
               num = n;
           })
           
           
        }
 })();
 
/*---------------滚动监听选项卡---------------*/
(function(){
     $('.list-wrap').mouseover(function(){
    $('.gundong-list').show();
  }).mouseout(function(){
    $('.gundong-list').hide();
  })
 
   $('.list-con li').has('ul').mouseover(function(){
    var that = $(this);
    that.children('ul').show();
   }).mouseout(function(){
    $(this).children('ul').hide();
   })
  })();

/*--------------猜你喜欢无缝滚动-------------*/  
  (function(){
       var ImgLi = $('.wufenggundong li'), 
             BtnL =  $('.btnleft'),
             BtnR =  $('.btnright'),
             Box =   $('.wufeng-wrap');
         var num = 0,  
             timer,   
             len = ImgLi.length;
         var wid = ImgLi.first().width();

        
        ImgLi.first().clone().appendTo($('.wufenggundong'));
        ImgLi.last().clone().prependTo($('.wufenggundong'));
        $('.wufenggundong').css({marginLeft:-wid});

        timer = setInterval(function(){
             play(num+1);
        },2000);
        
        Box.mouseover(function(){
           BtnL.show();
           BtnR.show();
            clearInterval(timer);
        }).mouseout(function(){
            BtnL.hide();
            BtnR.hide();

            timer=setInterval(function(){
              play(num+1);
            },2000);
        })
      
     BtnL.click(function(){
           play(num-1);
      })
      BtnR.click(function(){
           play(num+1);
      })
       
        function play(n){
           var dir = n>num?-1:1; 
           var dis =Math.abs(n-num);  
           $('.wufenggundong').animate({
               marginLeft:'+='+wid*dir*dis
           },500,function(){
               if(n>len-1){
                  n = 0;
                  $('.wufenggundong').css({marginLeft:-wid});
               }else if(n<0){
                  n = len -1;
                  $('.wufenggundong').css({marginLeft:-wid*len});
               }
               num = n;
           })
           
           
        }
  })();
/*---------------返回顶部--------------*/
  (function(){
      $('.backtop').click(function(){
            $('body,html').animate({
              scrollTop:0
             },500);
    })
  })();

/*---------------楼层----------------*/
 (function(){
    $('.tbar li').click(function(){
      var index = $(this).index();
      var t = $('.layer li').has('section').eq(index).offset().top;
      $('body,html').animate({
        scrollTop:t
      },500);
      $(this).addClass('addcolor').siblings().removeClass('addcolor');
    })








    $(window).scroll(function(){
        var scrollTop;
      $('.layer li').has('section').each(function(){
        //3.1 每个楼层的坐标
        var layerTop = $(this).offset().top;
        console.log(layerTop);
        // 网页滚动条的坐标距离
        scrollTop = $(document).scrollTop();
        //3.2 判断条件：当滚动条滚动的距离和监听的某个楼层重合说明就在哪个楼层上(优化的条件：快重合,差100)
        if(layerTop - scrollTop <100){
                    //3.3 给工具条中当前的标号项添加背景样式
                    $('.tbar li').eq($(this).index()).addClass('addcolor').siblings().removeClass('addcolor');
        }


      })

/*--------------------------*/      
      if(scrollTop >=2800){
                $('.tbar').fadeIn(100);
      }else{
                $('.tbar').fadeOut(100);
      }
    })
    

 })();


})