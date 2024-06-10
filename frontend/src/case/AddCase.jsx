
import TodoForm from './TodoForm'

import React from 'react'
import Navbar from '../case/Navbar/Navbar';
import TodoWrapper from './TodoWrapper';


const AddCase = () => {
  return (
    <div className='bg-orange-50'>
        <TodoForm />
      <TodoWrapper />
      <Navbar/>
      
    </div>
  )
}

export default AddCase
