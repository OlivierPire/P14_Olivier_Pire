import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { displayModal } from './DisplayModal';

const Modal = () => {
    return (
        <div className='modal'>
            <div className='close-btn' onClick={() => displayModal()}><FontAwesomeIcon icon={faXmark} className='close-icon' /></div>
            <p>Employee created!</p>
        </div>
    );
};

export default Modal;