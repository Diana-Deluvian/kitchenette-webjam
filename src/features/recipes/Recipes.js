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
    <div id="recipes-container" className="flex items-center flex-col" >
      <h1 className="p-2 mt-4 font-emilysCandy text-primary text-6xl">Diana's Kitchenette</h1>
      <Search />
      <div className="mt-8 grid grid-cols-3 gap-3 ">
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe._id} handleDelete={handleDelete}>
        </Recipe>
      ))}
      </div>
    </div>
  );
};

export default Recipes;