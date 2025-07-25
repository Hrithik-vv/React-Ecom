import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img
            src="/slide01.jpeg"
            alt="About Us"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our website! We are passionate about delivering high-quality
            products and services to our customers. Our mission is to create a seamless
            and satisfying experience for everyone who visits our platform.
          </p>
          <p>
            With a focus on innovation, quality, and customer satisfaction, we aim to
            stand out in everything we do. Thank you for being a part of our journey!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
