// jQuery Document Ready
$(document).ready(function() {
    // Scroll Event
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".navbar").css({
                "background": "#222",
                "box-shadow": "rgba(0,0,0,0.1) 0px 4px 12px"
            });
        } else {
            $(".navbar").css({
                "background": "transparent",
                "box-shadow": "none"
            });
        }
    });

    // Smooth Scroll
    var navbarHeight = $(".navbar").outerHeight();
    $(".navbar-menu a").click(function(e) {
        e.preventDefault();
        var targetHref = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(targetHref).offset().top - navbarHeight
        }, 1000);
    });

    // Mobile Menu Toggle
    $(".menu-toggle").click(function() {
        $(this).toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // Mobile Menu Close on Click
    $(".navbar-menu").click(function() {
        if (window.innerWidth <= 768) {
            $(".menu-toggle").removeClass("is-active");
            $(this).removeClass("is-active");
        }
    });
});

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }
});


// Mobile Menu Toggle
$(".menu-toggle").click(function() {
    $(this).toggleClass("is-active");
    $(".navbar-menu").toggleClass("active");
});
