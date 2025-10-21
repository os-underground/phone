

import React from 'react';
import ReactDOM from 'react-dom/client';

// Componente para una tarjeta de proyecto
const TarjetaProyecto = ({ titulo, descripcion, videoId }) => {
  return (
    <div className="card bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">{titulo}</h2>
      <p className="text-gray-600 mb-4">{descripcion}</p>
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

// Componente principal que usa las tarjetas
const App = () => {
  // Aquí puedes poner una lista de todos tus 40 proyectos
  const proyectos = [
    { titulo: "Proyecto 1", descripcion: "Este es el primer proyecto de mi portafolio.", videoId: "dQw4w9WgXcQ" },
    { titulo: "Proyecto 2", descripcion: "Un segundo proyecto con información diferente.", videoId: "l5xV-sW03q8" },
    { titulo: "Proyecto 3", descripcion: "Tercer proyecto con un diseño similar.", videoId: "kYt1V-xJ26k" },
    { titulo: "Proyecto 4", descripcion: "Descripción del cuarto proyecto.", videoId: "dQw4w9WgXcQ" },
    { titulo: "Proyecto 5", descripcion: "Descripción del quinto proyecto.", videoId: "l5xV-sW03q8" },
    { titulo: "Proyecto 6", descripcion: "Descripción del sexto proyecto.", videoId: "kYt1V-xJ26k" },
    // Agrega los 34 proyectos restantes aquí
  ];

  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #6DC7E2 0%, #9E1CFF 100%);
        }
      `}</style>
      <header className="w-full text-center text-white py-8 rounded-lg mb-8 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Mi Portafolio</h1>
      </header>

      <div className="main-content w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <TarjetaProyecto key={index} {...proyecto} />
        ))}
      </div>
    </div>
  );
};

// Renderiza el componente App en el div 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
