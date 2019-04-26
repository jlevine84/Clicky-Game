import React from 'react'
import './gameinfo.css'

function GameInfo(props) {
  return (
    <div>
      <div className="row no-gutters">
        <div className="instructions">
          <div className="box">
            <p><strong>Click on a character to begin!</strong></p>
            <p><strong>Each character you click have random point values assigned!</strong></p>
            <p><strong>Clicking on a character you've already clicked will end the game!</strong></p>
            <p><strong>Beat your high score!</strong></p>
          </div>
        </div>
      </div>
      <div className="row no-gutters">

        <div className="scores">
          <div className="box2">
            <div className="score">
              <p><strong>Current Score:</strong></p>
              <p><strong>{props.score}</strong></p>
            </div>
            <span className="score">
              <p><strong>High Score:</strong></p>
              <p><strong>{props.highScore}</strong></p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GameInfo