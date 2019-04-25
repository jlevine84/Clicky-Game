import React from 'react'
import Card from '../card/Card'
import toons from '../../characters.json'
import './maingame.css'

class MainGame extends React.Component {
  state = {
    characters: [],
    shuffledCharacters: []
  }

  selectCard = () => {
    
  }



  shuffleCards = () => {
    let newOrder = this.state.characters
    for (let i = newOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
    console.log(newOrder)
    this.setState({
      characters: newOrder
    })
  };
  
  render() {
    return (
      <div className="maingame">
        {toons.map(toons => (
          <Card
          shuffleCards={this.shuffleCards}
          id={toons.id}
          key={toons.id}
          name={toons.name}
          image={toons.image}
          />
        ))}
      </div>
    )
  }
}
export default MainGame