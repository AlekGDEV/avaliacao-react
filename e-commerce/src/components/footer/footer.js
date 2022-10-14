import "../../components/footer/footer.css"
import Face from "../footer/footerimg/face.png"
import insta from "../footer/footerimg/insta.png"
import tt from "../footer/footerimg/tt.png"
import logo from "../footer/footerimg/logo.png"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="conteudo">
                <div className="sobre">
                    <div className="dclogo">
                        <img src={logo} /> 
                        <h1 className="digistore"> Digital Store</h1>
                    </div>
                    <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="redes">
                        <a href="https://www.facebook.com/digitalcollegebr/">  <img src={Face} alt="face" /> </a>
                        <a href="https://www.instagram.com/digitalcollegebr/"> <img src={insta} alt="insta" /> </a>
                        <a href="https://mobile.twitter.com/eaicollegers">   <img src={tt} alt="tt" /> </a>
                    </div>
                </div>
                <div className="categorias">
                    <h1 className="titulo">Informação</h1>
                    <p className="texto">Sobre Drip Store</p>
                    <p className="texto">Segurança</p>
                    <p className="texto">Wishlist</p>
                    <p className="texto">Blog</p>
                    <p className="texto">Trabalhe conosco</p>
                    <p className="texto">Meus pedidos</p>
                </div>
                <div className="categorias">
                    <h1 className="titulo">Categorias</h1>
                    <p className="texto">Camisetas</p>
                    <p className="texto">Calças</p>
                    <p className="texto">Bonés</p>
                    <p className="texto">Headphones</p>
                    <p className="texto">Tênis</p>
                </div>
                <div className="categorias">
                    <h1 className="titulo">Contato</h1>
                    <p className="local">Av. Santos Dumont, 1510- 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <hr className="hr" />
            <span className="dc">@ 2022 Digital College</span>
        </footer>
    )
}