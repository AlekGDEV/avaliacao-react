import React from 'react';
import './descricao.css';

function App() {
  return (
    <div className="body">
        <div>
            <span className='title'>Tênis Nike Revolution 6 Next Nature Masculino</span>
            <span className='ref'>Casual | Nike | REF: 38417711</span>
            <div>
              <img src='imagens/estrela.png' alt='estrela'/>
              <img src='imagens/estrela.png' alt='estrela'/>
              <img src='imagens/estrela.png' alt='estrela'/>
              <img src='imagens/estrela.png' alt='estrela'/>
              <img src='imagens/estvazia.png' alt='estrela'/>
              <img src='imagens/nota.png' alt='nota'/>
              <span className='ava'> '(90 avaliações)' </span>
            </div>
            <span className='RS'>R$</span>
            <span className='price'>219,00</span>
            <span className='oldPrice'>299,00</span>
            <span className='descript'>Descrição do produto</span>
            <span className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
              <div>
                    <span className='size'>Tamanho</span>
                    <button className='b1'>39</button>
                    <button className='b2'>40</button>
                    <button className='b3'>41</button>
                    <button className='b4'>42</button>
                    <button className='b5'>43</button>
              </div>
                        <div>
                          <span className='cor'>Cor</span>
                          <button className='B1'></button>
                          <button className='B2'></button>
                          <button className='B3'></button>
                          <button className='B4'></button>
                        </div>
                <div>
                <button className='buy'>COMPRAR</button>
                </div>
        </div>
    </div>
  )}
  export default App;