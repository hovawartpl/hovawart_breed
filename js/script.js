$(document).ready(function(){
    $(".nav_burger").click(function(){
		$(".nav_dropdown_menu").toggle();
	});
	
	$(".nav_burger").mouseover(function(){
		$(".nav_dropdown_menu").css("display", "block");
		$(".icon-menu").css("color", "#633e83");
	});
	
	$(".nav_dropdown_menu").mouseleave(function(){
		$(".nav_dropdown_menu").css("display", "none");
		$(".icon-menu").css("color", "#ffffff");
	});
	
});

