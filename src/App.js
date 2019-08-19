import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './services/context';

import './App.css';

import Index from './components/layout/Index';

class App extends Component {
  // const UrlGet = '4cd34c584bf1c6c25f36ec726fad9372'

  // const [recipes, setRecipes] = useState([]);
  // const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('chicken')

  // useEffect(() => {
  //   getRecipes()
  // }, [query])

  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // }

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search)
  //   setSearch('')
  // }
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

/* <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar"value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Submit</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
      </div> */
