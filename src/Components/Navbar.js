import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecipes } from '../features/recipes/recipesSlice';
import Roast from '../roast.svg';
import { selectIsAuth } from '../features/auth/authSlice';

const Navbar = () => {
    const navigate = useNavigate();
    const recipes = useSelector(selectRecipes);
    const isAuth = useSelector(selectIsAuth);
    const RandomRecipeId = () => {
         navigate(`/recipe/${recipes[Math.floor(Math.random() * recipes.length)]._id}`);
    }
    return (
        <nav className="bg-white shadow-lg">
            <div className=" flex justify-between items-center max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                <Link to="/">
                    <img className="w-12 ml-4 " src={Roast} alt="logo"/>
                </Link>
                <div className=" flex w-full sm:w-auto sm:mr-2 justify-around">
                    <span className="p-2 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in cursor-pointer" 
                    onClick={RandomRecipeId}>Random Recipe</span>
                <Link className="p-2 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in" 
                to="/about">
                    <span className="">About </span>
                </Link>
                { isAuth ?
                <Link className="p-2 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in" 
                to="/addRecipe">
                    <span className="">Add Recipe </span>
                </Link>
                :
                <Link className="p-2 md:p-4 w-max hover:bg-primary hover:text-white duration-300 ease-in" 
                to="/auth">
                    <span className="">Login</span>
                </Link>
                }
                </div>
            </div>
        </nav>     
    )
}

export default Navbar;

//<button onClick= {() => navigate('/addrecipe') } >Add recipe</button>