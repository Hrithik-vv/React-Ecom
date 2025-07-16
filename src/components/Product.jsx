import { Button, Card, Row, Col } from "react-bootstrap";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="product-container px-3">
        <h1 className="mb-4">Products</h1>
        <Row>
          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Apple iPhone 16 (White, 256 GB)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/p/-original-imah4jyfveygyubc.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Apple iPhone 16 (Ultramarine)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Apple iPhone 16 (Teal, 128 GB)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Apple iPhone 16 (Pink, 256 GB)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="product-container px-3">
        <Row>
          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/7/b/7/-original-imahcfcfhkzhngeb.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Nothing Phone (3a) Pro</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/l/m/-original-imahcfcfhxrf5hzg.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Nothing Phone (3a)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Apple iPhone 16 </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/y/d/-original-imahc7ezmtmajyye.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>CMF by Nothing Phone 2 </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="product-container px-3">
        <Row>
          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/2/w/-original-imahdxq5vuexfwyh.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>REDMI 14C 5G (Stargaze Black, 128 GB)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/f/w/-original-imahd57gfqezxezx.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>vivo T4 Ultra 5G (Meteor Grey, 256 GB)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/y/y/-original-imahcfwmhfccryad.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Samsung Galaxy S24 FE 5G</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} xl={3} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/5/t/-original-imahcrdry2p7fyfp.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <Card.Title>Samsung Galaxy S24 Ultra 5G</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Product;
