import { Container, Row, Col } from "react-bootstrap"

export default function HeroBanner (){
     return (
        <section>
        <Container fluid className="bg-danger">
            <Row>
                <Col className="text-center">
                <h1>CHRISTIAN FAMILY GOSPEL ASSEMBLY</h1>
                </Col>
            </Row>
        </Container>
        </section>
     )
}