import "bootstrap/dist/css/bootstrap.css"
import "./style.css"


export default function FiltroProdutos() {
    return (
        <div>
            <nav className="navFilter">
                <span className="textFilter">Filtrar por</span>
                <hr className="linhaFilter" />
                <div className="itens">
                    <div className="nav-categoria mb-1 mt-2">Marca</div>
                    <div className="checkbox">
                        <input id="check_adidas" className="" type="checkbox" />
                        <label htmlFor="check_adidas">Addidas</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_calenciaga" className="" type="checkbox" />
                        <label htmlFor="check_calenciaga">Calenciaga</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_swiss" className="" type="checkbox" />
                        <label htmlFor="check_swiss">K-Swiss</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_nike" className="" type="checkbox" />
                        <label htmlFor="check_nike">Nike</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_puma" className="" type="checkbox" />
                        <label htmlFor="check_puma">Puma</label>
                    </div>

                    <div className="nav-categoria mb-1 mt-2">Categoria</div>
                    <div className="checkbox">
                        <input id="check_esporte" className="" type="checkbox" />
                        <label htmlFor="check_esporte">Esporte e lazer</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_casual" className="" type="checkbox" />
                        <label htmlFor="check_casual">Casual</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_utilitario" className="" type="checkbox" />
                        <label htmlFor="check_utilitario">Utilitário</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_corrida" className="" type="checkbox" />
                        <label htmlFor="check_corrida">Corrida</label>
                    </div>

                    <div className="nav-categoria mb-1 mt-2">Gênero</div>
                    <div className="checkbox">
                        <input id="check_masculino" className="" type="checkbox" />
                        <label htmlFor="check_masculino">Masculino</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_feminino" className="" type="checkbox" />
                        <label htmlFor="check_feminino">Feminino</label>
                    </div>
                    <div className="checkbox">
                        <input id="check_unisex" className="" type="checkbox" />
                        <label htmlFor="check_unisex">Unisex</label>
                    </div>
                    <div className="nav-categoria mb-1 mt-2">Estado</div>
                    <div className="radio">
                        <input id="radio_novo" name="estado" value="1" type="radio" />
                        <label htmlFor="radio_novo">Novo</label>
                    </div>
                    <div className="radio">
                        <input id="radio_usado" name="estado" value="2" type="radio" />
                        <label htmlFor="radio_usado">Usado</label>
                    </div>

                </div>
            </nav>

        </div>


    )
}
