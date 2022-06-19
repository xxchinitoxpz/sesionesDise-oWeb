$(document).ready(function(){
    // console.log('Documento listo');
    //añadir una clase
     $('.HH1').addClass('amarillo');
     //eliminar clase
     $('.parrafo').removeClass('.parrafo');
     //intercambio, añade o borra
     $('button').click(function(){
         $('p').toggleClass('parrafo');
         console.log($('p').css('font-size'));
         console.log($('p').css('margin'));
         $('#contenido').innerWidth(1240);
         $('#contenido').outerHeight(3240);
         $('p').css({'background-color':'red','font-size':'1.3em'});
     });
     //obtener valor propiedad
     console.log($('p').css('font-size'));
     console.log($('p').css('margin'));
     //asigna o cambia valor
     $('p').css({'background-color':'pink','font-size':'1.3em'});
     //cambiar dimensiones
     $('#contenido').width(1000);
     $('#contenido').height(1000);
     //innerWidth outerWidth innerHeight outerHeight
 });

 function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('enlace_'+id);
  
    if(elemento.style.display == "" || elemento.style.display == "block") {
      elemento.style.display = "none";
      enlace.innerHTML = 'Mostrar contenidos';
    }
    else {
      elemento.style.display = "block";
      enlace.innerHTML = 'Ocultar contenidos';
    }
  }