import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 404 page
 * @returns {React.ReactElement} 
 */

// library.add(faTriangleExclamation)

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Page not found</h1>
            <h2>We're sorry, we couldn't find the page you requested.</h2>
            <NavLink to='/'>Click here to return to the Home Page</NavLink>
        </div>
    );
};

export default NotFound;