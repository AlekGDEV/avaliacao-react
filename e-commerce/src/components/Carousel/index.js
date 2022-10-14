import React from 'react';
import bg from './icons/bg.svg';
import circle from './icons/circle.svg';
import nike from  './icons/nike.svg';

import './style.css';

export default function Carousel() {
  return(

    <div className="carouselprincipal">

      <div>
        <div style={{ backgroundImage: {bg} }} className="linha">

          <img className="nike" src={nike} alt="nike" />
          <img className="circle" src={circle} alt="circle" />
        </div>
        <div className="esquerda">
          <div className="wrapper-texto1">
            <p className="texto1"> Melhores ofertas personalizadas</p>
          </div>

          <div className="wrapper-texto2">
            <h2 className='texto2'>
              Queima de <br />stoque Nike 🔥
            </h2>
          </div>
          <div className="wrapper-texto3">
            <p className="texto3">Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur</p>
          </div>
          <div className="wrapper-button1">
            <a href="">
              <button className="buttonofertas">Ver Ofertas</button>
            </a>
          </div>
          </div>
      </div>
      
      
      </div>
  );
}