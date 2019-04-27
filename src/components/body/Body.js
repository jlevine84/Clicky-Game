import React from 'react';
import GameView from '../gameview/GameView'
import "./body.css"

class Body extends React.Component {
  render() {
    return(
      <div className="row no-gutters">
        <div className="title"></div>
        <div className="game">
          <GameView/>
        </div>
      </div>
    )
  }
}

export default Body;