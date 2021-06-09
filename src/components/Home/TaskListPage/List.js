import React from 'react';
import ListItem from './ListItem';

function List(props) {
  if (props.todoState.todos.length === 0) return 'Add a todo';

  return (
    <ul>
      {props.todoState.todos.map(listItem => (
        <ListItem
          key={listItem.id}
          id={listItem.id}
          task={listItem.task}
          author={listItem.author}
          details={listItem.details}
          dateCreated={listItem.date}
          completed={listItem.completed}
          finishedTodo={props.finishedTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </ul>
  );
}

export default List;
