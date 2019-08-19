import React from 'react';
import { Consumer } from '../../services/context';
import Spinner from '../layout/Spinner';
import Recipe from './Recipe';
import style from './recipe.module.css';

const Recipes = () => {
  return (
    <Consumer>
      {value => {
        const { hits } = value;

        if (hits === undefined || hits.length === 0) {
          return <Spinner />;
        } else {
          return (
            <React.Fragment>
              <div className="recipes">
                {hits.map(hit => (
                  <Recipe key={hit.recipe.label} recipe={hit.recipe} />
                ))}
              </div>
            </React.Fragment>
          );
        }
      }}
    </Consumer>
  );
};

export default Recipes;
