window.onload=function(){
     /*----------数值换算---------*/
     (function(){
     var left = document.querySelector('.jia');
     var right = document.querySelector('.jian');
     var zongjia = document.querySelector('.zongjia');
     var left2 = document.querySelector('.jia1');
     var right2 = document.querySelector('.jian1');
     var zongjia2 = document.querySelector('.zongjia1');
     var zongshu = document.getElementById('checkedNum');
     var zuizhong = document.getElementById('znum');
     var num=1;
     var numjian=1;
     var num2 = 1;
     console.log(bian1);
     left.onclick=function(){
      
          num++;
      var znum=10000*num;
              
     zongjia.innerHTML='￥'+znum+'.00';
     right.onclick=function(){ 
          if(num>1)
          {
          num--;
          znum=znum-10000;
          zongjia.innerHTML='￥'+znum+'.00';
           zongshu.innerHTML=num+num2;
            document.getElementById('bian1').value=num;
               zuizhong.innerHTML=znum+4800*num2;
          }
     }
     zongshu.innerHTML=num+num2;
     document.getElementById('bian1').value=num;
      zuizhong.innerHTML=znum+4800*num2;
     }

     left2.onclick=function(){
      
          num2++;
      var znum2=4800*num2;
              
     zongjia2.innerHTML='￥'+znum2+'.00';
     right2.onclick=function(){ 
          if(num2>1)
          {
          num2--;
          znum2=znum2-4800;
          zongjia2.innerHTML='￥'+znum2+'.00';
           zongshu.innerHTML=num+num2;
            document.getElementById('bian2').value=num2;
            zuizhong.innerHTML=znum2+10000*num;
          }
     }
     zongshu.innerHTML=num+num2;
     document.getElementById('bian2').value=num2;
     zuizhong.innerHTML=znum2+10000*num;
     }

})();     


}


   

    






     


    



		


