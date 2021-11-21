import React from "react";

const Recipe = ({ recipe, children }) => {
  return (
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipe.strain}</h3>
        <div className="image-container">
          <img src={recipe.img} alt="" className="recipe-image" />
        </div>
      </span>
      {children}
    </div>
  );
}

export default Recipe;