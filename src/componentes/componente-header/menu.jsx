import { useState, useEffect } from 'react';
import { Avatar } from './avatar';
import technologyImage from '../../assets/technology-8767478_1920.png';


export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuModal = document.querySelector('.menu-modal');
      const hamburgerButton = document.querySelector('.hamburger-button');
      if (
        menuOpen &&
        menuModal &&
        hamburgerButton &&
        !menuModal.contains(event.target) &&
        !hamburgerButton.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className="menu-container"
      style={{
        backgroundImage: `url(${technologyImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
      }}
    >
      <div className="flex justify-between items-center mt-6 relative">
        <div className="flex-grow">
          {/* Logo o Nombre de la marca */}
          {/* <Avatar></Avatar> */}
          <div className="text-lg font-bold text-purple-700 mb-5"></div>
        </div>

        {/* Icono de hamburguesa para el menú responsive */}
        <div style={{
        left:'200px',
      }} className="lg:hidden absolute top-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-white focus:outline-none hamburger-button ${menuOpen ? 'hidden' : 'block'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Menú principal para escritorio */}
        <div className="hidden lg:flex lg:justify-end lg:space-x-12">
          <a href="#" className="block text-lg font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm">HOME</a>
          <a href="#sobremi" className="block text-lg font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm">SOBRE MÍ</a>
          <a href="#proyectos" className="block text-lg font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm">MIS PROYECTOS</a>
          <a href="#contacto" className="block text-lg font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm">CONTACTO</a>
        </div>
      </div>

      {/* Menú modal para móviles */}
      {menuOpen && (
        <div className="menu-modal fixed inset-0 bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center z-50 transform transition-transform duration-300 ease-in-out">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white focus:outline-none absolute top-4 right-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a
            href="#"
            className="block text-2xl font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm my-4"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>
          <a
            href="#sobremi"
            className="block text-2xl font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm my-4"
            onClick={() => setMenuOpen(false)}
          >
            SOBRE MÍ
          </a>
          <a
            href="#proyectos"
            className="block text-2xl font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm my-4"
            onClick={() => setMenuOpen(false)}
          >
            MIS PROYECTOS
          </a>
          <a
            href="#contacto"
            className="block text-2xl font-bold text-white hover:text-blue-400 transition duration-500 border-b-2 border-transparent hover:border-blue-400 shadow-sm my-4"
            onClick={() => setMenuOpen(false)}
          >
            CONTACTO
          </a>
        </div>
      )}
    </div>
  );
}
