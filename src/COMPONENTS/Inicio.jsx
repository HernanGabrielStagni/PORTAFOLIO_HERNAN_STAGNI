import React from 'react'
import './STYLES/CSS_Inicio.css'

const Inicio = () => {
    return (
        <section id="inicio">

          <div className="presentation">
            <h1>Desarrollador Full Stack</h1>
            <p>¡Hola! Soy un desarrollador web full stack con experiencia en HTML, CSS, JavaScript, React, Git y npm.</p>
          </div>

          
         <div className="imagen">
            <img src="/img/Hernancepia3.png" alt="img programer" />
          </div> 

       </section>
      );
}

export default Inicio