import React from "react";
import { Container, Row, Col, Navbar, Nav, Form } from "react-bootstrap";
import logo from "../assets/images/logo-footer.png";
import { ImFacebook2, ImVimeo2, ImInstagram, ImLinkedin } from "react-icons/im";
import shoe from "../assets/images/ftr-shoe.jpg";
import insta from "../assets/images/ftr-insta.jpg";
import shadow from "../assets/images/ftr-shadow.jpg";
// import holi from "../assets/images/ftr-holi.jpg";
import scenery from "../assets/images/ftr-scenery.jpg";
import { TfiAngleRight } from "react-icons/tfi";
import debit from "../assets/images/footer-debit-cards.png";

function Footer() {
  return (
    <>
      <section className="footer_top_div">
        <div className="footer_bg">
          <Container fluid>
            <Row>
              <Col md={6} lg={3}>
                <div>
                  <Navbar.Brand href="#home">
                    <img
                      src={logo}
                      className="d-inline-block align-top logo_size"
                      alt="React Bootstrap logo"
                    />
                  </Navbar.Brand>
                  <div className="footer_content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </p>

                    <p className="footer_address">
                      198 West 21th Street, Suite 721, New York NY 10010
                      <br />
                      Email: suprema@qodeint.com
                      <br />
                      Phone: +88 (0) 101 0000 000
                      <br />
                      Fax:+88 (0) 202 0000 001
                    </p>
                    <Nav className="footer_social_icons">
                      <Nav.Link href="#">
                        <ImFacebook2 />
                      </Nav.Link>
                      <Nav.Link href="#">
                        <ImLinkedin />
                      </Nav.Link>
                      <Nav.Link href="#">
                        <ImVimeo2 />
                      </Nav.Link>
                      <Nav.Link href="#">
                        <ImInstagram />
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Latest Post</h5>

                  <div className="footer_content">
                    <p className="footer_para_link">
                      Where Music Is Headed Next
                    </p>
                    <p className="footer_date">February 12, 2016</p>

                    <p className="footer_para_link">
                      Sports Brand New Advertising Campaign
                    </p>
                    <p className="footer_date">February 12, 2016</p>

                    <p className="footer_para_link">
                      Snippets From The Tech Mobile Conference
                    </p>
                    <p className="footer_date">February 12, 2016</p>

                    <p className="footer_para_link">
                      New Music Video Will Blow Your Mind
                    </p>
                    <p className="footer_date">February 12, 2016</p>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Tweeter Feed</h5>

                  <div className="footer_content">
                    <p>Couldn't connect with Twitter</p>
                  </div>
                </div>
              </Col>
              <Col xs={6} lg={3}>
                <div className="">
                  <h5 className="footer_heading">Instagram Feed</h5>
                  <div className="footer_content">
                    <ul>
                      <li>
                        <a href="#shoe">
                          <img src={shoe} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#insta">
                          <img src={insta} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#shadow">
                          <img src={shadow} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#scenery">
                          <img src={scenery} alt="" />
                        </a>
                      </li>
                    </ul>
                    <hr />

                    <Form>
                      <div className="ftr_email_div">
                        <div className="ftr_subscribe">
                          <label htmlFor="subscribe">
                            Subscribe to our newsletter, get 10% off:
                          </label>
                        </div>
                        <div className="ftr_email_div">
                          <input className="ftr_email" type="email" placeholder="E-mail" />
                          <span className="ftr_email_arrow_btn">
                            <TfiAngleRight />
                          </span>
                        </div>
                      </div>
                    </Form>
                    <hr />
                    <div className="ftr_debit_cards">
                        <img src={debit} alt="debit-cards" />            
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Footer;
