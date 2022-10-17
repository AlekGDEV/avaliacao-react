import FiltroProdutos from "../../components/FiltroProdutos"
import { CardSection } from "../../components/Section/CardSection"
import "./index.css"


export default function Produtos() {
    return (
        <>
            <div className="span-produtos">
                <span className="span-resultado">Resultados para "Tênis" - <i className="i-produto">389 produtos</i></span>
                <div classname="filtro-box">
                    <span className="span-filtro">Ordenar por: <i className="i-produto"> mais relevantes </i></span>
                </div>
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