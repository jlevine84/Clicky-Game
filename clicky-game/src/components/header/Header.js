import React from 'react';
import "./header.css"

class Header extends React.Component {
  render() {
    return(
      <div>
        <header className="row no-gutters">
          <div className="col 3"></div>
          <div className="col 6">
            <h1>South Park Clicky Game</h1>
          </div>
          <div className="col 3"></div>
        </header>
      </div>
    )
  }
}

export default Header;