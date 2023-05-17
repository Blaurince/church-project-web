import React, { useEffect, useState } from "react";
//import { Container, Row, Col, Card} from 'react-bootstrap'
import { Row, Container } from "react-bootstrap";
import CardItem from "./CardItem";
import './card-style.css'
//import churchpic from "../../public/Images/image1.JPG"
import img1 from '../assets/image1.JPG'
//import img2 from '../assets/image2.JPG'
import img3 from '../assets/image3.JPG'
import img4 from '../assets/image3.JPG'
 //import { event } from "firebase-functions/v1/analytics";

export default function DisplayEvent() {
  const onDeleteClick = (event) => {};

  const onEditClick = (event) => {};

  const [events, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://us-central1-church-project-bl.cloudfunctions.net/api/get-events/"
      );
      const data = await response.json();
      setEvent(data);
    };
    fetchData();
  }, []);
  return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
        {
            events.map((event)=>(
                <div className="col-md-3">
                <CardItem key ={event.id} imgsrc={"/Images/preview.png"} event = {event}/>
                </div>
            ))
        }
        </div>
      </div>
  );
}
