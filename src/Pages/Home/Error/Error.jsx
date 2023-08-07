import React from 'react';

import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center my-40" >
            <h1>404</h1>
            
            <p>pages not Found</p>
            <Link to="/">

                <button className='btn my-10 btn-primary'>
                    Go to the Home Page

                </button>


            </Link>
        </div>
    );
};

export default Error;