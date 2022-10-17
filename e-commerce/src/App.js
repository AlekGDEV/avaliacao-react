import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav/index.js";
import Home from "./Pages/Home"
import Produtos from "./Pages/Produtos"
import Categorias from "./Pages/Categorias"
import MeusPedidos from "./Pages/MeusPedidos"
import MeuCarrinho from "./Pages/MeuCarrinho/index.js";
import VerMeuCarrinho from "./Pages/VerMeuCarrinho/index.js";

export default function App() {
  return (
    <div>
       <BrowserRouter>
        <Nav/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/produtos" element={<Produtos/>}></Route>
              <Route path="/categorias" element={<Categorias/>}></Route>
              <Route path="/meus-pedidos" element={<MeusPedidos/>}></Route>
              <Route path="/meu-carrinho" element={<VerMeuCarrinho/>}></Route> 
              {/* <Route path="/finalizarCompra" element= ></Route> */}
            </Routes>
       </BrowserRouter>

    </div>
  )
}


