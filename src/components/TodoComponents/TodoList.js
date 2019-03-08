import React from 'react';


export default function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map( todo => {
        return (
          <div className="todo" key={todo.id}>
            <p>{todo.task}</p>
          </div>
        )
      })}
    </div>
  )
}
