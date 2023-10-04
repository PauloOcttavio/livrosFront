import React from "react";
import { Button, Nav, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from "react-router-dom";
const PortalNavbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/auth/authhome    ');
    }
    const home = () => {
        localStorage.clear();
        navigate('/home    ');
    }
    const get = () => {
        localStorage.clear();
        navigate('/getusuario');
    }
    const getLivros = () => {
        localStorage.clear();
        navigate('/getlivro');
    }
    return (
        <React.Fragment>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand className="text-light">Registro livros P.O</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <Nav.Link>
                            <Button className="btn-info text-light" onClick={home}>Home</Button>
                        </Nav.Link>
                            
                            <Nav.Link>
                                <Button className="btn-info text-light" onClick={getLivros}>Livros</Button>
                            </Nav.Link>
                            <Nav.Link>
                                <Button className="btn-info text-light" onClick={get}>Usuarios</Button>
                            </Nav.Link>
                            
                            <Nav.Link>
                                <Button className="btn-light" onClick={logout}>Logout</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
export default PortalNavbar;