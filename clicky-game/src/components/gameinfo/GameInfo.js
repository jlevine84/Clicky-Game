import React from 'react'
import './gameinfo.css'

function GameInfo(props) {
  return (
    <div>
      <div className="row no-gutters">
        <div className="instructions">
          <div className="box">
            <p><strong>To Begin, click on a character card!</strong></p>
            <p><strong>Clicking on a character you've already clicked will end the game!</strong></p>
            <p><strong>Each character is a worth random amount between 1 and 5!</strong></p>
            <p><strong>Get the highest score you can!</strong></p>
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