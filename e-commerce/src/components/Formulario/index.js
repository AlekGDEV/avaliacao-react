export default function Form() {
    return (
        <div>
            <form>
                <h1>Informações Pessoais </h1>
                <hr />
                
                <label for="nome">Nome Completo *</label>
                <input id="nome" type="text" placeholder="Insira seu nome"/>
                
                <label for="cpf">CPF *</label>
                <input id="cpf" type="text" placeholder="Insira seu CPF"/>

                <label for="email">E-mail *</label>
                <input id="email" type="email" placeholder="Insira seu email" />

                <label for="numero">Celular *</label>
                <input id="numero" type="text" placeholder="Insira seu celular"/>
            </form>
            <form>
                <h1>Informações de Entrega</h1>
                <hr />
                
                <label for="endereco">Endereço *</label>
                <input id="endereco" type="text" placeholder="Insira seu endereço" />

                <label for="bairro">Bairro *</label>
                <input id="bairro" type="text" placeholder="Insira seu bairro"/>

                <label for="cep">CEP *</label>
                <input id="cep" type="text" placeholder="Insira seu cep" />

                <label for="complemento">Complemento </label>
                <input id="complemento" type="text" placeholder="Insira seu complemento" />
            </form>
        </div>
    )
}