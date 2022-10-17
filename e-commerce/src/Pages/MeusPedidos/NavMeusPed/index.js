import "../index.css"
export default function NavMeusProd(){
    return(
        <div className="navmeusprod" >
            <ul>
                <li><strong>Meu Perfil </strong></li>
                <hr/>
                <li style={{ color: "#C92071"}}>Meus Pedidos</li>
                <hr/>
                <li>Minhas Informações</li>
                <hr/>
                <li>Metodos de Pagamento</li>
            </ul>
        </div>

    )
}