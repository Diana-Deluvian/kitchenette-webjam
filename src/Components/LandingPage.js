import React from 'react';
import Blob from '../blob.svg';
import Pie from '../pie.svg';
import Pie2 from '../pie2.svg';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <img src={Blob}/>
            <div id="absolute">
            <img src={Pie2}/>
            <h1>Diana's Kitchentte!</h1>

            </div>
            
        </div>
    )
}

export default LandingPage;