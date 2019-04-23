import React from 'react';
import Card from './Card'
import "./gameview.css"

class GameView extends React.Component {
  render() {
    return(
      <div>
        <div className="container">
          GameView
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    )
  }
}

export default GameView;