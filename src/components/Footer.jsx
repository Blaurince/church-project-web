import { Container, Row , Col} from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

export default function Footer ()  {
        
    const githubUrl = "https://github.com/Blaurince/church-project-web.git";
   

    return (
        <footer>
            <Container fluid className="p-5">
                <Row>
                    <Col className="text-center" >
                       <p className="text-center text-secondary">
                       <a href={githubUrl}
                       target="_blank"
                       rel="noreferrer"
                       className="button-effect text-white">
                      <Github size="50" color="grey" />
                      <br /><small>Code in GitHub</small>
                  </a><br />
                  </p>
                   
                    <p>&copy; {new Date().getFullYear()} Barbara Laurince </p> 
                    <br />
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
