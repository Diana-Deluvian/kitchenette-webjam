import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { loadRecipes } from "./features/recipes/recipesSlice";
import Search from "./features/search/Search";
import Recipes from "./features/recipes/Recipes";


import LandingPage from './Components/LandingPage';
import Kitchen from './Components/Kitchen';
import NotFound from './Components/NotFound';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRecipes());
      }, [dispatch]);

    return (
        <BrowserRouter>
        <Search />
            <Routes>
                <Route exact path="/" element={<Recipes/>}/>   
                <Route exact path="/landingpage" element={<LandingPage/>}/>
                <Route path="*" element={<NotFound/>}/> 
            </Routes>
      </BrowserRouter>
    )
}

export default App;