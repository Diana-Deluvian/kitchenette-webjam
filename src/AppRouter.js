import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { loadRecipes } from "./features/recipes/recipesSlice";
import Recipes from "./features/recipes/Recipes";
import AddRecipe from './features/recipes/AddRecipe';
import EditRecipe from './features/recipes/EditRecipe';
import Auth from './features/auth/Auth';
import SingleRecipe from './Components/SingleRecipe'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';



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
        <Navbar />
        <div className="flex-grow">
            <Routes>
                <Route exact path="/" element={<Recipes/>}/>
                <Route exact path="/recipe/:_id" element={<SingleRecipe />} />
                <Route exact path="/addRecipe" element={<AddRecipe/>}/>      
                <Route exact path="/editRecipe/:_id" element={<EditRecipe />} />
                <Route exact path="/landingpage" element={<LandingPage/>}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/auth" element={<Auth/>}/>
                <Route path="*" element={<NotFound/>}/> 

            </Routes>
            </div>
        <Footer />
      </BrowserRouter>
    )
}

export default App;