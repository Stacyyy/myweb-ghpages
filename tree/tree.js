$(document).ready(function(){
	$("li:not(:has(ul))").css({"list-style-image": "url(svg/icon2.svg)"});
	$("li:has(ul)").css({"list-style-image": "url(svg/icon3.svg)"});/*ul下的li将继承该设置*/
	$(".folder").click(function(event){
		if(event.target === this){//控制只在当前节点执行函数!important!
			if($(this).children().is(":hidden")){
				$(this).children().slideDown("fast",function(){
					$(this).parent().css({
						"list-style-image": "url(svg/icon3.svg)"
					});	
				});
			}
			else 
			{	
				$(this).children().slideUp("fast",function(){
					$(this).parent().css({
						"list-style-image": "url(svg/icon1.svg)"
					});	
				});	
			}
		}
	});
	event.stopPropagation();
});