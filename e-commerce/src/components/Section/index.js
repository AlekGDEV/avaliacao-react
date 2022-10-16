import React from "react";
import { Link, useLocation } from "react-router-dom"
import { CardSection } from "./CardSection";
import Line from "./CardSection/Line.png"
import "./index.css"

export default function Section(){
    return(
        <section className="section-container">
            <div className="header">
                <ul className="titulos">
                    <li><span className="span-titulo">Produtos em alta</span></li>
                    <li><Link to="/produtos" className="a-titulo">Ver mais <img src={Line} alt="seta"/></Link> </li>
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