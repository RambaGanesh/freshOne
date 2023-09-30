import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const winorlose = isWon ? 'You Won' : 'You Lose'
  const bs = isWon ? 'Best Score' : 'Score'
  const WOrLimg = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="unknown">
      <div className="cl">
        <h1 className="z">{winorlose}</h1>
        <p className="x">{bs}</p>
        <p className="sc">{score}/12</p>
        <button type="button" className="play-but" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img className="s-img" src={WOrLimg} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
