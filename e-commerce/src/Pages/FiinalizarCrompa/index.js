import Form from "../../components/Formulario"
import "./styles.css"


export default function Finalizar() {
    return (
        <main>
            <h1 className="fc">Finalizar Compra</h1>
            <section>
                <Form />
                <form className="pagamento">
                    <h1 className="ftitulo">Informações de Pagamento <hr className="fhr"/></h1>

                    <label className="finfo">Forma de Pagamento</label>
                    <div className="radio">
                        <input id="credito" type="radio" />
                        <label for="credito">Cartao de Credito</label> 

                        <input id="boleto" type="radio" />
                        <label for="boleto">Boleto Bancário</label>
                    </div>

                    <label for="nomecartao" className="finfo">Nome do Cartão *</label>
                    <input id="nomecartao" type="text" placeholder="Insira o nome do Cartão" className="finputN" />
                    
                    <div className="principal">
                        <div className="inputcart">
                            <label for="numerocartao" className="finfo">Número do Cartão *</label>
                            <input id="numerocartao" type="text" placeholder="Insira o número do Cartão" className="finputNc" />
                        </div>
                        
                        <div className="inputval">
                            <label for="datacartao" className="finfo">Data de Validade do Cartão *</label>
                            <input id="datacartao" type="text" placeholder="Insira a validade do Catão" className="finputDv" />
                        </div>
                    </div>

                    <label for="cvv" className="finfo">CVV *</label>
                    <input id="cvv" type="text" placeholder="CVV" className="finputDv" />
                </form>
            </section>
        </main>
    )
}