import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import en from 'date-fns/locale/en-GB'
import "react-datepicker/dist/react-datepicker.css";

const Date = ({className, id, label, state}) => {
    const [startDate, setStartDate] = useState();

    return (
        <div id={id}>
            <DatePicker placeholderText={label} className={className} selected={startDate} onChange={(date) => setStartDate(date)} locale={en} />
            <span className='date-error'>Please enter your {label} </span>
        </div>
    );
};

export default Date;