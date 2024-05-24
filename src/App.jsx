
import './App.css'
import { AboutMe } from './componentes/aboutme'
import { Avatar } from './componentes/componente-header/avatar'
import { Menu } from './componentes/componente-header/menu'
import { Contact } from './componentes/contact'
import { Footer } from './componentes/footer'
import { Home, Redes } from './componentes/home'
import { Proyects } from './componentes/proyects'
import backgroundPhoto from './assets/telephone-612061_1280.jpg';


function App() {
  

  return (
    <>
    <div>
      <div className=' '>
        
        <Menu></Menu>
        <Home></Home>
      </div>
      <div id='home'>
        {/* <Home></Home> */}
        {/* <Redes></Redes> */}
      </div>
      <div id='aboutme'>
        <AboutMe></AboutMe>
      </div>
      <div>
        <Proyects></Proyects>
      </div>
      <div
  style={{
    backgroundImage: `url(${backgroundPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
  }}
>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
        
    </div>
    </>
    
    
  )
}

export default App
