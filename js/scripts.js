jQuery(document).ready(function() {
	/* Carousel	*/		
	$('#carousel-gallery').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#carousel-gallery .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#carousel-gallery .carousel-item').eq(i).appendTo('#carousel-gallery .carousel-inner');
	            }
	            else {
	                $('#carousel-gallery .carousel-item').eq(0).appendTo('#carousel-gallery .carousel-inner');
	            }
	        }
	    }
	});
	
});

$('#carousel-gallery').carousel({
  interval: 3000
});

//Carrousel Modal Lulu y Chiqui//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-LuluChiqui').on('hidden.bs.modal', function(e) {
        $('#modal-LuluChiqui iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() { 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#carousel-LuluChiqui').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-LuluChiqui .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});

$('#carousel-LuluChiqui').carousel({
  interval: 0
});

		


