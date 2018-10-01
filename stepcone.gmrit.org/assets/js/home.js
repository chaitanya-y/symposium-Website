var myVar;
var options = {
    preload: {
        selector: '.preload',
        itemSelector: '.preload__letter',
        text: 'STEPCONE 2018'
    }
};
var Preload = function () {
    preloadLetters = document.querySelectorAll(options.preload.itemSelector);
    text = options.preload.text.toUpperCase().split('');
    intervals = [];
    this.init = function () {
        for (var i = 0; i < text.length; i++) {
            letterRandomize(preloadLetters[i], i);
        }
    };
    var letterRandomize = function (el, index) {
        possible = "ACDEFGHIMNOPQRSTUVZ012789";
        intervals[index] = setInterval(function () {
            el.innerHTML = possible.charAt(Math.floor(Math.random() * possible.length));
        }, 70);
        setTimeout(function () {
            clearInterval(intervals[index]);
            el.innerHTML = text[index];
            el.classList.add('preload__letter--loaded');
        }, 400 * index);
    };
};





$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('.header-show').fadeIn();
    } else {
        $('.header-show').fadeOut();
    }
});





$('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                    ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
$(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
);




window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}










