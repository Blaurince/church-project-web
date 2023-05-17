import React from 'react'
// import { TextCenter } from 'react-bootstrap-icons'
// import img1 from '../assets/image1.JPG'

export default function  CardItem(props) {
  return (
    <div className="card text-center">
        <div className='overflow'>
            <img src={props.imgsrc} alt="image 1" className='card-img-top'/>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.event.title}</h4>
                <p className='card-text text-primary'>{props.event.location}</p>
                <p className='card-text text-secondary'>
                   {props.event.date}
                </p>
                <a href="#" className='btn btn-outline-success'>Delete Event</a>
            </div>
        </div>
    </div>
  )
}

 