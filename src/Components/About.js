import React from 'react';

const About = () => {
    return (
        <div className="max-w-screen-lg">
            <h1 className="font-emilysCandy text-6xl text-primary text-center mt-6">About</h1>
            <p className="my-4 mx-6 md:mx-0">Hi, and welcome to my little kitchenette! This is just a small collection 
            of recipes I have cooked over the years, with instructions on how to recreate them.
            While this is primarly meant to be my personal recipebook, you're free to look around!</p>
            <span className="text-primary text-center mx-auto block text-3xl">♥</span>
            <p className="my-4 mx-6 md:mx-0">This project was built with React and Tailwind on the frontend, and NodeJS
            and Express on the backend. The data is stored on a MongoDB Atlas, and images are stored 
            on Cloudinary. </p>
            <span className="text-primary text-center mx-auto block text-3xl">♥</span>
            <p className="my-4 mx-4 md:mx-0">If you're ever visiting my home or something similar, you
            can definitely request a meal from here, and I'll make sure to cook it for you!
             <span className="text-primary text-center">♥</span>
            (although you might have to put out) </p>
        </div>
    )
}

export default About;
