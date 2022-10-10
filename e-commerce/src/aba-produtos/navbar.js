import "bootstrap/dist/css/bootstrap.css"
import "./style.css"

export default function Navbar () 
{
    return ( 
        
        <nav >
            <span className="textFilter">Filtrar por</span>
            <hr/>
            <div className="itens">
                <div className="nav-categoria mb-1 mt-2">Marca</div>
                <div className="checkbox">
                    <input id="check1" className="" type="checkbox"/>
                    <label htmlFor="check1">Addidas</label>
                </div>
                <div className="checkbox">
                    <input id="check2" className="" type="checkbox"/>
                    <label htmlFor="check2">Calenciaga</label>
                </div>
                <div className="checkbox">
                    <input id="check3" className="" type="checkbox"/>
                    <label htmlFor="check3">K-Swiss</label>
                </div>
                <div className="checkbox">
                    <input id="check4" className="" type="checkbox"/>
                    <label htmlFor="check4">Nike</label>
                </div>
                <div className="checkbox">
                    <input id="check5" className="" type="checkbox"/>
                    <label htmlFor="check5">Puma</label>
                </div>

                <div className="nav-categoria mb-1 mt-2">Categoria</div>
                <div className="checkbox">
                    <input id="check6" className="" type="checkbox"/>
                    <label htmlFor="check6">Esporte e lazer</label>
                </div>
                <div className="checkbox">
                    <input id="check7" className="" type="checkbox"/>
                    <label htmlFor="check7">Casual</label>
                </div>
                <div className="checkbox">
                    <input id="check8" className="" type="checkbox"/>
                    <label htmlFor="check8">Utilitário</label>
                </div>
                <div className="checkbox">
                    <input id="check9" className="" type="checkbox"/>
                    <label htmlFor="check9">Corrida</label>
                </div>

                <div className="nav-categoria mb-1 mt-2">Gênero</div>
                <div className="checkbox">
                    <input id="check10" className="" type="checkbox"/>
                    <label htmlFor="check10">Masculino</label>
                </div>
                <div className="checkbox">
                    <input id="check11" className="" type="checkbox"/>
                    <label htmlFor="check11">Feminino</label>
                </div>
                <div className="checkbox">
                    <input id="check12" className="" type="checkbox"/>
                    <label htmlFor="check12">Unisex</label>
                </div>
                <div className="nav-categoria mb-1 mt-2">Estado</div>
                <div className="radio">
                    <input id="radio1" name="estado" value="1" type="radio"/>
                    <label htmlFor="radio1">Novo</label>
                </div>
                <div className="radio">
                    <input id="radio2" name="estado" value="2" type="radio"/>
                    <label htmlFor="radio2">Usado</label>
                </div>
                {/* 
    

                <div><input className="form-check-input" type="radio" /> Novo</div>
                <div><input className="form-check-input" type="radio" /> Usado</div> */}
            </div>
        </nav>
        
        
    

    )
}
