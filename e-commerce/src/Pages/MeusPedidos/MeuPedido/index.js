export default function MeuPedido(props){    
    return(
        <div style={{display: "flex",
                    marginTop: "20px",
                    marginBottom: "20px"
                    }}>
            <div className="retanguloproduto">
            <img className="retanguloimagem" src={props.imagem} alt="produto"/>
            </div>
            <div>
                <span className="pedidoNum">Pedido nº {props.idpedido}  </span>
                <p className="pedidosNome"> {props.nomepedido}</p>
            </div>
        </div>

    )
}