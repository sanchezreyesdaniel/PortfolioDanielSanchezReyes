import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import javascriptIcon from '../assets/javascript-icon.png';
import reactIcon from '../assets/react-icon.png';
import wordpressIcon from '../assets/wordpress-icon.png';
import phpIcon from '../assets/php-icon.png';
import gitIcon from '../assets/git-icon.png';
import githubIcon from '../assets/github-icon.jpg';

export function AboutMe() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id="sobremi" className="flex flex-col items-center justify-center">
  <div className="container mx-auto p-8">
    <h2 className="text-center text-6xl font-bold text-blue-700 mb-12">ACERCA DE MÍ</h2>
    <div className="flex justify-center items-center">
      <div className="border-b-4 border-blue-500 pb-2 w-[100px]"></div>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-lg text-gray-700">
          Soy un Desarrollador Web orientado a resultados, apasionado por la construcción y gestión de sitios web y aplicaciones web que conducen al éxito del producto en general. Durante mi formación, he adquirido conocimientos en una amplia gama de tecnologías y plataformas, incluyendo WordPress, Vite, React, JavaScript, C++, HTML y CSS. A lo largo de mis estudios, he trabajado en diversos proyectos académicos que me han permitido aplicar mis conocimientos teóricos a situaciones prácticas. Estos proyectos han sido fundamentales para desarrollar mis habilidades técnicas y mi capacidad para resolver problemas complejos de manera eficiente. He aprendido a combinar diseño y funcionalidad para crear experiencias de usuario intuitivas y atractivas.
        </p>
      </div>
      <div>
        <p className="text-lg text-gray-700">
          Mi enfoque en el desarrollo web se centra en la optimización y la eficiencia, asegurándome de que cada proyecto esté bien estructurado y sea fácil de mantener. Estoy comprometido con el aprendizaje continuo y me mantengo al día con las nuevas tecnologías y tendencias en el campo del desarrollo web para asegurarme de que mis habilidades estén siempre a la vanguardia.
        </p>
       <a href="#proyectos"> <button className="py-5 px-14 mt-8 font-bold text-white bg-gradient-to-r from-blue-700 to-blue-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
          PROYECTOS
        </button></a>
      </div>
    </div>

    <div className="mt-12">
      <h3 className="text-3xl font-bold mb-4 text-center text-blue-700 ">Mis habilidades</h3>
      <div className="flex justify-center">
        <div className="w-[100px] text-center border-b-4 border-blue-500"></div>
      </div>

      <Slider {...settings} className="mx-auto max-w-screen-xl">
        <SkillCard image={htmlIcon} title="HTML" />
        <SkillCard image={cssIcon} title="CSS" />
        <SkillCard image={javascriptIcon} title="JavaScript" />
        <SkillCard image={reactIcon} title="React" />
        <SkillCard image={wordpressIcon} title="Wordpress" />
        <SkillCard image={phpIcon} title="PHP" />
        <SkillCard image={gitIcon} title="GIT" />
        <SkillCard image={githubIcon} title="Github" />
      </Slider>
    </div>
  </div>
</div>

  );
}

function SkillCard({ image, title }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <img src={image} alt={title} className="h-20 mb-4" />
      <h4 className="text-lg font-semibold text-blue-700">{title}</h4>
    </div>
  );
}
