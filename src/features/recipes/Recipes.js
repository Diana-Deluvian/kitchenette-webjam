import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "../../Components/Recipe";
import { selectFilteredRecipes, deleteRecipe } from "./recipesSlice";
import Spinner from "../../Components/Spinner";
import Search from "../search/Search";


const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectFilteredRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  const handleDelete = (_id) => {
    dispatch(deleteRecipe(_id))
  }


  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      <Search />
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe._id} handleDelete={handleDelete}>
        </Recipe>
      ))}
    </div>
  );
};

export default Recipes;