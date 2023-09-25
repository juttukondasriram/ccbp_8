import './App.css'
import {Component} from 'react'
import PopUp from './components/PopUp'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const startRandom = Math.floor((Math.random() * 100) % 3)

class App extends Component {
  state = {
    score: 0,
    user: '',
    showResult: false,
    result: '',
    random: startRandom,
  }

  componentDidMount() {
    const random = Math.floor((Math.random() * 100) % 3)
    this.setState({random})
  }

  onRock = () => {
    const {random} = this.state
    if (random === 0) {
      this.setState(prevState => ({
        score: prevState.score,
        user: 'ROCK',
        result: 'IT IS DRAW',
        showResult: true,
      }))
    } else if (random === 1) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        user: 'ROCK',
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (random === 2) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        user: 'ROCK',
        result: 'YOU LOSE',
        showResult: true,
      }))
    }
  }

  onScissors = () => {
    const {random} = this.state
    if (random === 0) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        user: 'SCISSORS',
        result: 'YOU LOSE',
        showResult: true,
      }))
    } else if (random === 1) {
      this.setState(prevState => ({
        score: prevState.score,
        user: 'SCISSORS',
        result: 'IT IS DRAW',
        showResult: true,
      }))
    } else if (random === 2) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        user: 'SCISSORS',
        result: 'YOU WON',
        showResult: true,
      }))
    }
  }

  onPaper = () => {
    const {random} = this.state
    if (random === 0) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        user: 'PAPER',
        result: 'YOU WON',
        showResult: true,
      }))
    } else if (random === 1) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        user: 'PAPER',
        result: 'YOU LOSE',
        showResult: true,
      }))
    } else if (random === 2) {
      this.setState(prevState => ({
        score: prevState.score,
        user: 'PAPER',
        result: 'IT IS DRAW',
        showResult: true,
      }))
    }
  }

  onPlayAgain = () => {
    const random = Math.floor((Math.random() * 100) % 3)
    this.setState({showResult: false, random})
  }

  render() {
    const {score, user, showResult, result, random} = this.state

    const isCheck = element => element.id === user

    const userSelectionIndex = choicesList.findIndex(isCheck)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="details-container">
            <h1>
              Rock
              <br />
              Paper
              <br />
              Scissors
            </h1>
          </div>
          <div className="score-container">
            <p>Score</p>
            <p className="score-paragraph">{score}</p>
          </div>
        </div>
        {showResult ? (
          <div className="result-container">
            <div className="result-alignment">
              <div>
                <h1>YOU</h1>
                <img
                  alt="your choice"
                  className="image"
                  src={choicesList[userSelectionIndex].imageUrl}
                />
              </div>
              <div>
                <h1>OPPONENT</h1>
                <img
                  alt="opponent choice"
                  className="image"
                  src={choicesList[random].imageUrl}
                />
              </div>
            </div>
            <p>{result}</p>
            <button onClick={this.onPlayAgain} type="button">
              PLAY AGAIN
            </button>
          </div>
        ) : (
          <div className="images-container">
            <div>
              <button
                data-testid="rockButton"
                onClick={this.onRock}
                className="button"
                type="button"
              >
                <img
                  className="image"
                  src={choicesList[0].imageUrl}
                  alt={choicesList[0].id}
                />
              </button>
              <button
                data-testid="scissorsButton"
                onClick={this.onScissors}
                className="button"
                type="button"
              >
                <img
                  className="image"
                  src={choicesList[1].imageUrl}
                  alt={choicesList[1].id}
                />
              </button>
            </div>
            <button
              data-testid="paperButton"
              onClick={this.onPaper}
              className="button"
              type="button"
            >
              <img
                className="image"
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
              />
            </button>
          </div>
        )}
        <PopUp />
      </div>
    )
  }
}

export default App
