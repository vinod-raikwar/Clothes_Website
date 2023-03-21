import React from "react";
import { Container, Nav, Col, Row } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import {
  FaPhoneVolume,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../assets/css/Style.css";

function Top_header() {
  return (
    <>
      <section className=" top-header-container">
        <Container>
          <Row>
            <Col xs={12} md={9}>
              <div className="top-header-left">
                <Nav className="nav_link">
                  <Nav.Link className="vrtcl_line" href="#home">
                    <span>
                      <FaPhoneVolume />
                    </span>
                    +88 (0) 101 0000 000
                  </Nav.Link>

                  <Nav.Link href="#link">
                    <span>
                      <TfiEmail/>
                    </span>
                    suprema@qodeinteractive.com
                  </Nav.Link>
                </Nav>
              </div>
            </Col>

            <Col xs={12} md={3}>
              <div className="top-header-right-social-icons">
                <Nav className="nav_link justify-content-end">
                  <Nav.Link href="#home">
                    <FaFacebookF />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <FaTwitter />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <FaInstagram />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <FaLinkedinIn />
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Top_header;
