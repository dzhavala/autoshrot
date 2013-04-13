/*
 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
 */

$('.flexslider').flexslider({
	animation: "slide"
});

$('.fancybox-thumbs').filter(function(){
						if($(this).parent().is('.clone')) {
							return false;
						} else {
							return true;
						}
					}).fancybox({
						prevEffect : 'none',
						nextEffect : 'none',
						nextClick : true,

						helpers : {
							thumbs : {
								width  : 50,
								height : 50
							}
						}
					});

$('.fancybox').fancybox({
	prevEffect : 'none',
	nextEffect : 'none'
});


