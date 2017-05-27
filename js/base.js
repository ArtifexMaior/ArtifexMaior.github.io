function init(){
	$('body').addClass('loading');
	
}
$(document).ready(function(){
	init();
	

	$(".fancybox").fancybox({
		beforeShow: function () {
            $.fancybox.wrap.bind("contextmenu", function (e) {
                    return false; 
            });
        },
        openEffect  : 'fade',
        closeSpeed	: 500,
        openSpeed	: 500,
        closeBtn	: true,
        modal	: false,
        padding	:	0,
	    helpers:  {
	        overlay : {
	            css : {
	                'background' : 'rgba(0,0,0,0.9)'
	            }
	        }
	    }
	});
	
});
$(document).keypress(function(e){

});
$(window).load(function(){
	$('body').addClass('loaded');
	$('.textillate').textillate({
		in: {
			// set the effect name
			effect: 'fadeInUp',
			// set the delay factor applied to each consecutive character
			delayScale: 1,
			// set the delay between each character
			delay: 50,
			// set to true to animate all the characters at the same time
			sync: false,
			// randomize the character sequence
			// (note that shuffle doesn't make sense with sync = true)
			shuffle: true,
		},
		type: 'word'
	});
});