import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>About Us</h5>
            <p style={{ fontSize: "0.9rem" }}>
              We offer the best mobile devices at unbeatable prices. Quality, service, and satisfaction guaranteed.
            </p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-light"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <Row>
          <Col className="text-center">
            <p className="mb-0" style={{ fontSize: "0.85rem" }}>
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
