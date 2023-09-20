import React from "react";
import { Button, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
const PortalNavbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/auth/authhome');
    }
    const login = () => {
        localStorage.clear();
        navigate('/auth/login');
    }
    return (
        <React.Fragment>
            <Navbar bg="info" expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand>Registro Livros P.O</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Button variant="link" className="link-light link-underline-opacity-0" onClick={logout}>home</Button>
                                <Button className="btn-light" onClick={login}>Log in</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
export default PortalNavbar;