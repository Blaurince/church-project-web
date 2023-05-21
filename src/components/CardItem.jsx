import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';


export default function CardItem({events, setEvent}) {

  const [deleteEvent, setDeleteEvent] = useState([])
 
 const id = events.id;
  
  const onDelete = async (e) =>{ 
    e.preventDefault()
    const response = await fetch(`https://us-central1-church-project-bl.cloudfunctions.net/api/delete-event/${id}`,{
    method: "DELETE",
    headers: {
         "Content-Type": "application/json",
       }})
    const data = await response.json();
    setEvent(data);
  
   
  }

  return (
    <Col className="col-xs-12 col-md-4 col-lg-4 col-xl-3">
      <Card className='margin-bottom'>
        <Card.Img variant="top" src={events.image} alt="image 1" className='card-img-top'/>

        <Card.Body className="church-info">
          <h4 className='card-title'>{events.title}</h4>
          <p className='card-text text-primary'> {events.location}</p>
          <p className='card-text text-secondary'>{events.date}
          </p>
          <button onClick={onDelete} className='btn btn-outline-success'>Delete Event</button>
        </Card.Body>
      </Card>
    </Col>
  )
}
 


