
import Header from '../components/header/Header'
import TodoForm from './TodoForm'

import React from 'react'
import Navbar from '../case/Navbar/Navbar';
import TodoWrapper from './TodoWrapper';


const AddCase = () => {
  return (
    <div className='bg-orange-50'>
      <Header/>
      <TodoForm />
      <TodoWrapper />
      <Navbar/>
      
    </div>
  )
}

export default AddCase
