import React from "react";
import { Button, Nav, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import {Dropdown} from "react-bootstrap";
const PortalNavbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/auth/login');
    }
    const create = () => {
        localStorage.clear();
        navigate('/createusuario');
    }
    return (
        <React.Fragment>
            <Navbar bg="info" expand="lg" className="navbar-dark display:flex">
                <Container>
                    <Navbar.Brand>Registro livros P.O</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Row>
                            <Dropdown>
                              <Dropdown.Toggle variant="info" id="dropdown-basic" className="text-light">
                                usuarios
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item onClick={create}>Create</Dropdown.Item>
                                <Dropdown.Item onClick={create}>Get</Dropdown.Item>
                                <Dropdown.Item onClick={create}>Put</Dropdown.Item>
                                <Dropdown.Item onClick={create}>Delet</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                                <Button className="btn-light" onClick={logout}>Logout</Button>
                            </Row>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}
export default PortalNavbar;