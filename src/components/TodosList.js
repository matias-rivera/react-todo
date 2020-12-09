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
            {todos.map((item,index) => (
              <Todo key={item.id + toString(index)} todoFromProps={item} editTodo={editTodo} deleteTodo={deleteTodo}/>
            ))}
        </ul>
     );
}
 
export default TodosList;