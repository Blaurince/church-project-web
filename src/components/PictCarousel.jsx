import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

export default function PictCarousel() {
  return (
    <Container className="carousel-container">
      <Row d-flex justify-content-center>
        <Col className=" xs={12} md={6} lg={4} xl={3}">
    <Carousel fade>
      <Carousel.Item>
        <Image
          fluid
          style={{width: "100%"}}
          className="d-block len"
          src={`/images/preview01.jpg`}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>LOVE</h3>
          <p>
            God is love, and whoever abides in love abides in God, and God
            abides in him.
          </p>
          <p>Psalm 86:15</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsrSSSwsnpP27G0tzhZlve4kVV54Uiv3BIw&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>BELIEVE</h3>
          <p>
            Do not let your heart be troubled; believe in God, believe also in
            me.
          </p>
          <p>Hebrews 11:1</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          className="d-block w-100"
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Flower-HD-Wallpaper-Free-download.jpg"
          alt="Third slice"
        />

        <Carousel.Caption>
          <h3>PATIENCE</h3>
          <p>
            Patience leads to abundant understanding, but impatience leads to
            stupid mistakes
          </p>
          <p>Proverbes 14:29</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
  );
}
