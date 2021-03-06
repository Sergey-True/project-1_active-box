
$(function() {

    /*Fixed header*/
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();

    let nav = $("#nav");
    let navToggle = $("#navToggle");
    checkScroll (scrollPos, introH);

    $(window).on("scroll load resize", function () {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll (scrollPos, introH);
    });

function checkScroll (scrollPos, introH) {
        if( scrollPos >introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
}



        /*Smooth scroll*/

        $("[data-scroll]").on("click", function (event) {
            event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");


            $("html, body").animate({
                scrollTop:elementOffset - 65
            }, 700);
        });

    /*Nav Toggle*/



   navToggle.on("click", function (event){
        event.preventDefault();
        nav.toggleClass("show");

    });

    /*Testimonials https://kenwheeler.github.io/slick/*/

    let slider = $("#testimonialslider");
    slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true,
    });

});
