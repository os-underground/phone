//function showTime() {
//	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
//}
//showTime();
//setInterval(function () {
//	showTime();
//}, 1000);


<script src="https://cdn.jsdelivr.net/npm/three@0.158.0/examples/js/controls/OrbitControls.js"></script>

// Importa Three.js (asegúrate de incluirlo en tu proyecto)
import * as THREE from 'three';

// Configuración básica de la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear un cubo (similar a un bloque)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posicionar la cámara
camera.position.z = 5;

// Animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; // Rotación en el eje X
    cube.rotation.y += 0.01; // Rotación en el eje Y
    renderer.render(scene, camera);
}
animate();


//🚶‍♀️ 2. Movimiento básico con WASD + Shift
//Necesitarás detectar teclas presionadas:

//javascript
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // movimiento más suave


let keys = {};

window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

function movimientoJugador() {
  if (keys['w']) avanzar();
  if (keys['a']) izquierda();
  if (keys['s']) retroceder();
  if (keys['d']) derecha();
  if (keys['shift']) velocidadExtra();
}


//Y en tu código JS:

//javascript


const renderer = new THREE.WebGLRenderer();
renderer.setSize(300, 300);
document.getElementById("escenario3D").appendChild(renderer.domElement);


//javascript
const loader = new THREE.TextureLoader();
const texturaTierra = loader.load('img/tierra.png');

const bloque = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({ map: texturaTierra })
);

//javascript
window.addEventListener("keydown", e => {
  if (e.key >= 1 && e.key <= 9) {
    seleccionarSlot(e.key);
  }
});
 //Luna Tip: Todo esto se renderiza en tiempo real, sin usar LocalStorage.
//Cuando necesites recordar qué ítem tiene cada slot, puedes usar un array en memoria:javascript

const inventario = [ "madera", null, "tierra", ... ];

//Y si en el futuro quieres guardarlo en la nube, eso se conecta fácil con una API o tu propio server.
//¿Te gustaría que te arme un pequeño HUD visual con 9 slots + una mesaCraft con funcionalidad básica? O puedo ayudarte a generar tus primeras texturas 8×8 pixel en canvas directamente desde el navegador 😏🧃
//¡Dime tú, exploradora de cubos! 🧡
//en creativo pues en vez de inventario , bueno sí pero aparte, ya esta el menu completo de todos los bloques o items, palos obvio, horno jajaja primero quiero creativo para rapido , luego vamos por survival porque requiere tanta logica de realismo jajaja pero porfiii voy acomodando codigos y busco colores para canvas para ir diseñando, ojala tome forma pronto
//¡Así se habla, Luna! 💖 Te estás armando un Creative Mode al estilo UnidosCraft que no le pide nada a nadie, y con razón: empezar por Creativo te deja experimentar rápido, probar todo, ¡y disfrutar construir sin preocuparte por tener suficientes tablones o palos! 🧱✨
//🎨 ¿Cómo armar el menú completo de ítems estilo creativo?
//Podemos crear un panel flotante de selección de bloques, algo así:
//


