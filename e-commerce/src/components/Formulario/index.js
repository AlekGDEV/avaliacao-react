import "./styles.css"

export default function Form() {
    return (
        <div>
            <form className="infPessoais">
                <h1 className="ftitulo">Informações Pessoais <hr className="fhr"/> </h1>
                
                <label for="nome" className="finfo">Nome Completo *</label>
                <input id="nome" type="text" placeholder="Insira seu nome" className="finput"/>
                
                <label for="cpf" className="finfo">CPF *</label>
                <input id="cpf" type="text" placeholder="Insira seu CPF" className="finput"/>

                <label for="email" className="finfo">E-mail *</label>
                <input id="email" type="email" placeholder="Insira seu email" className="finput" />

                <label for="numero" className="finfo">Celular *</label>
                <input id="numero" type="text" placeholder="Insira seu celular" className="finput"/>
            </form>

            <form className="infEntrega">
                <h1 className="ftitulo">Informações de Entrega <hr className="fhr"/></h1>
                
                <label for="endereco" className="finfo">Endereço *</label>
                <input id="endereco" type="text" placeholder="Insira seu endereço" className="finput" />

                <label for="bairro" className="finfo">Bairro *</label>
                <input id="bairro" type="text" placeholder="Insira seu bairro" className="finput"/>

                <label for="cep" className="finfo">CEP *</label>
                <input id="cep" type="text" placeholder="Insira seu cep" className="finput" />

                <label for="complemento" className="finfo">Complemento </label>
                <input id="complemento" type="text" placeholder="Insira seu complemento" className="finput"/>
            </form>
        </div>
    )
}