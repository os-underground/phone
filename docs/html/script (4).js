function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);





<script>
  interact('.bar')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      listeners: {
        move (event) {
          const target = event.target;

          // Obtén la posición actual
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;

          // Limita para que no salga del contenedor
          const timelineWidth = target.parentElement.clientWidth;
          const barWidth = target.offsetWidth;
          const limitedX = Math.min(Math.max(0, x), timelineWidth - barWidth);

          target.style.left = limitedX + 'px';
          target.setAttribute('data-x', limitedX);
        }
      }
    })
    .resizable({
      edges: { left: true, right: true },
      modifiers: [
        interact.modifiers.restrictEdges({
          outer: 'parent',
          endOnly: true,
        }),
        interact.modifiers.restrictSize({
          min: { width: 20, height: 30 }
        })
      ],
      inertia: true,
      listeners: {
        move (event) {
          const target = event.target;
          let x = parseFloat(target.getAttribute('data-x')) || 0;

          // Cambia tamaño
          let width = event.rect.width;

          // Ajusta posición si se redimensiona desde el lado izquierdo
          x += event.deltaRect.left;

          // Limita posición para que no salga del contenedor
          const timelineWidth = target.parentElement.clientWidth;
          width = Math.min(width, timelineWidth - x);

          target.style.width = width + 'px';
          target.style.left = x + 'px';

          target.setAttribute('data-x', x);
        }
      }
    });
</script>



const timeline = document.getElementById('timeline');
  const bar = timeline.querySelector('.bar');

  // Hacer la barra draggable horizontalmente
  let isDragging = false;
  let startX, origLeft;

  bar.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    origLeft = parseInt(bar.style.left);
    e.preventDefault();
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    let dx = e.clientX - startX;
    let newLeft = origLeft + dx;
    newLeft = Math.min(Math.max(newLeft, 0), timeline.clientWidth - bar.offsetWidth);
    bar.style.left = newLeft + 'px';
  });

  window.addEventListener('mouseup', e => {
    if (isDragging) {
      isDragging = false;
      console.log('Nueva posición (tiempo):', parseInt(bar.style.left));
    }
  });
  
//  // load any project hosted on npm

//  https://cdn.jsdelivr.net/npm/package@version/file
//  
//  
//  // load jQuery v3.6.4
//  
//  https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js
//  
//  
//  // use a version range instead of a specific version
//  
//  https://cdn.jsdelivr.net/npm/jquery@3.6/dist/jquery.min.js
//  
//  https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
//  
//  
//  // omit the version completely to get the latest one
//  
//  // you should NOT use this in production
//  
//  https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
//  
//  
//  // add ".min" to any JS/CSS file to get a minified version
//  
//  // if one doesn't exist, we'll generate it for you
//  
//  https://cdn.jsdelivr.net/npm/jquery@3.6.4/src/core.min.js
//  
//  
//  // omit the file path to get the default file
//  
//  https://cdn.jsdelivr.net/npm/jquery@3.6
//  
//  
//  // add / at the end to get a directory listing
//  
//  https://cdn.jsdelivr.net/npm/jquery/
//












//<script src="https://cdn.jsdelivr.net/npm/@interactjs/interactjs/dist/interact.min.js"></script>
//Luego, modifica el código JS para usar Interact.js así:
//
//<div id="timeline" style="position:relative; width:600px; height:100px; border:1px solid #ccc;">
//  <div class="bar" style="position:absolute; left:50px; top:20px; width:100px; height:30px; background:#3498db; cursor:pointer;"></div>
//</div>
//
//<script>
  interact('.bar')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      listeners: {
        move (event) {
          const target = event.target;

          // Obtén la posición actual
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;

          // Limita para que no salga del contenedor
          const timelineWidth = target.parentElement.clientWidth;
          const barWidth = target.offsetWidth;
          const limitedX = Math.min(Math.max(0, x), timelineWidth - barWidth);

          target.style.left = limitedX + 'px';
          target.setAttribute('data-x', limitedX);
        }
      }
    })
    
    .resizable({
      edges: { left: true, right: true },
      modifiers: [
        interact.modifiers.restrictEdges({
          outer: 'parent',
          endOnly: true,
        }),
        interact.modifiers.restrictSize({
          min: { width: 20, height: 30 }
        })
      ],
      inertia: true,
      listeners: {
        move (event) {
          const target = event.target;
          let x = parseFloat(target.getAttribute('data-x')) || 0;

          // Cambia tamaño
          let width = event.rect.width;

          // Ajusta posición si se redimensiona desde el lado izquierdo
          x += event.deltaRect.left;

          // Limita posición para que no salga del contenedor
          const timelineWidth = target.parentElement.clientWidth;
          width = Math.min(width, timelineWidth - x);

          target.style.width = width + 'px';
          target.style.left = x + 'px';

          target.setAttribute('data-x', x);
        }
      }
    });
//</script>