import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "./recipesSlice";
import RecipeForm from '../../Components/RecipeForm';
import { useNavigate } from 'react-router-dom';


const AddRecipe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleOnSubmit = async (recipe) => {
        await dispatch(createRecipe(recipe))
        navigate('/')
    }

    return (
        <React.Fragment>
        <RecipeForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddRecipe;