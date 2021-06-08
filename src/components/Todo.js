import React from 'react'

function Todo(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <h6>{props.author}</h6>
      <p>{props.text}</p>
      <p>Created: {props.dateCreated}</p>
      <p>Completed: {String(props.completed)}</p>
      <button>FINISHED</button>
      <button>DELETE</button>
      <button>EDIT</button>
    </li>
  );
}

export default Todo
