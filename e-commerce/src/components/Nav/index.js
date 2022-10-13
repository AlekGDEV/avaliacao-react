//Camylla e Erika 

import { Link, useLocation } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.css"
import "./../../css/app.css"
import logoSimble from "./img/Vector.png"
import search from "./img/Search.png"
import React from "react";

export default function Nav(){
    return(
        <nav className="container">
            <div className="agrupar">
                <div className="logo">
                   <img src={logoSimble}></img>
                    <h1 className="textLogo">Digital Store</h1>
                </div>
                
                <div className="navegacao">
                    <div className=" buscar">
                        <input className="inputBuscar"  placeholder="Pesquisar Produto" ></input>
                        <img src={search}></img>
                    </div>
        
                    <a href="">Cadastre-se</a>
                    <button >Entrar</button>
                    <button >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.749878 1.25L2.82988 1.61L3.79288 13.083C3.87088 14.018 4.65188 14.736 5.58988 14.   736H16.5019C17.3979 14.736 18.1579 14.078 18.2869 13.19L19.2359 6.632C19.3529 5.823 18.7259 5.099  17.9089 5.099H3.16388" stroke="#C92071" stroke-width="1.5" stroke-linecap="round"    stroke-linejoin="round"/>
                    </svg>
                    </button>
                </div>

                <div className="divMenor">
                    <a href="">Home</a>
                    <a href="">Produtos</a>
                    <a href="">Categorias</a>
                    <a href="">MeusPedidos</a>
                </div>
                
            </div>


        </nav>
    )
}