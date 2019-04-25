import React from 'react';
import "./card.css"

function Card(props) {
  return (
    <div className="toons">
      <img src={props.image} alt={props.name} id={props.id}></img>
    </div>
  )
}

export default Card;