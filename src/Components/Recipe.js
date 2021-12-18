import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../features/auth/authSlice';

const Recipe = ({ recipe, handleDelete }) => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div key={recipe._id} tabIndex={0}>
      <div>
        <Link to={`/recipe/${recipe._id}`}>
          <h3 className='font-emilysCandy text-2xl text-primary text-center'>
            {recipe.name}
          </h3>
          <div>
            {
              recipe.imgUrl && (
                <img
                  src={recipe.imgUrl.replace(
                    'upload/',
                    'upload/c_fill,h_270,w_480/'
                  )}
                  alt={recipe.name}
                  className='recipe-image'
                />
              )
              //sneaky way of using the cloudinary service to resize the image
            }
          </div>
        </Link>
        {isAuth && (
          <div className='flex justify-start'>
            <Link
              className='py-2 px-4 bg-secondary text-white rounded m-2'
              to={`/editRecipe/${recipe._id}`}
            >
              {' '}
              Edit!
            </Link>
            <button
              className='p-2 bg-primary text-white rounded m-2'
              onClick={(e) => handleDelete(recipe._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
