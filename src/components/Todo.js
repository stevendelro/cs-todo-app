import React from 'react'
import * as actionCreators from '../actions/todoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

function Todo(props) {
  const handleFinish = () => props.finishedTodo(props.id)
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
      <button>DELETE</button>
      <button>EDIT</button>
    </li>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      finishedTodo: actionCreators.finishedTodo,
      deleteTodo: actionCreators.deleteTodo,
      editTodo: actionCreators.editTodo,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Todo)
