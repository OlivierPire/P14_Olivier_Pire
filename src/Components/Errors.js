import React from 'react';

const Errors = ({content, errorClassName}) => {
    const style= {
        display: 'block'
    }
    return (
        <div>
            <span className={errorClassName + ' error'} style={style}>{content}</span>
        </div>
    );
};

export default Errors;