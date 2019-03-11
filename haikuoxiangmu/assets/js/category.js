window.onload=function(){
	/*-----------点击按钮图片消失-----------*/
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
/*--------------下拉列表----------------*/
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

/*----------------瀑布流---------------*/
  (function(){
    var page = 1;
    show();// 一.初始化第一页信息
    function show(){
      var Uls = document.querySelectorAll('.pubu-con'),
          Lis = document.querySelectorAll('.pubu-con li');
            $.get('assets/js/category.php','p='+page,function(data){
                 for(var i in data){
                    var Li = Lis[0].cloneNode(true);
                    Li.style.display = 'block';
                    Li.children[0].setAttribute('src',data[i]['pic']);
                    Li.children[1].innerHTML = data[i]['title'];
                    Li.children[2].innerHTML = data[i]['id'];
                    var index = i % 4;
                    Uls[index].appendChild(Li);
                 }
            },'json');
    }

    window.onscroll = function(){
      var dH = document.body.scrollHeight || document.documentElement.scrollHeight,
          wH = document.documentElement.clientHeight,
          dT = document.body.scrollTop || document.documentElement.scrollTop; 
      if(dH -wH-dT <=1400){
              page++;
              show();
            }
}

  })();
}











