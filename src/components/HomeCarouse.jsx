import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css"
function HomeCarosel() {
  return (
    <div class="CaroselDiv">
    <Carousel >
      
      <Carousel.Item>
        <img src="/slide01.jpeg" alt="Slide 1" className="w-100" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/slide02.jpg" alt="Slide 1" className="w-100" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="/slide03.jpg" alt="Slide 1" className="w-100" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HomeCarosel;
