import { Link, useLocation } from "react-router-dom"
import "./index.css"
import logoSimble from "./img/Vector.png"
import search from "./img/Search.png"
import carrinho from "./img/carrinho.png"
import React from "react";


export default function Nav(){
    return(
        <nav className="container-fluid">
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
                <Link to="/" className="links" >Home</Link>
                <Link to="/produtos" className="links" >Produtos</Link>
                <Link to="/categorias" className="links">Categorias</Link>
                <Link to="/meus-pedidos" className="links" >Meus Pedidos</Link>
            </div>
                
        </nav>
    )
}