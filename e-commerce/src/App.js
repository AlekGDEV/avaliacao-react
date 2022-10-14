import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav/index.js";
import Home from "./Pages/Home"
import Produtos from "./Pages/Produtos"
import Categorias from "./Pages/Categorias"
import MeusPedidos from "./Pages/MeusPedidos"

export default function App() {
  return (
    <div>
       <BrowserRouter>
        <Nav>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Produtos" element={<Produtos/>}></Route>
            <Route path="/Categorias" element={<Categorias/>}></Route>
            <Route path="/MeusPedidos" element={<MeusPedidos/>}></Route>
            </Routes>
        </Nav>
       </BrowserRouter>

    </div>
  )
}


