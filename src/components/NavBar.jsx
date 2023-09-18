import {LinkContainer } from "react-router-bootstrap"
import Button from "react-bootstrap/Button";
import { Outlet } from "react-router-dom";


const NavBar= () => {
    return(
        <>
        <div >
            <nav className=" bg-primary container-fluid">
            <ul>
                <LinkContainer to='/'>
                <Button>Criação</Button>
                </LinkContainer>
                <LinkContainer  to="/listagem">
                    <Button>Listagem</Button>
                </LinkContainer>
                <LinkContainer to="/atualizar">
                    <Button>Atualização</Button>
                </LinkContainer>
                <LinkContainer to="/deletar">
                    <Button>Deletar</Button>
                </LinkContainer>
            </ul>
            </nav>
            <Outlet/>
        </div>
        </>
    )
}
export  {NavBar}