import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//portafolio-hernan-stagni.netlify.app
//https://github.com/HernanGabrielStagni/PORTAFOLIO_HERNAN_STAGNI.git

import './App.css'
import NavBar from './COMPONENTS/NavBar'
import Inicio from './COMPONENTS/Inicio'
import SobreMi from './COMPONENTS/SobreMi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      
    
      <NavBar/>
      <Inicio/>
      <SobreMi/>

      
    </main>

  )
}

export default App
