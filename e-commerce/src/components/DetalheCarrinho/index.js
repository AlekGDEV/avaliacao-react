import React from 'react';
import "./estilo.css"
import tenis from "./img/tenis.svg"



export default function DetalheCarrinho() {
    return (
        
        <div className='detalhes container-fluid' >
            <div className='fundo'>
                <div className='tituloSucesso'>
                    <div className="ico">🎉</div>
                    <h3 className='textoh3'>Compra Realizada<br />Com Sucesso!</h3>
                </div>

                <hr className='linhaHr' />

                <div className='inforPessoal'>
                    <span>Informações Pessoais</span>
                    <br />
                    <div>
                        <span className='infor'>Nome:</span>
                        <span className='spanAll'>igor Oliveira Da Silva</span>
                    </div>
                    <div>
                        <span className='infor'>CPF:</span>
                        <span className='spanAll'>6968676465</span>
                    </div>
                    <div>
                        <span className='infor'>Email:</span>
                        <span className='spanAll'>XeroVerde@gmail.com</span>
                    </div>
                    <div>
                        <span className='infor'>Celular:</span>
                        <span className='spanAll'>(85)9-88970641</span>
                    </div>
                </div>

                <hr className='linhaHr' />

                <div className='inforPessoal'>
                    <span>Informações de Entrega</span>
                    <br />
                    <div>
                        <span className='infor'>Endereço:</span>
                        <span className='spanAll'>Rua José Rego Filho 69</span>
                    </div>
                    <div>
                        <span className='infor'>Bairro:</span>
                        <span className='spanAll'>João XXIII</span>
                    </div>
                    <div>
                        <span className='infor'>Cidade:</span>
                        <span className='spanAll'>Fortaleza</span>
                    </div>
                    <div>
                        <span className='infor'>Cep:</span>
                        <span className='spanAll'>60525-638</span>
                    </div>
                </div>

                <hr className='linhaHr' />

                <div className='inforPessoal'>
                    <span>Informações de Pagammento</span>
                    <br />
                    <div>
                        <span className='infor'>Titular do Cartão:</span>
                        <span className='spanAll'>Xero O Verde</span>
                    </div>
                    <div>
                        <span className='infor'>Final:</span>
                        <span className='spanAll'>************2424</span>
                    </div>
                </div>

                <hr className='linhaHr' />

                <div className='inforPessoal'>
                    <span> Resumo da Compra</span>
                    <br />
                    <div className='frame53'>
                        <span className='backImg'>
                            <img className='frontImg' src={tenis} alt="tenis" />
                        </span>
                        <span className='textInfor'>Tênis Nike Revolution 6 Next Nature Masculino</span>
                    </div>
                </div>
                <div className='fundoTotal'>
                    <div className='totalPreco'>
                        <span className='total'>Total </span>
                        <span className='totalTotal'>R$ 219,00</span>
                    </div>
                    <span className='parcela'>ou 10x de R$ 21,00 sem juros </span>
                </div>
                <span className='boleto'> Imprimir Boleto</span>

            </div>
            <div className='fundoButton'>
                <button className='buttonHome'>Voltar para Home</button>
            </div>
        </div>





    )
};