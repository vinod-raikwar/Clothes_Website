import React from "react";
import "./Login.css";
// import login from "../../assets/images/login_bg.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <>
      <section className="login_bg_img">
        <h1>My Account</h1>
        <div className="contact_div">
          <Container>
            <Row>
              <Col>
                <div className="login">
                  <div className="form_div">
                    <h3 className="heading">Login</h3>
                    <Form>
                      <Form.Group className="mb-3 font_size" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="form_control"/>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="form_control"/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </Form>
                  </div>
                </div>
              </Col>


              <Col>
                <div className="registration">
                  <div className="form_div">
                    <h3 className="heading">Registration</h3>
                    <Form>
                      <Form.Group className="mb-3 font_size" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="form_control"/>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="form_control"/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 font_size"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Registration
                      </Button>
                    </Form>
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

export default Login;
