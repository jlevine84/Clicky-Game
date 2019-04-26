import React from 'react';
import GameInfo from '../gameinfo/GameInfo'
import Card from '../card/Card'
import toons from '../../characters.json'
import "./gameview.css"
import "../card/card.css"

class GameView extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    characters: [toons],
    shuffledCharacters: [],
    guessed: []
  }

  componentWillMount() {
    this.shuffleCards()
  }

  selectCard = () => {
    //on card click get the info from the card that was clicked.
      // check guessed array if not guessed then push to array as valid
      // update score
      // if invalid - game ends - alert
      // check if high score is > current score then update
      // shuffle cards and reset game values for new game
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
    return(
      <div>
        <div className="row no-gutters">
          <div className="maingame">
            {toons.map(toons => (
              <Card
              onClick={this.shuffleCards}
              id={toons.id}
              key={toons.id}
              name={toons.name}
              image={toons.image}
              />
            ))}
          </div>
        </div>
        <div className="row no-gutters">
          <div className="gameinfo">
            <GameInfo
            score={this.state.score}
            highScore={this.state.highScore}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default GameView;