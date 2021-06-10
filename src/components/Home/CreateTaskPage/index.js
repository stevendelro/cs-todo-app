import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTask,
  createTask,
  clearForm,
  updateTask,
  updateDetails,
} from '../../../actions/taskActions';
import CreateTaskForm from './CreateTaskForm';

class CreateTaskPage extends Component {
  render() {
    const {
      addTask,
      createTask,
      clearForm,
      updateTask,
      updateDetails,
      taskItemState,
    } = this.props;

    return (
      <div>
        <CreateTaskForm
          addTask={addTask}
          createTask={createTask}
          clearForm={clearForm}
          updateTask={updateTask}
          updateDetails={updateDetails}
          taskItemState={taskItemState}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    taskItemState: store.taskState.taskItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    createTask: bindActionCreators(createTask, dispatch),
    clearForm: bindActionCreators(clearForm, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch),
    updateDetails: bindActionCreators(updateDetails, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskPage);
