import "./style.css"

export default function Navbar () 
{
    return ( 
        <nav>
            <span className="textFilter">Filtrar por</span>
            <hr />
            <div className="itens">
                <div className="nav-item">Marka</div>
                <div className="nav-item"><input className="checkbox" type="checkbox" /> Adiddas</div>
                <div className="nav-item"><input type="checkbox" /> Calenciaga</div>
                <div className="nav-item"><input type="checkbox" /> K-Swiss</div>
                <div className="nav-item"><input type="checkbox" /> Nike</div>
                <div className="nav-item"><input type="checkbox" /> Puma</div>
    
                <div className="nav-item">Categoria</div>
                <div className="nav-item"><input type="checkbox" /> Esporte e Lazer</div>
                <div className="nav-item"><input type="checkbox" /> Casual</div>
                <div className="nav-item"><input type="checkbox" /> Utilitário</div>
                <div className="nav-item"><input type="checkbox" /> Corrida</div>
    
                <div>Gênero</div>
                <div><input type="checkbox" /> Masculino</div>
                <div><input type="checkbox" /> Feminino</div>
                <div><input type="checkbox" /> Unisex</div>

                <div>Estado</div>
                <div><input type="checkbox" /> Novo</div>
                <div><input type="checkbox" /> Usado</div>
            </div>
        </nav>
        
    

    )
}
