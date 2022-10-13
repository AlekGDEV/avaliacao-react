import "bootstrap/dist/css/bootstrap.css"
import "../../components/Bannerf/bannerf.css"
import Tenis from "../Bannerf/Laye1.png"

export default function BannerF() {
    return(
        <div className="bannerf">
            <div>
                <img src={Tenis} alt="tenis"/>
            </div>
            <div className="ofertat">
                <p className="p">Oferta especial</p>
                <h1 className="Jordan">Air Jordan edição de colecionador</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati animi optio eligendi et nisi aut quasi vero, est nostrum? Quaerat unde tempora magni neque nam. Sit recusandae repudiandae similique.</p>
                <button className="veroferta">Ver oferta</button>
            </div>
        </div>
    )
}