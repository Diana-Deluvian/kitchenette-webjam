import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LandingPage from './LandingPage';
import Kitchen from './Kitchen';
import NotFound from './NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Kitchen/>}/>   
                <Route exact path="/landingpage" element={<LandingPage/>}/>
                <Route path="*" element={<NotFound/>}/> 
            </Routes>
      </BrowserRouter>
    )
}

export default App;