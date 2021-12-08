import React from "react";
import {Link } from 'react-router-dom';

const Recipe = ({ recipe,handleDelete, children  }) => {
  return (
    
    <div key={recipe._id} className="recipe" tabIndex={0}>
      <div className="recipe-container">
      <Link to={`/recipe/${recipe._id}`}>
        <h3 className="font-emilysCandy text-2xl text-primary text-center">{recipe.name}</h3>
        <div className="image-container">
          {recipe.imgUrl &&
          <img src={recipe.imgUrl.replace('upload/', 'upload/c_fill,h_180,w_320/')} alt="recipe image" className="recipe-image" />
          //sneaky way of using the cloudinary service to resize the image
          }
          </div>
        </Link>
        <Link to={`/editRecipe/${recipe._id}`}> Edit!</Link>
        <button onClick={(e) => handleDelete(recipe._id)}>Delete</button>
      </div>

      {children}
    </div>
    
  );
}

export default Recipe;
