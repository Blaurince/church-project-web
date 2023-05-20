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
          src="https://i.imgur.com/xDvw1Dh.jpg"
          alt="First slide" 
        />
        <Carousel.Caption>
          <h2 className="text-white">LOVE</h2>
         <h3> <p className="carousel1">
            God is love, and whoever abides in love abides in God, and God
            abides in him.
          </p></h3>
          <p>Psalm 86:15</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          fluid
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/05/05/18/24/night-1374501_1280.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 className="text-white">BELIEVE</h2>
          <h3><p className="text-wheat">
            Do not let your heart be troubled; believe in God, believe also in
            me.
          </p></h3>
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
          <h2 className="text-white">PATIENCE</h2>
          <h3><p className="text-wheat">
            Patience leads to abundant understanding, but impatience leads to
            stupid mistakes
          </p>
          <p>Proverbes 14:29</p></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
  );
}
