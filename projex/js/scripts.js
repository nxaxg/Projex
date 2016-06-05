$(document).ready(function () {
    "use strict";
    myScroller();
    smoothy();
});

//funciones

//select nav
function myScroller() {
    "use strict";
    var tope = 600; /*from top*/
    function posActual() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    $(window).scroll(function () {
        var scroll = posActual(); /*posicion actual*/
        function sticky() {
            return $("header").addClass('sticky');
        }

        function selectRemove() {
            return $('.nav-op').removeClass('nav-sel');
        }
        
        if (scroll < tope) {
            //home
            $("header").removeClass('sticky');
            selectRemove();
            $('li:first-child>.nav-op').addClass('nav-sel');
        } else if (scroll > tope && scroll < 1100) {
            //services
            selectRemove();
            sticky();
            $('li:nth-child(2)>.nav-op').addClass('nav-sel');
        } else if (scroll >= 1100 && scroll < 1900) {
            //portfolio
            selectRemove();
            sticky();
            $('li:nth-child(3)>.nav-op').addClass('nav-sel');
        } else if (scroll >= 1900 && scroll < 2600) {
            //team
            selectRemove();
            sticky();
            $('li:nth-child(4)>.nav-op').addClass('nav-sel');
        } else if (scroll >= 2600 && scroll < 3300) {
            //blog
            selectRemove();
            sticky();
            $('li:nth-child(5)>.nav-op').addClass('nav-sel');
        } else {
            //contact
            selectRemove();
            sticky();
            $('li:nth-child(6)>.nav-op').addClass('nav-sel');
        }
    });
}

//smoothy scrolling
function smoothy() {
    "use strict";
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}