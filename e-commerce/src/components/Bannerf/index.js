import "bootstrap/dist/css/bootstrap.css"
import "../../components/Bannerf/bannerf.css"
import Tenis from "../Bannerf/bannerimg/Laye1.png"

export default function BannerF() {
    return(
        <div className="bannerf">
            <div className="elipse">
                <img className="tenis" src={Tenis} alt="tenis"/>
            </div>
            <div className="ofertat">
                <p className="p">Oferta especial</p>
                <h1 className="Jordan">Air Jordan edição de colecionador</h1>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <button className="veroferta">Ver oferta</button>
            </div>
        </div>
    )
}