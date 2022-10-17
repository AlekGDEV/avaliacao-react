
import React from "react";
import { CardSection } from "./CardSection";
import "./prod.css"

export default function ProdutosRelacionados(){
    return(
        <section className="prod"> {/*container*/}
            <div className="header">
                <ul className="titulos">
                    <li><span className="span-titulo">Produtos Relacionados</span></li>
                    <li><a className="a-titulo" href="/">Ver todos <img className="a-titulo" src="\imagens\Line.png"/></a> </li>
                </ul>
            </div>
            <div className="cards">
                <CardSection desconto={true}/>
                <CardSection desconto={true}/>
                <CardSection/>
                <CardSection/>
            </div>
        </section>
    );
}