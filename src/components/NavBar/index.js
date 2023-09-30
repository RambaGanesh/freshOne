import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameActive} = props
  return (
    <nav className="nav">
      <div>
        <h1 className="logo">
          <span className="span">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="img"
            />
          </span>
          Emoji Game
        </h1>
      </div>
      {isGameActive && (
        <div className="row">
          <p className="score-para">Score: {currentScore}</p>
          <p className="top-s">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
