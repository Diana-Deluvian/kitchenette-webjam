import React from 'react';

const Spinner = () => {
    return (
        <div class="flex items-center justify-center mt-8 ">
            <div class="w-40 h-40 border-t-4 border-b-4 border-primary rounded-full 
            animate-spin" style={{animationDuration: 2+'s'}}></div>
        </div>
    )
}

export default Spinner;