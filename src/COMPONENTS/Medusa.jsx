import React from 'react'
import './STYLES/CSS_Medusa.css'



const Medusa = () => {
  return (
    <div className="medusa-container">
      <div className="medusa-center"></div>
      <div className="medusa-tentacles">
        {[...Array(8)].map((_, index) => (
          <div className="tentacle" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Medusa;
