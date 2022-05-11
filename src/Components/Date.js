import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

const Date = ({className, id, label, state}) => {
    const [startDate, setStartDate] = useState();

    return (
        <div id={id}>
            <DatePicker className={className} selected={startDate} onChange={(date) => setStartDate(date)} />
            <span className='date-error'>Please enter your {label} </span>
        </div>
    );
};

export default Date;