import React ,{useState}from 'react'



const EditTodoForm = ({editTodo, task}) => {

    const[value, setValue] = useState(task.task);

    const handleSubmit = e =>{
        e.preventDefault()

        editTodo(value,task.id);
      
        setValue("");


    }



  return (
  <form onSubmit={handleSubmit}>
    <h1 className='ml-96 mt-12 text-xl font-medium'>EDIT THE <span className='text-orange-500'>CASES</span></h1>
    <input type='text' value={value} placeholder='update your case' 
    className='ml-80 mt-20 border-2 border-orange-500 p-10 py-2 rounded-xl hover:bg-orange-50' 
    
    onChange={(e)=>setValue(e.target.value)}/>
     <button type='submit' className='border border-orange-500 bg-orange-500 rounded-xl p-2 py-2 ml-6'>Add case</button>
  </form>
  )
}

export default EditTodoForm
