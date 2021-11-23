import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "../../Components/Recipe";
import { selectFilteredRecipes } from "./recipesSlice";
import Spinner from "../../Components/Spinner";


const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectFilteredRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe._id}>
        </Recipe>
      ))}
    </div>
  );
};

export default Recipes;