import tenis2 from './tenis2.png.png'
import { Link, useLocation } from "react-router-dom"
import './index.css'
import Item from '../../components/Contador'
import { CardSection } from '../../components/Section/CardSection'
export default function VerMeuCarrinho() {
    return (
        <div className="corpoDaPagina" >
            <div className="divSecoes">
                <section className="section1">
                    <table>
                        <thead>
                            <th className='titulo' >Meu Carrinho</th>
                            <th className='subTitulos'  >Quantidade</th>
                            <th className='subTitulos' >Unitário</th>
                            <th className='subTitulos' >Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tdPrduto">
                                    <div className="divImg">
                                        <img src={tenis2} className="img" ></img>
                                    </div>
                                    <div>
                                        <p className="referencia">Tênis Nike Revolution 6 Next Nature Masculino</p>
                                        <div className="divCores">
                                            <span className="cor">Cor:</span>
                                            <span className="tipoDeCor" >Vemelho/branco</span>
                                        </div>
                                        <div className="divCores">
                                            <span className="cor">Tamanho:</span>
                                            <span className="tipoDeCor">42</span>
                                        </div>
                                    </div>
                                </td>
                                <td><Item /></td>
                                <td>
                                    <div className='precoNormal'>R$ 219,00</div>
                                    <div className='precoDeVenda'>R$ 219,00</div>
                                </td>
                                <td>
                                    <div className='precoNormal'>R$ 219,00</div>
                                    <div className='precoDeVenda'>R$ 219,00</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='divInfoAdicional' >
                        <div className='divInfo' >
                            <span className='estiloInfo' >Cupom de desconto</span>
                            <div className='divAcao' >
                                <input className='input' placeholder='Insira seu código' />
                                <button className='botaoOk' >ok</button>
                            </div>
                        </div>
                        <div className='divInfo' >
                            <span className='estiloInfo' >Calcular frete</span>
                            <div className='divAcao' >
                                <input className='input' placeholder='Insira seu CEP' />
                                <button className='botaoOk'>ok</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section2">
                    <div>RESUMO</div>
                    <hr/>
                    <div className='precos'>
                    <div className='divSpan'>
                        <span>Subtotal:</span>
                        <span>Frete:</span>
                        <span>Desconto:</span>
                    </div>
                    <div className='divSpan'>
                        <div>R$ 219,00</div>
                        <div>R$ 0,00</div>
                        <div>R$ 30,00</div>
                    </div>
                    </div>
                    <div className='precos'>
                    <div>Total</div>
                    <div>R$ 219,00</div>
                    </div>
                    <Link to="/finalizar-compra" >
                    <button className='botaoContinuar'>Continuar</button>
                    </Link>

                </section>
            </div>
            <div className='divProdutosRelacionados' >
                <div className='ProdutosRelacionados'>Produtos Relacionados</div>
                <Link className='linkParaPgProdutos' to="/produtos" >Ver todos → </Link>
            </div>
            <div className='cards'>
                <CardSection/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
            </div>
        </div>
    )
}