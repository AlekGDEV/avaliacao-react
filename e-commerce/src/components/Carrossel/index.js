import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg from './icons/bg.svg';
import circle from './icons/circle.svg';
import nike from './icons/nike.svg';

import './style.css';

export default function Carrossel() {
  return (
    <Carousel className="carousel-principal">
      <Carousel.Item>
        <div style={{ backgroundImage: `url(${bg})` }} className="linha">

          <img className="circle" src={circle} alt="circle" />
          <img className="nike" src={nike} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div className="wrapper-texto1">
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div className="wrapper-texto2">
              <h2 className='texto2'>
                Queima de <br />estoque Nike 🔥
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
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ backgroundImage: `url(${bg})` }} className="linha">

          <img className="circle" src={circle} alt="circle" />
          <img className="nike" src={nike} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div className="wrapper-texto1">
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div className="wrapper-texto2">
              <h2 className='texto2'>
                Queima de <br />estoque Nike 🔥
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
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ backgroundImage: `url(${bg})` }} className="linha">

          <img className="circle" src={circle} alt="circle" />
          <img className="nike" src={nike} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div className="wrapper-texto1">
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div className="wrapper-texto2">
              <h2 className='texto2'>
                Queima de <br />estoque Nike 🔥
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
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ backgroundImage: `url(${bg})` }} className="linha">

          <img className="circle" src={circle} alt="circle" />
          <img className="nike" src={nike} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div className="wrapper-texto1">
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div className="wrapper-texto2">
              <h2 className='texto2'>
                Queima de <br />estoque Nike 🔥
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
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ backgroundImage: `url(${bg})` }} className="linha">

          <img className="circle" src={circle} alt="circle" />
          <img className="nike" src={nike} alt="nike" />
        </div>

        <Carousel.Caption className="esquerda">
          <div className="textos">
            <div className="wrapper-texto1">
              <p className="texto1"> Melhores ofertas personalizadas</p>
            </div>

            <div className="wrapper-texto2">
              <h2 className='texto2'>
                Queima de <br />estoque Nike 🔥
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
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
