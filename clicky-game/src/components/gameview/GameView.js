import React from 'react';
import GameInfo from '../gameinfo/GameInfo'
import MainGame from '../maingame/MainGame'
import "./gameview.css"

class GameView extends React.Component {
  render() {
    return(
      <div>
        <div className="row no-gutters">
          <div className="maingame">
            <MainGame/>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="gameinfo">
            <GameInfo/>
          </div>
        </div>
      </div>
    )
  }
}

export default GameView;