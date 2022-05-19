import React from 'react';
import store from '../app/store';
import Form from '../Components/Form';
import Header from '../Components/Header';
import Modal from '../Components/Modal';
import '../Styles/index.scss'

const CreateEmployee = () => {

    return (
      <div>
        <div className='background-modal'></div>
        <div className='create-employee-container'>
          <Header /> 
          <Form /> 
          <Modal />
        </div>

      </div>
    );
};

export default CreateEmployee;