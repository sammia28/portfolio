$(document).ready(cargar);

var contador = 1;

function cargar (){

    if( isMobile.any() ){
        $("nav").css("display", "none");

        $(".icon-menu").click(function(){
            if (contador == 1) {
                $("nav").css('opacity', 0)
                        .slideDown('slow')
                        .animate(
                            { opacity: 1 },
                            { queue: false, duration: 'slow' }
                        );
                contador = 0;
            } else {
                $("nav").css('opacity', 1)
                    .slideUp(0)
                    .animate(
                        { opacity: 0 },
                        { queue: false, duration: 1 }
                    );
                contador = 1;
            }
        });
    }
};

$(document).ready(main);

function main () {

    $(window).scroll(function(){
        var window_y = $(window).scrollTop();
        var scroll_critical = parseInt($("#header-menu").height());
        if( !isMobile.any() ){
            if (window_y > scroll_critical) {
                $("#header-menu").css("background-color","#FFF");
                $("header nav").addClass("navJS");

                $(".img-profile").css("top", "2%");
                $(".img-profile").css("left", "2%");
                $(".img-profile").css("position", "fixed");
                $(".img-profile").css("width", "9%");
                $(".img-profile").css("height", "16%");
                $("#header-menu").css("-webkit-box-shadow", "1px 1px 4px 0px rgba(0,0,0,0.50)");
                $("#header-menu").css("-moz-box-shadow", "1px 1px 4px 0px rgba(0,0,0,0.50)");
                $("#header-menu").css("box-shadow", "1px 1px 4px 0px rgba(0,0,0,0.50)");
            } else if(window_y <= scroll_critical) {
                $("#header-menu").css("background-color","transparent");
                $("header nav").removeClass("navJS");

                $(".img-profile").css("top", "24%");
                $(".img-profile").css("left", "40%");
                $(".img-profile").css("width", "15%");
                $(".img-profile").css("height", "28vh");
                $("#header-menu").css("-webkit-box-shadow", "none");
                $("#header-menu").css("-moz-box-shadow", "none");
                $("#header-menu").css("box-shadow", "none");
            }
        }
    })

    /*OCULTAR MENU AL HACER CLIK()*/

    $("#header-menu nav ul li a").click(function() {
        if( isMobile.any() ){
            $(".icon-menu").click();
            contador = 1;
        }
    });

}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$( document ).ready(function() {
    tamano='';
    i=1;
    ConvertirTexto();
    setInterval(Animar,90);
});

function ConvertirTexto(){
    resultado='';

    cadena=$('#text-animation').html();
    tamano=cadena.length;

    for (var i = 0; i< tamano; i++) {
        letra=cadena.charAt(i);
        resultado+='<span class="ta-letra ">'+letra+'</span>';
    }

    $('#text-animation').html(resultado);
}

function Animar(){
    if(i<=tamano){
        $('.ta-letra:nth-child('+i+')').css('color','rgb(241, 217, 145)');
    }
    i++;
}