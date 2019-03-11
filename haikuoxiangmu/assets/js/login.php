<?php
   $user = $_POST['username'];
   $arr = ['海阔','辉哥','超姐','体弱多病的赵博'];
   if(in_array($user,$arr)){
      echo '用户被占用';
   }else{
      echo '用户可以使用';
   }
?>