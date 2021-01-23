import React, { Component } from "react";
import List from './List'

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const wordToMatch = this.props.wordToMatch;
    return (
      <fieldset>
        <legend>Enter a city or state:</legend>
        <input value={wordToMatch}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {wordToMatch: '', places: []}
  }

  handleInputChange(inputBox) {
    this.setState({wordToMatch: inputBox})
    
  }

  /* DO NOT MODIFY */
  componentDidMount() {
    const allPlaces = [];
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        allPlaces.push(...results)
        this.setState({ places: allPlaces })
      })
      .catch(error => console.log(error));
  }

  render() {
    const wordToMatch = this.state.wordToMatch;
    const places = this.state.places;
    return (
      <div>
        <SearchInput
          wordToMatch={wordToMatch}
          onInputChange={this.handleInputChange} />
        <List 
          wordToMatch = {wordToMatch}
          places = {places} />
      </div>
    )
  }
}

export default Search

