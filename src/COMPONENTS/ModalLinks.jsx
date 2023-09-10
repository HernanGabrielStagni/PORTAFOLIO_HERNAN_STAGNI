import React, { useState } from 'react';
import './STYLES/CSS_ModalLinks.css';

const ModalLinks = () => {
  
  

  return (

      <div className="background">
        <img
          src="/public/img/01_Great Phrases_1.png" // Reemplaza con la URL de tu imagen de fondo
          alt="Fondo"
        />
        <div className="modal">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                    Netlify
                </a>
        </div>
      </div>
 
  );
};

export default ModalLinks;
