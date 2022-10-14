import React from "react"
import imagem from "./image.png"

export function CardSection(){
    return(
        <div className="card-container">
            <ul className="lista">
                <li>
                    <div className="card-img">
                        <img class="img-card" src={imagem} alt="imagem"/>
                    </div>
                </li>
                <li>
                    <span className="span-tipo">Tênis</span>
                </li>
                <li>
                    <span className="span-produto">K-Swiss V8 - Masculino</span>
                </li>
                <li>
                    <span className="preco1">$200</span>
                    <span className="preco2">$100</span>
                </li>
            </ul>
        </div>
    );
}