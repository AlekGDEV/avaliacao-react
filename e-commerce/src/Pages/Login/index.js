import FormLogin from "./../../components/FormLogin"
import logoSimble from "./../Cadastro/Vector.png"
import "./index.css"

export default function Login(){
    return(
        <div className="login-container">
            <nav className="cadastroNav">
                <div className="logocad">
                    <img src={logoSimble}></img>
                    <h1 className="textLogocad">Digital Store</h1>
                </div>
            </nav>
            <FormLogin/>
        </div>
    );
}