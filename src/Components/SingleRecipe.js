import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectRecipes } from "../features/recipes/recipesSlice";

const SingleRecipe = () => {
    const { _id } = useParams();
    const recipe = useSelector(selectRecipes).find(recipe => recipe._id === _id);

    return (
        <div className="mx-auto max-w-screen-lg  flex flex-col items-center">
            <h1 className="font-emilysCandy text-primary text-6xl my-6">{recipe.name}</h1>

            <div className='flex'>
            <img src={recipe.imgUrl} 
            alt="recipe image" className="object-fit w-2/3" />
            <ul className="ml-4 w-1/3">
                <h2 className="font-emilysCandy text-secondary text-3xl mb-3 text-center">Ingredients</h2>
                { recipe.ingredients.map(ingredient => <li className="p-0.5">
                    <span className="text-secondary mr-2">❃</span> 
                    {ingredient}</li>) }

                    <li className="mt-4 ">Cook time: {recipe.cookTime}</li>
                    <li>Calories: {recipe.calories}kcal/100g</li>
                    <li>Servings: {recipe.servings}</li>
                    </ul>
            </div>

            <ol className="self-start my-4 w-2/3">
                <h2 className="text-center font-emilysCandy text-4xl text-secondary my-4">Instructions</h2>
                { recipe.instructions.map((instruction, index) => <li className="my-1">
                    <span className="text-secondary">{index + 1}. </span>
                    {instruction}</li>) }</ol>

            <Link className="bg-primary text-white p-2 my-4 rounded self-start" to="/">Back to Recipes</Link>
        </div>
    )

}

export default SingleRecipe;