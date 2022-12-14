import Sneaker from "./Sneaker.png"
import Form from "../../components/Formulario"
import "./styles.css"


export default function Finalizar() {
    return (
        <main>
            <h1 className="fc">Finalizar Compra</h1>
            <section className="section">
                <div>
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
                    <div className="finalizar">
                        <h1 className="ftitulo">Finalizar Compra <hr className="fhr"/></h1>
                        <div className="preco">
                            <span className="total">Total</span>
                            <span className="valor">R$ 219,00</span>
                        </div>
                        <span className="parcelamento">ou 10x de R$ 21,00 sem juros</span>
                        <input className="fsubmit" type="submit" value="Realizar Pagamento"/>
                    </div>
                </div>    
                <aside className="aside">
                    <h1>Resumo <hr className="fhr2" /></h1>
                    <div className="primeira">
                        <div className="fundo">
                            <img className="sneaker" src={Sneaker} alt="skr"/>
                        </div>
                        <p className="ftexto">Tênis Nike Revolution 6 Next Nature Masculino </p>
                    </div>
                    <hr className="fhr2" />
                    <div className="fconteudo">
                        <div className="subtotal">
                            <span className="textoCard">Subtotal</span>
                            <span className="valorCard">R$ 219,00</span>
                        </div>
                        <div className="frete">
                            <span className="textoCard">Frete</span>
                            <span className="valorCard">R$ 0,00</span>
                        </div>
                        <div className="fdesconto">
                            <span className="textoCard">Desconto</span>
                            <span className="valorCard">R$ 30,00</span>
                        </div>
                    </div>

                    <div className="infofinal">
                        <span className="ftotal">Total</span>
                        <span className="fvalor">R$ 219,00</span>
                        <span className="fparcelamento">ou 10x de R$ 21,00 sem juros</span>
                    </div>

                    <input className="ffsubmit" type="submit" value="Realizar Pagamento"/>
                </aside>
            </section>
        </main>
    )
}