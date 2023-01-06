import React from "react";
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
      <Navbar.Brand href="#home">Produk Makanan</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
        </Form>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
