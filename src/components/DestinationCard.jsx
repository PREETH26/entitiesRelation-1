import React from 'react';
import "./DestinationCard.css"

function DestinationCard({ props }) {
  return(<>
    <div className='border'>
    
      <h1>{props.name}</h1>
      <h3>{props.location}</h3>
      <img src={props.image}/>
      <p>{props.description}</p>
      <h2>{props.price}</h2>

    </div>
  </>
  )
}

export default DestinationCard;
