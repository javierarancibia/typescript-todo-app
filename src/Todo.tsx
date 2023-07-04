import React from 'react'
import { type Todo as TodoType } from './Types'

interface Props extends TodoType {
  handleRemove: (id: number) => void
  handleComplete: (id: number, completed: boolean) => void
}

const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleComplete }) => {
  const handleCompletedCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleComplete(id, event.target.checked)
  }

  return (
        <div style={{ margin: '3rem 0' }}>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{completed ? 'Completado' : 'Por Completar'}</li>
            </ul>
            <button onClick={() => { handleRemove(id) }}>Borrar To Do</button>
            <input type="checkbox" checked={completed} onChange={handleCompletedCheckbox} />
        </div>
  )
}
export default Todo
