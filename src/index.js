import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import "reactjs-popup/dist/index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Auth from './auth/auth';
import AuthHome from './auth/AuthHome';
import App from './App';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './pages/Home';
import { CreateLivros } from './pages/CreateLivros';
import { ListagemLivros } from './pages/ListLivros';
import { UpdateLivros } from './pages/UpdateLivros';
import { DeleteLivros } from './pages/DeleteLivros';
import { Listagem } from './pages/List';
import { Update } from './pages/Update';
import { Delete } from './pages/Delete';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
    <Routes>
        <Route path='/auth' element={<Auth />}>
            <Route path='authhome' element={<AuthHome />} />
            <Route path='login' element={<Login />} />
        </Route>
        <Route path="/" element={<App />}>
            <Route path='' element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
                
            } />
        <Route path="home" element={<Home/>}></Route>
        <Route path="createlivro" element={<CreateLivros/>}></Route>
        <Route path="getlivro" element={<ListagemLivros/>}></Route>
        <Route path="putlivro" element={<UpdateLivros/>}></Route>
        <Route path="deletelivro" element={<DeleteLivros/>}></Route>
        <Route path="getusuario" element={<Listagem/>}></Route>
        <Route path="putusuario" element={<Update/>}></Route>
        <Route path="deleteusuario" element={<Delete/>}></Route>
        </Route>
        
        
        
    </Routes>
</BrowserRouter>
  </React.StrictMode>
);

