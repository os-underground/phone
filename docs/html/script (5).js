function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);






// Función para obtener datos del servidor
function obtenerDatos() {
  fetch('/datos')
    .then(res => res.json())
    .then(data => {
      console.log('Datos recibidos:', data);
      // Actualizar DOM si quieres, ejemplo:
      const main = document.querySelector('main');
      main.innerHTML += `<p>Mensaje del servidor: ${data.mensaje}</p>`;
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', obtenerDatos);



//<script>
//  fetch('/datos')
//    .then(res => res.json())
//    .then(data => {
//      // puedes actualizar el DOM con los datos recibidos
//      console.log(data);
//    })
//    .catch(error => {
//      console.error('Error al obtener los datos:', error);
//    });
//</script>


//fetch('/datos', {dpg-d1dbh015pdvs73ak963g-a });
//    dpg-d1dbh015pdvs73ak963g-a


//<script> 
//main. infoUser.html
  // Variables
  
  let nombre = "Oscar";
  let edad = 25;

 //Mostrar mensaje
  alert("Hola, " + nombre + ". Tienes " + edad + " años.");
//</script>





//VARIABLE BARRA SUPERIOR 
//const barhud = header.barra{
  
//}






//barra superior
<script>header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #2c3e50;
      color: white;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;
    }

    .barra-busqueda input {
      padding: 5px;
      border-radius: 4px;
      border: none;
    }

    .barra-busqueda button {
      padding: 5px 10px;
      margin-left: 5px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    /* Contenido principal con espacio para la barra superior */
    main {
      padding: 80px 20px;
      margin-left: 60px; /* Espacio mínimo cuando la barra lateral está oculta */
    }
</script>



<script>
  function minimizarVentana() {
    const contenido = document.getElementById("contenidoVentana");
    if (contenido.style.display === "none") {
      contenido.style.display = "block";
    } else {
      contenido.style.display = "none";
    }
  }
</script>



<script> 
frameURLTwitch {

 position: fixed;
      top: 20;
      left: 020;
      width: 100%;
      background-color: #1e1e1e;
      color: white;
      padding: 100px 200px;
      display: flex;
      align-items: center;
      z-index: 360;
  
 frameUrlTwtc = ("https://www.twitch.tv/videos/2476610189?t=0h4m7s");
  
}

</script>








