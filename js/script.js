document.addEventListener('DOMContentLoaded', function () {
    initSlickSlider(); 

    $(window).resize(function () {
        initSlickSlider(); 
    });
});

function initSlickSlider() {
    if ($(window).width() <= 768) {
        $('.latest-posts, .latest-products').each(function () {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                dots: true,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        });
    }
}

$(document).ready(function() {
    $('.has-submenu').hover(
        function() {
            $('.main').css('margin-top', '80px');
        },
        function() {
            $('.main').css('margin-top', '25px');
        }
    );
});

$(document).ready(function() {
    const burgerIcon = $('.burger-icon');
    const mobileMenu = $('.mobile-menu');
    const burgerImage = $('.burger-image');
    const body = $('body');

    if (burgerIcon.length > 0 && mobileMenu.length > 0 && burgerImage.length > 0 && body.length > 0) {
        mobileMenu.hide();

        burgerIcon.click(function() {
            mobileMenu.toggle();

            if (burgerImage.attr('src').includes('burger-icon.svg')) {
                burgerImage.attr('src', './aseets/icons/close.svg');
            } else {
                burgerImage.attr('src', './aseets/icons/burger-icon.svg');
            }

            if (mobileMenu.css('display') === 'block') {
                body.addClass('no-scroll');
            } else {
                body.removeClass('no-scroll');
            }
        });
    } else {
        console.error('One or more required elements are missing.');
    }
});

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    const slides = $('.slide');
    const dots = $('.navigation label');

    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.hide();
    dots.removeClass('active');

    slides.eq(slideIndex).show();
    dots.eq(slideIndex).addClass('active');
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

const dots = $('.navigation label');
dots.each(function(index) {
    $(this).click(function() {
        showSlides(index);
        slideIndex = index;
    });
});

setInterval(nextSlide, 4000);
