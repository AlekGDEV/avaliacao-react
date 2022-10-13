import "./index.css";
export default function Categoria(props){
    return(
        <div className="categoria">
        <button className="button">{props.conteudo}</button>
        <p className="texto">{props.nome}</p>
        </div>
    )
}

