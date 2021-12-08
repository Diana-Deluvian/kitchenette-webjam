import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Roast from '../roast.svg';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-white shadow-lg">
            <div className=" flex justify-between items-center max-w-screen-lg mx-auto">
                <Link to="/">
                    <img className="w-12" src={Roast} alt="logo"/>
                </Link>
                <div className=" flex">
                <Link className="p-4 hover:bg-primary hover:text-white duration-300 ease-in" to="/randomRecipes">
                    <span className="">Recipes Suggestion </span>
                </Link>
                <Link className="p-4 hover:bg-primary hover:text-white duration-300 ease-in" to="/about">
                    <span className="">About </span>
                </Link>
                <Link className="p-4 hover:bg-primary hover:text-white duration-300 ease-in" to="/addRecipe">
                    <span className="">Add Recipe </span>
                </Link>
                </div>
            </div>
        </nav>     
    )
}

export default Navbar;

//<button onClick= {() => navigate('/addrecipe') } >Add recipe</button>