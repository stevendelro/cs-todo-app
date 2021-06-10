import React, { Component } from 'react';
import * as actionCreators from '../../../actions/taskActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskList from './TaskList';

class TaskListPage extends Component {
  render() {
    const { taskState, finishedTask, deleteTask, editTask } = this.props;
    return (
      <div>
        <TaskList
          taskState={taskState}
          finishedTask={finishedTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    taskState: store.taskState,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      finishedTask: actionCreators.finishedTask,
      deleteTask: actionCreators.deleteTask,
      editTask: actionCreators.editTask,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
