import React,{ useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodosList from './components/TodosList';


function App() {
  
  
  const [todos, setTodos] = useState([])


  useEffect(() => {
    if(localStorage.getItem('todos')){
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  },[])

  const updateTodos = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
    setTodos(todos)
  }


  return (
    <div className="App">
      <br/>
      <div className='container d-flex flex-column justify-content-center col-12 col-md-8 col-lg-8 col-xl-5'>
        <TodoInput todos={todos} updateTodos={updateTodos}/>
        <TodosList todos={todos} updateTodos={updateTodos}/>
      </div>

    </div>
  );
}

export default App;
