import React from 'react'
import Card from '../card/Card'
import characters from '../../characters.json'
import './game.css'

class Game extends React.Component {
  state = {
    characters: []
  }

  shuffleArray = () => {
    let newOrder = this.state.CharacterArray
    for (let i = newOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
    console.log(newOrder)
    this.setState({
      CharacterArray: newOrder
    })
  };
  render() {
    return (
      <div className="container">
        <Card/>
      </div>
    )
  }
}
export default Game