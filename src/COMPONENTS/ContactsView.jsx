import React from 'react'
import './STYLES/CSS_ContactsView.css'


const ContactsView = () => {
    return (
        <section id="contacto">
          <h2>Contacto</h2>
          <div className="info-contacto">
            <p>Correo Electrónico: hernangabrielst@gmail.com</p>
            <p>LinkedIn: <a href="URL-de-LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p>WhatsApp: +54 358 4313590</p>
          </div>
         
        </section>
      );
}

export default ContactsView
