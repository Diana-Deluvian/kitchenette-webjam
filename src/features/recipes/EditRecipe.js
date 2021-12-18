import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipe } from './recipesSlice';
import RecipeForm from '../../Components/RecipeForm';
import { useNavigate } from 'react-router-dom';
import {
  selectIsCRUDLoading,
  selectIsReqSuccess,
  resetIsReqSuccess,
  selectRecipes,
} from './recipesSlice';

const EditRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCRUDLoading = useSelector(selectIsCRUDLoading);
  const isReqSuccess = useSelector(selectIsReqSuccess);
  const { _id } = useParams();
  const recipe = useSelector(selectRecipes).find(
    (recipe) => recipe._id === _id
  );

  const handleOnSubmit = async (recipe) => {
    await dispatch(updateRecipe(recipe));
  };

  useEffect(() => {
    if (isReqSuccess) navigate('/');
    return () => {
      dispatch(resetIsReqSuccess());
    };
  }, [isReqSuccess, dispatch, navigate]);

  return (
    <RecipeForm
      handleOnSubmit={handleOnSubmit}
      isEditing={true}
      recipe={recipe}
      isCRUDLoading={isCRUDLoading}
      isReqSuccess={isReqSuccess}
    />
  );
};

export default EditRecipe;
