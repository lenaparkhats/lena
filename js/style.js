$(document).ready(function () {
    var owl2 = $('.thanks .owl-carousel');
    owl2.owlCarousel({
        items: 2,
        margin: 0,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1180:{
                items:2
            }
        }
    });

    var owl3 = $('.all_spec .owl-carousel');
    owl3.owlCarousel({
        items: 7,
        margin: 0,
        loop: true,
        autoplay:true,
        autoplayTimeout:2000,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:5
            },
            1180:{
                items:7
            }
        }
    });


    var owl = $('.feedback .owl-carousel');
    owl.owlCarousel({
        items: 3,
        margin: 0,
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1199:{
                items:3
            }
        }
        // center: true
    });

   $('.feedback .next').click(function () {
       owl.trigger('next.owl.carousel');
   });
   $('.feedback .prev').click(function () {
       owl.trigger('prev.owl.carousel');
   });
});