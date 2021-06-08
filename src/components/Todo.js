import React from 'react'

function Todo(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <h6>{props.author}</h6>
      <p>{props.text}</p>
      <p>Created: {props.dateCreated}</p>
      <p>Completed: {props.completed}</p>
    </li>
  );
}

export default Todo
