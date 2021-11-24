import React from 'react';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <button onClick= {() => navigate('/addrecipe') } >Add recipe</button>
    )
}

export default Navbar;