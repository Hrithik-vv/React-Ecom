import { Container, Row } from "react-bootstrap";
import Product from "../components/Product";

function Home() {
  const headerStyle = { background: 'red', color: 'white', fontSize: '25px' };

  return (
    <>
      <Container>
        <Row>
          <Product />
        </Row>
      </Container>
    </>
  );
}

export default Home;
