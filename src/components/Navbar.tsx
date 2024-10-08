

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/LogoCP.png";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar: React.FC = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "70px", height: "auto" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex justify-content-around w-100">
            <Nav.Link className="text-nav" as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="text-nav" as={Link} to="/about">
              Nosotros
            </Nav.Link>
            <Nav.Link className="text-nav" as={Link} to="/contact">
              Contacto
            </Nav.Link>
            <Nav.Link className="text-nav" as={Link} to="/premium">
              Ganado Premium
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
