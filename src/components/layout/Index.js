import React from 'react';
import Recipes from '../recipe/Recipes';
import Search from './Search';

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Recipes />
    </React.Fragment>
  );
};

export default Index;
