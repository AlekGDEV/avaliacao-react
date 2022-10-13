import "../../components/footer/footer.css"
import Face from "../footer/footerimg/face.png"
export default function Footer() {
    return(
        <footer className="footer">
            <div className="conteudo">
                <div className="sobre">
                    <h1>Digital Store</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <img src={<Face/>} alt="face" />
                </div>
                <div className="informacao">
                    <h1>Informação</h1>
                    <p>Sobre Drip Store</p>
                    <p>Segurança</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe conosco</p>
                    <p>Meus pedidos</p>
                </div>
                <div className="categorias">
                    <h1>Categorias</h1>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bonés</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div className="contato">
                    <h1>Contato</h1>
                    <p>Av. Santos Dumont, 1510- 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <hr />
            <p className="dc">@ 2022 Digital College</p>
        </footer>
    )
}