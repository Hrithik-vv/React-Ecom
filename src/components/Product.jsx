import { Button, Card } from "react-bootstrap";
import "./Product.css";
const Product = () => {
  return (
    <div className="product-container">
      <h1>Products</h1>
      <Card style={{ width: "18rem" }}>
        <img
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70"
          alt=""
        />
        <Card.Body>
          <Card.Title>Apple iPhone 16 (White, 256 GB)</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <img
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70"
          alt=""
        />
        <Card.Body>
          <Card.Title>Apple iPhone 16 (Ultramarine, 128 GB)</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <img
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70"
          alt=""
        />
        <Card.Body>
          <Card.Title>Apple iPhone 16 (Teal, 128 GB)</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <img
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70"
          alt=""
        />
        <Card.Body>
          <Card.Title>Apple iPhone 16 (Pink, 256 GB)</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
