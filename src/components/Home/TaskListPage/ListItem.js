import React from 'react';

function ListItem(props) {
  const handleFinish = () => props.finishedTodo(props.id);
  const handleDelete = () => props.deleteTodo(props.id);
  return (
    <li>
      <h3>{props.task}</h3>
      <h6>{props.author}</h6>
      <p>{props.details}</p>
      <p>Created: {props.dateCreated}</p>
      <p>Completed: {String(props.completed)}</p>
      <button onClick={handleFinish}>
        {props.completed ? 'UNDO' : 'FINISHED'}
      </button>
      <button onClick={handleDelete}>DELETE</button>
      <button>EDIT</button>
    </li>
  );
}

export default ListItem;
