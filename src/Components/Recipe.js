import React from "react";
import {Link } from 'react-router-dom';

const Recipe = ({ recipe, children, handleDelete }) => {
  return (
    <div key={recipe._id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="image-container">
          <img src={recipe.img} alt="recipe image" className="recipe-image" />
        </div>
        <Link to={`/editRecipe/${recipe._id}`}> Edit!</Link>
        <button onClick={(e) => handleDelete(recipe._id)}>Delete</button>
      </span>
      {children}
    </div>
  );
}

export default Recipe;