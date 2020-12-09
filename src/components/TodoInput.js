import React,{ useState } from 'react'
import { v1 as uuidv1 } from 'uuid';

const TodoInput = ({todos, updateTodos}) => {

    const [todo, setTodo] = useState('')

    const addTodo = () => {
        const todoToAdd = {id: uuidv1(), value:todo, date: new Date()}
        const editedTodos = [...todos, todoToAdd]
        updateTodos(editedTodos)
    }
    
    const handleKeyPress = (e) => {

   
        if (e.key === 'Enter') {
          addTodo()
        }

      
      
    }
    return ( 
        <div className='d-flex justify-content-center'>
          <input className='form-control' 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder='To Do ...' />
          <button className='btn btn-success' onClick={() => addTodo()}><i className="fas fa-plus"></i></button>
        </div>
     );
}
 
export default TodoInput;