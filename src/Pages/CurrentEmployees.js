import React from 'react';
import { changeBackground } from '../Functions/ChangeBackground';
import Table from '../Components/Table';

/**
 * It's a page with all employees datas in a table
 * @returns {React.ReactElement}
 */

const CurrentEmployees = () => {
    changeBackground()
    
    return (
        <div className='current-employees'>
            <Table />
        </div>
    );
};

export default CurrentEmployees;