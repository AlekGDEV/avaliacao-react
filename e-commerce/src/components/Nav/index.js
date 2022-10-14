//Camylla e Erika 

import { Link, useLocation } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.css"
import "./../../css/app.css"
import logoSimble from "./img/Vector.png"
import search from "./img/Search.png"
import carrinho from "./img/carrinho.png"
import React from "react";

export default function Nav(){
    return(
        <nav className="container">
            <div className="elementos">
                <div className="logo">
                   <img src={logoSimble}></img>
                    <h1 className="textLogo">Digital Store</h1>
                </div>
                
                <div className="navegacao">
                    <div className=" buscar">
                        <input className="inputBuscar"  placeholder="Pesquisar Produto" ></input>
                        <img src={search}></img>
                    </div>
        
                    <a className="linkCadastrar" href="">Cadastre-se</a>
                    <button className="entrar">Entrar</button>
                    <button className="botaoCarrinho" >
                        <img src={carrinho} ></img>
                    </button>
                </div>
            </div>
                

                <div className="divLinks">
                    <a className="links" href="">Home</a>
                    <a className="links" href="">Produtos</a>
                    <a className="links" href="">Categorias</a>
                    <a className="links" href="">Meus Pedidos</a>
                </div>

        </nav>
    )
}