// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {listDetails, updateSearchInput} = props
  const {suggestion} = listDetails
  const onUpdate = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onUpdate}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
