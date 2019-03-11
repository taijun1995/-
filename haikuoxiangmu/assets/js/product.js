window.onload=function(){
  /*-------------1.下拉列表--------------*/
  (function(){
      var vips = document.querySelector('.vip-wrap'),
          vcon = document.querySelector('.vip-down'),
          guomei = document.querySelector('.my-guomei'),
          guomeid = document.querySelector('.guomei-con'),
          shop = document.querySelector('.edu-shop'),
          shopd = document.querySelector('.shop-erweima'),
          cen = document.querySelector('.center'),
          ckf = document.querySelector('.kefu-con'),
          net = document.querySelector('.net-nav'),
          can = document.querySelector('.nav-content'),
          phone = document.querySelector('.guomei-phone'),
          num = document.querySelector('.phone-num');
          vips.onmouseover=function(){
            vcon.style.display='block';
            vips.style.backgroundColor='#fff';
            vips.style.borderLeft='1px solid #ccc';
            vips.style.borderRight='1px solid #ccc';
          }
          vips.onmouseout=function(){
            vcon.style.display='none';
            vips.style.backgroundColor='';
            vips.style.borderLeft=''
            vips.style.borderRight='';
          }
          guomei.onmouseover=function(){
            guomeid.style.display='block';
            guomei.style.backgroundColor='#fff';
            guomei.style.borderLeft='1px solid #ccc';
            guomei.style.borderRight='1px solid #ccc'
          }
          guomei.onmouseout=function(){
            guomeid.style.display='none';
             guomei.style.backgroundColor='';
            guomei.style.borderLeft='';
            guomei.style.borderRight='';
          }
          shop.onmouseover=function(){
            shopd.style.display='block';
            shop.style.backgroundColor='#fff';
            shop.style.borderLeft='1px solid #ccc';
            shop.style.borderRight='1px solid #ccc';
          }
          shop.onmouseout=function(){
            shopd.style.display='none';
            shop.style.backgroundColor='';
            shop.style.borderLeft=''
            shop.style.borderRight='';
          }
           cen.onmouseover=function(){
            ckf.style.display='block';
            cen.style.backgroundColor='#fff';
            cen.style.borderLeft='1px solid #ccc';
            cen.style.borderRight='1px solid #ccc';
          }
          cen.onmouseout=function(){
            ckf.style.display='none';
            cen.style.backgroundColor='';
            cen.style.borderLeft='';
            cen.style.borderRight='';
          }
           net.onmouseover=function(){
            can.style.display='block';
            net.style.backgroundColor='#fff';
            net.style.borderLeft='1px solid #ccc';
            net.style.borderRight='1px solid #ccc';
          }
          net.onmouseout=function(){
            can.style.display='none';
            net.style.backgroundColor='';
            net.style.borderLeft=''
            net.style.borderRight='';
          }
           phone.onmouseover=function(){
            num.style.display='block';
            phone.style.backgroundColor='#fff';
            phone.style.borderLeft='1px solid #ccc';
            phone.style.borderRight='1px solid #ccc';
          }
          phone.onmouseout=function(){
            num.style.display='none';
            phone.style.backgroundColor='';
            phone.style.borderLeft=''
            phone.style.borderRight='';
          }

  })();

  /*---------滑过下标切换内容-----------*/
  (function(){
     var tli = document.querySelectorAll('.title li'),
         cli = document.querySelectorAll('.con-list li'),
         len = tli.length;
     console.log(cli);
       for(var i=0;i<len;i++)
       {
        tli[i].index=i;
        tli[i].onmouseover=function(){
          for(var j=0;j<len;j++)
          {
            tli[j].className='';
            cli[j].className='';
          }
          this.className='active';
          cli[this.index].className='cur-list';
        }
       }
  })();
    
     /*------------购物车计算商品数量------------*/
     (function(){
        var buy = document.querySelector('.buy'),
             add = document.querySelector('.left-top'),
             dda = document.querySelector('.left-bottom');
                var nums = 1;
                add.onclick=function(){
                    nums++;
        
                  buy.innerHTML=nums;
                }
      
                dda.onclick=function(){
                   
                    if(nums>0)
                    {
                     nums--; 
                    }
                    else
                    {
                      nums=0;
                    }
                  buy.innerHTML=nums;
                }
     })();         
}
	
   





$(function(){
  /*----------放大镜------------*/
    $('.small').mouseover(function(){
      $('.square').show();
      $('.big').show();
      $('.small').mousemove(function(e){
                var l = e.pageX - $('.small').offset().left - $('.square').width()/2;
                var t = e.pageY - $('.small').offset().top -$('.square').height()/2;
        var disX = $('.small').width() - $('.square').width();
        var disY = $('.small').height() -$('.square').height();
        if(l<0){
                   l = 0;
        }else if(l>disX){
                   l = disX;
        }
        if(t<0){
                   t = 0;
        }else if(t>disY){
                   t = disY;
        }
        $('.square').css({left:l,top:t});
        $('.big img').css({left:-l*3,top:-t*3});
      })
    }).mouseout(function(){
      $('.square').hide();
      $('.big').hide();
    })
    $('.thumb div').click(function(){
      var imgUrl = $(this).find('img').attr('src');
      $('.small').find('img').attr('src',imgUrl);
      $('.big').find('img').attr('src',imgUrl);
    })
})

$(function(){
  $('.list-ul li').has('ul').click(function(){
      $(this).children('ul').toggle();
    })
})

/*--------------返回顶部-------------*/
$(function(){
    $('.backtop').click(function(){
            $('body,html').animate({
              scrollTop:0
             },1000);
    })

})