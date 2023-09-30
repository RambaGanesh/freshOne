import './index.css'

const EmojiCard = props => {
  const {emojiesList, clickedEmoji} = props
  const {emojiName, emojiUrl, id} = emojiesList

  const clickBut = () => {
    clickedEmoji(id)
  }

  return (
    <li className="emoji-cards">
      <button className="buttt" type="button" onClick={clickBut}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
