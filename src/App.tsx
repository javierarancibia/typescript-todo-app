import React from 'react'
import './App.css'
import Todos from './Todos'

const mockTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'todo2',
    completed: false
  },
  {
    id: 3,
    title: 'todo 1',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0)
  const [todos, setTodos] = React.useState(mockTodos)

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = (id: number, completed: boolean): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <React.Fragment>
      <button onClick={() => { setCount(count + 1) }}>Add</button>
      <h1>{ count }</h1>
      <Todos todos={todos} handleRemove={handleRemove} handleComplete={handleComplete} />
    </React.Fragment>
  )
}

export default App
