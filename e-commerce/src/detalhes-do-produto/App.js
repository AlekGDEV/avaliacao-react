//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetailsProduct from "./pages/DetailsProduct";
import Carrossel from "./components/Carrossel/carrossel";
import Descricao from "./components/Descricao/descricao";
import ProdutosRelacionados from "./components/ProdutosRelacionados/prod";


function App() {
  return (
    <div className="body">
      <div>
      <Carrossel/>
      <Descricao/>
      </div>
      <div>
      <ProdutosRelacionados/>
      </div>
      <BrowserRouter>
          <Routes>
          <Route path="/detalhes" element={<DetailsProduct/>}/>
         </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
