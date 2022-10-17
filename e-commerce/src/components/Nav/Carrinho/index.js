import carrinho from "./../img/carrinho.png"

export default function Carrinho(){
    return(
        <button className="botaoCarrinho" >
                 <img src={carrinho} ></img>
        </button>
    )
}