import React from 'react'
import './STYLES/CSS_Inicio.css'

const Inicio = () => {
    return (
        <section id="inicio">

          <div className="presentation">
            <h1>Full Stack Developer</h1>
            {/* <p>¡Hola! Soy un desarrollador web full stack con experiencia en HTML, CSS, JavaScript, React, Git y npm.</p> */}
            <p> Hello! I am a full stack web developer with experience in HTML, CSS, JavaScript, React, Git, and npm.</p>
          </div>

          
         <div className="imagen">
            <img src="/img/teorianudos-euler.gif" alt="img programer" />
          </div> 

       </section>
      );
}

export default Inicio