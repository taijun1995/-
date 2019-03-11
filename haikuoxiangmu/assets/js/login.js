window.onload=function(){
(function(){
	//选项卡切换登录方式
var tli = document.querySelectorAll('.title li'),
    cli = document.querySelectorAll('.con li'),
    len = tli.length;
for(var i=0;i<len;i++)
{
	tli[i].index=i;
	tli[i].onclick=function(){
		for(var j=0;j<len;j++)
		{
			tli[j].className='';
			cli[j].className='';
		}
		this.className='active';
		cli[this.index].className='cur';
	}
}
	})();
	(function(){
		/*--------------ajax验证用户占用-------------*/
	var Input = document.querySelector('.name-word'),
		    Span = document.querySelector('.fankui');
		 console.log(Input,Span);   
		Input.onblur = function(){
			var user = Input.value;
            var xhr = new XMLHttpRequest();
            xhr.open('post','assets/js/login.php',true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send('username='+user);
            xhr.onreadystatechange = function(){
            	if(xhr.readyState==4 && xhr.status==200){
                     Span.innerHTML = xhr.responseText;
            	}
            }
		}
	})();
}

