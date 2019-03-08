import React from 'react'

export default function TodoForm(props) {
  return (
    <form onSubmit={props.addHandler}>
      <input
      placeholder="new task"
      value={props.todo}
      name="todo"
      onChange={props.inputHandler}/>

      <button>Add Todo</button>
      <button>Clear completed</button>
    </form>
  )
}
