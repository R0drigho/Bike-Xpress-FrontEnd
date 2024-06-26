$(document).ready(function() {

    //Funciones de la cabecera
    $('.menu-toggle').click(function() {
        $('.cabecera-box').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 600) {
            $('.cabecera-box').show();
        } else {
            $('.cabecera-box').hide();
        }
    });
    // Carrusel
    let currentIndex = 0;
    const images = $('.portada img');
    const imageCount = images.length;

    function showNextImage() {
        images.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % imageCount;
        images.eq(currentIndex).addClass('active');
    }
    setInterval(showNextImage, 3000); // cambio cada 3 segundos

    // Modal
    $('.tarjeta img').click(function() {
        var src = $(this).attr('src');
        $('.modal-content').attr('src', src);
        $('.modal').fadeIn();
    });

    $('.close').click(function() {
        $('.modal').fadeOut();
    });

    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal').fadeOut();
        }
    });
    
});