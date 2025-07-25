import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const Profile = () => {

    const [count,setCount] =useState(1)

  const handleIncrement = () => {
    setCount(count +1)
  };

  const handleDecrement = () => {
    setCount(count -1)
  };
console.log("count----------->",count);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4 className="text-center mt-2">Count: {count}</h4>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="d-flex gap-2 my-3 justify-content-center">
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={handleDecrement}>-</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
