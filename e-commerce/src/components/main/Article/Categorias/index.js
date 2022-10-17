import "./index.css";
export default function Categoria(props){
    
    return(
        <div>
        <button className="button">{props.conteudo}</button>
        <p className="texto-categ">{props.nome}</p>
        </div>
    )
}

