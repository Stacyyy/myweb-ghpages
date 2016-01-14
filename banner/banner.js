function Slide(){
	 var 
	 slide = document.getElementsByClassName('slide'),
	 n = slide.length , 
	 switch_left = document.getElementById('switch_left'), 
	 switch_right = document.getElementById('switch_right'),
	 Current = 0, Last = 0,
	 isNotOn = true ;   //作为changeSlide函数的控制条件
	 slide[Current].className = 'slide visi';  //当前图片可见


	 function changeSlide (temp) {
        slide[Current].className = 'slide visi';    //Current值已发生变化，重新使其可见。

	 	if(temp == -1){
	 		slide[Last].className += ' current_slide_left';
	 		slide[Current].className += ' next_left';
	 	}
	 	else{
	 		slide[Last].className += ' current_slide_right';
	 		slide[Current].className += ' next_right';
	 	}

	    slide[Current].addEventListener('animationEnd', endFunction); 
	 	slide[Current].addEventListener('webkitAnimationEnd', endFunction);
        slide[Current].addEventListener('mozAnimationEnd', endFunction);
  
        function endFunction(){        //清楚动画函数endFunction作为回调函数，与changeSlide函数异步执行；
        	slide[Last].className = 'slide';  
        	slide[Current].className = 'slide visi';
        	isNotOn = true;            //使用“isNotOn = true"保证每一个click事件在有效反应时间内
        	Last = Current;            //只对应执行一次changeSlide函数，避免样式添加出现阻塞、混乱。
        }
 
    }
    
    switch_left.addEventListener('click',function () {
    	if(isNotOn){
    		Current = ( Current - 1 + n ) % n ;
    		isNotOn = false;
	    	
	    	changeSlide (-1);
    	}
    });

	switch_right.addEventListener('click',function () {
	  	if(isNotOn){
	  		Current = ( Current + 1 +n ) % n ;
	  		isNotOn = false;
	   		
	    	changeSlide (1);
	    }
	    	
	});   
}

Slide();

