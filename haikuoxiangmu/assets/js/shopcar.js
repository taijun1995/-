$(function(){
	 $('#all input').click(function () {
        var $checkboxs = $('.alllist input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $checkboxs.prop("checked", true);
        } else {
            $checkboxs.prop("checked", false);
        }
    });

  
  function sum(){
                var len = $('.goodscheckinput').length; 
                var num = 0;
                $('.goodscheckinput').each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $('#all input').prop("checked", true);
                    
                }else {
                  $('#all input').prop("checked", false);
                }
                
  }

   $('.typeall input').click(function(){
      var $list_input=$(this).parents('.goodslist').find('.goodscheckinput');
    if ($(this).is(':checked')) {
      $list_input.prop("checked",true);
      
    }else{
      $list_input.prop("checked",false);
      
    } 
    sum();
    
})
$(".goodslist").click(function(){
      var $ul_input=$(this).find('.typecheck'); 
              var len = $(this).find('.goodscheckinput').length;
                var num = 0;
                $(this).find('.goodscheckinput').each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
          $ul_input.prop("checked",true);
        }else{
          $ul_input.prop("checked",false);
        }
      sum();
})

$('.jia').click(function(){
    if($(this).prev('.num').val()>100){
      $(this).prev('.num').val(100);
      $('.alert').show().val('超出库存了！');
      setTimeout(function(){$('.alert').hide();},2000);
      return false;
    }else{
      $(this).prev('.num').val(parseInt($(this).prev('.num').val())+1);
    }
    
})
    
$('.jian').click(function(){
    if($(this).next('.num').val()<=1)
      $(this).next('.num').val(1);
    else
      $(this).next('.num').val(parseInt($(this).next('.num').val())-1); 
})

$('.num').keyup(function () {
        var $count = 0;
        if($(this).val()==''){
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g,'1'));
        $count = $(this).val();
        
    })

})

/*------------弹层----------------*/
$(function(){
    var condel,
        door,
        news; 
    $('.deletes').click(function(){
      condel = $(this).parent();
      news = $(this).parent().parent();
            door  = $(this).parents('.door');
      $('.model').fadeIn(300);
      $('.bg').fadeIn(300);
    }) 
        $('.close').click(function(){
          del();
        })
        $('.cancel').click(function(){
          del();
        })
    function del(){
      $('.model').fadeOut(300);
      $('.bg').fadeOut(300);
    }

    $('.sure').click(function(){
             condel.remove();
             $('.hello').css('display','none');
             $('.list').remove();
             $('.alllist').remove();
             $('.empty-wrap').toggle();
             if(news.find('div').length==0){
              door.remove();
             }
             del();

    })

})