import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>HRnet</h1>
            <Link to='/current-employees'>View Current Employees</Link>
            <h2>Create Employee</h2>
        </div>
    );
};

export default Header;