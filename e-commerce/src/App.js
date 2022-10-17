import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav/index.js";
import Home from "./Pages/Home"
import Produtos from "./Pages/Produtos"
import Categorias from "./Pages/Categorias"
import MeusPedidos from "./Pages/MeusPedidos"
import Footer from "./components/Footer/index.js"
import Finalizar from "./Pages/FinalizarCrompa/index.js";
import Cadastro from "./Pages/Cadastro/index.js";
import Login from "./Pages/Login/index.js";
import "bootstrap/dist/css/bootstrap.min.css";


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
              <Route path="/finalizar-compra" element={<Finalizar/>}></Route>
              <Route path="/cadastro" element={<Cadastro />}></Route> 
              <Route path="/login" element={<Login/>}></Route>
              {/* <Route path="/sign-up" element{<SignUp/>}></Route> */}
            </Routes>
        <Footer/>
       </BrowserRouter>
    </div>
  )
}

