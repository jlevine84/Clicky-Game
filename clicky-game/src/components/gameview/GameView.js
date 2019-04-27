import React from 'react';
import GameInfo from '../gameinfo/GameInfo'
import Card from '../card/Card'
import characters from '../../characters.json'
import "./gameview.css"
import "../card/card.css"

class GameView extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    characters: characters,
    guessed: []
  }

  componentWillMount() {
    this.shuffleCards()
  }

  gameOver = () => {
    if (this.state.score && this.state.highScore === 0) {
      alert(`Game over! You scored ${this.state.score} points on your first try!`)
      this.setState({highScore: this.state.score})
    } else if (this.state.score === this.state.highScore) {
      alert(`You tied the high score of ${this.state.highScore}. Try again to beat it!`)
    } else if (this.state.score < this.state.highScore) {
      alert(`Game over! You scored ${this.state.score} points. Try again to beat the high score of ${this.state.highScore}!`)
    } else {
      this.setState({highScore: this.state.score})
      alert(`Congratulations! You've set a new High Score of ${this.state.highScore}. Play again to see if you can beat it!`)
    }
    this.resetGame()
  }

  resetGame = () => {
    this.setState({
      score: 0,
      guessed: [],
    })
    this.shuffleCards()
  }

  selectCard = (event) => {
    let id = event.target.id
    let randomNum = Math.floor((Math.random() * 5) + 1);
    if (this.state.guessed.includes(id)) {
      //Game Over!
      this.gameOver()
    } else {
      //Continue playing!
      this.state.guessed.push(id)
      this.setState({score: this.state.score + randomNum})
      this.shuffleCards()
    }
  }

  shuffleCards = () => {
    let shuffle = this.state.characters
    for (let i = shuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    this.setState({
      characters: shuffle
    })
  };

  render() {
    return(
      <div>
        <div className="row no-gutters">
          <div className="maingame">
            {this.state.characters.map(toons => (
              <Card
              selectCard={this.selectCard.bind(this)}
              id={toons.id}
              key={toons.id}
              name={toons.name}
              image={toons.image}
              value={toons.points}
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