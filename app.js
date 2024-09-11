// jQuery Document Ready
$(document).ready(function() {
    // Scroll Event
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0,0,0,0.1) 0px 4px 12px");
        } else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
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
});

// Mobile Menu Toggle
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});

// Mobile Menu Close on Click
mobileLink.addEventListener("click", function() {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
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
