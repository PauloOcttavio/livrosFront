import { Route,Routes,BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import {Create} from "./pages/Create"
import {Listagem} from "./pages/List"
import { Update } from "./pages/Update";
import { Delete } from "./pages/Delete";
import Home from "./pages/Home";
import { ListagemLivros } from "./pages/ListLivros";
import { UpdateLivros } from "./pages/UpdateLivros";
import { DeleteLivros } from "./pages/DeleteLivros";
import { CreateLivros } from "./pages/CreateLivros";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/listagem" element={<Listagem/>}></Route>
      <Route path="/atualizar" element={<Update/>}></Route>
      <Route path="/deletar" element={<Delete/>}></Route>
      <Route path="/criacao" element={<Create></Create>}></Route>
      <Route path="/listagemlivros" element={<ListagemLivros/>}></Route>
      <Route path="/atualizarlivros" element={<UpdateLivros/>}></Route>
      <Route path="/deletarlivros" element={<DeleteLivros/>}></Route>
      <Route path="/criacaolivros" element={<CreateLivros/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
