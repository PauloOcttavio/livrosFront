import { Route,Routes,BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import {Create} from "./pages/Create"
import {Listagem} from "./pages/List"
import { Update } from "./pages/Update";
import { Delete } from "./pages/Delete";
import Home from "./pages/Home";
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
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
