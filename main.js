
jQuery(document).ready(function ($) {
    
    $("#intro-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        items: 1
      });
    
    $('.client-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            900:{
                items:5
            }
        }
    })



    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            900:{
                items:3
            }
        }
    })
});


// Fixed Scroll

const header = document.querySelector('.header');
const navLinks = document.querySelector('.nav__menu-link')

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 44) {
        header.classList.add('header__scroll');
    } else {
        header.classList.remove('header__scroll');
    }
});

// Hamburger menu 

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

    $('.menu-btn').click(function () {
        $('menu-btn, .mobile-nav-overlay, .header__nav').toggleClass('active');
    });


// Smooth Scroll 

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

        console.log(targetPosition)

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
        links.forEach(each => {
            each.addEventListener('click', function(event) {
                menuBtn = document.querySelector('.menu-btn');
            });
        });
    };
    scrollTo();
}());

