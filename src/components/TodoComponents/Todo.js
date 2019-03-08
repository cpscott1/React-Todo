import React from 'react';

export default function Todo(props) {
  return (
    <div className="todo" key={props.todo.id}>
      <p>{props.todo.task}</p>
    </div>
  )
}
