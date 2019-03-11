window.onload=function(){
/*-----------点击图片消失----------*/	
	(function(){
		var headpic = document.querySelector('.head-pic'),
			btnhead = document.querySelector('.btn-head'),
      head = document.querySelector('.head');

			btnhead.onclick=function(){
				headpic.style.display='none';
				btnhead.style.display='none';
        head.style.display='none';
			}
	})();

/*-----------下拉-----------*/
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
  /*--------------轮播--------------*/
  (function(){
    var ImgLi = document.querySelectorAll('.carousel-img li'), 
        BtnL =  document.querySelector('.carousel-left'),
        BtnR =  document.querySelector('.carousel-right'),
        NumLi = document.querySelectorAll('.carousel-num li'),
        Box =   document.querySelector('.carousel-wrap');
        var num = 0,  
        timer,    
        len = ImgLi.length;

        timer = setInterval(function(){
              play(num+1);
        },2500);

       Box.onmouseover = function(){
           clearInterval(timer);
       }
       Box.onmouseout = function(){
            timer = setInterval(function(){
              play(num+1);
            },2500);
       }
  
       for(var i = 0; i<len-1; i++){
           NumLi[i].index = i;
           NumLi[i].onmouseover = function(){
               var index = this.index;
               play(index);
           }
       }
       BtnR.onclick =function(){
            play(num+1);
       }
       BtnL.onclick =function(){
           play(num-1);
       }
        function play(n){
          if(n>len-1){
            n = 0;
          }
          if(n<0){
            n = len-1;
          }
            for(var i = 0; i< len;i++){
                ImgLi[i].style.display='none'; 
                NumLi[i].style.backgroundColor='#ccc';
            }
            num = n;
            ImgLi[num].style.display ='block';
            NumLi[num].style.backgroundColor ='#c00';
        }
         })();

     /*--------------倒计时---------------*/
     (function(){
      var shi = document.querySelector('.hours'),
          fen = document.querySelector('.minutes'),
          miao = document.querySelector('.seconds');

       var now=new Date();
       function run(){
         var now1=new Date();
         var djsDate=now.getTime()+(1000*60*60*2);
         var cha=djsDate-now1.getTime();
         var hours=Math.floor(cha/(1000*60*60));
         cha%=1000*60*60;
         var minutes=Math.floor(cha/(1000*60));
         cha%=1000*60;
         var seconds=Math.floor(cha/1000);
         if(hours < 10){
         hours = "0" + hours;
                      }
         if(minutes < 10){
            minutes = '0'+minutes;
                         }
         if(seconds < 10){
            seconds = "0"+seconds;
                        }
         shi.innerHTML=hours;
         fen.innerHTML=minutes;
         miao.innerHTML=seconds;
  }
  run();
  setInterval(function(){
    run();
  },1000);
     })();    
/*--------------------滚动监听--------------*/
(function(){
  var gundong = document.querySelector('.gundong');

  window.onscroll=function(){
    if(document.body.scrollTop||document.documentElement.scrollTop>800)
    {
      gundong.style.display='block';
      gundong.className='gundong fixed';
    }
    else
    {
      gundong.style.display='none';
      gundong.className='gundong';
    }
  }
})();
/*-------------1楼层内小型轮播------------*/
(function(){
    var ImgLi = document.querySelectorAll('.floor1lunbo-wrap p'), 
        BtnL =  document.querySelector('.floor1left'),
        BtnR =  document.querySelector('.floor1right'),
        Box =   document.querySelector('.floor1lunbo-wrap');
        var num = 0,  
        timer,    
        len = ImgLi.length;

        timer = setInterval(function(){
              play(num+1);
        },2000);

       Box.onmouseover = function(){
        BtnL.style.display='block';
        BtnR.style.display='block';
           clearInterval(timer);
       }
       Box.onmouseout = function(){
         BtnL.style.display='none';
        BtnR.style.display='none';
            timer = setInterval(function(){
              play(num+1);
            },2000);
       }
       BtnR.onclick =function(){
            play(num+1);
       }
       BtnL.onclick =function(){
           play(num-1);
       }
        function play(n){
          if(n>len-1){
            n = 0;
          }
          if(n<0){
            n = len-1;
          }
            for(var i = 0; i< len;i++){
                ImgLi[i].style.display='none'; 
            }
            num = n;
            ImgLi[num].style.display ='block';
        }
         })();
/*---------------一楼选项卡--------------*/
  (function(){
     var tli = document.querySelectorAll('.floor1-title li'),
         cli = document.querySelectorAll('.floor1-con li'),
         len = tli.length;
     console.log(cli,tli);
       for(var i=0;i<len;i++)
       {
        tli[i].index=i;
        tli[i].onmouseover=function(){
          for(var j=0;j<len;j++)
          {
            tli[j].className='';
            cli[j].style.display='none';
          }
          this.className='floor1-active';
          cli[this.index].style.display='block';
        }
       }
  })();
  /*--------------------2层---------------------*/
     /*-------------2楼层内小型轮播------------*/
(function(){
    var ImgLi = document.querySelectorAll('.floor2lunbo-wrap p'), 
        BtnL =  document.querySelector('.floor2left'),
        BtnR =  document.querySelector('.floor2right'),
        Box =   document.querySelector('.floor2lunbo-wrap');
        var num = 0,  
        timer,    
        len = ImgLi.length;

        timer = setInterval(function(){
              play(num+1);
        },2000);

       Box.onmouseover = function(){
        BtnL.style.display='block';
        BtnR.style.display='block';
           clearInterval(timer);
       }
       Box.onmouseout = function(){
         BtnL.style.display='none';
        BtnR.style.display='none';
            timer = setInterval(function(){
              play(num+1);
            },2000);
       }
       BtnR.onclick =function(){
            play(num+1);
       }
       BtnL.onclick =function(){
           play(num-1);
       }
        function play(n){
          if(n>len-1){
            n = 0;
          }
          if(n<0){
            n = len-1;
          }
            for(var i = 0; i< len;i++){
                ImgLi[i].style.display='none'; 
            }
            num = n;
            ImgLi[num].style.display ='block';
        }
         })();
/*---------------2楼选项卡--------------*/
  (function(){
     var tli = document.querySelectorAll('.floor2-title li'),
         cli = document.querySelectorAll('.floor2-con li'),
         len = tli.length;
     console.log(cli,tli);
       for(var i=0;i<len;i++)
       {
        tli[i].index=i;
        tli[i].onmouseover=function(){
          for(var j=0;j<len;j++)
          {
            tli[j].className='';
            cli[j].style.display='none';
          }
          this.className='floor2-active';
          cli[this.index].style.display='block';
        }
       }
  })();
 /*------------------3层------------------*/
  (function(){
    var ImgLi = document.querySelectorAll('.floor3lunbo-wrap p'), 
        BtnL =  document.querySelector('.floor3left'),
        BtnR =  document.querySelector('.floor3right'),
        Box =   document.querySelector('.floor3lunbo-wrap');
        var num = 0,  
        timer,    
        len = ImgLi.length;

        timer = setInterval(function(){
              play(num+1);
        },2000);

       Box.onmouseover = function(){
        BtnL.style.display='block';
        BtnR.style.display='block';
           clearInterval(timer);
       }
       Box.onmouseout = function(){
         BtnL.style.display='none';
        BtnR.style.display='none';
            timer = setInterval(function(){
              play(num+1);
            },2000);
       }
       BtnR.onclick =function(){
            play(num+1);
       }
       BtnL.onclick =function(){
           play(num-1);
       }
        function play(n){
          if(n>len-1){
            n = 0;
          }
          if(n<0){
            n = len-1;
          }
            for(var i = 0; i< len;i++){
                ImgLi[i].style.display='none'; 
            }
            num = n;
            ImgLi[num].style.display ='block';
        }
         })();
/*---------------3楼选项卡--------------*/
  (function(){
     var tli = document.querySelectorAll('.floor3-title li'),
         cli = document.querySelectorAll('.floor3-con li'),
         len = tli.length;
     console.log(cli,tli);
       for(var i=0;i<len;i++)
       {
        tli[i].index=i;
        tli[i].onmouseover=function(){
          for(var j=0;j<len;j++)
          {
            tli[j].className='';
            cli[j].style.display='none';
          }
          this.className='floor3-active';
          cli[this.index].style.display='block';
        }
       }
  })();
  /*-----------------4层----------------*/
  (function(){
    var ImgLi = document.querySelectorAll('.floor4lunbo-wrap p'), 
        BtnL =  document.querySelector('.floor4left'),
        BtnR =  document.querySelector('.floor4right'),
        Box =   document.querySelector('.floor4lunbo-wrap');
        var num = 0,  
        timer,    
        len = ImgLi.length;

        timer = setInterval(function(){
              play(num+1);
        },2000);

       Box.onmouseover = function(){
        BtnL.style.display='block';
        BtnR.style.display='block';
           clearInterval(timer);
       }
       Box.onmouseout = function(){
         BtnL.style.display='none';
        BtnR.style.display='none';
            timer = setInterval(function(){
              play(num+1);
            },2000);
       }
       BtnR.onclick =function(){
            play(num+1);
       }
       BtnL.onclick =function(){
           play(num-1);
       }
        function play(n){
          if(n>len-1){
            n = 0;
          }
          if(n<0){
            n = len-1;
          }
            for(var i = 0; i< len;i++){
                ImgLi[i].style.display='none'; 
            }
            num = n;
            ImgLi[num].style.display ='block';
        }
         })();
/*---------------2楼选项卡--------------*/
  (function(){
     var tli = document.querySelectorAll('.floor4-title li'),
         cli = document.querySelectorAll('.floor4-con li'),
         len = tli.length;
     console.log(cli,tli);
       for(var i=0;i<len;i++)
       {
        tli[i].index=i;
        tli[i].onmouseover=function(){
          for(var j=0;j<len;j++)
          {
            tli[j].className='';
            cli[j].style.display='none';
          }
          this.className='floor4-active';
          cli[this.index].style.display='block';
        }
       }
  })();
 /*------------------5层--------------------*/
 (function(){
    var ImgLi = document.querySelectorAll('.floor5lunbo-wrap p'), 
        BtnL =  document.querySelector('.floor5left'),
        BtnR =  document.querySelector('.floor5right'),
        Box =   document.querySelector('.floor5lunbo-wrap');
        var num = 0,  
        timer,    
        len = ImgLi.length;

        timer = setInterval(function(){
              play(num+1);
        },2000);

       Box.onmouseover = function(){
        BtnL.style.display='block';
        BtnR.style.display='block';
           clearInterval(timer);
       }
       Box.onmouseout = function(){
         BtnL.style.display='none';
        BtnR.style.display='none';
            timer = setInterval(function(){
              play(num+1);
            },2000);
       }
       BtnR.onclick =function(){
            play(num+1);
       }
       BtnL.onclick =function(){
           play(num-1);
       }
        function play(n){
          if(n>len-1){
            n = 0;
          }
          if(n<0){
            n = len-1;
          }
            for(var i = 0; i< len;i++){
                ImgLi[i].style.display='none'; 
            }
            num = n;
            ImgLi[num].style.display ='block';
        }
         })();
/*---------------5楼选项卡--------------*/
  (function(){
     var tli = document.querySelectorAll('.floor5-title li'),
         cli = document.querySelectorAll('.floor5-con li'),
         len = tli.length;
     console.log(cli,tli);
       for(var i=0;i<len;i++)
       {
        tli[i].index=i;
        tli[i].onmouseover=function(){
          for(var j=0;j<len;j++)
          {
            tli[j].className='';
            cli[j].style.display='none';
          }
          this.className='floor5-active';
          cli[this.index].style.display='block';
        }
       }
  })(); 
}