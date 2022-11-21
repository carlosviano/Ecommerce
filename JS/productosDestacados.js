function cargarDestacados(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText);
            let nombre = "";
            let stock = "";
            let precio = "";
            let contenidoDestacado = "<ul>"
            console.log(response)
            for(let i = 0; i < response.length; i++){ 
                nombre = response[i].nombre;
                stock = response[i].stock;
                precio = response[i].precio;
                contenidoDestacado += `<li> Nombre del producto:${nombre} stock: ${stock} precio del producto: ${precio}  </li>  `
            }
            contenidoDestacado += "</ul>"
            let cambiarDivDestacados = document.getElementById("productosDestacados");
            cambiarDivDestacados.innerHTML = contenidoDestacado;
        }
    }
    request.open("GET", "http://127.0.0.1:8000/productosdestacados", true);
    request.send();
}
