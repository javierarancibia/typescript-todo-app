import React from 'react'
import { type ListOfTodos } from './Types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  handleRemove: (id: number) => void
  handleComplete: (id: number, completed: boolean) => void
}

const Todos: React.FC<Props> = ({ todos, handleRemove, handleComplete }) => {
  return (
    <ul>
        {
            todos.map((todo) => (
                // <div key={todo.id}>
                //     <li style={todo.completed ? { color: 'red' } : { color: 'blue' }}>{todo.title}</li>
                // </div>
                <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} handleRemove={handleRemove} handleComplete={handleComplete} />
            ))
        }
    </ul>
  )
}

export default Todos
