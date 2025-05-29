import React from 'react'
import { TodoProvider } from './context/TodoContext'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        const id = Date.now();
        setTodos((prevTodos) => [{id, ...todo}, ...prevTodos])
    }

    const updateTodo = (id, todo) => {
        setTodos((prevTodos) => prevTodos.map() )
    }
  return (
    <>
      
    </>
  )
}

export default App
