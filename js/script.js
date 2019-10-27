/* ========================================
                    Preloader
 ======================================== */

$(window).on('lood', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ========================================
                    Team
 ======================================== */
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ========================================
                    progress bar
 ======================================== */
$(function () {
    $('#progress-element').waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.distroy()
    }, {
            offset: 'bottom-in-view'
        });
});


/* ========================================
                    responsive Tab
 ======================================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});


/* ========================================
                    portfolio
 ======================================== */

$(window).on('load', function () {
    // Initalise
    $("#isotope-container").isotope({
    });
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');
        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ========================================
                    magnifier
 ======================================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ========================================
                    testimonial
 ======================================== */
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* ========================================
                Stats
 ======================================== */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* ========================================
                clients
 ======================================== */
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ========================================
                google map
 ======================================== */
 $(window).on('load', function(){
     // Map Variables
      var addresString = '230 Broadway, NY, New York 10007, USA';
      var myLatlng = {lat: 40.712685, lng: -74.005920}; 
      // 1. Render Map
      var map = new google.maps.map(document.getElementById('map'), {
          zoom: 11,
          center : myLatlng
      });
      // 2. add marker
      var marker = new google.maps.Maker({
          position: myLatlng,
          map:map
      });
 });