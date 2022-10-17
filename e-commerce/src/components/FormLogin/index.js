import { Link, useLocation } from "react-router-dom"
import GoogleIcon from "./FormLoginImg/Group.png"
import FacebookIcon from "./FormLoginImg/Original.png"
import Tenis1 from "./FormLoginImg/tenis1.png"
import Tenis2 from "./FormLoginImg/tenis2.png"
import "./index.css"

export default function FormLogin() {
    return (
        <div class="login">
            <div className="login-form">
                <div className="texto-login">
                    <span className="titulo-login" >Acesse sua conta</span>
                    <span class="span-login">Novo cliente? Então registre-se <Link className="span-login"to="/">aqui</Link></span>
                </div>
                <form>
                    <div className="formlogin-allinput">
                        <div className="formlogin-input">
                            <label className="label-login" for="login">Login *</label>
                            <input className="input-box" id="login" placeholder="Insira seu login ou email" />
                        </div>
                        <div class="formlogin-input">
                            <label className="label-login" for="senha">Senha *</label>
                            <input className="input-box" id="senha" type="password" placeholder="Insira sua senha" />
                        </div>
                    </div>
                    <div className="link-box">
                        <Link className="link-login" to="/">Esqueci minha senha</Link>
                    </div>
                    <div className="center">
                        <Link to="/"><button className="botao-login">Acessar conta</button></Link>
                    </div>
                    <div className="center c-flex">
                        <span>Ou faça login com</span>
                        <img src={GoogleIcon}></img>
                        <img src={FacebookIcon}></img>
                    </div>

                </form>
            </div>
            <div className="img-login">
                <img className="img-login1" src={Tenis1} alt="Novo cliente? Então registre-se aqui." />
                <img className="img-login2" src={Tenis2} alt="" />
            </div>
        </div>
    );
}