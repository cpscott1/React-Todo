import React from 'react';

export default function Todo(props) {
  let completed = props.todo.completed ? ' completed' : '';
  return (
    <div className={`todo ${completed} `}
    key={props.todo.id}
    onClick={event => {
      props.toggleTodo(props.todo.id);
     }}
     >
      <p>{props.todo.task}</p>
    </div>
  )
}
