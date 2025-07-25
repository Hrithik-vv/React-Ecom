import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("Email:", loginInfo.email);
  console.log("Password:", loginInfo.password);

  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <Col md={4}>
          <h4>Login</h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
