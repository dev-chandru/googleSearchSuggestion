// Write your code here

import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="card-container">
          <div className="search-card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-element"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onSearchInput}
            />
          </div>
          <ul className="list-main-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                listDetails={eachItem}
                key={eachItem.id}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
