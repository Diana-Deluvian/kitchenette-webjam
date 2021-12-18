import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col mt-8 content-center items-center'>
      <h1 className='text-lg'>Sorry, this page doesnt seem to exist!</h1>
      <Link className='bg-primary text-white p-2 mt-6 rounded' to='/'>
        Back to Recipes
      </Link>
    </div>
  );
};

export default NotFound;
