$(document).ready(function(){
	var timer;
	var timer_one;
	var delay1 = 100;
	var delay2 = 1050;
	var delay3 = 1130;
	$('.name2').click(function(){
		timer = setTimeout(function(){
			$('#content').css('opacity',0);
			$('#work').css('opacity',0);
			$('#contact').css('opacity',0);
			$('#content').css('visibility','hidden');
			$('#work').css('visibility','hidden');
			$('#contact').css('visibility','hidden');
		},delay1);
		$('#about').animate({"left":"25vh"},500)
                      .animate({"width":"75vw"},500);
         timer_one = setTimeout(function(){ 
         	 $('.bio').css('width','63vw');
             $('.bio').animate({'opacity':'1'},300);
         },delay3);
        
	});
	clearTimeout(timer_one);
	clearTimeout(timer);
	$('.close').click(function(){
		timer_one = setTimeout(function(){ 
             $('.bio').animate({'opacity':'0'},300);
             $('.bio').css('width','0vw');
         },delay1);
		$('#about').animate({"width":"33vw"},'slow')
		.animate({"left":"0vh"},500);
        timer = setTimeout(function(){
        	$('#content').css('visibility','visible');
			$('#work').css('visibility','visible');
			$('#contact').css('visibility','visible');
			$('#content').css('opacity',1);
			$('#work').css('opacity',1);
			$('#contact').css('opacity',1);
		},delay2);
	});
	clearTimeout(timer);
	clearTimeout(timer_one);
	$('.name3').click(function(){
		timer = setTimeout(function(){
			$('#content').css('opacity',0);
			$('#about').css('opacity',0);
			$('#contact').css('opacity',0);
			$('#content').css('visibility','hidden');
			$('#about').css('visibility','hidden');
			$('#contact').css('visibility','hidden');
		},delay1);
		$('#work').animate({"height":"83vh"},200)
		.animate({"right":"25vh"},500)
		.animate({"width":"75vw"},500);
		 timer_one = setTimeout(function(){ 
             $('.close_work').animate({'opacity':'1'},300);
         },delay3);

	});
	clearTimeout(timer);
	clearTimeout(timer_one);
	$('.close_work').click(function(){
		$('#work').animate({"width":"50vw"},'slow')
		.animate({"height":"73vh"},200)
		.animate({"right":"0vh"},500);
        timer = setTimeout(function(){
        	$('#content').css('visibility','visible');
			$('#about').css('visibility','visible');
			$('#contact').css('visibility','visible');
			$('#content').css('opacity',1);
			$('#about').css('opacity',1);
			$('#contact').css('opacity',1);
			$('.close_work').css('opacity',0);
		},delay2);
	});
	clearTimeout(timer);
	$('.name4').click(function(){
		timer = setTimeout(function(){
			$('#content').css('opacity',0);
			$('#about').css('opacity',0);
			$('#work').css('opacity',0);
			$('#content').css('visibility','hidden');
			$('#about').css('visibility','hidden');
			$('#work').css('visibility','hidden');
		},delay1);
		$('#contact').animate({"bottom":"20vh"},500)
		timer_one = setTimeout(function(){ 
             $('.close_contact').animate({'opacity':'1'},300);
         },600);

	});
	clearTimeout(timer);
	$('.close_contact').click(function(){
		$('#contact').animate({"bottom":"0vw"},500)
        timer = setTimeout(function(){
        	$('#content').css('visibility','visible');
			$('#about').css('visibility','visible');
			$('#work').css('visibility','visible');
			$('#content').css('opacity',1);
			$('#work').css('opacity',1);
			$('#about').css('opacity',1);
			$('.close_contact').css('opacity',0);
		},550);
	});
});