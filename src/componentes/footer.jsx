import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import ordenaImage from '../assets/ordena.png'; // Importación de la imagen

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div>
            <div className="text-3xl font-bold text-white mb-4">Daniel Sanchez Reyes</div>
            <p>
              Desarrollador web orientado a resultados, construyendo y gestionando sitios web y aplicaciones web que conducen al éxito del producto en general.
            </p>
          </div>
          
          {/* Navegación */}
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#sobremi" className="hover:text-gray-300">Sobre mí</a></li>
              <li><a href="#proyectos" className="hover:text-gray-300">Mis Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-gray-300">Contacto</a></li>
            </ul>
          </div>
          
          {/* Contacto e Información */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacta</h4>
            <p className="text-white">Email: sanchezreyesdaniel@fpllefia.com</p>
            <p className="text-white">Teléfono: +34 695245850</p>
          </div>
          
          {/* Redes Sociales */}
          <div>
            <div className="flex space-x-4">
              <img width={170} src={ordenaImage} alt="Ordena" />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-10 pt-6 text-center text-gray-300 text-sm">
          &copy; 2024 Daniel Sanchez Reyes.
        </div>
      </div>
    </footer>
  );
}
