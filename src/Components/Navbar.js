import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectRecipes } from '../features/recipes/recipesSlice';
import Roast from '../assets/roast.svg';
import { selectIsAuth, clearAuth } from '../features/auth/authSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const isAuth = useSelector(selectIsAuth);
  const RandomRecipeId = () => {
    navigate(
      `/recipe/${recipes[Math.floor(Math.random() * recipes.length)]._id}`
    );
  };
  const logOut = () => {
    dispatch(clearAuth());
    navigate('/');
  };
  return (
    <nav className='bg-white shadow-lg'>
      <div className=' flex justify-between items-center max-w-screen-lg 2xl:max-w-screen-xl mx-auto'>
        <Link className='hidden md:block' to='/'>
          <img className='w-12 ml-4 ' src={Roast} alt='logo' />
        </Link>
        <div className=' flex w-full md:w-auto sm:mr-2 justify-around'>
          <span
            className='p-4 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in cursor-pointer'
            onClick={RandomRecipeId}
          >
            Random Recipe
          </span>
          <Link
            className='p-4 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in'
            to='/about'
          >
            <span className=''>About </span>
          </Link>
          {isAuth ? (
            <Link
              className='p-4 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in'
              to='/addRecipe'
            >
              <span className=''>Add Recipe </span>
            </Link>
          ) : (
            <Link
              className='p-4 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in'
              to='/auth'
            >
              <span className=''>Login</span>
            </Link>
          )}
          {isAuth ? (
            <span
              className='p-4 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in cursor-pointer'
              onClick={logOut}
            >
              Log out
            </span>
          ) : (
            <Link
              className='p-4 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in'
              to='/register'
            >
              <span className=''>Register</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
