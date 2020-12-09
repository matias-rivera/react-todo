import React,{ useState } from 'react'

const TodoInput = ({todos, updateTodos}) => {

    const [todo, setTodo] = useState('')
    const [added, setAdded] = useState(false)

    const addTodo = () => {
        const todoToAdd = {id: new Date(), value:todo}
        const editedTodos = [...todos, todoToAdd]
        updateTodos(editedTodos)
        setAdded(true)
        setTimeout(function () {
          setAdded(false)
      }, 1000);
        
    }
    
    const handleKeyPress = (e) => {

      if(!added){
        if (e.key === 'Enter') {
          addTodo()
        }

      }
      
    }
    return ( 
        <div className='d-flex justify-content-center'>
          <input className='form-control' 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            onKeyPress={(e) => handleKeyPress(e)}
            placeholder='To Do ...' />
          <button disabled={added} className='btn btn-success' onClick={(e) => addTodo()}><i className="fas fa-plus"></i></button>
        </div>
     );
}
 
export default TodoInput;