
//3. script.js (organizado y corregido)
// Función para minimizar la ventana draggable
function minimizarVentana() {
  const contenido = document.getElementById("contenidoVentana");
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
}

// Función para hacer draggable la ventana
function dragElement(elmnt) {
  const barra = document.getElementById("barra1");
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  barra.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Inicializar draggable para ventana1
document.addEventListener("DOMContentLoaded", () => {
  const ventana = document.getElementById("ventana1");
  if (ventana) {
    dragElement(ventana);
  }
});

// Ejemplo: Obtener datos del servidor
function obtenerDatos() {
  fetch("/datos")
    .then((res) => res.json())
    .then((data) => {
      console.log("Datos recibidos:", data);
      // Ejemplo de actualización del DOM
      const main = document.querySelector("main");
      main.innerHTML += `<p>Mensaje del servidor: ${data.mensaje}</p>`;
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}

document.addEventListener("DOMContentLoaded", obtenerDatos);