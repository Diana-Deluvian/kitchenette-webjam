import React from 'react';
import {useNavigate, Link} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className=" bg-white shadow-lg">
            <div className=" flex justify-between max-w-screen-lg mx-auto">
                <Link to="/">
                    <img className="" src="" alt="logo"/>
                </Link>
                <div className=" flex">
                <Link className="p-4 hover:bg-primary hover:text-white duration-300 ease-in" to="/randomRecipes">
                    <span className="">Weekly Recipes </span>
                </Link>
                <Link className="p-4 hover:bg-primary hover:text-white duration-300" to="/about">
                    <span className="">About </span>
                </Link>
                </div>
            </div>
        </nav>     
    )
}

export default Navbar;

//<button onClick= {() => navigate('/addrecipe') } >Add recipe</button>