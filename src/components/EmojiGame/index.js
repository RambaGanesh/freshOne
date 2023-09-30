/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], topScore: 0, isGameActive: true}

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameActive: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojiList.length}
      />
    )
  }

  finishGameAndSetTopscore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({
      topScore: newTopScore,
      isGameActive: false,
    })
  }

  clickedEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojisLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopscore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiList) {
        this.finishGameAndSetTopscore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="un-order">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            emojiesList={each}
            clickedEmoji={this.clickedEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojiList, topScore, isGameActive} = this.state
    return (
      <div className="overall">
        <NavBar
          currentScore={clickedEmojiList.length}
          topScore={topScore}
          isGameActive={isGameActive}
        />

        <div className="body">
          {isGameActive ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
