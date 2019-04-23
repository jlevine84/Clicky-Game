import React from 'react';
import TitleView from './TitleView'
import GameView from './GameView'
import "./body.css"

class Body extends React.Component {
  render() {
    return(
      <div>
        <div className="container">
        <TitleView/>
        <GameView/>
        </div>
      </div>
    )
  }
}

export default Body;