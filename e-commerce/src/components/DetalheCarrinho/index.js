import React from 'react';
import "./estilo.css"
import tenis from "./img/tenis.svg"


export default function DetalheCarrinho() {
    return (
        <div className='fundo'>
            <div>
                <div className="ico">🎉</div>
                <h3 className='textoh3'>Compra Realizada<br />Com Sucesso!</h3>
            </div>

            <div className='inforPessoal'>
                <div>Informações Pessoais</div>
                <br />
                <div className='infor'>Nome:</div>
                <div className='infor'>CPF:</div>
                <div className='infor'>Email:</div>
                <div className='infor'>Celular:</div>
            </div>
            <div className='inforEntrega'>
                <div>Informações de Entrega</div>
                <br />
                <div className='infor'>Endereço:</div>
                <div className='infor'>Bairro:</div>
                <div className='infor'>Cidade:</div>
                <div className='infor'>Cep:</div>
            </div>
            <div className='inforPagamento'>
                <div>Informações de Pagammento</div>
                <br/>
                <div className='infor'>Titular do Cartão:</div>
                <div className='infor'>Final:</div>
            </div>
            <div>
                <div className='backImg'> 
                 <img className='frontImg' src={tenis} alt="tenis"/>
                 <h3>Tênis Nike Revolution 6 Next Nature <br/>Masculino</h3>
                </div>
                <br/>


            </div>


        </div>



    )
};