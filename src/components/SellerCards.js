import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "../assets/css/Style.css";
import shoe from "../assets/images/shoe.jpg";
import bag from "../assets/images/bag.jpg";
import sneaker from "../assets/images/sneaker.jpg";
import sweter from "../assets/images/sweter.jpg";

function SellerCards() {
  return (
    <>
      <section className="seller_top_div">
        <Container>
          <div>
            <Row>
              <Col>
                <h6>Best Sellers</h6>

                <h3>Browse Through Our Best Selleres</h3>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#shoe">
                      <Card.Img className="card_img" variant="top" src={shoe} alt="shoe" />
                    </a>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">Men,</Nav.Link>
                          <Nav.Link href="#features">Shoes,</Nav.Link>
                          <Nav.Link href="#pricing">Spotswear</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Black Skater Sneaker</Card.Title>
                      <p>$85.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#bag">
                      <Card.Img className="card_img" variant="top" src={bag} alt="bag" />
                    </a>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">Accessories,</Nav.Link>
                          <Nav.Link href="#features">New Collection,</Nav.Link>
                          <Nav.Link href="#pricing">Women</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Cream Tote Bag</Card.Title>
                      <p>$35.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#sweter">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={sweter}
                        alt="sweter"
                      />
                    </a>
                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">New Collection,</Nav.Link>
                          <Nav.Link href="#features">Sportswear,</Nav.Link>
                          <Nav.Link href="#pricing">Women</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Futura Jumper</Card.Title>
                      <p>$135.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#sneaker">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={sneaker}
                        alt="sneaker"
                      />
                    </a>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">Men,</Nav.Link>
                          <Nav.Link href="#features">Shoes,</Nav.Link>
                          <Nav.Link href="#pricing">Spotswear</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Leopard Print Sneaker</Card.Title>
                      <p>$185.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#shoe">
                      <Card.Img className="card_img" variant="top" src={shoe} alt="shoe" />
                    </a>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">Men,</Nav.Link>
                          <Nav.Link href="#features">Shoes,</Nav.Link>
                          <Nav.Link href="#pricing">Spotswear</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Black Skater Sneaker</Card.Title>
                      <p>$85.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#bag">
                      <Card.Img className="card_img" variant="top" src={bag} alt="bag" />
                    </a>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">Accessories,</Nav.Link>
                          <Nav.Link href="#features">New Collection,</Nav.Link>
                          <Nav.Link href="#pricing">Women</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Cream Tote Bag</Card.Title>
                      <p>$35.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#sweter">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={sweter}
                        alt="sweter"
                      />
                    </a>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">New Collection,</Nav.Link>
                          <Nav.Link href="#features">Sportswear,</Nav.Link>
                          <Nav.Link href="#pricing">Women</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Futura Jumper</Card.Title>
                      <p>$135.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              <Col sm={3}>
                <div className="seller_cards">
                  <Card className="card_size border-0 border-bottom">
                    <a href="#sneaker">
                      <Card.Img
                        className="card_img"
                        variant="top"
                        src={sneaker}
                        alt="sneaker"
                      />
                    </a>

                    <Card.Body>
                      <Card.Text>
                        <Nav className="card_category">
                          <Nav.Link href="#home">Men,</Nav.Link>
                          <Nav.Link href="#features">Shoes,</Nav.Link>
                          <Nav.Link href="#pricing">Spotswear</Nav.Link>
                        </Nav>
                      </Card.Text>
                      <Card.Title>Leopard Print Sneaker</Card.Title>
                      <p>$185.00</p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default SellerCards;
