import React, { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs'
import { BiSolidEdit } from 'react-icons/bi'
import axios from 'axios'

const TodoWrapper = () => {

  const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
      try {
          const cases = await axios.get('http://localhost:4000/cases');
          const response = cases.data;
          console.log(response); 
          setData(response.cases); 
      } catch (error) {
          console.log(error);
      }
  }

  const handleDeleteCase = async (id) => {
    try {
      const confirm = window.confirm('Are You sure you want to delete this case');

      if (confirm) {
        const deletedCase = await axios.delete(`http://localhost:4000/delete/${id}`);
        if (deletedCase) {
          window.location.href = '/case';
        }
      }

    } catch (error) {
      console.log(error);
    }
  } 
  
  


  return (
    
      <div className='ml-80 mt-8 flex flex-col gap-5'>
            {data && 
                data.map((singleCase, index) => (
                    <div className='bg-orange-500 h-18 mr-48 p-3 pl-6 flex flex-row justify-between rounded-lg cursor-pointer hover:bg-emerald-200 transition duration-300' key={index}>
                        <div>
                            <h1 className='text-2xl font-bold'>{singleCase.caseName}</h1>
                        </div>
                        <div className='pr-10 gap-3'>
                            <button className='text-4xl'><BiSolidEdit /></button>
                            <button onClick={() => handleDeleteCase(singleCase._id)} className='text-4xl'><BsFillTrashFill /></button>
                        </div>
                    </div>   
                ))
            }
      </div>

    
  );
}

export default TodoWrapper;