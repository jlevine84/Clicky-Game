import React from 'react';
import GameInfo from '../gameinfo/GameInfo'
import Game from '../game/Game'
import "./gameview.css"
// import characters from '../../characters.json'

class GameView extends React.Component {
  render() {
    return(
      <div>
        <div className="no-gutters">
          <div className="col game">
            <Game/>
          </div>
          <div className="w-100 no-gutters"></div>
          <div className="col gameinfo">
            <GameInfo/>
          </div>
        </div>
      </div>
    )
  }
}

export default GameView;