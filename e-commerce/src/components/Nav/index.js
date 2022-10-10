//Camylla e Erika 

import { Link, useLocation } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./../../css/app.css"
import React from "react";

export default function Nav(){
    return(
        <nav className="container">
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.97257 0.0492897C3.75011 0.254902 2.64439 0.830612 1.75158 1.7216C1.09227 2.38641 0.810695 2.79763 0.446703 3.65434C-0.0271746 4.74408 0.000296534 4.045 0.000296534 16.4502C0.000296534 28.5881 -0.013439 28.1084 0.378025 29.1364C0.645868 29.8561 1.05794 30.5003 1.6417 31.1103C2.4727 31.9807 3.36551 32.5016 4.54677 32.8169L5.1168 32.9676L16.0709 32.9951C23.8658 33.0088 27.2242 32.9951 27.7049 32.9402C29.1334 32.7757 30.2872 32.2343 31.2762 31.2542C32.011 30.5277 32.4437 29.8218 32.8008 28.7595L33 28.1769V16.5256V4.8743L32.842 4.33286C32.2651 2.33843 30.768 0.837467 28.742 0.200073L28.1239 0.00817108L16.7234 0.00131607C10.4531 -0.00553894 5.16487 0.0150223 4.97257 0.0492897ZM12.2868 12.4065C14.6012 14.6271 16.4761 16.4708 16.4692 16.4982C16.4555 16.5256 14.5531 18.3692 12.2387 20.5967L8.02187 24.6472L6.92989 23.5986C6.33239 23.0298 5.83791 22.5226 5.84478 22.4883C5.84478 22.4472 7.23894 21.0902 8.93528 19.4727C10.6248 17.8484 12.0121 16.505 12.0189 16.4845C12.0189 16.4571 10.6316 15.1 8.92842 13.4688C7.23207 11.8377 5.83791 10.4875 5.83791 10.4669C5.83791 10.3778 7.93946 8.33542 8.00813 8.34913C8.05621 8.36283 9.97919 10.1859 12.2868 12.4065ZM27.2654 23.3793V24.6472H23.2821H19.2988V23.3793V22.1114H23.2821H27.2654V23.3793Z" fill="#C92071"/>
                 </svg>
                <h1>Digital Store</h1>
                </div>
                
                <div className="d-flex align-items-center">
                <div>
                <input  placeholder="Pesquisar Produto" ></input>
                <span class="material-icons">
                search
                </span>
                </div>
        
                <a href="">Cadastre-se</a>
                <button >
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.749878 1.25L2.82988 1.61L3.79288 13.083C3.87088 14.018 4.65188 14.736 5.58988 14.736H16.5019C17.3979 14.736 18.1579 14.078 18.2869 13.19L19.2359 6.632C19.3529 5.823 18.7259 5.099 17.9089 5.099H3.16388" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
                </div>
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Categorias</a>
                <a href="">MeusPedidos</a>
                
            </div>


        </nav>
    )
}