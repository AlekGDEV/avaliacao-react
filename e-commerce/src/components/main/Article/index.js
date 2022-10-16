import Card from "./Card/card";
import Categoria from "./Categorias/index";
import Tenis from "./svg/tenis";
import "./index.css";
import Headphone from "./svg/headphone";
import Camisa from "./svg/camisa";
import Calca from "./svg/calca";

export default function Article() {

  ////imagens banners 
  let supreme =
    "https://uploaddeimagens.com.br/images/004/058/816/thumb/supreme.png?1665622252";
  let adidas =
    "https://uploaddeimagens.com.br/images/004/058/813/thumb/90dc1fa5c7c729e7018c5282d02ddbca.png?1665621339";
  let phone =
    "https://uploaddeimagens.com.br/images/004/058/817/thumb/phone1.png?1665622281";
  return (
    <article className="artic">
      <span className="estilo">Coleções de Destaque</span>
      <div className="banners">
        <Card nome="Novo Drop Supreme" imgprod={supreme} />
        <Card nome="Coleção Adidas" imgprod={adidas} />
        <Card nome="Novo Beats Bass" imgprod={phone} />
      </div>
      <div class="categ-box" >
        <p className="estilo pcenter">Coleções de Destaque</p>
        <div className="categ">
          <Categoria conteudo={<Camisa className="click" cor="#8F8F8F"/>} nome="Camisetas" />
          <Categoria conteudo={<Calca cor="#8F8F8F" />} nome="Calças" />
          <Categoria conteudo={<Calca cor="#8F8F8F" />} nome="Bonés" />
          <Categoria conteudo={<Headphone cor ="#8F8F8F"/>} nome="Headphones" />
          <Categoria conteudo={<Tenis cor="#8F8F8F"/>} nome="Tênis" />
        </div>
      </div>
    </article>
  );
}
