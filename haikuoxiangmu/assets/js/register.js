window.onload=function(){
	/*------1表单验证----------*/

	(function(){
		var names = document.querySelector('.username'),
	    psd = document.querySelector('.userpsd'),
	    nst = document.querySelector('.name-request'),
	    pst = document.querySelector('.psd-request');
	    console.log(name,psd,nst,pst);
	    names.onblur=function(){
	    	var num = this.value,
	    	    str =/^[\w]{2,8}$/;
	    	    if(str.test(num))
	    	    {
	    	    	nst.innerHTML='用户名可以使用';
	    	    	nst.className='green';
	    	    	nst.style.display='block'
	    	    }
	    	    else if(num=='')
	    	    {
	    	    	nst.innerHTML='用户名不能为空';
	    	    	names.style.borderColor='#f00';
	    	    	nst.className='red';
	    	    	nst.style.display='block'
	    	    }
	    	    else
	    	    {
	    	    	nst.innerHTML='用户名违规';
	    	    	nst.className='red';
	    	    	nst.style.display='block'
	    	    }
	    }
	})();

	(function(){
		var names = document.querySelector('.username'),
	    psd = document.querySelector('.userpsd'),
	    nst = document.querySelector('.name-request'),
	    pst = document.querySelector('.psd-request');
	    console.log(name,psd,nst,pst);
	    psd.onblur=function(){
	    	var num = this.value,
	    	    str =/^[\w]{2,8}$/;
	    	    if(str.test(num))
	    	    {
	    	    	pst.innerHTML='密码可以使用';
	    	    	pst.className='green';
	    	    	pst.style.display='block'
	    	    }
	    	    else if(num=='')
	    	    {
	    	    	pst.innerHTML='密码不能为空';
	    	    	psd.style.borderColor='#f00';
	    	    	pst.className='red';
	    	    	pst.style.display='block'
	    	    }
	    	    else
	    	    {
	    	    	pst.innerHTML='密码违规';
	    	    	pst.className='red';
	    	    	pst.style.display='block'
	    	    }
	    }
	})();


/*------------滑动验证--------------*/
	(function(){
		var box = document.querySelector('.moveto');
		var room = document.querySelector('.move');
		    box.onmousedown=function(e){
		    	var e = e||window.event;
		    	var beforeX = e.clientX-room.offsetLeft+100;
		    	document.onmousemove=function(e){
		    		var e = e||window.event;
		    		var left =e.clientX-beforeX;
		    		var maxW = room.offsetWidth-box.offsetWidth;
		    		if(left<0)
		    		{
		    			left=0;
		    			room.style.backgroundColor="#ccc";
		    		}
		    		else if (left>maxW) {
		    			left=maxW;
		    			room.style.backgroundColor='#66ff99';
		    			room.innerHTML='验证完成';

		    		}
		    	
		    		box.style.left=left+'px';
		    	
		    	}

		    }
		    document.onmouseup=function(){
		    	this.onmousemove='';
		    }
	})();

	/*-------------------拖拽和遮罩层-------------*/
	(function(){
		var shade = document.querySelector('.shade'),
		    agree = document.querySelector('.agree');
        var choose = document.querySelector('.chose');  
        	choose.style.display='block';

		    shade.onmousedown=function(e){
		    	var e = e||window.event;
		    	var beforeX = e.clientX-shade.offsetLeft;
		    	var beforeY = e.clientY-shade.offsetTop;
		    	window.onmousemove=function(e){
		    		var maxW = document.documentElement.clientWidth-shade.clientWidth;
		    		var maxH = document.documentElement.clientHeight-shade.clientHeight;
		    		var leftx = e.clientX-beforeX;
		    		var topy = e.clientY-beforeY;
		    		if(leftx<0)
		    		{
		    			leftx=0;
		    		}
		    		else if(leftx>maxW)
		    		{
		    			leftx=maxW;
		    		}
		    		if(topy<0)
		    		{
		    			topy=0;
		    		}
		    		else if(topy>maxH)
		    		{
		    			topy=maxH;
		    		}
		    		shade.style.left=leftx+'px';
		    		shade.style.top=topy+'px';		    	
		    	}
		    }
		    window.onmouseup=function(){
		    	this.onmousemove='';
		    }
		    /*---------------遮罩层消失------------*/
		    agree.onclick=function(){
		    	shade.style.display='none';
		    	choose.style.display='none';
		    }
	})();
}