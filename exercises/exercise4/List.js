import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        const wordToMatch = this.props.wordToMatch;
        const places = this.props.places;
        let regex = new RegExp(wordToMatch, 'gi');
        let matches = places.filter(p => p.city.match(regex) || p.state.match(regex));
        if (wordToMatch === '') {
            return <ul></ul>;
        }

        return <ul>
            {matches.map(p => 
                <li key = {p.city+p.state}>
                    {p.city}  {' - '}  {p.state}
                </li>
            )}
        </ul>
    }
}

export default List