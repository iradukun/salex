
'use strict';

(function ($) {

    // send message
    function validateContact() {
        var valid = true;	
        $(".demoInputBox").css('background-color','');
        $(".info").html('');
        if(!$("#userName").val()) {
            $("#userName-info").html("(required)");
            $("#userName").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#userEmail").val()) {
            $("#userEmail-info").html("(required)");
            $("#userEmail").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
            $("#userEmail-info").html("(invalid)");
            $("#userEmail").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#subject").val()) {
            $("#subject-info").html("(required)");
            $("#subject").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#content").val()) {
            $("#content-info").html("(required)");
            $("#content").css('background-color','#FFFFDF');
            valid = false;
        }
        return valid;
    }





    // end of send message

    // validate message
    function sendContact() {
        var valid;	
        valid = validateContact();
        if(valid) {
            jQuery.ajax({
                url: "contact_mail.php",
                data:'userName='+$("#userName").val()+'&userEmail='+
                $("#userEmail").val()+'&subject='+
                $("#subject").val()+'&content='+
                $(content).val(),
                type: "POST",
                success:function(data){
                    $("#mail-status").html(data);
                },
                error:function (){}
            });
        }
    }

    // end of validate message

    // load the iamges
    // $.ajax({
    //     url: "https://instagram.com/salex_rw/media",
    //     dataType : "jsonp", // this is important
    //     cache: false,
    //     success: function(response){
    //         console.log(response.items)
    //         // process the json response to get images
    //         // e.g. the first image should be something like : 
    //         // response.items.images[0].low_resolution
    //         // you could call an external function to iterate through the response
    //     },
    //     error:function(response){
    //         console.log(response);
    //     }
    // });

    // end load images
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    // Isotppe Filter
    $(".filter-controls li").on('click', function() {
        var filterData = $(this).attr("data-filter");

        $(".portfolio-filter, .gallery-filter").isotope({
            filter: filterData,
        });

        $(".filter-controls li").removeClass('active');
        $(this).addClass('active');
    });
    

    $(".portfolio-filter, .gallery-filter").isotope({
        itemSelector: '.pf-item, .gf-item',
        percentPosition: true,
        masonry: {
        // use element for option
        columnWidth: '.pf-item, .gf-item',
        horizontalOrder: true,
      }
    });

    //Masonary
    $('.portfolio-details-pic').masonry({
        itemSelector: '.pdp-item',
        columnWidth: '.pdp-item'
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".categories-slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        dots: false,
        nav: true,
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        stagePadding: 120,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

})(jQuery);