import React from 'react';
import { changeBackground } from '../Functions/ChangeBackground';
import Table from '../Components/Table';

const CurrentEmployees = () => {
    changeBackground()
    
    return (
        <div className='current-employees'>
            <Table />
        </div>
    );
};

export default CurrentEmployees;