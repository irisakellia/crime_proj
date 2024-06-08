// import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

// const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
//   return (
//     <div>
//       <div>
//         <p onClick={()=>toggleComplete(task.id)

//         } className={`${task.completed ? 'line-through'
//           : "none "
//         }`}>
// {task.task}
//         </p>
//       </div>

//       <FontAwesomeIcon icon={faPenSquare} onClick={()=>editTodo(task.id)}/>
//       <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
//     </div>
//   )
// }

// export default Todo

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div >
    <div className="p-2 py-4 justify-between bg-orange-500 w-96 ml-80 mt-20 inline-flex rounded">
      <div
        className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faPenSquare}
          onClick={() => editTodo(task.id)}
          className="text-gray-900 mr-2 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="text-gray-900 cursor-pointer"
        />
      </div>
    </div>
    </div>
  );
};

export default Todo;
