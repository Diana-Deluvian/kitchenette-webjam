import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectRecipes } from "../features/recipes/recipesSlice";

const SingleRecipe = () => {
    const { _id } = useParams();
    const recipe = useSelector(selectRecipes).find(recipe => recipe._id === _id);

    return (
        <div className="container">
            <h1>{recipe.name}</h1>
            <img src={recipe.img} alt="recipe image" />
            <ul>{ recipe.ingredients.map(ingredient => <li>{ingredient}</li>) }</ul>
            <ol>{ recipe.instructions.map(instruction => <li>{instruction}</li>) }</ol>
        </div>
    )

}

export default SingleRecipe;