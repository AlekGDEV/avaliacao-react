import React from "react";
import { CardSection } from "./CardSection";
// import { Promocao } from "./CardSection/Promocao"
import "./index.css"

export default function Section(){
    return(
        <section className="section-container">
            <div className="header">
                <ul className="titulos">
                    <li><span className="span-titulo">Produtos em alta</span></li>
                    <li><a className="a-titulo" href="/">Ver todos</a> </li>
                </ul>
            </div>
            <div className="cards">
                <CardSection desconto={true}/>
                <CardSection desconto={true}/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
            </div>
        </section>
    );
}