import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectRecipes } from "../features/recipes/recipesSlice";

const SingleRecipe = () => {
    const { _id } = useParams();
    const recipe = useSelector(selectRecipes).find(recipe => recipe._id === _id);

    return (
        <div className="mx-auto max-w-screen-lg 2xl:max-w-screen-xl  flex flex-col items-center">
            <h1 className="font-emilysCandy text-primary text-6xl my-6">{recipe.name}</h1>

            <div className='flex flex-col md:flex-row'>
            <img alt={recipe.name} src={recipe.imgUrl} 
            className="object-fit md:w-2/3" />
            <ul className="ml-4 mt-6 md:mt-0 md:w-1/3">
                <h2 className="font-emilysCandy text-secondary text-4xl md:text-3xl mb-3 text-center">Ingredients</h2>
                { recipe.ingredients.map(ingredient => <li className="p-0.5">
                    <span className="text-secondary mr-2">❃</span> 
                    {ingredient}</li>) }

                    <li className="mt-4 ">Cook time: {recipe.cookTime}</li>
                    <li>Calories: {recipe.calories}kcal/100g</li>
                    <li>Servings: {recipe.servings}</li>
                    <li>Cost: {recipe.cost}kr</li>
                    </ul>
            </div>

            <ol className="self-start my-4 w-full md:w-2/3">
                <h2 className="text-center  font-emilysCandy text-4xl text-secondary my-4">Instructions</h2>
                { recipe.instructions.map((instruction, index) => <li className="p-2">
                    <span className="text-secondary ml-2 md:ml-0">{index + 1}. </span>
                    {instruction}</li>) }</ol>

            <Link className="bg-primary text-white p-2 mx-4 my-4 rounded self-start" to="/">Back to Recipes</Link>
        </div>
    )

}

export default SingleRecipe;