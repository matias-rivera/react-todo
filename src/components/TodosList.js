import React from 'react'
import Todo from './Todo';

const TodosList = ({todos, updateTodos}) => {

    const editTodo = (todo) => {
        const editedTodos = todos.map(item => {
            if(item.id === todo.id){
            item.value = todo.value
            }
            return item
        })
        updateTodos(editedTodos)
        console.log('edit')
    }

    const deleteTodo = (todo) => {
        const editedTodos = todos.filter(item => {return item.id !== todo.id})
        updateTodos(editedTodos)
        console.log('delete')
    }


    return ( 
        <ul className='list-group'>
            {todos.map(item => (
              <Todo key={item.id} todoFromProps={item} editTodo={editTodo} deleteTodo={deleteTodo}/>
            ))}
        </ul>
     );
}
 
export default TodosList;