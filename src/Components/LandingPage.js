import React from 'react';
import Blob from '../assets/blob.svg';
import Roast from '../assets/roast.svg';

const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <img alt='A blob that looks like the white of an egg' src={Blob} />
      <div id='absolute'>
        <img alt='a hot dish covered to keep warm' src={Roast} />
        <h1>Diana's Kitchentte!</h1>
      </div>
    </div>
  );
};

export default LandingPage;
