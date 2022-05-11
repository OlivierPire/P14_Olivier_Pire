import React from 'react';
import store from '../app/store';
import Form from '../Components/Form';
import Header from '../Components/Header';
import Modal from '../Components/Modal';
import '../Styles/index.scss'

const CreateEmployee = () => {
  console.log(store.getState().addEmployees.data);
    return (
        <div className='create-employee-container'>
          <div className='background-modal'></div>
          <Header /> 
          <Form /> 
          <Modal />
        </div>
    );
};

export default CreateEmployee;