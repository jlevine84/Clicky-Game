import React from 'react';
import TitleView from '../titleview/TitleView'
import GameView from '../gameview/GameView'
import "./body.css"

class Body extends React.Component {
  render() {
    return(
      <div>
        <div className="row no-gutters">
          <div className="col6">
            <TitleView/>
          </div>
          <div className="col6">
            <GameView/>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;