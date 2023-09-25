import React from "react";
import { Button, Nav, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import {Dropdown} from "react-bootstrap";
const PortalNavbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/auth/authhome');
    }
    const create = () => {
        localStorage.clear();
        navigate('/createusuario');
    }
    const get = () => {
        localStorage.clear();
        navigate('/getusuario');
    }
    const put = () => {
        localStorage.clear();
        navigate('/putusuario');
    }
    const deletar = () => {
        localStorage.clear();
        navigate('/deleteusuario');
    }
    const createLivros = () => {
        localStorage.clear();
        navigate('/createlivro');
    }
    const getLivros = () => {
        localStorage.clear();
        navigate('/getlivro');
    }
    const putLivros = () => {
        localStorage.clear();
        navigate('/putlivro');
    }
    const deletarLivros = () => {
        localStorage.clear();
        navigate('/deletelivro');
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
                            <Dropdown>
                              <Dropdown.Toggle variant="info" id="dropdown-basic" className="text-light">
                                usuarios
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item onClick={create}>Create</Dropdown.Item>
                                <Dropdown.Item onClick={get}>Get</Dropdown.Item>
                                <Dropdown.Item onClick={put}>Put</Dropdown.Item>
                                <Dropdown.Item onClick={deletar}>Delete</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            </Nav.Link>
                            <Nav.Link>
                            <Dropdown>
                              <Dropdown.Toggle variant="info" id="dropdown-basic" className="text-light">
                                livros
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item onClick={createLivros}>Create</Dropdown.Item>
                                <Dropdown.Item onClick={getLivros}>Get</Dropdown.Item>
                                <Dropdown.Item onClick={putLivros}>Put</Dropdown.Item>
                                <Dropdown.Item onClick={deletarLivros}>Delete</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
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