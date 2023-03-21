import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../assets/css/Style.css";

function ShippingBar() {
  return (
    <>
      {/* ***********Shipping BannerStart************ */}
      <section className="shipping_top_div">
        <div className="shipping_banner_img">
          <Container>
            <div className="shipping_banner_content">
              <Row>
                <Col sm={8}>
                  <div className="">
                    <h2 className="shipping_banner_heading">
                      Free Shipping Wordwide.
                    </h2>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="shipping_banner_link_div">
                    <Nav.Link className="shipping_banner_link" href="#action1">
                      Shop Now!
                    </Nav.Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
      {/* ***********Shipping Banner End************ */}
    </>
  );
}

export default ShippingBar;
