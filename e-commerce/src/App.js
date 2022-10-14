<<<<<<< HEAD
// import Nav from "./components/Nav/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
// import Home from "./Pages/Home"
=======
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav/index.js";
import Home from "./Pages/Home"
>>>>>>> 9ffdb33f8267f911ca3132065e650063d9c7da37
import Produtos from "./Pages/Produtos"
// import Categorias from "./Pages/Categorias"
// import MeusPedidos from "./Pages/MeusPedidos"

export default function App() {
  return (
    <div>
<<<<<<< HEAD
     
      <BrowserRouter>
        {/* <Nav/> */}
          <Routes>
            {/* <Route path="/" element={<Home/>}></Route> */}
            <Route path="produtos" element={<Produtos/>}></Route>
            {/* <Route path="categorias" element={<Categorias/>}></Route> */}
            {/* <Route path="meusPedidos" element={<MeusPedidos/>}></Route> */}
        </Routes>
      </BrowserRouter>
=======
       <BrowserRouter>
        <Nav/>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/produtos" element={<Produtos/>}></Route>
            <Route path="/categorias" element={<Categorias/>}></Route>
            <Route path="/meus-pedidos" element={<MeusPedidos/>}></Route>
            </Routes>
       </BrowserRouter>
>>>>>>> 9ffdb33f8267f911ca3132065e650063d9c7da37

    </div>
  )
}


