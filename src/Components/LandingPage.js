import React from 'react';
import Blob from '../blob.svg';
import Roast from '../roast.svg';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <img src={Blob}/>
            <div id="absolute">
            <img src={Roast}/>
            <h1>Diana's Kitchentte!</h1>

            </div>
            
        </div>
    )
}

export default LandingPage;