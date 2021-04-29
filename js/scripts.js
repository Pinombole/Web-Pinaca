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


/* Carousel Multi Item Musica*/	
jQuery(document).ready(function() {		
	$('#gallery-Musica').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-Musica .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-Musica .carousel-item').eq(i).appendTo('#gallery-Musica .carousel-inner');
	            }
	            else {
	                $('#gallery-Musica .carousel-item').eq(0).appendTo('#gallery-Musica .carousel-inner');
	            }
	        }
	    }
	});
	
});

//Carrousel Modal Musica//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-Musica').on('hidden.bs.modal', function(e) {
        $('#modal-Musica iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() { 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#carousel-Musica').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-Musica .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});


/* Carousel Multi Item Comerciales*/	
jQuery(document).ready(function() {		
	$('#gallery-Comerciales').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-Comerciales .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-Comerciales .carousel-item').eq(i).appendTo('#gallery-Comerciales .carousel-inner');
	            }
	            else {
	                $('#gallery-Comerciales .carousel-item').eq(0).appendTo('#gallery-Comerciales .carousel-inner');
	            }
	        }
	    }
	});
	
});

//Carrousel Modal Comerciales//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-Comerciales').on('hidden.bs.modal', function(e) {
        $('#modal-Comerciales iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() { 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#carousel-Comerciales').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-Comerciales .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});


/* Carousel Multi Item Mono*/	
jQuery(document).ready(function() {		
	$('#gallery-Mono').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-Mono .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-Mono .carousel-item').eq(i).appendTo('#gallery-Mono .carousel-inner');
	            }
	            else {
	                $('#gallery-Mono .carousel-item').eq(0).appendTo('#gallery-Mono .carousel-inner');
	            }
	        }
	    }
	});
	
});

//Carrousel Modal Mono//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-Mono').on('hidden.bs.modal', function(e) {
        $('#modal-Mono iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() { 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#carousel-Mono').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-Mono .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});


/* Carousel Multi Item Fort*/	
jQuery(document).ready(function() {		
	$('#gallery-Fort').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-Fort .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-Fort .carousel-item').eq(i).appendTo('#gallery-Fort .carousel-inner');
	            }
	            else {
	                $('#gallery-Fort .carousel-item').eq(0).appendTo('#gallery-Fort .carousel-inner');
	            }
	        }
	    }
	});
	
});

//Carrousel Modal Fort//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-Fort').on('hidden.bs.modal', function(e) {
        $('#modal-Fort iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() { 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#carousel-Fort').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-Fort .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});


/* Carousel Multi Item Los Gamarra */	
jQuery(document).ready(function() {		
	$('#gallery-Gamarra').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 4;
	    var totalItems = $('#gallery-Gamarra .carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('#gallery-Gamarra .carousel-item').eq(i).appendTo('#gallery-Gamarra .carousel-inner');
	            }
	            else {
	                $('#gallery-Gamarra .carousel-item').eq(0).appendTo('#gallery-Gamarra .carousel-inner');
	            }
	        }
	    }
	});
	
});

//Carrousel Modal Los Gamarra//
jQuery(document).ready(function() { 
    /*
        Stop video playing when the MODAL is being closed (has finished closing)
    */
    $('#modal-Gamarra').on('hidden.bs.modal', function(e) {
        $('#modal-Gamarra iframe').each(function() {
            var videoURL = $(this).attr('src');
            $(this).attr('src', videoURL);
        });
    });
 
});

jQuery(document).ready(function() { 
    /*
        Stop video playing when the CAROUSEL slides to another element
    */
    $('#carousel-Gamarra').on('slid.bs.carousel', function(e) {
        var currentSlide = $('#carousel-Gamarra .carousel-item').eq(e.from);
        var currentSlideEmbed = currentSlide.children('.embed-responsive');
        if(currentSlideEmbed.length > 0) {
            var videoIFrame = currentSlideEmbed.children('iframe');
            var videoURL = videoIFrame.attr('src');
            videoIFrame.attr('src', videoURL);
        }
    });
 
});






