import React from 'react';
import ListItem from './ListItem';

function List(props) {
  if (props.taskState.tasks.length === 0) return 'Add a task';

  return (
    <ul>
      {props.taskState.tasks.map(listItem => (
        <ListItem
          key={listItem.id}
          id={listItem.id}
          task={listItem.task}
          author={listItem.author}
          details={listItem.details}
          dateCreated={listItem.date}
          completed={listItem.completed}
          finishedTask={props.finishedTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </ul>
  );
}

export default List;
