import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//portafolio-hernan-stagni.netlify.app
//https://github.com/HernanGabrielStagni/PORTAFOLIO_HERNAN_STAGNI.git

import "./App.css";
import NavBar from "./COMPONENTS/NavBar";
import Inicio from "./COMPONENTS/Inicio";
import SobreMi from "./COMPONENTS/SobreMi";
import Contact from "./COMPONENTS/FormContact";
import Study from "./COMPONENTS/Study";
import Proyects from "./COMPONENTS/Proyects";
import ContactsView from "./COMPONENTS/ContactsView";
import FormContact from "./COMPONENTS/FormContact";
import ModalLinks from "./COMPONENTS/ModalLinks";


function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm =()=>{
    setShowForm(!showForm)
    console.log(showForm)

  }

  return (
    <main>
      <NavBar />
      <Inicio />
      <SobreMi />
      {/* <ModalLinks /> */}
      <Proyects/>
      {/* <Study/> */}
      {/* <Contact />*/}
      <ContactsView/>
      {showForm
      ?<FormContact setShowForm={setShowForm} handleShowForm={handleShowForm}/>
      : <button  className="contact_me" onClick={handleShowForm}>Contact me</button>}
    </main>
  );
}

export default App;
