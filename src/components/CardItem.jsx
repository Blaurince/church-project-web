import React, { useEffect, useState } from 'react'







export default function CardItem(props) {

  
const [state, setState] = useState([])
 


  const id = props.event.id;
  

  const onDelete = async (id) =>{

     
    const response = await fetch(`https://us-central1-church-project-bl.cloudfunctions.net/api/delete-event/${id}`,{
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       }})

     const data = await response.json();

     if(data.status!='success')
         return;
     else {

                setState({...state,loading: true})
                const response = await fetch(
                "https://us-central1-church-project-bl.cloudfunctions.net/api/get-events/"
              );

                const data = await response.json();

                setState({...state,loading: false, data})

     }

  }

  return (
    <div className="card text-center">
        <div className='overflow'>
            <img src={props.imgsrc} alt="image 1" className='card-img-top'/>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.event.title}</h4>
                <p className='card-text text-primary'>{props.event.location}</p>
                <p className='card-text text-secondary'>{props.event.date}
                </p>
                <button onClick={() => onDelete(id)} className='btn btn-outline-success'>Delete Event</button>
            </div>
        </div>
    </div>
  )
}
 


