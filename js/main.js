 $(document).ready(function(){
	$(".button-collapse").sideNav();
    $('.slider').slider({full_width: true});
});
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
    $('.ta-letra:nth-child('+i+')').css('color','black');
  }
  i++;
}