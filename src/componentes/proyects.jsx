import { useState } from 'react';
import tetrisImage from '../assets/tetris.jpg';
import pokemonImage from '../assets/pokemon.png';
import incidenciasImage from '../assets/incidencias.png';
import historiasImage from '../assets/historias.png';
import fondo from '../assets/fondo.jpg';
export function Proyects() {
  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleHoverExit = () => {
    setHovered(null);
  };
  
  return (
    <div id='proyectos' className='container-fluid' style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '1.5rem 2rem', // Agrega el padding para dispositivos móviles
    }}>
      <div className="container mx-auto p-6">
        <h2 className="text-center text-3xl md:text-6xl font-bold mb-6 text-white">Mis Proyectos</h2>
        <div className="flex justify-center items-center mb-6">
          <div className="border-b-2 border-white pb-2 w-12 md:w-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Dopefolio */}
          <div
            className={`project-card bg-white border border-gray-200 rounded-lg overflow-hidden relative transform transition-transform duration-500 ease-in-out ${
              hovered === 0 ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-lg'
            }`}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleHoverExit}
          >
            <div className="project-img aspect-w-16 aspect-h-9">
              <img
                src={tetrisImage}
                alt="Tetris Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="project-info p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-700">TETRIS</h2>
              <p className="text-sm md:text-base text-gray-700">
                Tetris es un clásico juego de puzzle donde formas geométricas caen y debes completar líneas horizontales para sumar puntos.
              </p>
              <a href="https://sanchezreyesdaniel.github.io/Tetris/"><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Ver Proyecto
              </button></a>
            </div>
          </div>

          {/* Wilsonport */}
          <div
            className={`project-card bg-white border border-gray-200 rounded-lg overflow-hidden relative transform transition-transform duration-500 ease-in-out ${
              hovered === 1 ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-lg'
            }`}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleHoverExit}
          >
            <div className="project-img aspect-w-16 aspect-h-9">
              <img
                src={pokemonImage}
                alt="Memory Pokemon Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="project-info p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-700">MEMORY POKEMON</h2>
              <p className="text-sm md:text-base text-gray-700">
                Aquí está creado el juego de memoria utilizando la API de Pokémon.
              </p>
              <a href="https://memory-game-mdpi.onrender.com/"><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Ver Proyecto
              </button></a>
            </div>
          </div>

          {/* Incidencias */}
          <div
            className={`project-card bg-white border border-gray-200 rounded-lg overflow-hidden relative transform transition-transform duration-500 ease-in-out ${
              hovered === 2 ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-lg'
            }`}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleHoverExit}
          >
            <div className="project-img aspect-w-16 aspect-h-9">
              <img
                src={incidenciasImage}
                alt="Incidencias Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="project-info p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-700">INCIDENCIAS</h2>
              <p className="text-sm md:text-base text-gray-700">
                El objetivo de este proyecto es diseñar y desarrollar una página web que gestione incidencias según los roles en un colegio y sus ordenadores.
              </p>
              <a href="https://tickets-daniel.onrender.com/"><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Ver Proyecto
              </button></a>
            </div>
          </div>

          {/* Mis Historias */}
          <div
            className={`project-card bg-white border border-gray-200 rounded-lg overflow-hidden relative transform transition-transform duration-500 ease-in-out ${
              hovered === 3 ? 'scale-105 shadow-2xl' : 'hover:scale-105 hover:shadow-lg'
            }`}
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleHoverExit}
          >
            <div className="project-img aspect-w-16 aspect-h-9">
              <img
                src={historiasImage}
                alt="Mis Historias Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="project-info p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-700">MIS HISTORIAS</h2>
              <p className="text-sm md:text-base text-gray-700">
                Plataforma digital que muestra secuencias cortas de eventos o actividades personales recientes.
              </p>
              <a href="https://mishistorias.onrender.com/"><button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Ver Proyecto
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
