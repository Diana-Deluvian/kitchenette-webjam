import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateRecipe } from "./recipesSlice";
import RecipeForm from '../../Components/RecipeForm';
import { useNavigate } from 'react-router-dom';
import { selectRecipes } from "./recipesSlice";

const EditRecipe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useParams();
    const recipe = useSelector(selectRecipes).find(recipe => recipe._id === _id);
    

    const handleOnSubmit = (recipe) => {
        dispatch(updateRecipe(recipe))
        navigate('/')
    }

    return (
        <RecipeForm handleOnSubmit={handleOnSubmit} isEditing={true} recipe = {recipe} />
    )

}

export default EditRecipe;