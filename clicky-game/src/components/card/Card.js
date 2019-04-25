import React from 'react';
import "./card.css"

function Card(props) {
  return (
    <span className="card">
      <img src={props.image} alt={props.name} id={props.id}></img>
    </span>
  )
}

export default Card;