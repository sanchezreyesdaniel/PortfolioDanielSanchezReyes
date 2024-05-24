import { Menu } from "./componente-header/menu";

export function Home() {
    return (
        <div className="text-2xl mt-2">
            {/* <div style={{
                backgroundImage: 'url(src/assets/technology-8767478_1920.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
            }}> */}
            <div>
            {/* <Menu></Menu>      */}

            <div className="">
                {/* <Redes /> */}
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <h1 className="font-bold text-7xl text-center">Daniel Sanchez Reyes</h1>
                <h5 className="text-gray-300 text-center mt-6">
                    Desarrollador web orientado a resultados, construyendo y gestionando sitios web y aplicaciones web que conducen al éxito del producto en general.
                </h5>
                <div className="text-center mt-6">
                    <a href="#proyectos"><button className="py-5 px-14 mt-4 font-bold text-white bg-gradient-to-r from-blue-700 to-blue-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
                        PROYECTOS
                    </button></a>
                </div>
            </div>
        
            </div>
        </div>
    );
}

export function Redes (){
    return (
        <>
        <div className="absolute left-0 top-1/4 mt-24 py-5 flex flex-col justify-center items-start px-4">
            <a href="#" className="mb-4">
                <img src="src/assets/linkedin-light.svg" alt="Logo 1" className="w-12 h-12" />
            </a>
            <a href="#" className="mb-4">
                <img src="src/assets/twitter-light.svg" alt="Logo 2" className="w-12 h-12" />
            </a>
            <a href="#" className="mb-4">
                <img src="src/assets/yt-light.svg" alt="Logo 3" className="w-12 h-12" />
            </a>
            <a href="#" className="mb-4">
                <img src="src/assets/github-light.svg" alt="Logo 4" className="w-12 h-12" />
            </a>
            <a href="#">
                <img src="src/assets/book-light.svg" alt="Logo 5" className="w-12 h-12" />
            </a>
        </div>
        </>
    )
}
