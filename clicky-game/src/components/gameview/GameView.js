import React from 'react';
import GameInfo from '../gameinfo/GameInfo'
import Game from '../game/Game'
import "./gameview.css"
// import characters from '../../characters.json'

class GameView extends React.Component {
  render() {
    return(
      <div>
        <div className="game">
          <Game/>
        </div>
        <div className="gameinfo">
          <GameInfo/>
        </div>
      </div>
    )
  }
}

export default GameView;