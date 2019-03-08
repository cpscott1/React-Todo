import React frin 'react'

export default function TodoForm(props) {
  return (
    <form>
      <input
      type="text"
      placeholder="Todo Item"
      value={props.todo}
      name="todo"
      />
      <button type="submit">Add Todo</button>
      <button>Clear Completed</button>
    </form>
  )
}
