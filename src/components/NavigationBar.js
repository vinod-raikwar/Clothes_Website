import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import logo from "../assets/images/nav-logo-dark.png";
import { VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import "../assets/css/Style.css";
import { NavLink } from "react-router-dom";

function NavigationBar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section bg="light">
        <div className="nav_div">
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand to="/">
                {/* <img
                  src={logo}
                  className="d-inline-block align-top logo"
                  alt="React Bootstrap logo"
                /> */}
                <h2>Suprema</h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse
                id="navbarScroll"
                className="d-flex justify-content-end "
              >
                <Nav
                  className="me-0  my-lg-0 nav_anchor"
                  style={{ maxHeight: "100px" }}
                  navbarScroll>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="about">About</NavLink>
                  <NavLink to="services">Services</NavLink>
                  <NavLink to="product">Product</NavLink>
                  <NavLink to="contact">Contact</NavLink>
                  <NavLink to="login">Login</NavLink>
                </Nav>
                <div className="d-flex">
                  <Nav className="nav_icons">
                    <NavLink to="search">
                      <span>
                        <VscSearch />
                      </span>
                    </NavLink>
                    <NavLink to="cart">
                      <span>
                        <BsHandbag />
                      </span>
                    </NavLink>
                  </Nav>

                  <span onClick={handleShow} className="humburgur_menu">
                    <GiHamburgerMenu />
                  </span>

                  <Offcanvas
                    placement="end"
                    show={show}
                    onHide={handleClose}
                    {...props}
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Some text as placeholder. In real life you can have the
                      elements you have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </section>
    </>
  );
}

export default NavigationBar;
