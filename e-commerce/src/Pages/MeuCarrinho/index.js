import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import Carrinho from "../../components/Nav/Carrinho";
import tenis from "./../../components/Nav/img/tenis1.png"
import './style.css'
export default function MeuCarrinho() {
    const [exibir, setExibir] = useState(true)
    let ComponentCarrinhoHover = () => (<>
        <div style={{
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
            height: '454px',
            width: '220px',
            left: '1025px',
            top: '77px',
            borderRadius: '4px',
            padding: '30px',

            display: exibir ? 'flex' : 'none',
            flexDirection: 'column',
            position: 'absolute'
        }}>
            <span className="spanTitulo">Meu Carrinho</span>
            <hr className="hr" />
            <div className="produtos">
                <div className="produto1MeuCarrinho">
                    <div className="divImg">
                        <img className="imgTenis" src={tenis}></img>
                    </div>
                    <div className="paragrafoSobreProduto">
                        <span className="spantexto">Tênis Nike Revolution <br />
                            6 Next Nature <br />
                            Masculino</span>
                        <span className="precoDeVenda">R$ 219,00</span>
                        <span className="precoNormal" >R$ 219,00</span>
                    </div>
                </div>

                <div className="produto1MeuCarrinho">
                    <div className="divImg">
                        <img className="imgTenis" src={tenis}></img>
                    </div>
                    <div className="paragrafoSobreProduto">
                        <span className="spantexto">Tênis Nike Revolution <br />
                            6 Next Nature <br />
                            Masculino</span>
                        <span className="precoDeVenda">R$ 219,00</span>
                        <span className="precoNormal" >R$ 219,00</span>
                    </div>
                </div>
            </div>
            <hr className="hr" />

            <div className="elementosDeacao">
                <div className="valorTotal">
                    <span className="spanValorTotal" >Valor total</span>
                    <span className="precoTotal" >R$ 219,00</span>
                </div>

                <div className="valorTotal">
                    <Link className="esvaziar">Esvaziar</Link>
                    <Link to="/meu-carrinho">
                        <button className="botaoVerCarrinho">Ver Carrinho</button>
                    </Link>
                </div>
            </div>
        </div></>)
    return (
        <>
            <span onClick={() => setExibir(!exibir)}><Carrinho /></span>
            <ComponentCarrinhoHover />
        </>
    )
}
