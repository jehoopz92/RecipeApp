import React, { Component } from 'react';
import { Consumer } from '../../services/context';
import axios from 'axios';

class Search extends Component {
  state = {
    recipeName: ''
  };

  findRecipe = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${
          this.state.recipeName
        }&app_id=${process.env.REACT_APP_APP_ID}&app_key=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(res => {
        dispatch({
          type: 'SEARCH_RECIPES',
          payload: res.data.hits
        });

        this.setState({ recipeName: '' });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form
              className="search-form"
              onSubmit={this.findRecipe.bind(this, dispatch)}
            >
              <input
                type="text"
                className="search-bar"
                name="recipeName"
                value={this.state.recipeName}
                onChange={this.onChange}
              />
              <button type="submit" className="search-button">
                Submit
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
