function funcionCargar(){

    let menuizquierda = document.getElementById("menuizquierda");
    menuizquierda.innerHTML = "<h1>HOLA</h1>";
   
};

function agregarAlCarrito(){ 

    let numeroItems = document.getElementById("numeroItems");
    let cantidad = parseInt(numeroItems.innerHTML);
    numeroItems.innerHTML = `${++cantidad}`;
}

function iniciarSesion(){ 

    const usuario = "vianillo"
    const password = "12345"
    
    let nombreUsuario = document.getElementById("introducirUsuario").value;
    let contraseñaUsuario = document.getElementById("contrasenaUsuario").value;
    let mensaje = document.getElementById("mensajeInicio");
   
    if(nombreUsuario == usuario && contraseñaUsuario == password ){

        mensaje.innerHTML = "<span>Bienvenido</span>"

    } else{
        mensaje.innerHTML = "<span>Error</span>"
}
}
