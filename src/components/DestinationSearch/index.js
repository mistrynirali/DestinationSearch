import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="search"
              className="search"
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
    
            <ul className="list-container">
              {searchResult.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
