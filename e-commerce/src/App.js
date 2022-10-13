<<<<<<< HEAD
import Navbar from './aba-produtos/navbar';


export default function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main>
        <article>

        </article>
        <section>

        </section>

        <article>

        </article>
      </main>

      <footer>

      </footer>
=======
import Nav from "./components/Nav/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Produtos from "./Pages/Produtos"
import Categorias from "./Pages/Categorias"
import MeusPedidos from "./Pages/MeusPedidos"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="produtos" element={<Produtos/>}></Route>
            <Route path="categorias" element={<Categorias/>}></Route>
            <Route path="meusPedidos" element={<MeusPedidos/>}></Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 775eaaa517645a1dc72bf1b17bcd76fdf4023c79
    </div>
  )
}


