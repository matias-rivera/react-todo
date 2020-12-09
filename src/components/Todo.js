import React, { useState } from 'react'
const Todo = ({todoFromProps, editTodo, deleteTodo}) => {

    const [todo, setTodo] = useState(todoFromProps)
    const [edit, setEdit] = useState(false)


    const handleEdit = () => {
        if(edit){
            editTodo(todo)
        }
        setEdit(!edit)
    }

    const handleDelete = () => {
        deleteTodo(todo)
    }

    const getDate = () => {
        const date = JSON.stringify(todo.id)

        return date.slice(6,11)
    }


    return ( 
        <li 
        className='list-group-item d-flex justify-content-between align-items-center bg-light' 
        >
            <div className="input-group flex-grow-1">
                <div className="input-group-prepend">
                <div className="input-group-text">{getDate()}</div>
                </div>
                <input 
                    className={`form-control  ${ edit ? 'border-4 border-primary' : 'bg-light'}`} 
                    disabled={!edit} defaultValue={todo.value}   
                    onChange={(e) => setTodo({...todo, value: e.target.value})}
                />
            </div>
            
            <div className='btn-group'>
                <button onClick={() => handleEdit()} className={`btn btn-${edit ? 'warning' : 'primary'}`}><i className="far fa-edit"></i></button>
                <button onClick={() => handleDelete()} className='btn btn-danger'><i className="fas fa-times"></i></button>
            </div>
        </li>
     );
}
 
export default Todo;