import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createRecipe, selectIsCRUDLoading, selectIsReqSuccess, resetIsReqSuccess } from "./recipesSlice";
import RecipeForm from '../../Components/RecipeForm';
import { useNavigate } from 'react-router-dom';


const AddRecipe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isCRUDLoading = useSelector(selectIsCRUDLoading);
    const isReqSuccess = useSelector(selectIsReqSuccess);
    

    const handleOnSubmit = async (recipe) => {
        await dispatch(createRecipe(recipe))
        
    }
    useEffect(() => {
        if(isReqSuccess) navigate('/');
        return () => {
            dispatch(resetIsReqSuccess())
        }
    },[isReqSuccess, dispatch, navigate])

    return (
        <React.Fragment>
        <RecipeForm handleOnSubmit={handleOnSubmit} isCRUDLoading={isCRUDLoading} isReqSuccess={isReqSuccess}  />
        </React.Fragment>
    );
};

export default AddRecipe;