import React from 'react';
import { connect } from 'react-redux';

function TodoList(props) {
  console.log(`TodoList props`, props)
  if (props.todos) return 'Add a todo';

  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.date}>
          <h3>{todo.title}</h3>
          <h6>{todo.author}</h6>
          <p>{todo.text}</p>
          <p>Created: {todo.date}</p>
          <p>Completed: {todo.completed}</p>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = store => {
  return {
    todos: store.todos,
  };
};

export default connect(mapStateToProps, null)(TodoList);
