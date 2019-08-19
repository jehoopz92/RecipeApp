import React from 'react';
import style from './recipe.module.css';
import Spinner from '../layout/Spinner';

const Recipe = props => {
  const { recipe } = props;

  if (recipe === undefined || recipe.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div className={style.recipe}>
        <img src={recipe.image} alt="" className={style.image} />
        <h3>{recipe.label}</h3>
        <ol className={style.list}>
          {recipe.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>{recipe.calories}</p>
      </div>
    );
  }
};

export default Recipe;
