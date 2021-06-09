import React, { Component } from 'react';
import * as actionCreators from '../../../actions/todoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from './List';

class TaskListPage extends Component {
  render() {
    const { todoState, finishedTodo, deleteTodo, editTodo } = this.props;
    return (
      <div>
        <TodoList
          todoState={todoState}
          finishedTodo={finishedTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    todoState: store.todoState,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      finishedTodo: actionCreators.finishedTodo,
      deleteTodo: actionCreators.deleteTodo,
      editTodo: actionCreators.editTodo,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
