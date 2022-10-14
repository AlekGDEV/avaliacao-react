import React from "react";
import { CardSection } from "./CardSection";
import { Promocao } from "./CardSection/Promocao"
import "./index.css"

export default function Section(){
    return(
        <section className="container">
            <div className="header">
                <ul className="titulos">
                    <li><span className="span-titulo">Produtos em alta</span></li>
                    <li><a className="a-titulo" href="/">Ver todos</a> </li>
                </ul>
            </div>
            <div className="cards">
                <div>
                    <Promocao/>
                    <CardSection/>
                </div>
                <div>
                    <Promocao/>
                    <CardSection/>
                </div>
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