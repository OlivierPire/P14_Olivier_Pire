import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

/**
 * 404 page
 * @returns {React.ReactElement} 
 */

const NotFound = () => {
    return (
        <div className='not-found'>
            <FontAwesomeIcon icon={faTriangleExclamation} className='warning-icon'/>
            <h1>Page not found</h1>
            <h2>We're sorry, we couldn't find the page you requested.</h2>
            <NavLink to='/'>Click here to return to the Home Page</NavLink>
        </div>
    );
};

export default NotFound;