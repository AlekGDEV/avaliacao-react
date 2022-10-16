import error from "./error.png"
import "./index.css"

export function EmConstrucao(){
    return(
        <div className="box-construcao">
            <img src={error} alt="em andamento" className="img-construcao"/>
            <div>
            <p className="p-construcao">Página em construção</p>
            <span className="span-construcao">Ops, essa página não foi encontrada, deseja voltar a home?</span>
            
            </div>
        </div>
    )
}
   