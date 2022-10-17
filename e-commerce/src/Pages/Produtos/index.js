import FiltroProdutos from "../../components/FiltroProdutos"
import { CardSection } from "../../components/Section/CardSection"
import "./index.css"


export default function Produtos() {
    return (
        <>
            <div className="span-produtos">
                <span>Resultados para "Tênis" - 389 produtos</span>
            </div>
            <div className="produtosall">
                <FiltroProdutos />
                <div className="box-produtos">
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                    <CardSection />
                </div>
            </div>
        </>
    )
}