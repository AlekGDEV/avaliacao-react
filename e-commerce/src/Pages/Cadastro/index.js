import "./styles.css"
import logoSimble from "./Vector.png"
import Form from "../../components/Formulario"

export default function Cadastro() {
    return (
       <body className="bodycad">
            <nav className="cadastroNav">
                <div className="logocad">
                    <img src={logoSimble}></img>
                    <h1 className="textLogocad">Digital Store</h1>
                </div>
            </nav>
            <main className="maincad">
                <h1 className="criarC">Criar Conta</h1>
                <div className="form">
                    <Form />
                </div>
                <div className="check">
                    <input className="boxcheck" type="checkbox" />
                    <p className="emailofetas">Quero receber por email ofertas e novidades das lojas Digital Store. A frêquencia de envios pode<br />variar de acordo com a interação do cliente.</p>
                </div>
                
                <input type="submit" className="submitcad" value="Criar Conta"/>
            </main>
        </body> 
    )
}