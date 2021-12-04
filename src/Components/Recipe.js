import React from "react";
import {Link } from 'react-router-dom';

const Recipe = ({ recipe,handleDelete, children  }) => {
  return (
    
    <div key={recipe._id} className="recipe" tabIndex={0}>
      <div className="recipe-container">
      <Link to={`/recipe/${recipe._id}`}>
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="image-container">
          <img src={recipe.imgUrl} alt="recipe image" className="recipe-image" />
        </div>
        </Link>
        <Link to={`/editRecipe/${recipe._id}`}> Edit!</Link>
        <button onClick={(e) => handleDelete(recipe._id)}>Delete</button>
      </div>
<button className="btn text-white bg-purple-700 hover:bg-purple-800">
  Party with Slurm!
</button>

      {children}
    </div>
    
  );
}

export default Recipe;
