import React from 'react';
import "./card.css"

function Card(props) {
  return (
    <div className="toons animated flipInX" id={props.id} value={props.points}>
      <img src={props.image} alt={props.name} id={props.id} value={props.points} onClick={props.selectCard}></img>
    </div>
  )
}

export default Card;