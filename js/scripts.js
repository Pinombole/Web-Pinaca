/* Carousel Multi Item Cortos*/	
jQuery(document).ready(function() {		
	$('#gallery-Cortos').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-Cortos .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-Cortos .carousel-item').eq(i).appendTo('#gallery-Cortos .carousel-inner');
	            }
	            else {
	                $('#gallery-Cortos .carousel-item').eq(0).appendTo('#gallery-Cortos .carousel-inner');
	            }
	        }
	    }
	});
	
});

//Carrousel Modal Cortos Animados//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-Cortos').on('hidden.bs.modal', function(e) {
        $('#modal-Cortos iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() { 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#carousel-Cortos').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-Cortos .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});


/* Carousel Multi Item Lulu*/	
jQuery(document).ready(function() {		
	$('#gallery-LuluChiqui').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-LuluChiqui .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-LuluChiqui .carousel-item').eq(i).appendTo('#gallery-LuluChiqui .carousel-inner');
	            }
	            else {
	                $('#gallery-LuluChiqui .carousel-item').eq(0).appendTo('#gallery-LuluChiqui .carousel-inner');
	            }
	        }
	    }
	});
	
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


/* Carousel Multi Item Markitos*/	
jQuery(document).ready(function() {		
	$('#gallery-Markitos').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-Markitos .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-Markitos .carousel-item').eq(i).appendTo('#gallery-Markitos .carousel-inner');
	            }
	            else {
	                $('#gallery-Markitos .carousel-item').eq(0).appendTo('#gallery-Markitos .carousel-inner');
	            }
	        }
	    }
	});
	
});


//Carrousel Modal Markitos//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-Markitos').on('hidden.bs.modal', function(e) {
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
    $('#carousel-Markitos').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-Markitos .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});
