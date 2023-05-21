import React, { useEffect, useState } from "react";
//import { Container, Row, Col, Card} from 'react-bootstrap'
import { Row, Container, Button } from "react-bootstrap";
import CardItem from "./CardItem";
import './card-style.css'
//import churchpic from "../../public/Images/image1.JPG"
import img1 from '../assets/image1.JPG'
//import img2 from '../assets/image2.JPG'
import img3 from '../assets/image3.JPG'
import img4 from '../assets/image3.JPG'
 //import { event } from "firebase-functions/v1/analytics";

export default function DisplayEvent() {
  const onDeleteClick = (event) => {

     
  };

  const onEditClick = (event) => {};

  const [events, setEvent] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://us-central1-church-project-bl.cloudfunctions.net/api/get-events/"
      );
      const data = await response.json();
      setEvent(data);
    };
    fetchData();
  }, []);

  const handleGetAllEvents = async () => {
      const response = await fetch("https://us-central1-church-project-bl.cloudfunctions.net/api/allevents/", {
      headers: { "Content-Type": "application/json"},
      })
      const data = await response.json();
      setEvent(data);
  }

  const handleGetFourEvents = async () => {
      const response = await fetch("https://us-central1-church-project-bl.cloudfunctions.net/api/get-events/", {
      headers: { "Content-Type": "application/json"},
      })
      const data = await response.json();
      setEvent(data);
  }




  
  return (
    <Container>
      <div className="space-bottom">
      <Button className="space-right" onClick={() => handleGetAllEvents()}>See All Events</Button>
      <Button onClick={() => handleGetFourEvents()}>Top 4 Events</Button>
      </div>
      <Row className="d-flex justify-content-center">        
        {
            events.map((event)=>(
                // <CardItem key ={event.id} imgsrc={event.image} event={event}/>
                <CardItem key={event.id} events={event} setEvent={setEvent}/>
                // <p className="card-text"></p>
            ))
        }
        

        </Row>
        </Container>
  );
}


