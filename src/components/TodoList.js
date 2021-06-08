import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

function TodoList(props) {
  if (props.todoState.todos.length === 0) return 'Add a todo';

  return (
    <ul>
      {props.todoState.todos.map(todo => (
        <Todo
          key={todo.id}
          task={todo.task}
          author={todo.author}
          details={todo.details}
          dateCreated={todo.date}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

const mapStateToProps = store => {
  return {
    todoState: store.todoState,
  };
};

export default connect(mapStateToProps, null)(TodoList);
