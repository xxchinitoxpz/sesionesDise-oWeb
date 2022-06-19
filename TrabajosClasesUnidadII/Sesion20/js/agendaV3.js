function guardarDato() {

    const DNI = document.getElementById("DNI").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;

    const datos ={
        'nombre': nombre,
        'apellido': apellido,
        'movil': movil,
        'email': email,
    }

    localStorage.setItem(DNI,JSON.stringify(datos));

    document.getElementById("DNI").value= "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";

    actualizarDato();
}

function recuperarDato() {
    var DNI = document.getElementById("recuperarDNI").value;
    localStorage.getItem(DNI);

    var datosJson = JSON.parse(localStorage.getItem(DNI));

    document.getElementById("DNI").value = DNI;
    document.getElementById("nombre").value=datosJson.nombre;
    document.getElementById("apellido").value=datosJson.apellido;
    document.getElementById("movil").value=datosJson.movil;
    document.getElementById("email").value=datosJson.email;
}

function eliminarDato() {
    var DNI = document.getElementById("eliminarDNI").value;
    localStorage.removeItem(DNI);
    actualizarDato();
}

function eliminarTodo() {
    localStorage.clear();
    actualizarDato()
}

function actualizarDato() {
    var registro ="";
    if (localStorage.length===0) {
        registro +='<li>Vacio</li>';
    } else {
        for(var i=0;i<=localStorage.length-1;i++){
            var key=localStorage.key(i);
            var datosJson = JSON.parse(localStorage.getItem(key));
            registro+= '<li>'+'<span class="DNI">'+key+'</span>'+'<span class="nombre">'+datosJson.nombre+'</span>'+'<span class="apellido">'+datosJson.apellido+'</span>'+'<span class="movil">'+datosJson.movil+'</span>'+'<span class="email">'+datosJson.email+'</span>'+'</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML=registro;
}