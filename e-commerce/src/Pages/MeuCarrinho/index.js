import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import Carrinho from "../../components/Nav/Carrinho";
export default function MeuCarrinho(){
    const [exibir, setExibir] = useState(true)
    let ComponentCarrinhoHover = () => (<>
        <div style={{
            backgroundColor:'red',
            display: exibir ? 'flex' : 'none',
            flexDirection: 'column',
            position: 'absolute'
        }}>
            <h1>Meu Carrinho</h1>
            <span>Produto 1</span>
            <span>Produto 2</span>
            <span>Valor total</span>
            <Link to="/meu-carrinho">
                <button>Ver Carrinho</button>
            </Link>
        </div></>)
    return(
        <>
        <span onClick={() => setExibir(!exibir)}><Carrinho/></span>
        <ComponentCarrinhoHover />
    </>
    )
}
