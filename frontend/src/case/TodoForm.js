import React, { useState } from "react";
import axios from 'axios';

const TodoForm = () => {

  const [value , setValue] = useState({
    caseName:""
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const addCase = await axios.post('http://localhost:4000/addCase', value);
      const response = addCase.data;
      if (response) {
        console.log(response);
      }
      if (addCase) {
        window.location.href = '/case'
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="ml-96 mt-12 text-xl font-medium">
        ADD THE <span className="text-orange-500">CASES</span>
      </h1>
      <input
        type="text"
        name="caseName"
        placeholder="add a new case"
        className="ml-80 mt-20 border-2 border-orange-500 p-10 py-2 rounded-xl hover:bg-orange-50"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="border border-orange-500 bg-orange-500 text-white rounded-xl p-2 py-2 ml-6"
      >
        Add case
      </button>
    </form>
  );
};

export default TodoForm;
