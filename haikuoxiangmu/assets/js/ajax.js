var $ ={
  creatxhr:function(){
     return new XMLHttpRequest();
     /*var xmlhttp;
      if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
      else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      return xmlhttp;*/
  },
	ajax:function(option){  /* option = {type:'post',url:'1.php'}*/
	  // 传输类型 get post
       var type = option.type;
      // 服务器的地址
       var url = option.url;
      //参数名值对
       var data = option.data;
      // 响应页面回调函数
       var success = option.success;
      // 数据类型
      var  dataType = option.dataType;
      // 1. 创建 XMLHttpRequest 对象
      var  xhr = new XMLHttpRequest();
      // 2.1 请求页面 open
      if(type == 'get'){
          url = url + '?' + data;
          data = null;
      }
      xhr.open(type,url,true);
      // 2.2 请求页面 发送
      if(type == 'post'){
         xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      }
      xhr.send(data);
      // 3. 判断什么时候触发 响应页面
      xhr.onreadystatechange = function(){
      	 if(xhr.readyState==4 && xhr.status ==200){
            // 4. 响应页面  xhr.responseText
            
            var result;
            if(dataType=='json'){
              // 转为对象
              result = eval("("+xhr.responseText+")");
            }else if(dataType=='xml'){
               result = xhr.responseXML;
            }else{
               result = xhr.responseText;
            }
            // success 回调函数的调用
            success&&success(result);
            /*if(success){
                 success(result)
            }*/

      	 }
      }

	},
  get:function(url,data,success,dataType){
        var  xhr = this.creatxhr();
        url=url+"?"+data; 
        xhr.open('get',url);
        xhr.send();
        xhr.onreadystatechange=function(){
               if(xhr.readyState==4 && xhr.status==200){
                    var result;
                    if(dataType == 'json'){
                        result = eval('('+xhr.responseText+')');
                    }else if(dataType == 'xml') {
                        result = xhr.responseXML;
                    }else{
                        result = xhr.responseText;
                    }
                      success && success(result);
               }
        }

  },
	post:function(){

	}
}