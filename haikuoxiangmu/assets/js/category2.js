/*-----------选项卡------------*/
$(function(){
  (function(){
     $('.list-wrap').mouseover(function(){
    $('.list-con').show();
  }).mouseout(function(){
    $('.list-con').hide();
  })
 
   $('.list-con li').has('ul').mouseover(function(){
    var that = $(this);
    that.children('ul').show();
   }).mouseout(function(){
    $(this).children('ul').hide();
   })
  })();
 
})