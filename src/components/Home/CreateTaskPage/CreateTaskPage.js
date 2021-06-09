import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTodo,
  createTodo,
  clearForm,
  updateTask,
  updateDetails,
} from '../../../actions/todoActions';
import CreateTaskForm from './CreateTaskForm';

class CreateTaskPage extends Component {

  render() {
    const {
      addTodo,
      createTodo,
      clearForm,
      updateTask,
      updateDetails,
      todoItemState
    } = this.props

    return (
      <div>
        <CreateTaskForm
          addTodo={addTodo}
          createTodo={createTodo}
          clearForm={clearForm}
          updateTask={updateTask}
          updateDetails={updateDetails}
          todoItemState={todoItemState}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    todoItemState: store.todoState.todoItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
    createTodo: bindActionCreators(createTodo, dispatch),
    clearForm: bindActionCreators(clearForm, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch),
    updateDetails: bindActionCreators(updateDetails, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage)
