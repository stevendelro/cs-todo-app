import React from 'react';
import TaskListItem from './TaskListItem';

export default function TaskList(props) {
  if (props.taskState.tasks.length === 0) return 'Add a task';

  return (
    <ul>
      {props.taskState.tasks.map(taskListItem => (
        <TaskListItem
          key={taskListItem.id}
          id={taskListItem.id}
          task={taskListItem.task}
          author={taskListItem.author}
          details={taskListItem.details}
          dateCreated={taskListItem.date}
          completed={taskListItem.completed}
          finishedTask={props.finishedTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </ul>
  );
}

