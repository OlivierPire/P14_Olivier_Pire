import React, { useState } from 'react';

const Input = ({id, label, type}) => {
    const [error, setError] = useState(false)

    return (
        <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} onChange={(e) => e.target.value === "" ? setError(true) : setError(false)}/>
            <span className='error'>{error ? `Please enter your ${label}` : ''}</span>
        </React.Fragment>
    );
};

export default Input;