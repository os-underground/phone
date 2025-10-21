/*
  Use the following to include this css file
  <link rel="stylesheet" href="styles1.css" />
*/
p {
  color: blue;
}

*{
  margin: 0;
  box-sizing: border-box;
}
<meta charset="UTF-8" />
  <title>Click derecho </title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #111;
      color: white;
    }

    #menuContextual {
      position: absolute;
      display: none;
      background: #222;
      border: 1px solid #444;
      padding: 10px;
      z-index: 999;
    }

    #menuContextual button {
      display: block;
      background: none;
      color: white;
      border: none;
      padding: 5px 10px;
      text-align: left;
      cursor: pointer;
    }

    #menuContextual button:hover {
      background: #444;
    }
  </style>
  
  
  
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

//<!-- javascript

crearVentana Navegador{
  titulo: "Navegador",;
  contenido: "<iframe src='https://example.com' width='100%' height='100%'></iframe>"
})


//<!--
//🧩 Componentes clave a implementar:
//Componente	Descripción


.ventana Contenedor	{
  Contenedor flotante{};
}
  
  






  function cargarSitio() {
    const url = document.getElementById("url").value;
    document.getElementById("visor").src = url.startsWith("http") ? url : "https://" + url;
  }


<script>
  function minimizarVentana() {
    const contenido = document.getElementById("contenidoVentana");
    if (contenido.style.display === "none") {
      contenido.style.display = "block";
    } else {
      contenido.style.display = "none";
    }
  }

dragElement(document.getElementById("ventana1"));

function dragElement(elmnt) {
  const barra = document.getElementById("barra1");
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  barra.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    // posición inicial del mouse
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calcular distancia
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // mover el elemento
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  
}





dragElement(document.getElementById("ventana1"));

function dragElement(elmnt) {
  const barra = document.getElementById("barra1");
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  barra.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    // posición inicial del mouse
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calcular distancia
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // mover el elemento
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
    
    
    
    
  
  
  

  
  
  
    function abrir(id) {
      document.getElementById(id).style.display = 'block';
    }

    function cerrar(id) {
      document.getElementById(id).style.display = 'none';
    }






