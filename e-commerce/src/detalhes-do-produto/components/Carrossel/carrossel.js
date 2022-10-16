/*import React from 'react';
import './carrossel.css';

function Carrossel() {
    return (
      <div>
        <div className='product'>
            <span>carrossel</span>
                <div>
                    <img className='principal' src="\Imagens\Tgrande.png" alt="principal"/>
                    <div>
                        <button className='botao' style={{/*left:16*//*}}><img src="\Imagens\Left.png" alt=""/></button>
                        <button className='botao' style={{/*left:673*//*}}><img src="\Imagens\Right.png" alt=""/></button>
                    </div>
                   
                    
                </div>
        </div>
          <div>
            <div className='secundaria1'><img className='menor' src="\Imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria2'><img className='menor' src="\Imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria3'><img className='menor' src="\Imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria4'><img className='menor' src="\Imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria5'><img className='menor' src="\Imagens\Tpequeno.png" alt="secundaria"/></div>
          </div>
      </div>
      
  );
      
    
}

export default Carrossel;*/

/*import React from 'react';*/
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carrossel.css';
import T1 from './images./T1.png';

export default function Carrossel() {
  const [index, setIndex] = useState(0);
  const handlerSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
  <div>
    <div>
    <Carousel activeIndex={index} onSelect={handlerSelect} className="product" style={{backgroundColor: `transparent`}}>
      <Carousel.Item>
        <div>
          <img className='principal' src={T1} alt="principal"/>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img className='principal' src="\Imagens\T2.png" alt="principal"/>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img className='principal' src="\Imagens\T3.png" alt="principal"/>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img className='principal' src="\Imagens\T4.png" alt="principal"/>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div>
          <img className='principal' src="\Imagens\T5.png" alt="principal"/>
        </div>
      </Carousel.Item>

    </Carousel>
    </div>
    <div>
            <div className='secundaria1'><img className='menor' src="\imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria2'><img className='menor' src="\imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria3'><img className='menor' src="\imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria4'><img className='menor' src="\imagens\Tpequeno.png" alt="secundaria"/></div>
            <div className='secundaria5'><img className='menor' src="\imagens\Tpequeno.png" alt="secundaria"/></div>
          </div>
      </div>
    

    
  );
}