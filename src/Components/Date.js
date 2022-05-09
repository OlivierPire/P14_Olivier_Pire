import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

const Date = () => {
    const [startDate, setStartDate] = useState();
    return (
        <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default Date;