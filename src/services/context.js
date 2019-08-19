import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_RECIPES':
      return {
        ...state,
        hits: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    hits: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${
          process.env.REACT_APP_APP_ID
        }&app_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        this.setState({ hits: res.data.hits });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
