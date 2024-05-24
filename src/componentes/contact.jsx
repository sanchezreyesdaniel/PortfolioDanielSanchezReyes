import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export function Contact() {
  return (
    <div id='contacto' className="container mx-auto px-4 py-6 md:py-12">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-blue-700">¡Contáctame!</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        {/* Correo Electrónico */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition duration-300 transform hover:scale-105 flex flex-col items-center" style={{ width: '300px', height: '200px' }}>
          <div className="flex items-center mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-xl md:text-3xl mr-3 md:mr-4" />
            <h3 className="text-lg md:text-xl font-semibold text-blue-700">Correo Electrónico</h3>
          </div>
          <p className="text-gray-700 text-base md:text-lg text-center">
            Envíame un correo electrónico a la siguiente dirección:
            <br />
            <a href="mailto:sanchezreyesdaniel@fpllefia.com" className="text-blue-600 hover:underline">sanchezreyesdaniel@fpllefia.com</a>
          </p>
        </div>

        {/* Número de Teléfono */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition duration-300 transform hover:scale-105 flex flex-col items-center" style={{ width: '300px', height: '200px' }}>
          <div className="flex items-center mb-3">
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-xl md:text-3xl mr-3 md:mr-4" />
            <h3 className="text-lg md:text-xl font-semibold text-blue-700">Número de Teléfono</h3>
          </div>
          <p className="text-gray-700 text-base md:text-lg text-center">
            Para consultas telefónicas, puedes llamarme al siguiente número:
            <br />
            <span className="text-blue-600">+34695245850</span>
          </p>
        </div>
      </div>
    </div>
  );
}
