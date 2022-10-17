// Alicia
import Comprar from "./comprar";
import BotaoDesc from "./desconto";
import "./index.css";
export default function Card(props) {
  return (
      <div class="container1">
          <div className="imagem">
          <img className="imagem" src={props.imgprod} alt="produto" />  
           </div>
         
         <div className="container2">
             <div className="titulo-card">
             <BotaoDesc desconto="30% OFF" />
             <h3 className="h3Title"> {props.nome} </h3>
             </div>
             <div className="botao-de-compra">
             <Comprar />
              </div>
         </div>  
      </div> 
    )
 }
