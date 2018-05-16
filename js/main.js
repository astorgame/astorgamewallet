//spoylar-table-Schedule

$(".one-l").click(function() {
	$(this).toggleClass("on");
	$(".wrap-inner-s-1").slideToggle();
	/*----------------------------------------------------------*/
	$(".wrap-inner-s-2").slideUp();
	$(".two-l").removeClass("on");
	/*----------------------------------------------------------*/
	return false;
});

$(".two-l").click(function() {
	$(this).toggleClass("on");
	$(".wrap-inner-s-2").slideToggle();
	/*----------------------------------------------------------*/
	$(".wrap-inner-s-1").slideUp();
	$(".one-l").removeClass("on");
	/*----------------------------------------------------------*/
	return false;
});

